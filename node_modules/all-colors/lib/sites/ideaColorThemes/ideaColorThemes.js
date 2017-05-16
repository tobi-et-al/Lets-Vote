if (typeof exports === 'object' && typeof define !== 'function') {
    var define = function (factory) {
        factory(require, exports, module);
    };
}

define(function (require, exports, module) {
    var zendStudio55Like = require('./Zend Studio 55 Like/zendStudio55Like.js');
    var zenburnZ = require('./Zenburn Z/zenburnZ.js');
    var zenburnBasedOnTheEmacsVersion = require('./Zenburn Based On The Emacs Version/zenburnBasedOnTheEmacsVersion.js');
    var zenburn = require('./Zenburn/zenburn.js');
    var xoria2_256 = require('./Xoria2 256/xoria2_256.js');
    var xorTheme = require('./Xor Theme/xorTheme.js');
    var xcodeMidnight = require('./Xcode Midnight/xcodeMidnight.js');
    var xcodeInspired = require('./Xcode Inspired/xcodeInspired.js');
    var wombatVI = require('./Wombat V I/wombatVI.js');
    var wombatScala = require('./Wombat Scala/wombatScala.js');
    var wombat = require('./Wombat/wombat.js');
    var withLoveForDartEditor = require('./With Love For Dart Editor/withLoveForDartEditor.js');
    var vosthinLjubicanstvena = require('./Vosthin Ljubicanstvena/vosthinLjubicanstvena.js');
    var vividchalk = require('./Vividchalk/vividchalk.js');
    var visualStudioTheme = require('./Visual Studio Theme/visualStudioTheme.js');
    var visualStudio2013Edit = require('./Visual Studio 2013edit/visualStudio2013Edit.js');
    var visualStudio2013Dark = require('./Visual Studio 2013 Dark/visualStudio2013Dark.js');
    var visualStudio2013 = require('./Visual Studio 2013/visualStudio2013.js');
    var vimDesert = require('./Vim Desert/vimDesert.js');
    var vimDark = require('./Vim Dark/vimDark.js');
    var vibrantUnknownNonDarcula = require('./Vibrant Unknown Non Darcula/vibrantUnknownNonDarcula.js');
    var vibrantUnknownDarcula = require('./Vibrant Unknown Darcula/vibrantUnknownDarcula.js');
    var vibrantInk = require('./Vibrant Ink/vibrantInk.js');
    var typeSafeClassic = require('./Type Safe Classic/typeSafeClassic.js');
    var tuteta = require('./Tuteta/tuteta.js');
    var tomorrowNightGreyPlus = require('./Tomorrow Night Grey Plus/tomorrowNightGreyPlus.js');
    var tomorrowNight = require('./Tomorrow Night/tomorrowNight.js');
    var tomorrowGreyMat = require('./Tomorrow Grey Mat/tomorrowGreyMat.js');
    var titaniumStudio = require('./Titanium Studio/titaniumStudio.js');
    var textMateTwilight = require('./Text Mate Twilight/textMateTwilight.js');
    var tauCeti = require('./Tau Ceti/tauCeti.js');
    var tangoDark = require('./Tango Dark/tangoDark.js');
    var tango = require('./Tango/tango.js');
    var tangid = require('./Tangid/tangid.js');
    var talskiDark = require('./Talski Dark/talskiDark.js');
    var sunshine = require('./Sunshine/sunshine.js');
    var sunflower = require('./Sunflower/sunflower.js');
    var sunburst = require('./Sunburst/sunburst.js');
    var sunbreak = require('./Sunbreak/sunbreak.js');
    var sublimeText2 = require('./Sublime Text 2/sublimeText2.js');
    var sublimeMonokaiTrue = require('./Sublime Monokai True/sublimeMonokaiTrue.js');
    var spacegray2 = require('./Spacegray 2/spacegray2.js');
    var spacegray = require('./Spacegray/spacegray.js');
    var sonOfObsidianVariation = require('./Son Of Obsidian Variation/sonOfObsidianVariation.js');
    var sonOfObsidian = require('./Son Of Obsidian/sonOfObsidian.js');
    var sonOfDarcula = require('./Son Of Darcula/sonOfDarcula.js');
    var solarizedLightAlternate = require('./Solarized Light Alternate/solarizedLightAlternate.js');
    var solarizedLight = require('./Solarized Light/solarizedLight.js');
    var solarizedDark = require('./Solarized Dark/solarizedDark.js');
    var solarized = require('./Solarized/solarized.js');
    var slate = require('./Slate/slate.js');
    var simpleBen = require('./Simple Ben/simpleBen.js');
    var simonDark = require('./Simon Dark/simonDark.js');
    var seagrape = require('./Seagrape/seagrape.js');
    var sciTE = require('./Sci T E/sciTE.js');
    var schuss = require('./Schuss/schuss.js');
    var rudy = require('./Rudy/rudy.js');
    var rubyblue = require('./Rubyblue/rubyblue.js');
    var rubyK = require('./Ruby K/rubyK.js');
    var rubyBlue = require('./Ruby Blue/rubyBlue.js');
    var rs = require('./Rs/rs.js');
    var roboticket = require('./Roboticket/roboticket.js');
    var river = require('./River/river.js');
    var retta = require('./Retta/retta.js');
    var relaxYourEyes = require('./Relax Your Eyes/relaxYourEyes.js');
    var regalObsidian = require('./Regal Obsidian/regalObsidian.js');
    var recognEyes = require('./Recogn Eyes/recognEyes.js');
    var recogSublime = require('./Recog Sublime/recogSublime.js');
    var realGithub = require('./Real Github/realGithub.js');
    var rat49 = require('./Rat49/rat49.js');
    var rainbowDrops = require('./Rainbow Drops/rainbowDrops.js');
    var railscastsGreyComments = require('./Railscasts Grey Comments/railscastsGreyComments.js');
    var purpleTouch = require('./Purple Touch/purpleTouch.js');
    var programmerModified = require('./Programmer Modified/programmerModified.js');
    var programmer = require('./Programmer/programmer.js');
    var predawnSublimeText = require('./Predawn Sublime Text/predawnSublimeText.js');
    var predawn = require('./Predawn/predawn.js');
    var playFramework = require('./Play Framework/playFramework.js');
    var pinkyPurple = require('./Pinky Purple/pinkyPurple.js');
    var personal = require('./Personal/personal.js');
    var pdestal = require('./Pdestal/pdestal.js');
    var pastel = require('./Pastel/pastel.js');
    var oughsumm = require('./Oughsumm/oughsumm.js');
    var oceanSunset = require('./Ocean Sunset/oceanSunset.js');
    var obsidianBladeNonDarcula = require('./Obsidian Blade Non Darcula/obsidianBladeNonDarcula.js');
    var obsidianBladeDarcula = require('./Obsidian Blade Darcula/obsidianBladeDarcula.js');
    var obsidian = require('./Obsidian/obsidian.js');
    var obsidiMod = require('./Obsidi Mod/obsidiMod.js');
    var oblivionWithGroovy = require('./Oblivion With Groovy/oblivionWithGroovy.js');
    var oblivionV2 = require('./Oblivion V2/oblivionV2.js');
    var oblivion = require('./Oblivion/oblivion.js');
    var notepadLike = require('./Notepad Like/notepadLike.js');
    var notSoBright = require('./Not So Bright/notSoBright.js');
    var noCrapCDT = require('./No Crap C D T/noCrapCDT.js');
    var nightLionAptanaTheme = require('./Night Lion Aptana Theme/nightLionAptanaTheme.js');
    var nightFall = require('./Night Fall/nightFall.js');
    var nicePython = require('./Nice Python/nicePython.js');
    var netbeansPlain = require('./Netbeans Plain/netbeansPlain.js');
    var netbeans8 = require('./Netbeans 8/netbeans8.js');
    var netbeans70 = require('./Netbeans 70/netbeans70.js');
    var netbeans6 = require('./Netbeans 6/netbeans6.js');
    var myTheme = require('./My Theme/myTheme.js');
    var mr = require('./Mr/mr.js');
    var moose = require('./Moose/moose.js');
    var monokaiSublimeText3Jar = require('./Monokai Sublime Text 3jar/monokaiSublimeText3Jar.js');
    var monokaiSublimeText3 = require('./Monokai Sublime Text 3/monokaiSublimeText3.js');
    var monokaiFb = require('./Monokai Fb/monokaiFb.js');
    var monokaiBlueHiDPI = require('./Monokai Blue Hi D P I/monokaiBlueHiDPI.js');
    var monokai2 = require('./Monokai 2/monokai2.js');
    var monokai = require('./Monokai/monokai.js');
    var mondayMorning = require('./Monday Morning/mondayMorning.js');
    var modernClassicLight = require('./Modern Classic Light/modernClassicLight.js');
    var modernClassicDark = require('./Modern Classic Dark/modernClassicDark.js');
    var mkii = require('./Mkii/mkii.js');
    var minimal = require('./Minimal/minimal.js');
    var mindshareLabs = require('./Mindshare Labs/mindshareLabs.js');
    var mashupTheme = require('./Mashup Theme/mashupTheme.js');
    var lumicode = require('./Lumicode/lumicode.js');
    var laurent = require('./Laurent/laurent.js');
    var ladiesNight = require('./Ladies Night/ladiesNight.js');
    var juhakuV2 = require('./Juhaku V2/juhakuV2.js');
    var juhaku = require('./Juhaku/juhaku.js');
    var jellybeanInspired = require('./Jellybean Inspired/jellybeanInspired.js');
    var javaslang11 = require('./Javaslang 11/javaslang11.js');
    var javaslang = require('./Javaslang/javaslang.js');
    var javaDev = require('./Java Dev/javaDev.js');
    var inkpot = require('./Inkpot/inkpot.js');
    var ingweland = require('./Ingweland/ingweland.js');
    var impulse = require('./Impulse/impulse.js');
    var igor = require('./Igor/igor.js');
    var ideaDarkTheme = require('./Idea Dark Theme/ideaDarkTheme.js');
    var ideaBlueOrange = require('./Idea Blue Orange/ideaBlueOrange.js');
    var humaneIst = require('./Humane Ist/humaneIst.js');
    var heptica = require('./Heptica/heptica.js');
    var havenjark = require('./Havenjark/havenjark.js');
    var hardcoded = require('./Hardcoded/hardcoded.js');
    var hackerGym = require('./Hacker Gym/hackerGym.js');
    var gvim = require('./Gvim/gvim.js');
    var greenish = require('./Greenish/greenish.js');
    var goodGithub = require('./Good Github/goodGithub.js');
    var github2 = require('./Github2/github2.js');
    var github2015 = require('./Github 2015/github2015.js');
    var github = require('./Github/github.js');
    var gitHubRemixed = require('./Git Hub Remixed/gitHubRemixed.js');
    var genXen = require('./Gen Xen/genXen.js');
    var genX = require('./Gen X/genX.js');
    var geditOriginalOblivion = require('./Gedit Original Oblivion/geditOriginalOblivion.js');
    var geditForElegantGnome = require('./Gedit For Elegant Gnome/geditForElegantGnome.js');
    var frontenddev = require('./Frontenddev/frontenddev.js');
    var foggyDay = require('./Foggy Day/foggyDay.js');
    var fascination = require('./Fascination/fascination.js');
    var fadeComments = require('./Fade Comments/fadeComments.js');
    var eyeCandy = require('./Eye Candy/eyeCandy.js');
    var espressoWebStyle = require('./Espresso Web Style/espressoWebStyle.js');
    var espressoLibre = require('./Espresso Libre/espressoLibre.js');
    var ergo = require('./Ergo/ergo.js');
    var emacsColorThemeDarkBlue = require('./Emacs Color Theme Dark Blue/emacsColorThemeDarkBlue.js');
    var emacs2 = require('./Emacs 2/emacs2.js');
    var emacs = require('./Emacs/emacs.js');
    var eclipsePlain = require('./Eclipse Plain/eclipsePlain.js');
    var eclipseLike = require('./Eclipse Like/eclipseLike.js');
    var eclipse = require('./Eclipse/eclipse.js');
    var eclectideMonokai = require('./Eclectide Monokai/eclectideMonokai.js');
    var easyView = require('./Easy View/easyView.js');
    var easyOnTheEyes = require('./Easy On The Eyes/easyOnTheEyes.js');
    var easyEyesYellow = require('./Easy Eyes Yellow/easyEyesYellow.js');
    var dreamweaver = require('./Dreamweaver/dreamweaver.js');
    var django = require('./Django/django.js');
    var developer = require('./Developer/developer.js');
    var desert = require('./Desert/desert.js');
    var defaultTheme = require('./Default/defaultTheme.js');
    var darkWorld = require('./Dark World/darkWorld.js');
    var darkVoid = require('./Dark Void/darkVoid.js');
    var darkVisualStudio = require('./Dark Visual Studio/darkVisualStudio.js');
    var darkRoom = require('./Dark Room/darkRoom.js');
    var darkMagic = require('./Dark Magic/darkMagic.js');
    var darkKnight2 = require('./Dark Knight 2/darkKnight2.js');
    var darkKnight = require('./Dark Knight/darkKnight.js');
    var darkJuno = require('./Dark Juno/darkJuno.js');
    var darkHope = require('./Dark Hope/darkHope.js');
    var darkFlashBuilder = require('./Dark Flash Builder/darkFlashBuilder.js');
    var darkCyan = require('./Dark Cyan/darkCyan.js');
    var darkCold = require('./Dark Cold/darkCold.js');
    var darkBlue = require('./Dark Blue/darkBlue.js');
    var darculaStudio = require('./Darcula Studio/darculaStudio.js');
    var cylox = require('./Cylox/cylox.js');
    var coolProgrammer = require('./Cool Programmer/coolProgrammer.js');
    var colorfulTheme = require('./Colorful Theme/colorfulTheme.js');
    var colorfulJava = require('./Colorful Java/colorfulJava.js');
    var codeRush = require('./Code Rush/codeRush.js');
    var codeBlocksDark = require('./Code Blocks Dark/codeBlocksDark.js');
    var codeBlocks = require('./Code Blocks/codeBlocks.js');
    var coddingHorror = require('./Codding Horror/coddingHorror.js');
    var cobalt = require('./Cobalt/cobalt.js');
    var classicEclipse = require('./Classic Eclipse/classicEclipse.js');
    var ciderTheme = require('./Cider Theme/ciderTheme.js');
    var caritos = require('./Caritos/caritos.js');
    var brackets = require('./Brackets/brackets.js');
    var bluish = require('./Bluish/bluish.js');
    var blueIsh = require('./Blue Ish/blueIsh.js');
    var blueHippo = require('./Blue Hippo/blueHippo.js');
    var blue = require('./Blue/blue.js');
    var blackPastel = require('./Black Pastel/blackPastel.js');
    var base16Ocean = require('./Base16 Ocean/base16Ocean.js');
    var base16DefaultDark = require('./Base16 Default Dark/base16DefaultDark.js');
    var asd = require('./Asd/asd.js');
    var aptanaStudio3 = require('./Aptana Studio 3/aptanaStudio3.js');
    var aptanaByAlexmeia = require('./Aptana By Alexmeia/aptanaByAlexmeia.js');
    var agedCider = require('./Aged Cider/agedCider.js');
    var afterGlow = require('./After Glow/afterGlow.js');

    module.exports = {
        zendStudio55Like: zendStudio55Like,
        zenburnZ: zenburnZ,
        zenburnBasedOnTheEmacsVersion: zenburnBasedOnTheEmacsVersion,
        zenburn: zenburn,
        xoria2_256: xoria2_256,
        xorTheme: xorTheme,
        xcodeMidnight: xcodeMidnight,
        xcodeInspired: xcodeInspired,
        wombatVI: wombatVI,
        wombatScala: wombatScala,
        wombat: wombat,
        withLoveForDartEditor: withLoveForDartEditor,
        vosthinLjubicanstvena: vosthinLjubicanstvena,
        vividchalk: vividchalk,
        visualStudioTheme: visualStudioTheme,
        visualStudio2013Edit: visualStudio2013Edit,
        visualStudio2013Dark: visualStudio2013Dark,
        visualStudio2013: visualStudio2013,
        vimDesert: vimDesert,
        vimDark: vimDark,
        vibrantUnknownNonDarcula: vibrantUnknownNonDarcula,
        vibrantUnknownDarcula: vibrantUnknownDarcula,
        vibrantInk: vibrantInk,
        typeSafeClassic: typeSafeClassic,
        tuteta: tuteta,
        tomorrowNightGreyPlus: tomorrowNightGreyPlus,
        tomorrowNight: tomorrowNight,
        tomorrowGreyMat: tomorrowGreyMat,
        titaniumStudio: titaniumStudio,
        textMateTwilight: textMateTwilight,
        tauCeti: tauCeti,
        tangoDark: tangoDark,
        tango: tango,
        tangid: tangid,
        talskiDark: talskiDark,
        sunshine: sunshine,
        sunflower: sunflower,
        sunburst: sunburst,
        sunbreak: sunbreak,
        sublimeText2: sublimeText2,
        sublimeMonokaiTrue: sublimeMonokaiTrue,
        spacegray2: spacegray2,
        spacegray: spacegray,
        sonOfObsidianVariation: sonOfObsidianVariation,
        sonOfObsidian: sonOfObsidian,
        sonOfDarcula: sonOfDarcula,
        solarizedLightAlternate: solarizedLightAlternate,
        solarizedLight: solarizedLight,
        solarizedDark: solarizedDark,
        solarized: solarized,
        slate: slate,
        simpleBen: simpleBen,
        simonDark: simonDark,
        seagrape: seagrape,
        sciTE: sciTE,
        schuss: schuss,
        rudy: rudy,
        rubyblue: rubyblue,
        rubyK: rubyK,
        rubyBlue: rubyBlue,
        rs: rs,
        roboticket: roboticket,
        river: river,
        retta: retta,
        relaxYourEyes: relaxYourEyes,
        regalObsidian: regalObsidian,
        recognEyes: recognEyes,
        recogSublime: recogSublime,
        realGithub: realGithub,
        rat49: rat49,
        rainbowDrops: rainbowDrops,
        railscastsGreyComments: railscastsGreyComments,
        purpleTouch: purpleTouch,
        programmerModified: programmerModified,
        programmer: programmer,
        predawnSublimeText: predawnSublimeText,
        predawn: predawn,
        playFramework: playFramework,
        pinkyPurple: pinkyPurple,
        personal: personal,
        pdestal: pdestal,
        pastel: pastel,
        oughsumm: oughsumm,
        oceanSunset: oceanSunset,
        obsidianBladeNonDarcula: obsidianBladeNonDarcula,
        obsidianBladeDarcula: obsidianBladeDarcula,
        obsidian: obsidian,
        obsidiMod: obsidiMod,
        oblivionWithGroovy: oblivionWithGroovy,
        oblivionV2: oblivionV2,
        oblivion: oblivion,
        notepadLike: notepadLike,
        notSoBright: notSoBright,
        noCrapCDT: noCrapCDT,
        nightLionAptanaTheme: nightLionAptanaTheme,
        nightFall: nightFall,
        nicePython: nicePython,
        netbeansPlain: netbeansPlain,
        netbeans8: netbeans8,
        netbeans70: netbeans70,
        netbeans6: netbeans6,
        myTheme: myTheme,
        mr: mr,
        moose: moose,
        monokaiSublimeText3Jar: monokaiSublimeText3Jar,
        monokaiSublimeText3: monokaiSublimeText3,
        monokaiFb: monokaiFb,
        monokaiBlueHiDPI: monokaiBlueHiDPI,
        monokai2: monokai2,
        monokai: monokai,
        mondayMorning: mondayMorning,
        modernClassicLight: modernClassicLight,
        modernClassicDark: modernClassicDark,
        mkii: mkii,
        minimal: minimal,
        mindshareLabs: mindshareLabs,
        mashupTheme: mashupTheme,
        lumicode: lumicode,
        laurent: laurent,
        ladiesNight: ladiesNight,
        juhakuV2: juhakuV2,
        juhaku: juhaku,
        jellybeanInspired: jellybeanInspired,
        javaslang11: javaslang11,
        javaslang: javaslang,
        javaDev: javaDev,
        inkpot: inkpot,
        ingweland: ingweland,
        impulse: impulse,
        igor: igor,
        ideaDarkTheme: ideaDarkTheme,
        ideaBlueOrange: ideaBlueOrange,
        humaneIst: humaneIst,
        heptica: heptica,
        havenjark: havenjark,
        hardcoded: hardcoded,
        hackerGym: hackerGym,
        gvim: gvim,
        greenish: greenish,
        goodGithub: goodGithub,
        github2: github2,
        github2015: github2015,
        github: github,
        gitHubRemixed: gitHubRemixed,
        genXen: genXen,
        genX: genX,
        geditOriginalOblivion: geditOriginalOblivion,
        geditForElegantGnome: geditForElegantGnome,
        frontenddev: frontenddev,
        foggyDay: foggyDay,
        fascination: fascination,
        fadeComments: fadeComments,
        eyeCandy: eyeCandy,
        espressoWebStyle: espressoWebStyle,
        espressoLibre: espressoLibre,
        ergo: ergo,
        emacsColorThemeDarkBlue: emacsColorThemeDarkBlue,
        emacs2: emacs2,
        emacs: emacs,
        eclipsePlain: eclipsePlain,
        eclipseLike: eclipseLike,
        eclipse: eclipse,
        eclectideMonokai: eclectideMonokai,
        easyView: easyView,
        easyOnTheEyes: easyOnTheEyes,
        easyEyesYellow: easyEyesYellow,
        dreamweaver: dreamweaver,
        django: django,
        developer: developer,
        desert: desert,
        defaultTheme: defaultTheme,
        darkWorld: darkWorld,
        darkVoid: darkVoid,
        darkVisualStudio: darkVisualStudio,
        darkRoom: darkRoom,
        darkMagic: darkMagic,
        darkKnight2: darkKnight2,
        darkKnight: darkKnight,
        darkJuno: darkJuno,
        darkHope: darkHope,
        darkFlashBuilder: darkFlashBuilder,
        darkCyan: darkCyan,
        darkCold: darkCold,
        darkBlue: darkBlue,
        darculaStudio: darculaStudio,
        cylox: cylox,
        coolProgrammer: coolProgrammer,
        colorfulTheme: colorfulTheme,
        colorfulJava: colorfulJava,
        codeRush: codeRush,
        codeBlocksDark: codeBlocksDark,
        codeBlocks: codeBlocks,
        coddingHorror: coddingHorror,
        cobalt: cobalt,
        classicEclipse: classicEclipse,
        ciderTheme: ciderTheme,
        caritos: caritos,
        brackets: brackets,
        bluish: bluish,
        blueIsh: blueIsh,
        blueHippo: blueHippo,
        blue: blue,
        blackPastel: blackPastel,
        base16Ocean: base16Ocean,
        base16DefaultDark: base16DefaultDark,
        asd: asd,
        aptanaStudio3: aptanaStudio3,
        aptanaByAlexmeia: aptanaByAlexmeia,
        agedCider: agedCider,
        afterGlow: afterGlow
    };
});