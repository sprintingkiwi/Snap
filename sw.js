/*global self, caches*/
/*jshint esversion: 6*/
var snapVersion = '10.4-rc7',
    cacheName = `snap-pwa-${snapVersion}`,
    filesToCache = [
        'snap.html',

        // program
        'src/morphic.js',
        'src/symbols.js',
        'src/widgets.js',
        'src/blocks.js',
        'src/threads.js',
        'src/objects.js',
        'src/scenes.js',
        'src/gui.js',
        'src/paint.js',
        'src/lists.js',
        'src/byob.js',
        'src/tables.js',
        'src/sketch.js',
        'src/video.js',
        'src/maps.js',
        'src/extensions.js',
        'src/xml.js',
        'src/store.js',
        'src/locale.js',
        'src/cloud.js',
        'src/api.js',
        'src/embroider.js',
        'src/sha512.js',
        'src/FileSaver.min.js',
        'src/santa.js',

        // translations
        'locale/lang-ar.js',
        'locale/lang-bg.js',
        'locale/lang-bn.js',
        'locale/lang-ca.js',
        'locale/lang-ca_VA.js',
        'locale/lang-cs.js',
        'locale/lang-de.js',
        'locale/lang-dk.js',
        'locale/lang-el.js',
        'locale/lang-eo.js',
        'locale/lang-es.js',
        'locale/lang-et.js',
        'locale/lang-eu.js',
        'locale/lang-fi.js',
        'locale/lang-fr.js',
        'locale/lang-gl.js',
        'locale/lang-he.js',
        'locale/lang-hi.js',
        'locale/lang-hr.js',
        'locale/lang-hu.js',
        'locale/lang-ia.js',
        'locale/lang-id.js',
        'locale/lang-it.js',
        'locale/lang-ja_HIRA.js',
        'locale/lang-ja.js',
        'locale/lang-kn.js',
        'locale/lang-ko.js',
        'locale/lang-ml.js',
        'locale/lang-nl.js',
        'locale/lang-no.js',
        'locale/lang-pl.js',
        'locale/lang-pt_BR.js',
        'locale/lang-pt.js',
        'locale/lang-ro.js',
        'locale/lang-ru.js',
        'locale/lang-si.js',
        'locale/lang-sk.js',
        'locale/lang-sv.js',
        'locale/lang-ta.js',
        'locale/lang-te.js',
        'locale/lang-ti.js',
        'locale/lang-tr.js',
        'locale/lang-ua.js',
        'locale/lang-zh_CN.js',
        'locale/lang-zh_TW.js',

        //libraries
        'libraries/LIBRARIES.json',

        'libraries/animation_module.xml',
        'libraries/apl.xml',
        'libraries/audioComp_module.xml',
        'libraries/bar-charts.xml',

        'libraries/beetle.xml',

            // Beetle coordinate images
            'libraries/beetle/x.png',
            'libraries/beetle/y.png',
            'libraries/beetle/z.png',

            // Beetle dependencies
            'libraries/beetle/beetle.js',
            'libraries/beetle/earcut.min.js',
            'libraries/beetle/babylonjs.loaders.min.js',
            'libraries/beetle/babylon.js.map',
            'libraries/beetle/babylon.js',
            'libraries/beetle/babylon.gridMaterial.min.js',

            // Beetle shapes
            'libraries/beetle/meshes/beetle-gray.obj',
            'libraries/beetle/meshes/beetle-color.obj',
            'libraries/beetle/meshes/beetle-black.obj',
            'libraries/beetle/meshes/beetle-black.mtl',

        'libraries/biginteger.js',
        'libraries/bignumbers.xml',
        'libraries/bignums.js',
        'libraries/bitwise.xml',
        'libraries/bbtSnapExtension.js',

        // BLE
        'libraries/ble/ble.js',
        'libraries/ble/init.js',

        'libraries/code2blocks_module.xml',
        'libraries/colors.xml',
        'libraries/continuations_module.xml',
        'libraries/crayons.xml',
        'libraries/Eisenbergification.xml',
        'libraries/embroidery_module.xml',
        'libraries/events_module.xml',
        'libraries/frequency_distribution_module.xml',
        'libraries/halo_module.xml',
        'libraries/httpBlocks.xml',
        'libraries/HummingbirdBlocks.xml',
        'libraries/iteration-composition.xml',
        'libraries/list_comprehension_module.xml',
        'libraries/list-utilities.xml',
        'libraries/localstorage_module.xml',
        'libraries/tiles_module.xml',
        'libraries/arcs_module.xml',
        'libraries/make-variables.xml',
        'libraries/maps_module.xml',
        'libraries/menu_module.xml',
        'libraries/metaprogramming_module.xml',
        'libraries/microblocks.xml',

        'libraries/mqttExtension.js',
        'libraries/mqtt.js',
        'libraries/mqtt.xml',

        'libraries/OOP_module.xml',
        'libraries/parallel_module.xml',
        'libraries/pixel_module.xml',
        'libraries/plot_bars_module.xml',
        'libraries/replace_letters_module.xml',
        'libraries/schemeNumber.js',

        'libraries/SciSnap3Blocks.xml',
        'libraries/SciSnap3Extensions.js',
        // 'libraries/SciSnap3Costumedata.js', // commented out b/c it crashes Chrome

        'libraries/sprite_api_module.xml',

        'libraries/TuneScope.xml',

            // TuneScope dependencies
            'libraries/TuneScope/TuneScope.js',
            'libraries/TuneScope/TS_init.js',
            'libraries/TuneScope/webmidi.iife.js',
            'libraries/TuneScope/WebAudioFontPlayer.js',

            // TuneScope instruments
            'libraries/TuneScope/12849_21_FluidR3_GM_sf2_file.js',
            'libraries/TuneScope/12848_21_FluidR3_GM_sf2_file.js',
            'libraries/TuneScope/12847_21_FluidR3_GM_sf2_file.js',
            'libraries/TuneScope/12846_0_FluidR3_GM_sf2_file.js',
            'libraries/TuneScope/12842_0_FluidR3_GM_sf2_file.js',
            'libraries/TuneScope/12835_21_FluidR3_GM_sf2_file.js',
            'libraries/TuneScope/12840_6_JCLive_sf2_file.js',
            'libraries/TuneScope/12869_6_JCLive_sf2_file.js',
            'libraries/TuneScope/0580_GeneralUserGS_sf2_file.js',
            'libraries/TuneScope/0560_GeneralUserGS_sf2_file.js',
            'libraries/TuneScope/0110_GeneralUserGS_sf2_file.js',
            'libraries/TuneScope/0680_JCLive_sf2_file.js',
            'libraries/TuneScope/0121_FluidR3_GM_sf2_file.js',
            'libraries/TuneScope/1070_FluidR3_GM_sf2_file.js',
            'libraries/TuneScope/0460_GeneralUserGS_sf2_file.js',
            'libraries/TuneScope/0600_GeneralUserGS_sf2_file.js',
            'libraries/TuneScope/0730_JCLive_sf2_file.js',
            'libraries/TuneScope/0710_Chaos_sf2_file.js',
            'libraries/TuneScope/0420_JCLive_sf2_file.js',
            'libraries/TuneScope/0400_JCLive_sf2_file.js',
            'libraries/TuneScope/0700_FluidR3_GM_sf2_file.js',
            'libraries/TuneScope/1040_Aspirin_sf2_file.js',
            'libraries/TuneScope/0770_SBLive_sf2.js',
            'libraries/TuneScope/0100_SBLive_sf2.js',
            'libraries/TuneScope/0650_FluidR3_GM_sf2_file.js',
            'libraries/TuneScope/1050_FluidR3_GM_sf2_file.js',
            'libraries/TuneScope/0180_Chaos_sf2_file.js',
            'libraries/TuneScope/0020_JCLive_sf2_file.js',
            'libraries/TuneScope/0260_JCLive_sf2_file.js',
            'libraries/TuneScope/0241_JCLive_sf2_file.js',
            'libraries/TuneScope/0350_JCLive_sf2_file.js',
            'libraries/TuneScope/0291_LesPaul_sf2_file.js',
            'libraries/TuneScope/0320_GeneralUserGS_sf2_file.js',
            'libraries/TuneScope/0230_Aspirin_sf2_file.js',

        'libraries/serial_module.xml',
        'libraries/signada.js',
        'libraries/signada.xml',
        'libraries/speech_module.xml',
        'libraries/stream-tools.xml',
        'libraries/strings.xml',
        'libraries/textCostumes_module.xml',
        'libraries/textformat_module.xml',
        'libraries/try-catch.xml',
        'libraries/variable_declaration_module.xml',
        'libraries/word-sentence.xml',
        'libraries/words_module.xml',

        //costumes
        'Costumes/COSTUMES.json',

        'Costumes/abby-a.svg',
        'Costumes/abby-b.svg',
        'Costumes/abby-c.svg',
        'Costumes/abby-d.svg',
        'Costumes/airplane2.png',
        'Costumes/aleassa01.png',
        'Costumes/aleassa02.png',
        'Costumes/aleassa03.png',
        'Costumes/aleassa04.png',
        'Costumes/aleassa05.png',
        'Costumes/aleassa06.png',
        'Costumes/alonzo.png',
        'Costumes/Alonzo3D.png',
        'Costumes/alonzo.svg',
        'Costumes/amon.gif',
        'Costumes/anina_pop_down.png',
        'Costumes/anina_pop_front.png',
        'Costumes/anina_pop_L_arm.png',
        'Costumes/anina_pop_left.png',
        'Costumes/anina_pop_R_arm.png',
        'Costumes/anina_pop_right.png',
        'Costumes/anina_pop_stand.png',
        'Costumes/anina_R_cross.png',
        'Costumes/anina_stance.png',
        'Costumes/anina_top_freeze.png',
        'Costumes/anina_top_L_step.png',
        'Costumes/anina_top_R_step.png',
        'Costumes/anina_top_stand.png',
        'Costumes/anna01.png',
        'Costumes/anna02.png',
        'Costumes/anna03.png',
        'Costumes/anna04.png',
        'Costumes/anna05.png',
        'Costumes/anna06.png',
        'Costumes/anna07b.png',
        'Costumes/anna07c.png',
        'Costumes/anna07.png',
        'Costumes/anna08.png',
        'Costumes/anna09.png',
        'Costumes/anna10.png',
        'Costumes/anna11.png',
        'Costumes/anna12.png',
        'Costumes/anna-a.png',
        'Costumes/anna-b.png',
        'Costumes/apple.svg',
        'Costumes/arrow1-a.svg',
        'Costumes/arrow1-b.svg',
        'Costumes/arrow1-c.svg',
        'Costumes/arrow1-d.svg',
        'Costumes/avery-a.svg',
        'Costumes/avery-b.svg',
        'Costumes/avery_walking-a.svg',
        'Costumes/avery_walking-b.svg',
        'Costumes/avery_walking-c.svg',
        'Costumes/avery_walking-d.svg',
        'Costumes/AZ_pop_down.png',
        'Costumes/AZ_pop_front.png',
        'Costumes/AZ_pop_L_arm.png',
        'Costumes/AZ_pop_left.png',
        'Costumes/AZ_pop_R_arm.png',
        'Costumes/AZ_pop_right.png',
        'Costumes/AZ_pop_stand.png',
        'Costumes/AZ_stance.png',
        'Costumes/AZ_top_freeze.png',
        'Costumes/AZ_top_L_step.png',
        'Costumes/AZ_top_R_cross.png',
        'Costumes/AZ_top_R_step.png',
        'Costumes/AZ_top_stand.png',
        'Costumes/ball-a.svg',
        'Costumes/ball-b.svg',
        'Costumes/ball-c.svg',
        'Costumes/ball-d.svg',
        'Costumes/ballerina-a.svg',
        'Costumes/ballerina-b.svg',
        'Costumes/ballerina-c.svg',
        'Costumes/ballerina-d.svg',
        'Costumes/ball-e.svg',
        'Costumes/balloon1-a.svg',
        'Costumes/balloon1-b.svg',
        'Costumes/balloon1-c.svg',
        'Costumes/ball-soccer.svg',
        'Costumes/bananas.svg',
        'Costumes/baseball.svg',
        'Costumes/basketball.svg',
        'Costumes/bass.svg',
        'Costumes/bat1-a_.svg',
        'Costumes/bat1-b_.svg',
        'Costumes/bat2-a_.svg',
        'Costumes/bat2-b_.svg',
        'Costumes/beachball.svg',
        'Costumes/bear2-a.svg',
        'Costumes/bear2-b.svg',
        'Costumes/beetle.svg',
        'Costumes/bell1.svg',
        'Costumes/bells-a.svg',
        'Costumes/bells-b.svg',
        'Costumes/bowl-a.svg',
        'Costumes/bowtie-a.svg',
        'Costumes/bowtie-b.svg',
        'Costumes/boy1-standing.gif',
        'Costumes/boy1-walking.gif',
        'Costumes/boy2.gif',
        'Costumes/boy3.gif',
        'Costumes/building-a.svg',
        'Costumes/building-b.svg',
        'Costumes/building-c.svg',
        'Costumes/building-d.svg',
        'Costumes/building-e.svg',
        'Costumes/building-f.svg',
        'Costumes/building-g.svg',
        'Costumes/building-h.svg',
        'Costumes/building-i.svg',
        'Costumes/building-j.svg',
        'Costumes/bus.png',
        'Costumes/butterfly1-a.svg',
        'Costumes/butterfly1-b_.svg',
        'Costumes/butterfly2_.svg',
        'Costumes/butterfly3_.svg',
        'Costumes/button1.svg',
        'Costumes/button2-a.svg',
        'Costumes/button2-b.svg',
        'Costumes/button3-a.svg',
        'Costumes/button3-b.svg',
        'Costumes/button4-a.svg',
        'Costumes/button4-b.svg',
        'Costumes/button5-a.svg',
        'Costumes/button5-b.svg',
        'Costumes/cake-a.svg',
        'Costumes/cake-b.svg',
        'Costumes/calvrett_jumping.png',
        'Costumes/calvrett_thinking.png',
        'Costumes/candle1-a.svg',
        'Costumes/candle1-b.svg',
        'Costumes/candles1.svg',
        'Costumes/candles2.svg',
        'Costumes/car-bug.png',
        'Costumes/cassy-a.png',
        'Costumes/cassy-b.png',
        'Costumes/cassy-c.png',
        'Costumes/cassy_dance-a.png',
        'Costumes/cassy_dance-b.png',
        'Costumes/cassy_dance-c.png',
        'Costumes/cassy_dance-d.png',
        'Costumes/cassy-d.png',
        'Costumes/cat2.gif',
        'Costumes/cat2.svg',
        'Costumes/cat3.png',
        'Costumes/cat4.png',
        'Costumes/cat5.gif',
        'Costumes/catherine-a.png',
        'Costumes/catherine-b.png',
        'Costumes/catherine-c.png',
        'Costumes/catherine-d.png',
        'Costumes/champ99-a.png',
        'Costumes/champ99-b.png',
        'Costumes/champ99-c.png',
        'Costumes/champ99-d.png',
        'Costumes/champ99-e.png',
        'Costumes/champ99-f.png',
        'Costumes/champ99-g.png',
        'Costumes/cheesy-puffs.png',
        'Costumes/cloud-a.svg',
        'Costumes/cloud-b.svg',
        'Costumes/cloud-c.svg',
        'Costumes/cloud-d.svg',
        'Costumes/cloud.svg',
        'Costumes/cm_pop_L_arm.png',
        'Costumes/cm_pop_R_arm.png',
        'Costumes/cm_top_L_cross.png',
        'Costumes/cm_top_L_leg.png',
        'Costumes/cm_top_R_cross.png',
        'Costumes/cm_top_ready.png',
        'Costumes/cm_top_R_leg.png',
        'Costumes/cm_top_stand.png',
        'Costumes/convertible1.png',
        'Costumes/convertible2.png',
        'Costumes/convertible3.svg',
        'Costumes/cowbell.svg',
        'Costumes/crab-a.svg',
        'Costumes/crab-b.svg',
        'Costumes/creature1-a.svg',
        'Costumes/creature1-b.svg',
        'Costumes/creature1-c.svg',
        'Costumes/cymbal-a.svg',
        'Costumes/cymbal-b.svg',
        'Costumes/dan-a.png',
        'Costumes/dan-b.png',
        'Costumes/dani-a.svg',
        'Costumes/dani-b.svg',
        'Costumes/dani-c.svg',
        'Costumes/dee-a.svg',
        'Costumes/dee-b.svg',
        'Costumes/dee-c.svg',
        'Costumes/dee-d.svg',
        'Costumes/dee-e.svg',
        'Costumes/derec01.png',
        'Costumes/derec02.png',
        'Costumes/derec03.png',
        'Costumes/derec04.png',
        'Costumes/derec05.png',
        'Costumes/derec06.png',
        'Costumes/devin-a.svg',
        'Costumes/devin-b.svg',
        'Costumes/devin-c.svg',
        'Costumes/devin-d.svg',
        'Costumes/dinosaur1-a.svg',
        'Costumes/dinosaur1-b.svg',
        'Costumes/dinosaur1-c.svg',
        'Costumes/dinosaur1-d.svg',
        'Costumes/dinosaur1-e.svg',
        'Costumes/dinosaur1-f.svg',
        'Costumes/dinosaur1-g.svg',
        'Costumes/dinosaur2-a.svg',
        'Costumes/dinosaur2-b.svg',
        'Costumes/dinosaur3.svg',
        'Costumes/diver1.svg',
        'Costumes/diver2.svg',
        'Costumes/dm_freeze.png',
        'Costumes/dm_pop_down.png',
        'Costumes/dm_pop_front.png',
        'Costumes/dm_pop_L_arm.png',
        'Costumes/dm_pop_left.png',
        'Costumes/dm_pop_R_arm.png',
        'Costumes/dm_pop_right.png',
        'Costumes/dm_pop_stand.png',
        'Costumes/dm_stance.svg',
        'Costumes/dm_top_L_leg.png',
        'Costumes/dm_top_R_leg.png',
        'Costumes/dm_top_stand.png',
        'Costumes/dog1-a.svg',
        'Costumes/dog1-b.svg',
        'Costumes/dog2-a.svg',
        'Costumes/dog2-b.svg',
        'Costumes/dog2-c.svg',
        'Costumes/dog_puppy_back.png',
        'Costumes/dog_puppy_right.png',
        'Costumes/dog_puppy_side.png',
        'Costumes/dog_puppy_sit.png',
        'Costumes/donut.svg',
        'Costumes/dove1-a.svg',
        'Costumes/dove1-b.svg',
        'Costumes/dove2-a.svg',
        'Costumes/dove2-b.svg',
        'Costumes/dragon1-a.svg',
        'Costumes/dragon1-b.png',
        'Costumes/dragon1-b.svg',
        'Costumes/dragon2.gif',
        'Costumes/drum1-a.svg',
        'Costumes/drum1-b.svg',
        'Costumes/drum2-a.svg',
        'Costumes/drum2-b.svg',
        'Costumes/drum_bass-a.svg',
        'Costumes/drum_bass-b.svg',
        'Costumes/drums_conga-a.svg',
        'Costumes/drums_conga-b.svg',
        'Costumes/drum_snare-a.svg',
        'Costumes/drum_snare-b.svg',
        'Costumes/duck.svg',
        'Costumes/earth.svg',
        'Costumes/elephant-a_.svg',
        'Costumes/elephant-b_.svg',
        'Costumes/fire_hydrant.png',
        'Costumes/fish1.svg',
        'Costumes/fish2.svg',
        'Costumes/fish3.svg',
        'Costumes/flower_shape.svg',
        'Costumes/football_running.png',
        'Costumes/football_standing.png',
        'Costumes/fortunecookie.png',
        'Costumes/fox.svg',
        'Costumes/frog.svg',
        'Costumes/fruit_platter.png',
        'Costumes/fruitsalad.svg',
        'Costumes/ghost1_.svg',
        'Costumes/ghost2-a.svg',
        'Costumes/ghost2-b.svg',
        'Costumes/ghoul-a.svg',
        'Costumes/ghoul-b.svg',
        'Costumes/gift-a.svg',
        'Costumes/gift-b.svg',
        'Costumes/girl1-standing.gif',
        'Costumes/girl1-walking.gif',
        'Costumes/girl2-shouting.gif',
        'Costumes/girl2-standing.gif',
        'Costumes/girl3-basketball.gif',
        'Costumes/girl3-running.gif',
        'Costumes/girl3-standing.gif',
        'Costumes/glasses.svg',
        'Costumes/glass_water-a.svg',
        'Costumes/glass_water-b.svg',
        'Costumes/green_flag.svg',
        'Costumes/guitar_bass.svg',
        'Costumes/guitar_electric.svg',
        'Costumes/guitar.svg',
        'Costumes/hannah-a.png',
        'Costumes/hannah-b.png',
        'Costumes/hannah-c.png',
        'Costumes/hat_beanie.svg',
        'Costumes/hat_party2-a.svg',
        'Costumes/Hat.svg',
        'Costumes/hat_winter.svg',
        'Costumes/hat_wizard.svg',
        'Costumes/headband.svg',
        'Costumes/heart_code.svg',
        'Costumes/heart_face.svg',
        'Costumes/heart_love_it.svg',
        'Costumes/heart_purple.svg',
        'Costumes/heart_red.svg',
        'Costumes/heart_smile.svg',
        'Costumes/heart_sweet.svg',
        'Costumes/helicopter.png',
        'Costumes/hippo1-a.svg',
        'Costumes/hippo1-b.svg',
        'Costumes/holly1.svg',
        'Costumes/holly2.svg',
        'Costumes/home_button.svg',
        'Costumes/horse1-a.svg',
        'Costumes/horse1-b.svg',
        'Costumes/jahrd01.png',
        'Costumes/jahrd02.png',
        'Costumes/jahrd03.png',
        'Costumes/jahrd04.png',
        'Costumes/jahrd05.png',
        'Costumes/jahrd06.png',
        'Costumes/jaime-a.png',
        'Costumes/jaime-b.png',
        'Costumes/jaime_walking-a.png',
        'Costumes/jaime_walking-b.png',
        'Costumes/jaime_walking-c.png',
        'Costumes/jaime_walking-d.png',
        'Costumes/jaime_walking-e.png',
        'Costumes/jamet01.png',
        'Costumes/jamet02.png',
        'Costumes/jamet03.png',
        'Costumes/jamet04.png',
        'Costumes/jamet05.png',
        'Costumes/jamet06.png',
        'Costumes/jamet06-wall.png',
        'Costumes/jay.gif',
        'Costumes/jeans-a.svg',
        'Costumes/jeans-b.svg',
        'Costumes/jodi.gif',
        'Costumes/jo_pop_down.png',
        'Costumes/jo_pop_front.png',
        'Costumes/jo_pop_L_arm.png',
        'Costumes/jo_pop_left.png',
        'Costumes/jo_pop_R_arm.png',
        'Costumes/jo_pop_right.png',
        'Costumes/jo_pop_stand.png',
        'Costumes/jo_stance.png',
        'Costumes/jo_top_L_cross.png',
        'Costumes/jo_top_L_leg.png',
        'Costumes/jo_top_R_cross.png',
        'Costumes/jo_top_R_leg.png',
        'Costumes/jo_top_stand.png',
        'Costumes/keyboard-a.svg',
        'Costumes/keyboard-b.svg',
        'Costumes/keyboard-c.svg',
        'Costumes/keyboard-d.svg',
        'Costumes/key.svg',
        'Costumes/khalid-a.png',
        'Costumes/Khalid-b.png',
        'Costumes/khalid-c.png',
        'Costumes/khalid-d.png',
        'Costumes/knight.svg',
        'Costumes/ladybug2-a.svg',
        'Costumes/ladybug2-b.svg',
        'Costumes/ladybug2.svg',
        'Costumes/lamp.png',
        'Costumes/laptop.svg',
        'Costumes/lb_pop_down.png',
        'Costumes/lb_pop_front.png',
        'Costumes/lb_pop_L_arm.png',
        'Costumes/lb_pop_left.png',
        'Costumes/lb_pop_R_arm.png',
        'Costumes/lb_pop_right.png',
        'Costumes/lb_pop_stand.png',
        'Costumes/lb_stance.png',
        'Costumes/lb_top_L_cross.png',
        'Costumes/lb_top_L_leg.png',
        'Costumes/lb_top_R_cross.png',
        'Costumes/lb_top_R_leg.png',
        'Costumes/lb_top_stand.png',
        'Costumes/lightning.svg',
        'Costumes/lirin01.png',
        'Costumes/lirin02.png',
        'Costumes/lirin03.png',
        'Costumes/lirin04.png',
        'Costumes/lirin05.png',
        'Costumes/lirin06.png',
        'Costumes/lion-a.svg',
        'Costumes/lion-b.svg',
        'Costumes/lioness.svg',
        'Costumes/lorenz01.png',
        'Costumes/lorenz02.png',
        'Costumes/lorenz03.png',
        'Costumes/lorenz04.png',
        'Costumes/lorenz05.png',
        'Costumes/lorenz06.png',
        'Costumes/lorenz07b.png',
        'Costumes/lorenz07.png',
        'Costumes/magiccarpet.png',
        'Costumes/magicwand.svg',
        'Costumes/marble-building.png',
        'Costumes/marissa-crouching.gif',
        'Costumes/marissa.gif',
        'Costumes/marissa-sitting.gif',
        'Costumes/maya.png',
        'Costumes/microphonestand.svg',
        'Costumes/microphone.svg',
        'Costumes/monkey1-a.svg',
        'Costumes/monkey1-b.svg',
        'Costumes/monkey2-a.svg',
        'Costumes/monkey2-b.svg',
        'Costumes/monkey2-c.svg',
        'Costumes/mori.png',
        'Costumes/mouse1-a.svg',
        'Costumes/mouse1-b.svg',
        'Costumes/muffin-a.svg',
        'Costumes/muffin-b.svg',
        'Costumes/octopus-a.svg',
        'Costumes/octopus-b.svg',
        'Costumes/orange2-a.svg',
        'Costumes/orange2-b.svg',
        'Costumes/orange2-c.svg',
        'Costumes/orange.svg',
        'Costumes/paddle.svg',
        'Costumes/palmtree.gif',
        'Costumes/parrot2-a.svg',
        'Costumes/parrot2-b.svg',
        'Costumes/parrot-a.svg',
        'Costumes/parrot-b.svg',
        'Costumes/partyhat1.svg',
        'Costumes/paul.gif',
        'Costumes/pencil-a.svg',
        'Costumes/pencil-b.svg',
        'Costumes/penguin1.svg',
        'Costumes/penguin1_talk-a.svg',
        'Costumes/penguin1_talk-b.svg',
        'Costumes/penguin2.svg',
        'Costumes/penguin2_talk-a.svg',
        'Costumes/penguin2_talk-b.svg',
        'Costumes/penguin3-a.svg',
        'Costumes/penguin3-b.svg',
        'Costumes/penguin3-c.svg',
        'Costumes/piano.svg',
        'Costumes/planet2.svg',
        'Costumes/princess.svg',
        'Costumes/prince.svg',
        'Costumes/rainbow.svg',
        'Costumes/referee.gif',
        'Costumes/reindeer.svg',
        'Costumes/robot1.svg',
        'Costumes/rocks.svg',
        'Costumes/rory.png',
        'Costumes/ruby-a.png',
        'Costumes/ruby-b.png',
        'Costumes/sail-boat.png',
        'Costumes/sam.gif',
        'Costumes/sarron01.png',
        'Costumes/sarron02.png',
        'Costumes/sarron03.png',
        'Costumes/sarron04.png',
        'Costumes/sarron05.png',
        'Costumes/sarron06.png',
        'Costumes/saxophone-a.svg',
        'Costumes/saxophone-b.svg',
        'Costumes/scarf1.svg',
        'Costumes/scarf2.svg',
        'Costumes/shark-a_.svg',
        'Costumes/shark-b_.svg',
        'Costumes/shark-c_.svg',
        'Costumes/shirt2-a2.svg',
        'Costumes/shirt2-a.svg',
        'Costumes/shirt-a.svg',
        'Costumes/shirt_blouse.svg',
        'Costumes/shirt-b.svg',
        'Costumes/shirt_collar-a.svg',
        'Costumes/shirt_collar-b.svg',
        'Costumes/shirt_collar-c.svg',
        'Costumes/shoes1.svg',
        'Costumes/shoes2.svg',
        'Costumes/Singer1.svg',
        'Costumes/skates.svg',
        'Costumes/sl_pop_L_arm.png',
        'Costumes/sl_pop_R_arm.png',
        'Costumes/sl_top_L_cross.png',
        'Costumes/sl_top_L_leg.png',
        'Costumes/sl_top_R_cross.png',
        'Costumes/sl_top_ready.png',
        'Costumes/sl_top_R_leg.png',
        'Costumes/sl_top_stand.png',
        'Costumes/snowflake.svg',
        'Costumes/snowman.svg',
        'Costumes/spaceship-a.svg',
        'Costumes/spaceship-b.svg',
        'Costumes/speaker.svg',
        'Costumes/squirrel1.png',
        'Costumes/star1.svg',
        'Costumes/star2.svg',
        'Costumes/star3-a.svg',
        'Costumes/star3-b.svg',
        'Costumes/starfish-a.svg',
        'Costumes/starfish-b_.svg',
        'Costumes/stop.svg',
        'Costumes/street-cleaner-mit.png',
        'Costumes/sunglasses1.svg',
        'Costumes/sunglasses2.svg',
        'Costumes/sun.svg',
        'Costumes/tabla-a.svg',
        'Costumes/tabla-b.svg',
        'Costumes/taco-a.svg',
        'Costumes/taco-b.svg',
        'Costumes/tennisball.png',
        'Costumes/trampoline.png',
        'Costumes/tree1.svg',
        'Costumes/tree2.svg',
        'Costumes/tree-lights-a.svg',
        'Costumes/tree-lights-b.svg',
        'Costumes/trees-a.svg',
        'Costumes/trees-b.svg',
        'Costumes/trombone-a.svg',
        'Costumes/trombone-b.svg',
        'Costumes/trumpet-a2.svg',
        'Costumes/trumpet-a.svg',
        'Costumes/turtle01_colour.png',
        'Costumes/turtle02_colour_resized.png',
        'Costumes/turtle03.png',
        'Costumes/turtle04.png',
        'Costumes/turtle05.png',
        'Costumes/turtle06.png',
        'Costumes/ukulele.svg',
        'Costumes/umbrella.png',
        'Costumes/unicorn1.png',
        'Costumes/unicorn.svg',
        'Costumes/vest-a.svg',
        'Costumes/vest-b.svg',
        'Costumes/wanda.svg',
        'Costumes/watermelon-a.svg',
        'Costumes/watermelon-b.svg',
        'Costumes/watermelon-c.svg',
        'Costumes/witch.svg',
        'Costumes/wizard1.svg',
        'Costumes/wizard2.svg',
        'Costumes/wizard.svg',

        // Backgrounds
        'Backgrounds/BACKGROUNDS.json',

        'Backgrounds/atom_playground.jpg',
        'Backgrounds/bedroom1.gif',
        'Backgrounds/bedroom2.gif',
        'Backgrounds/berkeley_mural.jpg',
        'Backgrounds/brick-wall-and-stairs.jpg',
        'Backgrounds/brick-wall1.jpg',
        'Backgrounds/brick-wall2.jpg',
        'Backgrounds/desert.gif',
        'Backgrounds/night_city_with_street.gif',
        'Backgrounds/party_room.jpg',
        'Backgrounds/pathway.jpg',
        'Backgrounds/xy-grid.gif',

        // Sounds
        'Sounds/SOUNDS.json',

        'Sounds/Cat.mp3',
        'Sounds/Chord.wav',
        'Sounds/Dog1.wav',
        'Sounds/Dog2.wav',
        'Sounds/FingerSnap.wav',
        'Sounds/Kitten.wav',
        'Sounds/Laugh-female.wav',
        'Sounds/Laugh-male1.wav',
        'Sounds/Laugh-male2.wav',
        'Sounds/Laugh-male3.mp3',
        'Sounds/Meow.wav',
        'Sounds/Pop.wav',

        // Examples
        'Examples/EXAMPLES.json',

        'Examples/animal-game.xml',
        'Examples/Codification.xml',
        'Examples/copter.xml',
        'Examples/count-change.xml',
        'Examples/icecream-visual.xml',
        'Examples/JSfunctions.xml',
        'Examples/live-tree.xml',
        'Examples/swimmer.xml',
        'Examples/tree.xml',
        'Examples/vee.xml'
    ];

console.log('service worker executed', snapVersion);
/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', (evt) => {
    self.skipWaiting();
    evt.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== cacheName) {
                    return caches.delete(key);
                }
            }));
        })
    );
    self.clients.claim();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(event) {
    event.respondWith(
      fetch(event.request).catch(function(e) {
        return caches.open(cacheName).then(function(cache) {
          return cache.match(event.request,
                             {'ignoreSearch': true}).then(response => response);
        });
    }));
});
