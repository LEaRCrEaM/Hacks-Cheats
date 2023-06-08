!function() {
    "use strict";
    var e, a = {
        6144: function(e, a, s) {
            s(7422);
            var t = s(9526)
              , o = s(3961)
              , r = s(8329)
              , n = s(5489)
              , i = (s(3373),
            s(4797),
            s(9954),
            s(4265),
            s(6147))
              , l = s(1687);
            s(6653);
            var c = ()=>{
                const e = e=>{
                    const a = document.createElement("script");
                    a.src = e,
                    a.async = !0,
                    document.body.appendChild(a)
                }
                ;
                return window.isHybridWebView || (e("https://www.nytimes.com/games-assets/gdpr/cookie-notice-v2.1.2.min.js"),
                e(window.env.gtm)),
                null
            }
              , d = (0,
            t.createContext)({
                getVariant: ()=>null,
                reportExposure: e=>null,
                tests: {},
                hasAbraLoaded: !1
            });
            function u(e, a) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    a && (t = t.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }
                    ))),
                    s.push.apply(s, t)
                }
                return s
            }
            function m(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var s = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? u(Object(s), !0).forEach((function(a) {
                        p(e, a, s[a])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : u(Object(s)).forEach((function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(s, a))
                    }
                    ))
                }
                return e
            }
            function p(e, a, s) {
                return a in e ? Object.defineProperty(e, a, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = s,
                e
            }
            const y = e=>{
                var a, s, t;
                const o = (null === (a = window.config) || void 0 === a ? void 0 : a.AbraConfig) || n.Fi.getOverrides();
                n.Fi.init(window.abra.config, {
                    agent_id: (null === (s = window.config) || void 0 === s || null === (t = s.userInfo) || void 0 === t ? void 0 : t.agentID) || n.kh,
                    regi_id: null == e ? void 0 : e.regiId,
                    geo_country: n.NT
                }, o, e)
            }
            ;
            y();
            const g = m({}, n.Fi.getTests());
            var h = e=>{
                let {children: a, userType: s} = e;
                const [o,r] = (0,
                t.useState)(g)
                  , [i,l] = (0,
                t.useState)(!1);
                (0,
                t.useEffect)((()=>{
                    y(s),
                    r(m({}, n.Fi.getTests())),
                    l(!0)
                }
                ), [s]);
                const c = (0,
                t.useMemo)((()=>({
                    tests: o,
                    getVariant: e=>o[e],
                    reportExposure: e=>n.Fi.reportExposure(e),
                    hasAbraLoaded: i
                })), [o, i]);
                return t.createElement(d.Provider, {
                    value: c
                }, a)
            }
              , b = e=>{
                let {children: a} = e;
                const {userType: s} = (0,
                l.Z)();
                return t.createElement(h, {
                    userType: s
                }, a)
            }
              , k = ()=>(0,
            t.useContext)(d);
            const f = ["activationRegiModal", "activationRegiModalControl", "loginOffer", "sbPastPuzzles", "spellingBeeMeter", "letterboxedWelcome", "gamesSaleCTA"]
              , w = {
                activationRegiModal: {
                    testName: "ON_wordle_regi_modal",
                    activeVariant: "1_regi_modal"
                },
                activationRegiModalControl: {
                    testName: "ON_wordle_regi_modal",
                    activeVariant: "0_control"
                },
                loginOffer: {
                    testName: "ON_wordleOnboardingOffer_0822",
                    activeVariant: "1_ShowOffer"
                },
                sbPastPuzzles: {
                    testName: "GAMES_SB_past_puzzles",
                    activeVariant: "1_Past_Puzzles"
                },
                spellingBeeMeter: {
                    testName: "GAMES_spellingBeeMeter_0302",
                    activeVariant: "1_meter"
                },
                letterboxedWelcome: {
                    testName: "GAMES_letter_boxed_welcome_0328",
                    activeVariant: "1_NewLetterBoxedWelcome"
                },
                gamesSaleCTA: {
                    testName: "MWD_phoenix_games_sale_cta",
                    activeVariant: "1_Show"
                }
            }
              , v = e=>f.reduce(((a,s)=>{
                if (e) {
                    const {testName: t, activeVariant: o} = w[s];
                    a[s] = e(t) === o
                } else
                    a[s] = !1;
                return a
            }
            ), {})
              , _ = t.createContext(v())
              , E = e=>{
                let {children: a} = e;
                const {getVariant: s} = k()
                  , o = v(s)
                  , [r,n] = t.useState(o);
                return t.useEffect((()=>{
                    var e, a;
                    e = o,
                    a = r,
                    f.some((s=>e[s] !== a[s])) && n(o)
                }
                ), [o]),
                t.createElement(_.Provider, {
                    value: r
                }, a)
            }
            ;
            var x = s(4658);
            const z = "nyt-wordle-refresh"
              , N = window.localStorage
              , j = 432e5;
            let C;
            function S() {
                return C || (C = setInterval((()=>{
                    N.getItem(z) && (N.removeItem(z),
                    function() {
                        if (!window.isHybridWebView) {
                            const e = /.*\.nytimes\.com/g;
                            document.location.href.match(e) ? document.location.reload(!0) : document.location.replace("https://www.nytimes.com/games/wordle")
                        }
                    }())
                }
                ), j),
                C)
            }
            var O = s(539)
              , P = s(6171)
              , L = {
                moment: "MomentSystem-module_moment__G9hyw",
                momentExit: "MomentSystem-module_momentExit__ssPqu",
                momentExitActive: "MomentSystem-module_momentExitActive__DuPSj",
                momentEnter: "MomentSystem-module_momentEnter__pKkpt",
                momentEnterActive: "MomentSystem-module_momentEnterActive__UJVVz"
            };
            function A(e, a) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    a && (t = t.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }
                    ))),
                    s.push.apply(s, t)
                }
                return s
            }
            function I(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var s = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? A(Object(s), !0).forEach((function(a) {
                        T(e, a, s[a])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : A(Object(s)).forEach((function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(s, a))
                    }
                    ))
                }
                return e
            }
            function T(e, a, s) {
                return a in e ? Object.defineProperty(e, a, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = s,
                e
            }
            const D = 400;
            function B(e) {
                let {hasLoaded: a, config: s, initialMoment: o} = e;
                const [r,n] = t.useState(o)
                  , i = s[r]
                  , l = {
                    exit: L.momentExit,
                    exitActive: L.momentExitActive
                }
                  , c = {
                    enter: L.momentEnter,
                    enterActive: L.momentEnterActive
                }
                  , d = I(I({}, i.animateIn ? c : {}), i.animateOut ? l : {});
                return t.createElement(O.Z, null, t.createElement(P.Z, {
                    key: r,
                    timeout: {
                        enter: i.animateIn ? D : 0,
                        exit: i.animateOut ? D : 0
                    },
                    classNames: d
                }, t.createElement("div", {
                    className: L.moment
                }, t.createElement(i.component, {
                    hasLoaded: a,
                    transition: n
                }))))
            }
            var M = s(8229)
              , R = s(9385)
              , G = s(826);
            const W = e=>e.persist.settings
              , q = (0,
            G.P1)(W, (e=>e.hardMode))
              , H = (0,
            G.P1)(W, (e=>e.darkMode))
              , V = (0,
            G.P1)(W, (e=>e.colorblindMode))
              , F = ()=>(0,
            r.I0)()
              , U = r.v9
              , Y = {
                currentStreak: 0,
                maxStreak: 0,
                guesses: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    fail: 0
                },
                winPercentage: 0,
                gamesPlayed: 0,
                gamesWon: 0,
                averageGuesses: 0
            }
              , Z = 6
              , K = 5
              , X = ["Genius", "Magnificent", "Impressive", "Splendid", "Great", "Phew"]
              , J = (e,a)=>{
                const s = e && a ? a : "ANON";
                return "".concat("nyt-wordle-moogle", "/").concat(s)
            }
              , Q = (e,a)=>{
                try {
                    return window.localStorage.setItem(e, JSON.stringify(a)),
                    !0
                } catch (e) {
                    return console.error(e),
                    (0,
                    n.lY)(e),
                    !1
                }
            }
              , $ = (e,a)=>{
                try {
                    const s = function(e) {
                        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        try {
                            const s = window.localStorage.getItem(e);
                            return s ? JSON.parse(s) : a
                        } catch (e) {
                            return console.error(e),
                            (0,
                            n.lY)(e),
                            a
                        }
                    }(J(e, a));
                    return s
                } catch (e) {
                    return null
                }
            }
              , ee = ()=>{
                const e = !!window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
                return {
                    game: {
                        id: null,
                        dayOffset: null,
                        boardState: Array(Z).fill(""),
                        currentRowIndex: 0,
                        status: "IN_PROGRESS",
                        timestamps: {
                            lastPlayed: null,
                            lastCompleted: null
                        }
                    },
                    settings: {
                        hardMode: !1,
                        darkMode: e,
                        colorblindMode: !1
                    },
                    stats: Y
                }
            }
              , ae = (e,a)=>{
                try {
                    return localStorage.getItem(e) || a
                } catch (e) {
                    return a
                }
            }
              , se = e=>{
                const a = "nyt-wordle-moogle/".concat(e);
                return {
                    anon: ae("nyt-wordle-moogle/ANON", "[NONE]"),
                    regi: ae(a, "[NONE]")
                }
            }
              , te = ()=>{
                const e = U(H)
                  , a = U(V);
                (0,
                t.useEffect)((()=>{
                    const a = document.querySelector("body");
                    if (a && (Q("nyt-wordle-darkmode", e),
                    e && !a.classList.contains("dark") ? a.classList.add("dark") : e || a.classList.remove("dark"),
                    window.isHybridWebView && window.NativeBridge)) {
                        const a = e ? R.PU.DARK : R.PU.LIGHT;
                        window.NativeBridge.gamesSetNativeColorTheme(a).catch((e=>{
                            console.error("Failed to set native color theme: ".concat(a), e),
                            (0,
                            M.Z)("Failed to set native color theme: ".concat(a))
                        }
                        ))
                    }
                }
                ), [e]),
                (0,
                t.useEffect)((()=>{
                    const e = document.querySelector("body");
                    e && (a && !e.classList.contains("colorblind") ? e.classList.add("colorblind") : a || e.classList.remove("colorblind"))
                }
                ), [a])
            }
            ;
            function oe(e, a) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    a && (t = t.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }
                    ))),
                    s.push.apply(s, t)
                }
                return s
            }
            function re(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var s = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? oe(Object(s), !0).forEach((function(a) {
                        ne(e, a, s[a])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : oe(Object(s)).forEach((function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(s, a))
                    }
                    ))
                }
                return e
            }
            function ne(e, a, s) {
                return a in e ? Object.defineProperty(e, a, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = s,
                e
            }
            const ie = "wordle/overlays/OPEN_MODAL"
              , le = "wordle/overlays/CLOSE_MODAL"
              , ce = "wordle/overlays/OPEN_PAGE"
              , de = "wordle/overlays/CLOSE_PAGE"
              , ue = "wordle/overlays/WILL_CLOSE_PAGE"
              , me = "wordle/overlays/OPEN_ERROR"
              , pe = "wordle/overlays/OPEN_NAV_MODAL"
              , ye = "wordle/overlays/CLOSE_NAV_MODAL"
              , ge = "wordle/overlays/TRACK_NAV_MODAL_ITEM"
              , he = "wordle/overlays/ADD_TOAST"
              , be = "wordle/overlays/REMOVE_TOAST"
              , ke = "wordle/overlays/TRACK_AUTH_CLICK"
              , fe = "wordle/overlays/TRACK_AUTH_IMPRESSION"
              , we = function(e) {
                return {
                    type: ie,
                    payload: {
                        modal: e,
                        isClicked: arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                    }
                }
            }
              , ve = e=>({
                type: ce,
                payload: {
                    page: e
                }
            })
              , _e = ()=>({
                type: le
            })
              , Ee = ()=>({
                type: de
            })
              , xe = ()=>({
                type: ue
            })
              , ze = e=>({
                type: me,
                payload: {
                    error: e
                }
            })
              , Ne = ()=>({
                type: pe
            })
              , je = ()=>({
                type: ye
            })
              , Ce = (e,a,s,t)=>({
                type: ge,
                payload: {
                    name: e,
                    label: a,
                    useBeacon: s,
                    context: t
                }
            })
              , Se = e=>({
                type: he,
                payload: re(re({}, e), {}, {
                    timestamp: Date.now()
                })
            })
              , Oe = (e,a)=>({
                type: be,
                payload: {
                    text: e,
                    timestamp: a
                }
            })
              , Pe = function() {
                return {
                    type: ke,
                    payload: {
                        label: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        sendContext: arguments.length > 1 ? arguments[1] : void 0,
                        element: arguments.length > 2 ? arguments[2] : void 0
                    }
                }
            }
              , Le = (e,a)=>({
                type: fe,
                payload: {
                    name: e,
                    region: a
                }
            });
            var Ae, Ie = s(7132);
            const Te = (null === (Ae = window.env) || void 0 === Ae ? void 0 : Ae.name) || "dev"
              , De = e=>e[Te] || e.dev
              , Be = De({
                prod: "https://myaccount.nytimes.com",
                stg: "https://myaccount.stg.nytimes.com",
                dev: "https://myaccount.dev.nytimes.com"
            })
              , Me = De({
                prod: "https://www.nytimes.com/subscription/games?campaignId=8RRFW",
                stg: "https://www.stg.nytimes.com/subscription/games?campaignId=8RRFW",
                dev: "https://www.stg.nytimes.com/subscription/games?campaignId=8RRFW"
            })
              , Re = De({
                prod: "https://www.nytimes.com/subscription/wordle-offer?campaignId=8YUQL",
                stg: "https://www.stg.nytimes.com/subscription/wordle-offer?campaignId=8YUQL",
                dev: "https://www.stg.nytimes.com/subscription/wordle-offer?campaignId=8YUQL"
            })
              , Ge = "".concat(Be, "/svc/auth/v1/profileinfo")
              , We = De({
                prod: "https://www.nytimes.com/games/wordle/index.html",
                stg: "".concat(window.location.origin, "/games/wordle/index.html"),
                dev: "https://local.nytimes.com/games/wordle/index.html"
            })
              , qe = De({
                prod: "https://www.nytimes.com/games/wordle/index.html?success=true",
                stg: "".concat(window.location.origin, "/games/wordle/index.html?success=true"),
                dev: "https://local.nytimes.com/games/wordle/index.html?success=true"
            })
              , He = encodeURIComponent(We)
              , Ve = encodeURIComponent(qe)
              , Fe = encodeURIComponent("".concat(Re, "&EXIT_URI=").concat(He))
              , Ue = "".concat(Be, "/auth/enter-email?response_type=cookie&client_id=games&application=nyt-lire&asset=wordle&redirect_uri=").concat(Ve)
              , Ye = "".concat(Be, "/auth/enter-email?response_type=cookie&client_id=games&application=nyt-lires&redirect_uri=").concat(He)
              , Ze = e=>"".concat(Be, "/auth/enter-email?response_type=cookie&client_id=games&application=nyt-lire&asset=").concat(e, "&redirect_uri=").concat(Fe)
              , Ke = De({
                prod: "https://www.nytimes.com/games/wordle/index.html",
                stg: "".concat(window.location.origin, "/games/wordle/index.html"),
                dev: "https://local.nytimes.com/games/wordle/index.html"
            })
              , Xe = "".concat(Be, "/auth/logout?redirect_uri=").concat(Ke)
              , Je = new Date >= new Date("4/10/2023 10:30 AM EDT")
              , Qe = e=>e.api
              , $e = (0,
            G.P1)(Qe, (e=>e.moogleGet))
              , ea = (0,
            G.P1)($e, (e=>e.optedIn))
              , aa = (0,
            G.P1)(Qe, (e=>e.moogleGet.error))
              , sa = (0,
            G.P1)(Qe, (e=>e.appLoaded))
              , ta = (0,
            G.P1)(Qe, (e=>e.moogleGet.isLoading))
              , oa = (0,
            G.P1)(Qe, (e=>e.moogleGet.data))
              , ra = (0,
            G.P1)(oa, (e=>null == e ? void 0 : e.game_data))
              , na = (0,
            G.P1)(oa, (e=>null == e ? void 0 : e.timestamp))
              , ia = (0,
            G.P1)(oa, (e=>null == e ? void 0 : e.user_id))
              , la = (0,
            G.P1)([ea, ia, na], ((e,a,s)=>e && !!a && !s))
              , ca = ((0,
            G.P1)(Qe, (e=>e.mooglePost.isLoading)),
            (0,
            G.P1)(Qe, (e=>e.mooglePost.error)))
              , da = (0,
            G.P1)(Qe, (e=>e.mooglePost.lastFailedSaveData))
              , ua = (0,
            G.P1)(Qe, (e=>e.profileInfo.data))
              , ma = (0,
            G.P1)(Qe, (e=>e.profileInfo.isLoading))
              , pa = ((0,
            G.P1)(Qe, (e=>e.profileInfo.error)),
            (0,
            G.P1)(Qe, (e=>null == e ? void 0 : e.solution)))
              , ya = (0,
            G.P1)(pa, (e=>null == e ? void 0 : e.isLoading))
              , ga = (0,
            G.P1)(pa, (e=>null == e ? void 0 : e.data))
              , ha = (0,
            G.P1)(ga, (e=>(null == e ? void 0 : e.id) || 0))
              , ba = (0,
            G.P1)(ga, (e=>(null == e ? void 0 : e.editor) || void 0))
              , ka = (0,
            G.P1)(ga, (e=>(null == e ? void 0 : e.solution) || ""))
              , fa = (0,
            G.P1)(ga, (e=>(null == e ? void 0 : e.dayOffset) || 0))
              , wa = ((0,
            G.P1)([ya, ta, ma], ((e,a,s)=>e || a || s)),
            "wordle/moogle/SET_INITIAL_STATE")
              , va = ["aahed", "aalii", "aapas", "aargh", "aarti", "abaca", "abaci", "abacs", "abaft", "abaht", "abaka", "abamp", "aband", "abash", "abask", "abaya", "abbas", "abbed", "abbes", "abcee", "abeam", "abear", "abeat", "abeer", "abele", "abeng", "abers", "abets", "abeys", "abies", "abius", "abjad", "abjud", "abler", "ables", "ablet", "ablow", "abmho", "abnet", "abohm", "aboil", "aboma", "aboon", "abord", "abore", "aborn", "abram", "abray", "abrim", "abrin", "abris", "absey", "absit", "abuna", "abune", "abura", "aburn", "abuts", "abuzz", "abyes", "abysm", "acais", "acara", "acari", "accas", "accha", "accoy", "accra", "acedy", "acene", "acerb", "acers", "aceta", "achar", "ached", "acher", "aches", "achey", "achoo", "acids", "acidy", "acies", "acing", "acini", "ackee", "acker", "acmes", "acmic", "acned", "acnes", "acock", "acoel", "acold", "acone", "acral", "acred", "acres", "acron", "acros", "acryl", "actas", "acted", "actin", "acton", "actus", "acyls", "adats", "adawn", "adaws", "adays", "adbot", "addas", "addax", "added", "adder", "addin", "addio", "addle", "addra", "adead", "adeem", "adhan", "adhoc", "adieu", "adios", "adits", "adlib", "adman", "admen", "admix", "adnex", "adobo", "adoon", "adorb", "adown", "adoze", "adrad", "adraw", "adred", "adret", "adrip", "adsum", "aduki", "adunc", "adust", "advew", "advts", "adyta", "adyts", "adzed", "adzes", "aecia", "aedes", "aeger", "aegis", "aeons", "aerie", "aeros", "aesir", "aevum", "afald", "afanc", "afara", "afars", "afear", "affly", "afion", "afizz", "aflaj", "aflap", "aflow", "afoam", "afore", "afret", "afrit", "afros", "aftos", "agals", "agama", "agami", "agamy", "agars", "agasp", "agast", "agaty", "agave", "agaze", "agbas", "agene", "agers", "aggag", "agger", "aggie", "aggri", "aggro", "aggry", "aghas", "agidi", "agila", "agios", "agism", "agist", "agita", "aglee", "aglet", "agley", "agloo", "aglus", "agmas", "agoge", "agogo", "agone", "agons", "agood", "agora", "agria", "agrin", "agros", "agrum", "agued", "agues", "aguey", "aguna", "agush", "aguti", "aheap", "ahent", "ahigh", "ahind", "ahing", "ahint", "ahold", "ahole", "ahull", "ahuru", "aidas", "aided", "aides", "aidoi", "aidos", "aiery", "aigas", "aight", "ailed", "aimag", "aimak", "aimed", "aimer", "ainee", "ainga", "aioli", "aired", "airer", "airns", "airth", "airts", "aitch", "aitus", "aiver", "aixes", "aiyah", "aiyee", "aiyoh", "aiyoo", "aizle", "ajies", "ajiva", "ajuga", "ajupa", "ajwan", "akara", "akees", "akela", "akene", "aking", "akita", "akkas", "akker", "akoia", "akoja", "akoya", "aksed", "akses", "alaap", "alack", "alala", "alamo", "aland", "alane", "alang", "alans", "alant", "alapa", "alaps", "alary", "alata", "alate", "alays", "albas", "albee", "albid", "alcea", "alces", "alcid", "alcos", "aldea", "alder", "aldol", "aleak", "aleck", "alecs", "aleem", "alefs", "aleft", "aleph", "alews", "aleye", "alfas", "algal", "algas", "algid", "algin", "algor", "algos", "algum", "alias", "alick", "alifs", "alims", "aline", "alios", "alist", "aliya", "alkie", "alkin", "alkos", "alkyd", "alkyl", "allan", "allee", "allel", "allen", "aller", "allin", "allis", "allod", "allus", "allyl", "almah", "almas", "almeh", "almes", "almud", "almug", "alods", "aloed", "aloes", "aloha", "aloin", "aloos", "alose", "alowe", "altho", "altos", "alula", "alums", "alumy", "alure", "alurk", "alvar", "alway", "amahs", "amain", "amari", "amaro", "amate", "amaut", "amban", "ambit", "ambos", "ambry", "ameba", "ameer", "amene", "amens", "ament", "amias", "amice", "amici", "amide", "amido", "amids", "amies", "amiga", "amigo", "amine", "amino", "amins", "amirs", "amlas", "amman", "ammas", "ammon", "ammos", "amnia", "amnic", "amnio", "amoks", "amole", "amore", "amort", "amour", "amove", "amowt", "amped", "ampul", "amrit", "amuck", "amyls", "anana", "anata", "ancho", "ancle", "ancon", "andic", "andro", "anear", "anele", "anent", "angas", "anglo", "anigh", "anile", "anils", "anima", "animi", "anion", "anise", "anker", "ankhs", "ankus", "anlas", "annal", "annan", "annas", "annat", "annum", "annus", "anoas", "anole", "anomy", "ansae", "ansas", "antae", "antar", "antas", "anted", "antes", "antis", "antra", "antre", "antsy", "anura", "anyon", "apace", "apage", "apaid", "apayd", "apays", "apeak", "apeek", "apers", "apert", "apery", "apgar", "aphis", "apian", "apiol", "apish", "apism", "apode", "apods", "apols", "apoop", "aport", "appal", "appam", "appay", "appel", "appro", "appts", "appui", "appuy", "apres", "apses", "apsis", "apsos", "apted", "apter", "aquae", "aquas", "araba", "araks", "arame", "arars", "arbah", "arbas", "arced", "archi", "arcos", "arcus", "ardeb", "ardri", "aread", "areae", "areal", "arear", "areas", "areca", "aredd", "arede", "arefy", "areic", "arene", "arepa", "arere", "arete", "arets", "arett", "argal", "argan", "argil", "argle", "argol", "argon", "argot", "argus", "arhat", "arias", "ariel", "ariki", "arils", "ariot", "arish", "arith", "arked", "arled", "arles", "armed", "armer", "armet", "armil", "arnas", "arnis", "arnut", "aroba", "aroha", "aroid", "arpas", "arpen", "arrah", "arras", "arret", "arris", "arroz", "arsed", "arses", "arsey", "arsis", "artal", "artel", "arter", "artic", "artis", "artly", "aruhe", "arums", "arval", "arvee", "arvos", "aryls", "asada", "asana", "ascon", "ascus", "asdic", "ashed", "ashes", "ashet", "asity", "askar", "asked", "asker", "askoi", "askos", "aspen", "asper", "aspic", "aspie", "aspis", "aspro", "assai", "assam", "assed", "asses", "assez", "assot", "aster", "astir", "astun", "asura", "asway", "aswim", "asyla", "ataps", "ataxy", "atigi", "atilt", "atimy", "atlas", "atman", "atmas", "atmos", "atocs", "atoke", "atoks", "atoms", "atomy", "atony", "atopy", "atria", "atrip", "attap", "attar", "attas", "atter", "atuas", "aucht", "audad", "audax", "augen", "auger", "auges", "aught", "aulas", "aulic", "auloi", "aulos", "aumil", "aunes", "aunts", "aurae", "aural", "aurar", "auras", "aurei", "aures", "auric", "auris", "aurum", "autos", "auxin", "avale", "avant", "avast", "avels", "avens", "avers", "avgas", "avine", "avion", "avise", "aviso", "avize", "avows", "avyze", "awari", "awarn", "awato", "awave", "aways", "awdls", "aweel", "aweto", "awing", "awkin", "awmry", "awned", "awner", "awols", "awork", "axels", "axile", "axils", "axing", "axite", "axled", "axles", "axman", "axmen", "axoid", "axone", "axons", "ayahs", "ayaya", "ayelp", "aygre", "ayins", "aymag", "ayont", "ayres", "ayrie", "azans", "azide", "azido", "azine", "azlon", "azoic", "azole", "azons", "azote", "azoth", "azuki", "azurn", "azury", "azygy", "azyme", "azyms", "baaed", "baals", "baaps", "babas", "babby", "babel", "babes", "babka", "baboo", "babul", "babus", "bacca", "bacco", "baccy", "bacha", "bachs", "backs", "backy", "bacne", "badam", "baddy", "baels", "baffs", "baffy", "bafta", "bafts", "baghs", "bagie", "bagsy", "bagua", "bahts", "bahus", "bahut", "baiks", "baile", "bails", "bairn", "baisa", "baith", "baits", "baiza", "baize", "bajan", "bajra", "bajri", "bajus", "baked", "baken", "bakes", "bakra", "balas", "balds", "baldy", "baled", "bales", "balks", "balky", "ballo", "balls", "bally", "balms", "baloi", "balon", "baloo", "balot", "balsa", "balti", "balun", "balus", "balut", "bamas", "bambi", "bamma", "bammy", "banak", "banco", "bancs", "banda", "bandh", "bands", "bandy", "baned", "banes", "bangs", "bania", "banks", "banky", "banns", "bants", "bantu", "banty", "bantz", "banya", "baons", "baozi", "bappu", "bapus", "barbe", "barbs", "barby", "barca", "barde", "bardo", "bards", "bardy", "bared", "barer", "bares", "barfi", "barfs", "barfy", "baric", "barks", "barky", "barms", "barmy", "barns", "barny", "barps", "barra", "barre", "barro", "barry", "barye", "basan", "basas", "based", "basen", "baser", "bases", "basha", "basho", "basij", "basks", "bason", "basse", "bassi", "basso", "bassy", "basta", "basti", "basto", "basts", "bated", "bates", "baths", "batik", "batos", "batta", "batts", "battu", "bauds", "bauks", "baulk", "baurs", "bavin", "bawds", "bawks", "bawls", "bawns", "bawrs", "bawty", "bayas", "bayed", "bayer", "bayes", "bayle", "bayts", "bazar", "bazas", "bazoo", "bball", "bdays", "beads", "beaks", "beaky", "beals", "beams", "beamy", "beano", "beans", "beany", "beare", "bears", "beath", "beats", "beaty", "beaus", "beaut", "beaux", "bebop", "becap", "becke", "becks", "bedad", "bedel", "bedes", "bedew", "bedim", "bedye", "beedi", "beefs", "beeps", "beers", "beery", "beets", "befog", "begad", "begar", "begem", "begob", "begot", "begum", "beige", "beigy", "beins", "beira", "beisa", "bekah", "belah", "belar", "belay", "belee", "belga", "belit", "belli", "bello", "bells", "belon", "belts", "belve", "bemad", "bemas", "bemix", "bemud", "bends", "bendy", "benes", "benet", "benga", "benis", "benji", "benne", "benni", "benny", "bento", "bents", "benty", "bepat", "beray", "beres", "bergs", "berko", "berks", "berme", "berms", "berob", "beryl", "besat", "besaw", "besee", "beses", "besit", "besom", "besot", "besti", "bests", "betas", "beted", "betes", "beths", "betid", "beton", "betta", "betty", "bevan", "bever", "bevor", "bevue", "bevvy", "bewdy", "bewet", "bewig", "bezes", "bezil", "bezzy", "bhais", "bhaji", "bhang", "bhats", "bhava", "bhels", "bhoot", "bhuna", "bhuts", "biach", "biali", "bialy", "bibbs", "bibes", "bibis", "biccy", "bices", "bicky", "bided", "bider", "bides", "bidet", "bidis", "bidon", "bidri", "bield", "biers", "biffo", "biffs", "biffy", "bifid", "bigae", "biggs", "biggy", "bigha", "bight", "bigly", "bigos", "bihon", "bijou", "biked", "biker", "bikes", "bikie", "bikky", "bilal", "bilat", "bilbo", "bilby", "biled", "biles", "bilgy", "bilks", "bills", "bimah", "bimas", "bimbo", "binal", "bindi", "binds", "biner", "bines", "bings", "bingy", "binit", "binks", "binky", "bints", "biogs", "bions", "biont", "biose", "biota", "biped", "bipod", "bippy", "birdo", "birds", "biris", "birks", "birle", "birls", "biros", "birrs", "birse", "birsy", "birze", "birzz", "bises", "bisks", "bisom", "bitch", "biter", "bites", "bitey", "bitos", "bitou", "bitsy", "bitte", "bitts", "bivia", "bivvy", "bizes", "bizzo", "bizzy", "blabs", "blads", "blady", "blaer", "blaes", "blaff", "blags", "blahs", "blain", "blams", "blanc", "blart", "blase", "blash", "blate", "blats", "blatt", "blaud", "blawn", "blaws", "blays", "bleah", "blear", "blebs", "blech", "blees", "blent", "blert", "blest", "blets", "bleys", "blimy", "bling", "blini", "blins", "bliny", "blips", "blist", "blite", "blits", "blive", "blobs", "blocs", "blogs", "blonx", "blook", "bloop", "blore", "blots", "blows", "blowy", "blubs", "blude", "bluds", "bludy", "blued", "blues", "bluet", "bluey", "bluid", "blume", "blunk", "blurs", "blype", "boabs", "boaks", "boars", "boart", "boats", "boaty", "bobac", "bobak", "bobas", "bobol", "bobos", "bocca", "bocce", "bocci", "boche", "bocks", "boded", "bodes", "bodge", "bodgy", "bodhi", "bodle", "bodoh", "boeps", "boers", "boeti", "boets", "boeuf", "boffo", "boffs", "bogan", "bogey", "boggy", "bogie", "bogle", "bogue", "bogus", "bohea", "bohos", "boils", "boing", "boink", "boite", "boked", "bokeh", "bokes", "bokos", "bolar", "bolas", "boldo", "bolds", "boles", "bolet", "bolix", "bolks", "bolls", "bolos", "bolts", "bolus", "bomas", "bombe", "bombo", "bombs", "bomoh", "bomor", "bonce", "bonds", "boned", "boner", "bones", "bongs", "bonie", "bonks", "bonne", "bonny", "bonum", "bonza", "bonze", "booai", "booay", "boobs", "boody", "booed", "boofy", "boogy", "boohs", "books", "booky", "bools", "booms", "boomy", "boong", "boons", "boord", "boors", "boose", "boots", "boppy", "borak", "boral", "boras", "borde", "bords", "bored", "boree", "borek", "borel", "borer", "bores", "borgo", "boric", "borks", "borms", "borna", "boron", "borts", "borty", "bortz", "bosey", "bosie", "bosks", "bosky", "boson", "bossa", "bosun", "botas", "boteh", "botel", "botes", "botew", "bothy", "botos", "botte", "botts", "botty", "bouge", "bouks", "boult", "bouns", "bourd", "bourg", "bourn", "bouse", "bousy", "bouts", "boutu", "bovid", "bowat", "bowed", "bower", "bowes", "bowet", "bowie", "bowls", "bowne", "bowrs", "bowse", "boxed", "boxen", "boxes", "boxla", "boxty", "boyar", "boyau", "boyed", "boyey", "boyfs", "boygs", "boyla", "boyly", "boyos", "boysy", "bozos", "braai", "brach", "brack", "bract", "brads", "braes", "brags", "brahs", "brail", "braks", "braky", "brame", "brane", "brank", "brans", "brant", "brast", "brats", "brava", "bravi", "braws", "braxy", "brays", "braza", "braze", "bream", "brede", "breds", "breem", "breer", "brees", "breid", "breis", "breme", "brens", "brent", "brere", "brers", "breve", "brews", "breys", "brier", "bries", "brigs", "briki", "briks", "brill", "brims", "brins", "brios", "brise", "briss", "brith", "brits", "britt", "brize", "broch", "brock", "brods", "brogh", "brogs", "brome", "bromo", "bronc", "brond", "brool", "broos", "brose", "brosy", "brows", "bruck", "brugh", "bruhs", "bruin", "bruit", "bruja", "brujo", "brule", "brume", "brung", "brusk", "brust", "bruts", "bruvs", "buats", "buaze", "bubal", "bubas", "bubba", "bubbe", "bubby", "bubus", "buchu", "bucko", "bucks", "bucku", "budas", "buded", "budes", "budis", "budos", "buena", "buffa", "buffe", "buffi", "buffo", "buffs", "buffy", "bufos", "bufty", "bugan", "buhls", "buhrs", "buiks", "buist", "bukes", "bukos", "bulbs", "bulgy", "bulks", "bulla", "bulls", "bulse", "bumbo", "bumfs", "bumph", "bumps", "bumpy", "bunas", "bunce", "bunco", "bunde", "bundh", "bunds", "bundt", "bundu", "bundy", "bungs", "bungy", "bunia", "bunje", "bunjy", "bunko", "bunks", "bunns", "bunts", "bunty", "bunya", "buoys", "buppy", "buran", "buras", "burbs", "burds", "buret", "burfi", "burgh", "burgs", "burin", "burka", "burke", "burks", "burls", "burns", "buroo", "burps", "burqa", "burra", "burro", "burrs", "burry", "bursa", "burse", "busby", "buses", "busks", "busky", "bussu", "busti", "busts", "busty", "buteo", "butes", "butle", "butoh", "butts", "butty", "butut", "butyl", "buyin", "buzzy", "bwana", "bwazi", "byded", "bydes", "byked", "bykes", "byres", "byrls", "byssi", "bytes", "byway", "caaed", "cabas", "caber", "cabob", "caboc", "cabre", "cacas", "cacks", "cacky", "cadee", "cades", "cadge", "cadgy", "cadie", "cadis", "cadre", "caeca", "caese", "cafes", "caffe", "caffs", "caged", "cager", "cages", "cagot", "cahow", "caids", "cains", "caird", "cajon", "cajun", "caked", "cakes", "cakey", "calfs", "calid", "calif", "calix", "calks", "calla", "calle", "calls", "calms", "calmy", "calos", "calpa", "calps", "calve", "calyx", "caman", "camas", "cames", "camis", "camos", "campi", "campo", "camps", "campy", "camus", "cando", "caned", "caneh", "caner", "canes", "cangs", "canid", "canna", "canns", "canso", "canst", "canti", "canto", "cants", "canty", "capas", "capax", "caped", "capes", "capex", "caphs", "capiz", "caple", "capon", "capos", "capot", "capri", "capul", "carap", "carbo", "carbs", "carby", "cardi", "cards", "cardy", "cared", "carer", "cares", "caret", "carex", "carks", "carle", "carls", "carne", "carns", "carny", "carob", "carom", "caron", "carpe", "carpi", "carps", "carrs", "carse", "carta", "carte", "carts", "carvy", "casas", "casco", "cased", "caser", "cases", "casks", "casky", "casts", "casus", "cates", "cauda", "cauks", "cauld", "cauls", "caums", "caups", "cauri", "causa", "cavas", "caved", "cavel", "caver", "caves", "cavie", "cavus", "cawed", "cawks", "caxon", "ceaze", "cebid", "cecal", "cecum", "ceded", "ceder", "cedes", "cedis", "ceiba", "ceili", "ceils", "celeb", "cella", "celli", "cells", "celly", "celom", "celts", "cense", "cento", "cents", "centu", "ceorl", "cepes", "cerci", "cered", "ceres", "cerge", "ceria", "ceric", "cerne", "ceroc", "ceros", "certs", "certy", "cesse", "cesta", "cesti", "cetes", "cetyl", "cezve", "chaap", "chaat", "chace", "chack", "chaco", "chado", "chads", "chaft", "chais", "chals", "chams", "chana", "chang", "chank", "chape", "chaps", "chapt", "chara", "chare", "chark", "charr", "chars", "chary", "chats", "chava", "chave", "chavs", "chawk", "chawl", "chaws", "chaya", "chays", "cheba", "chedi", "cheeb", "cheep", "cheet", "chefs", "cheka", "chela", "chelp", "chemo", "chems", "chere", "chert", "cheth", "chevy", "chews", "chewy", "chiao", "chias", "chiba", "chibs", "chica", "chich", "chico", "chics", "chiel", "chiko", "chiks", "chile", "chimb", "chimo", "chimp", "chine", "ching", "chink", "chino", "chins", "chips", "chirk", "chirl", "chirm", "chiro", "chirr", "chirt", "chiru", "chiti", "chits", "chiva", "chive", "chivs", "chivy", "chizz", "choco", "chocs", "chode", "chogs", "choil", "choko", "choky", "chola", "choli", "cholo", "chomp", "chons", "choof", "chook", "choom", "choon", "chops", "choss", "chota", "chott", "chout", "choux", "chowk", "chows", "chubs", "chufa", "chuff", "chugs", "chums", "churl", "churr", "chuse", "chuts", "chyle", "chyme", "chynd", "cibol", "cided", "cides", "ciels", "ciggy", "cilia", "cills", "cimar", "cimex", "cinct", "cines", "cinqs", "cions", "cippi", "circs", "cires", "cirls", "cirri", "cisco", "cissy", "cists", "cital", "cited", "citee", "citer", "cites", "cives", "civet", "civie", "civvy", "clach", "clade", "clads", "claes", "clags", "clair", "clame", "clams", "clans", "claps", "clapt", "claro", "clart", "clary", "clast", "clats", "claut", "clave", "clavi", "claws", "clays", "cleck", "cleek", "cleep", "clefs", "clegs", "cleik", "clems", "clepe", "clept", "cleve", "clews", "clied", "clies", "clift", "clime", "cline", "clint", "clipe", "clips", "clipt", "clits", "cloam", "clods", "cloff", "clogs", "cloke", "clomb", "clomp", "clonk", "clons", "cloop", "cloot", "clops", "clote", "clots", "clour", "clous", "clows", "cloye", "cloys", "cloze", "clubs", "clues", "cluey", "clunk", "clype", "cnida", "coact", "coady", "coala", "coals", "coaly", "coapt", "coarb", "coate", "coati", "coats", "cobbs", "cobby", "cobia", "coble", "cobot", "cobza", "cocas", "cocci", "cocco", "cocks", "cocky", "cocos", "cocus", "codas", "codec", "coded", "coden", "coder", "codes", "codex", "codon", "coeds", "coffs", "cogie", "cogon", "cogue", "cohab", "cohen", "cohoe", "cohog", "cohos", "coifs", "coign", "coils", "coins", "coirs", "coits", "coked", "cokes", "cokey", "colas", "colby", "colds", "coled", "coles", "coley", "colic", "colin", "colle", "colls", "colly", "colog", "colts", "colza", "comae", "comal", "comas", "combe", "combi", "combo", "combs", "comby", "comer", "comes", "comix", "comme", "commo", "comms", "commy", "compo", "comps", "compt", "comte", "comus", "coned", "cones", "conex", "coney", "confs", "conga", "conge", "congo", "conia", "conin", "conks", "conky", "conne", "conns", "conte", "conto", "conus", "convo", "cooch", "cooed", "cooee", "cooer", "cooey", "coofs", "cooks", "cooky", "cools", "cooly", "coomb", "cooms", "coomy", "coons", "coops", "coopt", "coost", "coots", "cooty", "cooze", "copal", "copay", "coped", "copen", "coper", "copes", "copha", "coppy", "copra", "copsy", "coqui", "coram", "corbe", "corby", "corda", "cords", "cored", "cores", "corey", "corgi", "coria", "corks", "corky", "corms", "corni", "corno", "corns", "cornu", "corps", "corse", "corso", "cosec", "cosed", "coses", "coset", "cosey", "cosie", "costa", "coste", "costs", "cotan", "cotch", "coted", "cotes", "coths", "cotta", "cotts", "coude", "coups", "courb", "courd", "coure", "cours", "couta", "couth", "coved", "coves", "covin", "cowal", "cowan", "cowed", "cowks", "cowls", "cowps", "cowry", "coxae", "coxal", "coxed", "coxes", "coxib", "coyau", "coyed", "coyer", "coypu", "cozed", "cozen", "cozes", "cozey", "cozie", "craal", "crabs", "crags", "craic", "craig", "crake", "crame", "crams", "crans", "crape", "craps", "crapy", "crare", "craws", "crays", "creds", "creel", "crees", "crein", "crema", "crems", "crena", "creps", "crepy", "crewe", "crews", "crias", "cribo", "cribs", "cries", "crims", "crine", "crink", "crins", "crios", "cripe", "crips", "crise", "criss", "crith", "crits", "croci", "crocs", "croft", "crogs", "cromb", "crome", "cronk", "crons", "crool", "croon", "crops", "crore", "crost", "crout", "crowl", "crows", "croze", "cruck", "crudo", "cruds", "crudy", "crues", "cruet", "cruft", "crunk", "cruor", "crura", "cruse", "crusy", "cruve", "crwth", "cryer", "cryne", "ctene", "cubby", "cubeb", "cubed", "cuber", "cubes", "cubit", "cucks", "cudda", "cuddy", "cueca", "cuffo", "cuffs", "cuifs", "cuing", "cuish", "cuits", "cukes", "culch", "culet", "culex", "culls", "cully", "culms", "culpa", "culti", "cults", "culty", "cumec", "cundy", "cunei", "cunit", "cunny", "cunts", "cupel", "cupid", "cuppa", "cuppy", "cupro", "curat", "curbs", "curch", "curds", "curdy", "cured", "curer", "cures", "curet", "curfs", "curia", "curie", "curli", "curls", "curns", "curny", "currs", "cursi", "curst", "cusec", "cushy", "cusks", "cusps", "cuspy", "cusso", "cusum", "cutch", "cuter", "cutes", "cutey", "cutin", "cutis", "cutto", "cutty", "cutup", "cuvee", "cuzes", "cwtch", "cyano", "cyans", "cycad", "cycas", "cyclo", "cyder", "cylix", "cymae", "cymar", "cymas", "cymes", "cymol", "cysts", "cytes", "cyton", "czars", "daals", "dabba", "daces", "dacha", "dacks", "dadah", "dadas", "dadis", "dadla", "dados", "daffs", "daffy", "dagga", "daggy", "dagos", "dahis", "dahls", "daiko", "daine", "daint", "daker", "daled", "dalek", "dales", "dalis", "dalle", "dalts", "daman", "damar", "dames", "damme", "damna", "damns", "damps", "dampy", "dancy", "danda", "dangs", "danio", "danks", "danny", "danse", "dants", "dappy", "daraf", "darbs", "darcy", "dared", "darer", "dares", "darga", "dargs", "daric", "daris", "darks", "darky", "darls", "darns", "darre", "darts", "darzi", "dashi", "dashy", "datal", "dated", "dater", "dates", "datil", "datos", "datto", "daube", "daubs", "dauby", "dauds", "dault", "daurs", "dauts", "daven", "davit", "dawah", "dawds", "dawed", "dawen", "dawgs", "dawks", "dawns", "dawts", "dayal", "dayan", "daych", "daynt", "dazed", "dazer", "dazes", "dbags", "deads", "deair", "deals", "deans", "deare", "dearn", "dears", "deary", "deash", "deave", "deaws", "deawy", "debag", "debby", "debel", "debes", "debts", "debud", "debur", "debus", "debye", "decad", "decaf", "decan", "decim", "decko", "decks", "decos", "decyl", "dedal", "deeds", "deedy", "deely", "deems", "deens", "deeps", "deere", "deers", "deets", "deeve", "deevs", "defat", "deffo", "defis", "defog", "degas", "degum", "degus", "deice", "deids", "deify", "deils", "deink", "deism", "deist", "deked", "dekes", "dekko", "deled", "deles", "delfs", "delft", "delis", "della", "dells", "delly", "delos", "delph", "delts", "deman", "demes", "demic", "demit", "demob", "demoi", "demos", "demot", "dempt", "denar", "denay", "dench", "denes", "denet", "denis", "dente", "dents", "deoch", "deoxy", "derat", "deray", "dered", "deres", "derig", "derma", "derms", "derns", "derny", "deros", "derpy", "derro", "derry", "derth", "dervs", "desex", "deshi", "desis", "desks", "desse", "detag", "devas", "devel", "devis", "devon", "devos", "devot", "dewan", "dewar", "dewax", "dewed", "dexes", "dexie", "dexys", "dhaba", "dhaks", "dhals", "dhikr", "dhobi", "dhole", "dholl", "dhols", "dhoni", "dhoti", "dhows", "dhuti", "diact", "dials", "diana", "diane", "diazo", "dibbs", "diced", "dicer", "dices", "dicht", "dicks", "dicky", "dicot", "dicta", "dicto", "dicts", "dictu", "dicty", "diddy", "didie", "didis", "didos", "didst", "diebs", "diels", "diene", "diets", "diffs", "dight", "dikas", "diked", "diker", "dikes", "dikey", "dildo", "dilli", "dills", "dimbo", "dimer", "dimes", "dimps", "dinar", "dined", "dines", "dinge", "dings", "dinic", "dinks", "dinky", "dinlo", "dinna", "dinos", "dints", "dioch", "diols", "diota", "dippy", "dipso", "diram", "direr", "dirke", "dirks", "dirls", "dirts", "disas", "disci", "discs", "dishy", "disks", "disme", "dital", "ditas", "dited", "dites", "ditsy", "ditts", "ditzy", "divan", "divas", "dived", "dives", "divey", "divis", "divna", "divos", "divot", "divvy", "diwan", "dixie", "dixit", "diyas", "dizen", "djinn", "djins", "doabs", "doats", "dobby", "dobes", "dobie", "dobla", "doble", "dobra", "dobro", "docht", "docks", "docos", "docus", "doddy", "dodos", "doeks", "doers", "doest", "doeth", "doffs", "dogal", "dogan", "doges", "dogey", "doggo", "doggy", "dogie", "dogly", "dohyo", "doilt", "doily", "doits", "dojos", "dolce", "dolci", "doled", "dolee", "doles", "doley", "dolia", "dolie", "dolls", "dolma", "dolor", "dolos", "dolts", "domal", "domed", "domes", "domic", "donah", "donas", "donee", "doner", "donga", "dongs", "donko", "donna", "donne", "donny", "donsy", "doobs", "dooce", "doody", "doofs", "dooks", "dooky", "doole", "dools", "dooly", "dooms", "doomy", "doona", "doorn", "doors", "doozy", "dopas", "doped", "doper", "dopes", "doppe", "dorad", "dorba", "dorbs", "doree", "dores", "doric", "doris", "dorje", "dorks", "dorky", "dorms", "dormy", "dorps", "dorrs", "dorsa", "dorse", "dorts", "dorty", "dosai", "dosas", "dosed", "doseh", "doser", "doses", "dosha", "dotal", "doted", "doter", "dotes", "dotty", "douar", "douce", "doucs", "douks", "doula", "douma", "doums", "doups", "doura", "douse", "douts", "doved", "doven", "dover", "doves", "dovie", "dowak", "dowar", "dowds", "dowed", "dower", "dowfs", "dowie", "dowle", "dowls", "dowly", "downa", "downs", "dowps", "dowse", "dowts", "doxed", "doxes", "doxie", "doyen", "doyly", "dozed", "dozer", "dozes", "drabs", "drack", "draco", "draff", "drags", "drail", "drams", "drant", "draps", "drapy", "drats", "drave", "draws", "drays", "drear", "dreck", "dreed", "dreer", "drees", "dregs", "dreks", "drent", "drere", "drest", "dreys", "dribs", "drice", "dries", "drily", "drips", "dript", "drock", "droid", "droil", "droke", "drole", "drome", "drony", "droob", "droog", "drook", "drops", "dropt", "drouk", "drows", "drubs", "drugs", "drums", "drupe", "druse", "drusy", "druxy", "dryad", "dryas", "dsobo", "dsomo", "duads", "duals", "duans", "duars", "dubbo", "dubby", "ducal", "ducat", "duces", "ducks", "ducky", "ducti", "ducts", "duddy", "duded", "dudes", "duels", "duets", "duett", "duffs", "dufus", "duing", "duits", "dukas", "duked", "dukes", "dukka", "dukun", "dulce", "dules", "dulia", "dulls", "dulse", "dumas", "dumbo", "dumbs", "dumka", "dumky", "dumps", "dunam", "dunch", "dunes", "dungs", "dungy", "dunks", "dunno", "dunny", "dunsh", "dunts", "duomi", "duomo", "duped", "duper", "dupes", "duple", "duply", "duppy", "dural", "duras", "dured", "dures", "durgy", "durns", "duroc", "duros", "duroy", "durra", "durrs", "durry", "durst", "durum", "durzi", "dusks", "dusts", "duxes", "dwaal", "dwale", "dwalm", "dwams", "dwamy", "dwang", "dwaum", "dweeb", "dwile", "dwine", "dyads", "dyers", "dyked", "dykes", "dykey", "dykon", "dynel", "dynes", "dynos", "dzhos", "eagly", "eagre", "ealed", "eales", "eaned", "eards", "eared", "earls", "earns", "earnt", "earst", "eased", "easer", "eases", "easle", "easts", "eathe", "eatin", "eaved", "eaver", "eaves", "ebank", "ebbed", "ebbet", "ebena", "ebene", "ebike", "ebons", "ebook", "ecads", "ecard", "ecash", "eched", "eches", "echos", "ecigs", "ecole", "ecrus", "edema", "edged", "edger", "edges", "edile", "edits", "educe", "educt", "eejit", "eensy", "eeven", "eever", "eevns", "effed", "effer", "efits", "egads", "egers", "egest", "eggar", "egged", "egger", "egmas", "ehing", "eider", "eidos", "eigne", "eiked", "eikon", "eilds", "eiron", "eisel", "ejido", "ekdam", "ekkas", "elain", "eland", "elans", "elchi", "eldin", "eleet", "elemi", "elfed", "eliad", "elint", "elmen", "eloge", "elogy", "eloin", "elops", "elpee", "elsin", "elute", "elvan", "elven", "elver", "elves", "emacs", "embar", "embay", "embog", "embow", "embox", "embus", "emeer", "emend", "emerg", "emery", "emeus", "emics", "emirs", "emits", "emmas", "emmer", "emmet", "emmew", "emmys", "emoji", "emong", "emote", "emove", "empts", "emule", "emure", "emyde", "emyds", "enarm", "enate", "ended", "ender", "endew", "endue", "enews", "enfix", "eniac", "enlit", "enmew", "ennog", "enoki", "enols", "enorm", "enows", "enrol", "ensew", "ensky", "entia", "entre", "enure", "enurn", "envoi", "enzym", "eolid", "eorls", "eosin", "epact", "epees", "epena", "epene", "ephah", "ephas", "ephod", "ephor", "epics", "epode", "epopt", "eppie", "epris", "eques", "equid", "erbia", "erevs", "ergon", "ergos", "ergot", "erhus", "erica", "erick", "erics", "ering", "erned", "ernes", "erose", "erred", "erses", "eruct", "erugo", "eruvs", "erven", "ervil", "escar", "escot", "esile", "eskar", "esker", "esnes", "esrog", "esses", "estoc", "estop", "estro", "etage", "etape", "etats", "etens", "ethal", "ethne", "ethyl", "etics", "etnas", "etrog", "ettin", "ettle", "etuis", "etwee", "etyma", "eughs", "euked", "eupad", "euros", "eusol", "evegs", "evens", "evert", "evets", "evhoe", "evils", "evite", "evohe", "ewers", "ewest", "ewhow", "ewked", "exams", "exeat", "execs", "exeem", "exeme", "exfil", "exier", "exies", "exine", "exing", "exite", "exits", "exode", "exome", "exons", "expat", "expos", "exude", "exuls", "exurb", "eyass", "eyers", "eyots", "eyras", "eyres", "eyrie", "eyrir", "ezine", "fabbo", "fabby", "faced", "facer", "faces", "facey", "facia", "facie", "facta", "facto", "facts", "facty", "faddy", "faded", "fader", "fades", "fadge", "fados", "faena", "faery", "faffs", "faffy", "faggy", "fagin", "fagot", "faiks", "fails", "faine", "fains", "faire", "fairs", "faked", "faker", "fakes", "fakey", "fakie", "fakir", "falaj", "fales", "falls", "falsy", "famed", "fames", "fanal", "fands", "fanes", "fanga", "fango", "fangs", "fanks", "fanon", "fanos", "fanum", "faqir", "farad", "farci", "farcy", "fards", "fared", "farer", "fares", "farle", "farls", "farms", "faros", "farro", "farse", "farts", "fasci", "fasti", "fasts", "fated", "fates", "fatly", "fatso", "fatwa", "fauch", "faugh", "fauld", "fauns", "faurd", "faute", "fauts", "fauve", "favas", "favel", "faver", "faves", "favus", "fawns", "fawny", "faxed", "faxes", "fayed", "fayer", "fayne", "fayre", "fazed", "fazes", "feals", "feard", "feare", "fears", "feart", "fease", "feats", "feaze", "feces", "fecht", "fecit", "fecks", "fedai", "fedex", "feebs", "feeds", "feels", "feely", "feens", "feers", "feese", "feeze", "fehme", "feint", "feist", "felch", "felid", "felix", "fells", "felly", "felts", "felty", "femal", "femes", "femic", "femmy", "fends", "fendy", "fenis", "fenks", "fenny", "fents", "feods", "feoff", "ferer", "feres", "feria", "ferly", "fermi", "ferms", "ferns", "ferny", "ferox", "fesse", "festa", "fests", "festy", "fetas", "feted", "fetes", "fetor", "fetta", "fetts", "fetwa", "feuar", "feuds", "feued", "feyed", "feyer", "feyly", "fezes", "fezzy", "fiars", "fiats", "fibre", "fibro", "fices", "fiche", "fichu", "ficin", "ficos", "ficta", "fides", "fidge", "fidos", "fidus", "fiefs", "fient", "fiere", "fieri", "fiers", "fiest", "fifed", "fifer", "fifes", "fifis", "figgy", "figos", "fiked", "fikes", "filar", "filch", "filed", "files", "filii", "filks", "fille", "fillo", "fills", "filmi", "films", "filon", "filos", "filum", "finca", "finds", "fined", "fines", "finis", "finks", "finny", "finos", "fiord", "fiqhs", "fique", "fired", "firer", "fires", "firie", "firks", "firma", "firms", "firni", "firns", "firry", "firth", "fiscs", "fisho", "fisks", "fists", "fisty", "fitch", "fitly", "fitna", "fitte", "fitts", "fiver", "fives", "fixed", "fixes", "fixie", "fixit", "fjeld", "flabs", "flaff", "flags", "flaks", "flamm", "flams", "flamy", "flane", "flans", "flaps", "flary", "flats", "flava", "flawn", "flaws", "flawy", "flaxy", "flays", "fleam", "fleas", "fleek", "fleer", "flees", "flegs", "fleme", "fleur", "flews", "flexi", "flexo", "fleys", "flics", "flied", "flies", "flimp", "flims", "flips", "flirs", "flisk", "flite", "flits", "flitt", "flobs", "flocs", "floes", "flogs", "flong", "flops", "flore", "flors", "flory", "flosh", "flota", "flote", "flows", "flowy", "flubs", "flued", "flues", "fluey", "fluky", "flump", "fluor", "flurr", "fluty", "fluyt", "flyby", "flyin", "flype", "flyte", "fnarr", "foals", "foams", "foehn", "fogey", "fogie", "fogle", "fogos", "fogou", "fohns", "foids", "foils", "foins", "folds", "foley", "folia", "folic", "folie", "folks", "folky", "fomes", "fonda", "fonds", "fondu", "fones", "fonio", "fonly", "fonts", "foods", "foody", "fools", "foots", "footy", "foram", "forbs", "forby", "fordo", "fords", "forel", "fores", "forex", "forks", "forky", "forma", "forme", "forms", "forts", "forza", "forze", "fossa", "fosse", "fouat", "fouds", "fouer", "fouet", "foule", "fouls", "fount", "fours", "fouth", "fovea", "fowls", "fowth", "foxed", "foxes", "foxie", "foyle", "foyne", "frabs", "frack", "fract", "frags", "fraim", "frais", "franc", "frape", "fraps", "frass", "frate", "frati", "frats", "fraus", "frays", "frees", "freet", "freit", "fremd", "frena", "freon", "frere", "frets", "fribs", "frier", "fries", "frigs", "frise", "frist", "frita", "frite", "frith", "frits", "fritt", "frize", "frizz", "froes", "frogs", "fromm", "frons", "froom", "frore", "frorn", "frory", "frosh", "frows", "frowy", "froyo", "frugs", "frump", "frush", "frust", "fryer", "fubar", "fubby", "fubsy", "fucks", "fucus", "fuddy", "fudgy", "fuels", "fuero", "fuffs", "fuffy", "fugal", "fuggy", "fugie", "fugio", "fugis", "fugle", "fugly", "fugus", "fujis", "fulla", "fulls", "fulth", "fulwa", "fumed", "fumer", "fumes", "fumet", "funda", "fundi", "fundo", "funds", "fundy", "fungo", "fungs", "funic", "funis", "funks", "funsy", "funts", "fural", "furan", "furca", "furls", "furol", "furos", "furrs", "furth", "furze", "furzy", "fused", "fusee", "fusel", "fuses", "fusil", "fusks", "fusts", "fusty", "futon", "fuzed", "fuzee", "fuzes", "fuzil", "fyces", "fyked", "fykes", "fyles", "fyrds", "fytte", "gabba", "gabby", "gable", "gaddi", "gades", "gadge", "gadgy", "gadid", "gadis", "gadje", "gadjo", "gadso", "gaffs", "gaged", "gager", "gages", "gaids", "gains", "gairs", "gaita", "gaits", "gaitt", "gajos", "galah", "galas", "galax", "galea", "galed", "gales", "galia", "galis", "galls", "gally", "galop", "galut", "galvo", "gamas", "gamay", "gamba", "gambe", "gambo", "gambs", "gamed", "games", "gamey", "gamic", "gamin", "gamme", "gammy", "gamps", "ganch", "gandy", "ganef", "ganev", "gangs", "ganja", "ganks", "ganof", "gants", "gaols", "gaped", "gaper", "gapes", "gapos", "gappy", "garam", "garba", "garbe", "garbo", "garbs", "garda", "garde", "gares", "garis", "garms", "garni", "garre", "garri", "garth", "garum", "gases", "gashy", "gasps", "gaspy", "gasts", "gatch", "gated", "gater", "gates", "gaths", "gator", "gauch", "gaucy", "gauds", "gauje", "gault", "gaums", "gaumy", "gaups", "gaurs", "gauss", "gauzy", "gavot", "gawcy", "gawds", "gawks", "gawps", "gawsy", "gayal", "gazal", "gazar", "gazed", "gazes", "gazon", "gazoo", "geals", "geans", "geare", "gears", "geasa", "geats", "gebur", "gecks", "geeks", "geeps", "geest", "geist", "geits", "gelds", "gelee", "gelid", "gelly", "gelts", "gemel", "gemma", "gemmy", "gemot", "genae", "genal", "genas", "genes", "genet", "genic", "genii", "genin", "genio", "genip", "genny", "genoa", "genom", "genro", "gents", "genty", "genua", "genus", "geode", "geoid", "gerah", "gerbe", "geres", "gerle", "germs", "germy", "gerne", "gesse", "gesso", "geste", "gests", "getas", "getup", "geums", "geyan", "geyer", "ghast", "ghats", "ghaut", "ghazi", "ghees", "ghest", "ghusl", "ghyll", "gibed", "gibel", "giber", "gibes", "gibli", "gibus", "gifts", "gigas", "gighe", "gigot", "gigue", "gilas", "gilds", "gilet", "gilia", "gills", "gilly", "gilpy", "gilts", "gimel", "gimme", "gimps", "gimpy", "ginch", "ginga", "ginge", "gings", "ginks", "ginny", "ginzo", "gipon", "gippo", "gippy", "girds", "girlf", "girls", "girns", "giron", "giros", "girrs", "girsh", "girts", "gismo", "gisms", "gists", "gitch", "gites", "giust", "gived", "gives", "gizmo", "glace", "glads", "glady", "glaik", "glair", "glamp", "glams", "glans", "glary", "glatt", "glaum", "glaur", "glazy", "gleba", "glebe", "gleby", "glede", "gleds", "gleed", "gleek", "glees", "gleet", "gleis", "glens", "glent", "gleys", "glial", "glias", "glibs", "gliff", "glift", "glike", "glime", "glims", "glisk", "glits", "glitz", "gloam", "globi", "globs", "globy", "glode", "glogg", "gloms", "gloop", "glops", "glost", "glout", "glows", "glowy", "gloze", "glued", "gluer", "glues", "gluey", "glugg", "glugs", "glume", "glums", "gluon", "glute", "gluts", "gnapi", "gnarl", "gnarr", "gnars", "gnats", "gnawn", "gnaws", "gnows", "goads", "goafs", "goaft", "goals", "goary", "goats", "goaty", "goave", "goban", "gobar", "gobbe", "gobbi", "gobbo", "gobby", "gobis", "gobos", "godet", "godso", "goels", "goers", "goest", "goeth", "goety", "gofer", "goffs", "gogga", "gogos", "goier", "gojis", "gokes", "golds", "goldy", "goles", "golfs", "golpe", "golps", "gombo", "gomer", "gompa", "gonch", "gonef", "gongs", "gonia", "gonif", "gonks", "gonna", "gonof", "gonys", "gonzo", "gooby", "goodo", "goods", "goofs", "googs", "gooks", "gooky", "goold", "gools", "gooly", "goomy", "goons", "goony", "goops", "goopy", "goors", "goory", "goosy", "gopak", "gopik", "goral", "goras", "goray", "gorbs", "gordo", "gored", "gores", "goris", "gorms", "gormy", "gorps", "gorse", "gorsy", "gosht", "gosse", "gotch", "goths", "gothy", "gotta", "gouch", "gouks", "goura", "gouts", "gouty", "goved", "goves", "gowan", "gowds", "gowfs", "gowks", "gowls", "gowns", "goxes", "goyim", "goyle", "graal", "grabs", "grads", "graff", "graip", "grama", "grame", "gramp", "grams", "grana", "grano", "grans", "grapy", "grata", "grats", "gravs", "grays", "grebe", "grebo", "grece", "greek", "grees", "grege", "grego", "grein", "grens", "greps", "grese", "greve", "grews", "greys", "grice", "gride", "grids", "griff", "grift", "grigs", "grike", "grins", "griot", "grips", "gript", "gripy", "grise", "grist", "grisy", "grith", "grits", "grize", "groat", "grody", "grogs", "groks", "groma", "groms", "grone", "groof", "grosz", "grots", "grouf", "grovy", "grows", "grrls", "grrrl", "grubs", "grued", "grues", "grufe", "grume", "grump", "grund", "gryce", "gryde", "gryke", "grype", "grypt", "guaco", "guana", "guano", "guans", "guars", "gubba", "gucks", "gucky", "gudes", "guffs", "gugas", "guggl", "guido", "guids", "guimp", "guiro", "gulab", "gulag", "gular", "gulas", "gules", "gulet", "gulfs", "gulfy", "gulls", "gulph", "gulps", "gulpy", "gumma", "gummi", "gumps", "gunas", "gundi", "gundy", "gunge", "gungy", "gunks", "gunky", "gunny", "guqin", "gurdy", "gurge", "gurks", "gurls", "gurly", "gurns", "gurry", "gursh", "gurus", "gushy", "gusla", "gusle", "gusli", "gussy", "gusts", "gutsy", "gutta", "gutty", "guyed", "guyle", "guyot", "guyse", "gwine", "gyals", "gyans", "gybed", "gybes", "gyeld", "gymps", "gynae", "gynie", "gynny", "gynos", "gyoza", "gypes", "gypos", "gyppo", "gyppy", "gyral", "gyred", "gyres", "gyron", "gyros", "gyrus", "gytes", "gyved", "gyver", "gyves", "haafs", "haars", "haats", "hable", "habus", "hacek", "hacks", "hacky", "hadal", "haded", "hades", "hadji", "hadst", "haems", "haere", "haets", "haffs", "hafiz", "hafta", "hafts", "haggs", "haham", "hahas", "haick", "haika", "haiks", "haiku", "hails", "haily", "hains", "haint", "hairs", "haith", "hajes", "hajis", "hajji", "hakam", "hakas", "hakea", "hakes", "hakim", "hakus", "halal", "haldi", "haled", "haler", "hales", "halfa", "halfs", "halid", "hallo", "halls", "halma", "halms", "halon", "halos", "halse", "halsh", "halts", "halva", "halwa", "hamal", "hamba", "hamed", "hamel", "hames", "hammy", "hamza", "hanap", "hance", "hanch", "handi", "hands", "hangi", "hangs", "hanks", "hanky", "hansa", "hanse", "hants", "haole", "haoma", "hapas", "hapax", "haply", "happi", "hapus", "haram", "hards", "hared", "hares", "harim", "harks", "harls", "harms", "harns", "haros", "harps", "harts", "hashy", "hasks", "hasps", "hasta", "hated", "hates", "hatha", "hathi", "hatty", "hauds", "haufs", "haugh", "haugo", "hauld", "haulm", "hauls", "hault", "hauns", "hause", "havan", "havel", "haver", "haves", "hawed", "hawks", "hawms", "hawse", "hayed", "hayer", "hayey", "hayle", "hazan", "hazed", "hazer", "hazes", "hazle", "heads", "heald", "heals", "heame", "heaps", "heapy", "heare", "hears", "heast", "heats", "heaty", "heben", "hebes", "hecht", "hecks", "heder", "hedgy", "heeds", "heedy", "heels", "heeze", "hefte", "hefts", "heiau", "heids", "heigh", "heils", "heirs", "hejab", "hejra", "heled", "heles", "helio", "hella", "hells", "helly", "helms", "helos", "helot", "helps", "helve", "hemal", "hemes", "hemic", "hemin", "hemps", "hempy", "hench", "hends", "henge", "henna", "henny", "henry", "hents", "hepar", "herbs", "herby", "herds", "heres", "herls", "herma", "herms", "herns", "heros", "herps", "herry", "herse", "hertz", "herye", "hesps", "hests", "hetes", "heths", "heuch", "heugh", "hevea", "hevel", "hewed", "hewer", "hewgh", "hexad", "hexed", "hexer", "hexes", "hexyl", "heyed", "hiant", "hibas", "hicks", "hided", "hider", "hides", "hiems", "hifis", "highs", "hight", "hijab", "hijra", "hiked", "hiker", "hikes", "hikoi", "hilar", "hilch", "hillo", "hills", "hilsa", "hilts", "hilum", "hilus", "himbo", "hinau", "hinds", "hings", "hinky", "hinny", "hints", "hiois", "hiped", "hiper", "hipes", "hiply", "hired", "hiree", "hirer", "hires", "hissy", "hists", "hithe", "hived", "hiver", "hives", "hizen", "hoach", "hoaed", "hoagy", "hoars", "hoary", "hoast", "hobos", "hocks", "hocus", "hodad", "hodja", "hoers", "hogan", "hogen", "hoggs", "hoghs", "hogoh", "hogos", "hohed", "hoick", "hoied", "hoiks", "hoing", "hoise", "hokas", "hoked", "hokes", "hokey", "hokis", "hokku", "hokum", "holds", "holed", "holes", "holey", "holks", "holla", "hollo", "holme", "holms", "holon", "holos", "holts", "homas", "homed", "homes", "homey", "homie", "homme", "homos", "honan", "honda", "honds", "honed", "honer", "hones", "hongi", "hongs", "honks", "honky", "hooch", "hoods", "hoody", "hooey", "hoofs", "hoogo", "hooha", "hooka", "hooks", "hooky", "hooly", "hoons", "hoops", "hoord", "hoors", "hoosh", "hoots", "hooty", "hoove", "hopak", "hoped", "hoper", "hopes", "hoppy", "horah", "horal", "horas", "horis", "horks", "horme", "horns", "horst", "horsy", "hosed", "hosel", "hosen", "hoser", "hoses", "hosey", "hosta", "hosts", "hotch", "hoten", "hotis", "hotte", "hotty", "houff", "houfs", "hough", "houri", "hours", "houts", "hovea", "hoved", "hoven", "hoves", "howay", "howbe", "howes", "howff", "howfs", "howks", "howls", "howre", "howso", "howto", "hoxed", "hoxes", "hoyas", "hoyed", "hoyle", "hubba", "hubby", "hucks", "hudna", "hudud", "huers", "huffs", "huffy", "huger", "huggy", "huhus", "huias", "huies", "hukou", "hulas", "hules", "hulks", "hulky", "hullo", "hulls", "hully", "humas", "humfs", "humic", "humps", "humpy", "hundo", "hunks", "hunts", "hurds", "hurls", "hurly", "hurra", "hurst", "hurts", "hurty", "hushy", "husks", "husos", "hutia", "huzza", "huzzy", "hwyls", "hydel", "hydra", "hyens", "hygge", "hying", "hykes", "hylas", "hyleg", "hyles", "hylic", "hymns", "hynde", "hyoid", "hyped", "hypes", "hypha", "hyphy", "hypos", "hyrax", "hyson", "hythe", "iambi", "iambs", "ibrik", "icers", "iched", "iches", "ichor", "icier", "icker", "ickle", "icons", "ictal", "ictic", "ictus", "idant", "iddah", "iddat", "iddut", "ideas", "idees", "ident", "idled", "idles", "idlis", "idola", "idols", "idyls", "iftar", "igapo", "igged", "iglus", "ignis", "ihram", "iiwis", "ikans", "ikats", "ikons", "ileac", "ileal", "ileum", "ileus", "iliad", "ilial", "ilium", "iller", "illth", "imago", "imagy", "imams", "imari", "imaum", "imbar", "imbed", "imbos", "imide", "imido", "imids", "imine", "imino", "imlis", "immew", "immit", "immix", "imped", "impis", "impot", "impro", "imshi", "imshy", "inapt", "inarm", "inbye", "incas", "incel", "incle", "incog", "incus", "incut", "indew", "india", "indie", "indol", "indow", "indri", "indue", "inerm", "infix", "infos", "infra", "ingan", "ingle", "inion", "inked", "inker", "inkle", "inned", "innie", "innit", "inorb", "inros", "inrun", "insee", "inset", "inspo", "intel", "intil", "intis", "intra", "inula", "inure", "inurn", "inust", "invar", "inver", "inwit", "iodic", "iodid", "iodin", "ioras", "iotas", "ippon", "irade", "irids", "iring", "irked", "iroko", "irone", "irons", "isbas", "ishes", "isled", "isles", "isnae", "issei", "istle", "items", "ither", "ivied", "ivies", "ixias", "ixnay", "ixora", "ixtle", "izard", "izars", "izzat", "jaaps", "jabot", "jacal", "jacet", "jacks", "jacky", "jaded", "jades", "jafas", "jaffa", "jagas", "jager", "jaggs", "jaggy", "jagir", "jagra", "jails", "jaker", "jakes", "jakey", "jakie", "jalap", "jaleo", "jalop", "jambe", "jambo", "jambs", "jambu", "james", "jammy", "jamon", "jamun", "janes", "janky", "janns", "janny", "janty", "japan", "japed", "japer", "japes", "jarks", "jarls", "jarps", "jarta", "jarul", "jasey", "jaspe", "jasps", "jatha", "jatis", "jatos", "jauks", "jaune", "jaups", "javas", "javel", "jawan", "jawed", "jawns", "jaxie", "jeans", "jeats", "jebel", "jedis", "jeels", "jeely", "jeeps", "jeera", "jeers", "jeeze", "jefes", "jeffs", "jehad", "jehus", "jelab", "jello", "jells", "jembe", "jemmy", "jenny", "jeons", "jerid", "jerks", "jerry", "jesse", "jessy", "jests", "jesus", "jetee", "jetes", "jeton", "jeune", "jewed", "jewie", "jhala", "jheel", "jhils", "jiaos", "jibba", "jibbs", "jibed", "jiber", "jibes", "jiffs", "jiggy", "jigot", "jihad", "jills", "jilts", "jimmy", "jimpy", "jingo", "jings", "jinks", "jinne", "jinni", "jinns", "jirds", "jirga", "jirre", "jisms", "jitis", "jitty", "jived", "jiver", "jives", "jivey", "jnana", "jobed", "jobes", "jocko", "jocks", "jocky", "jocos", "jodel", "joeys", "johns", "joins", "joked", "jokes", "jokey", "jokol", "joled", "joles", "jolie", "jollo", "jolls", "jolts", "jolty", "jomon", "jomos", "jones", "jongs", "jonty", "jooks", "joram", "jorts", "jorum", "jotas", "jotty", "jotun", "joual", "jougs", "jouks", "joule", "jours", "jowar", "jowed", "jowls", "jowly", "joyed", "jubas", "jubes", "jucos", "judas", "judgy", "judos", "jugal", "jugum", "jujus", "juked", "jukes", "jukus", "julep", "julia", "jumar", "jumby", "jumps", "junco", "junks", "junky", "jupes", "jupon", "jural", "jurat", "jurel", "jures", "juris", "juste", "justs", "jutes", "jutty", "juves", "juvie", "kaama", "kabab", "kabar", "kabob", "kacha", "kacks", "kadai", "kades", "kadis", "kafir", "kagos", "kagus", "kahal", "kaiak", "kaids", "kaies", "kaifs", "kaika", "kaiks", "kails", "kaims", "kaing", "kains", "kajal", "kakas", "kakis", "kalam", "kalas", "kales", "kalif", "kalis", "kalpa", "kalua", "kamas", "kames", "kamik", "kamis", "kamme", "kanae", "kanal", "kanas", "kanat", "kandy", "kaneh", "kanes", "kanga", "kangs", "kanji", "kants", "kanzu", "kaons", "kapai", "kapas", "kapha", "kaphs", "kapok", "kapow", "kapur", "kapus", "kaput", "karai", "karas", "karat", "karee", "karez", "karks", "karns", "karoo", "karos", "karri", "karst", "karsy", "karts", "karzy", "kasha", "kasme", "katal", "katas", "katis", "katti", "kaugh", "kauri", "kauru", "kaury", "kaval", "kavas", "kawas", "kawau", "kawed", "kayle", "kayos", "kazis", "kazoo", "kbars", "kcals", "keaki", "kebar", "kebob", "kecks", "kedge", "kedgy", "keech", "keefs", "keeks", "keels", "keema", "keeno", "keens", "keeps", "keets", "keeve", "kefir", "kehua", "keirs", "kelep", "kelim", "kells", "kelly", "kelps", "kelpy", "kelts", "kelty", "kembo", "kembs", "kemps", "kempt", "kempy", "kenaf", "kench", "kendo", "kenos", "kente", "kents", "kepis", "kerbs", "kerel", "kerfs", "kerky", "kerma", "kerne", "kerns", "keros", "kerry", "kerve", "kesar", "kests", "ketas", "ketch", "ketes", "ketol", "kevel", "kevil", "kexes", "keyed", "keyer", "khadi", "khads", "khafs", "khana", "khans", "khaph", "khats", "khaya", "khazi", "kheda", "kheer", "kheth", "khets", "khirs", "khoja", "khors", "khoum", "khuds", "khula", "khyal", "kiaat", "kiack", "kiaki", "kiang", "kiasu", "kibbe", "kibbi", "kibei", "kibes", "kibla", "kicks", "kicky", "kiddo", "kiddy", "kidel", "kideo", "kidge", "kiefs", "kiers", "kieve", "kievs", "kight", "kikay", "kikes", "kikoi", "kiley", "kilig", "kilim", "kills", "kilns", "kilos", "kilps", "kilts", "kilty", "kimbo", "kimet", "kinas", "kinda", "kinds", "kindy", "kines", "kings", "kingy", "kinin", "kinks", "kinos", "kiore", "kipah", "kipas", "kipes", "kippa", "kipps", "kipsy", "kirby", "kirks", "kirns", "kirri", "kisan", "kissy", "kists", "kitab", "kited", "kiter", "kites", "kithe", "kiths", "kitke", "kitul", "kivas", "kiwis", "klang", "klaps", "klett", "klick", "klieg", "kliks", "klong", "kloof", "kluge", "klutz", "knags", "knaps", "knarl", "knars", "knaur", "knawe", "knees", "knell", "knick", "knish", "knits", "knive", "knobs", "knoop", "knops", "knosp", "knots", "knoud", "knout", "knowd", "knowe", "knows", "knubs", "knule", "knurl", "knurr", "knurs", "knuts", "koans", "koaps", "koban", "kobos", "koels", "koffs", "kofta", "kogal", "kohas", "kohen", "kohls", "koine", "koiwi", "kojis", "kokam", "kokas", "koker", "kokra", "kokum", "kolas", "kolos", "kombi", "kombu", "konbu", "kondo", "konks", "kooks", "kooky", "koori", "kopek", "kophs", "kopje", "koppa", "korai", "koran", "koras", "korat", "kores", "koris", "korma", "koros", "korun", "korus", "koses", "kotch", "kotos", "kotow", "koura", "kraal", "krabs", "kraft", "krais", "krait", "krang", "krans", "kranz", "kraut", "krays", "kreef", "kreen", "kreep", "kreng", "krewe", "kriol", "krona", "krone", "kroon", "krubi", "krump", "krunk", "ksars", "kubie", "kudos", "kudus", "kudzu", "kufis", "kugel", "kuias", "kukri", "kukus", "kulak", "kulan", "kulas", "kulfi", "kumis", "kumys", "kunas", "kunds", "kuris", "kurre", "kurta", "kurus", "kusso", "kusti", "kutai", "kutas", "kutch", "kutis", "kutus", "kuyas", "kuzus", "kvass", "kvell", "kwaai", "kwela", "kwink", "kwirl", "kyack", "kyaks", "kyang", "kyars", "kyats", "kybos", "kydst", "kyles", "kylie", "kylin", "kylix", "kyloe", "kynde", "kynds", "kypes", "kyrie", "kytes", "kythe", "kyudo", "laarf", "laari", "labda", "labia", "labis", "labne", "labra", "laccy", "laced", "lacer", "laces", "lacet", "lacey", "lacis", "lacka", "lacks", "lacky", "laddu", "laddy", "laded", "ladee", "lader", "lades", "ladoo", "laers", "laevo", "lagan", "lagar", "laggy", "lahal", "lahar", "laich", "laics", "laide", "laids", "laigh", "laika", "laiks", "laird", "lairs", "lairy", "laith", "laity", "laked", "laker", "lakes", "lakhs", "lakin", "laksa", "laldy", "lalls", "lamas", "lambs", "lamby", "lamed", "lamer", "lames", "lamia", "lammy", "lamps", "lanai", "lanas", "lanch", "lande", "lands", "laned", "lanes", "lanks", "lants", "lapas", "lapin", "lapis", "lapje", "lappa", "lappy", "larch", "lards", "lardy", "laree", "lares", "larfs", "larga", "largo", "laris", "larks", "larky", "larns", "larnt", "larum", "lased", "laser", "lases", "lassi", "lassu", "lassy", "lasts", "latah", "lated", "laten", "latex", "lathi", "laths", "lathy", "latke", "latus", "lauan", "lauch", "laude", "lauds", "laufs", "laund", "laura", "laval", "lavas", "laved", "laver", "laves", "lavra", "lavvy", "lawed", "lawer", "lawin", "lawks", "lawns", "lawny", "lawsy", "laxed", "laxer", "laxes", "laxly", "layby", "layed", "layin", "layup", "lazar", "lazed", "lazes", "lazos", "lazzi", "lazzo", "leads", "leady", "leafs", "leaks", "leams", "leans", "leany", "leaps", "leare", "lears", "leary", "leats", "leavy", "leaze", "leben", "leccy", "leche", "ledes", "ledgy", "ledum", "leear", "leeks", "leeps", "leers", "leese", "leets", "leeze", "lefte", "lefts", "leger", "leges", "legge", "leggo", "legit", "legno", "lehrs", "lehua", "leirs", "leish", "leman", "lemed", "lemel", "lemes", "lemma", "lemme", "lends", "lenes", "lengs", "lenis", "lenos", "lense", "lenti", "lento", "leone", "lepak", "lepid", "lepra", "lepta", "lered", "leres", "lerps", "lesbo", "leses", "lesos", "lests", "letch", "lethe", "letty", "letup", "leuch", "leuco", "leuds", "leugh", "levas", "levee", "leves", "levin", "levis", "lewis", "lexes", "lexis", "lezes", "lezza", "lezzo", "lezzy", "liana", "liane", "liang", "liard", "liars", "liart", "liber", "libor", "libra", "libre", "libri", "licet", "lichi", "licht", "licit", "licks", "lidar", "lidos", "liefs", "liens", "liers", "lieus", "lieve", "lifer", "lifes", "lifey", "lifts", "ligan", "liger", "ligge", "ligne", "liked", "liker", "likes", "likin", "lills", "lilos", "lilts", "lilty", "liman", "limas", "limax", "limba", "limbi", "limbs", "limby", "limed", "limen", "limes", "limey", "limma", "limns", "limos", "limpa", "limps", "linac", "linch", "linds", "lindy", "lined", "lines", "liney", "linga", "lings", "lingy", "linin", "links", "linky", "linns", "linny", "linos", "lints", "linty", "linum", "linux", "lions", "lipas", "lipes", "lipin", "lipos", "lippy", "liras", "lirks", "lirot", "lises", "lisks", "lisle", "lisps", "lists", "litai", "litas", "lited", "litem", "liter", "lites", "litho", "liths", "litie", "litre", "lived", "liven", "lives", "livor", "livre", "liwaa", "liwas", "llano", "loach", "loads", "loafs", "loams", "loans", "loast", "loave", "lobar", "lobed", "lobes", "lobos", "lobus", "loche", "lochs", "lochy", "locie", "locis", "locks", "locky", "locos", "locum", "loden", "lodes", "loess", "lofts", "logan", "loges", "loggy", "logia", "logie", "logoi", "logon", "logos", "lohan", "loids", "loins", "loipe", "loirs", "lokes", "lokey", "lokum", "lolas", "loled", "lollo", "lolls", "lolly", "lolog", "lolos", "lomas", "lomed", "lomes", "loner", "longa", "longe", "longs", "looby", "looed", "looey", "loofa", "loofs", "looie", "looks", "looky", "looms", "loons", "loony", "loops", "loord", "loots", "loped", "loper", "lopes", "loppy", "loral", "loran", "lords", "lordy", "lorel", "lores", "loric", "loris", "losed", "losel", "losen", "loses", "lossy", "lotah", "lotas", "lotes", "lotic", "lotos", "lotsa", "lotta", "lotte", "lotto", "lotus", "loued", "lough", "louie", "louis", "louma", "lound", "louns", "loupe", "loups", "loure", "lours", "loury", "louts", "lovat", "loved", "lovee", "loves", "lovey", "lovie", "lowan", "lowed", "lowen", "lowes", "lownd", "lowne", "lowns", "lowps", "lowry", "lowse", "lowth", "lowts", "loxed", "loxes", "lozen", "luach", "luaus", "lubed", "lubes", "lubra", "luces", "lucks", "lucre", "ludes", "ludic", "ludos", "luffa", "luffs", "luged", "luger", "luges", "lulls", "lulus", "lumas", "lumbi", "lumme", "lummy", "lumps", "lunas", "lunes", "lunet", "lungi", "lungs", "lunks", "lunts", "lupin", "lured", "lurer", "lures", "lurex", "lurgi", "lurgy", "lurks", "lurry", "lurve", "luser", "lushy", "lusks", "lusts", "lusus", "lutea", "luted", "luter", "lutes", "luvvy", "luxed", "luxer", "luxes", "lweis", "lyams", "lyard", "lyart", "lyase", "lycea", "lycee", "lycra", "lymes", "lynch", "lynes", "lyres", "lysed", "lyses", "lysin", "lysis", "lysol", "lyssa", "lyted", "lytes", "lythe", "lytic", "lytta", "maaed", "maare", "maars", "maban", "mabes", "macas", "macca", "maced", "macer", "maces", "mache", "machi", "machs", "macka", "macks", "macle", "macon", "macte", "madal", "madar", "maddy", "madge", "madid", "mados", "madre", "maedi", "maerl", "mafic", "mafts", "magas", "mages", "maggs", "magna", "magot", "magus", "mahal", "mahem", "mahis", "mahoe", "mahrs", "mahua", "mahwa", "maids", "maiko", "maiks", "maile", "maill", "mailo", "mails", "maims", "mains", "maire", "mairs", "maise", "maist", "majas", "majat", "majoe", "majos", "makaf", "makai", "makan", "makar", "makee", "makes", "makie", "makis", "makos", "malae", "malai", "malam", "malar", "malas", "malax", "maleo", "males", "malic", "malik", "malis", "malky", "malls", "malms", "malmy", "malts", "malty", "malus", "malva", "malwa", "mamak", "mamas", "mamba", "mambu", "mamee", "mamey", "mamie", "mamil", "manas", "manat", "mandi", "mands", "mandy", "maneb", "maned", "maneh", "manes", "manet", "mangi", "mangs", "manie", "manis", "manks", "manky", "manna", "manny", "manoa", "manos", "manse", "manso", "manta", "mante", "manto", "mants", "manty", "manul", "manus", "manzo", "mapau", "mapes", "mapou", "mappy", "maqam", "maqui", "marae", "marah", "maral", "maran", "maras", "maray", "marcs", "mards", "mardy", "mares", "marga", "marge", "margo", "margs", "maria", "marid", "maril", "marka", "marks", "marle", "marls", "marly", "marma", "marms", "maron", "maror", "marra", "marri", "marse", "marts", "marua", "marvy", "masas", "mased", "maser", "mases", "masha", "mashy", "masks", "massa", "massy", "masts", "masty", "masur", "masus", "masut", "matai", "mated", "mater", "mates", "mathe", "maths", "matin", "matlo", "matra", "matsu", "matte", "matts", "matty", "matza", "matzo", "mauby", "mauds", "mauka", "maula", "mauls", "maums", "maumy", "maund", "maunt", "mauri", "mausy", "mauts", "mauvy", "mauzy", "maven", "mavie", "mavin", "mavis", "mawed", "mawks", "mawky", "mawla", "mawns", "mawps", "mawrs", "maxed", "maxes", "maxis", "mayan", "mayas", "mayed", "mayos", "mayst", "mazac", "mazak", "mazar", "mazas", "mazed", "mazel", "mazer", "mazes", "mazet", "mazey", "mazut", "mbari", "mbars", "mbila", "mbira", "mbret", "mbube", "mbuga", "meads", "meake", "meaks", "meals", "meane", "means", "meany", "meare", "mease", "meath", "meats", "mebbe", "mebos", "mecha", "mechs", "mecks", "mecum", "medii", "medin", "medle", "meech", "meeds", "meeja", "meeps", "meers", "meets", "meffs", "meids", "meiko", "meils", "meins", "meint", "meiny", "meism", "meith", "mekka", "melam", "melas", "melba", "melch", "melds", "meles", "melic", "melik", "mells", "meloe", "melos", "melts", "melty", "memes", "memic", "memos", "menad", "mence", "mends", "mened", "menes", "menge", "mengs", "menil", "mensa", "mense", "mensh", "menta", "mento", "ments", "menus", "meous", "meows", "merch", "mercs", "merde", "merds", "mered", "merel", "merer", "meres", "meril", "meris", "merks", "merle", "merls", "merse", "mersk", "mesad", "mesal", "mesas", "mesca", "mesel", "mesem", "meses", "meshy", "mesia", "mesic", "mesne", "meson", "messy", "mesto", "mesyl", "metas", "meted", "meteg", "metel", "metes", "methi", "metho", "meths", "methy", "metic", "metif", "metis", "metol", "metre", "metta", "meums", "meuse", "meved", "meves", "mewed", "mewls", "meynt", "mezes", "mezza", "mezze", "mezzo", "mgals", "mhorr", "miais", "miaou", "miaow", "miasm", "miaul", "micas", "miche", "michi", "micht", "micks", "micky", "micos", "micra", "middy", "midgy", "midis", "miens", "mieux", "mieve", "miffs", "miffy", "mifty", "miggs", "migma", "migod", "mihas", "mihis", "mikan", "miked", "mikes", "mikos", "mikra", "mikva", "milch", "milds", "miler", "miles", "milfs", "milia", "milko", "milks", "mille", "mills", "milly", "milor", "milos", "milpa", "milts", "milty", "miltz", "mimed", "mimeo", "mimer", "mimes", "mimis", "mimsy", "minae", "minar", "minas", "mincy", "mindi", "minds", "mined", "mines", "minge", "mingi", "mings", "mingy", "minis", "minke", "minks", "minny", "minos", "minse", "mints", "minxy", "miraa", "mirah", "mirch", "mired", "mires", "mirex", "mirid", "mirin", "mirkn", "mirks", "mirky", "mirls", "mirly", "miros", "mirrl", "mirrs", "mirvs", "mirza", "misal", "misch", "misdo", "mises", "misgo", "misky", "misls", "misos", "missa", "misto", "mists", "misty", "mitas", "mitch", "miter", "mites", "mitey", "mitie", "mitis", "mitre", "mitry", "mitta", "mitts", "mivey", "mivvy", "mixed", "mixen", "mixer", "mixes", "mixie", "mixis", "mixte", "mixup", "miyas", "mizen", "mizes", "mizzy", "mmkay", "mneme", "moais", "moaky", "moals", "moana", "moans", "moany", "moars", "moats", "mobby", "mobed", "mobee", "mobes", "mobey", "mobie", "moble", "mobos", "mocap", "mochi", "mochs", "mochy", "mocks", "mocky", "mocos", "mocus", "moder", "modes", "modge", "modii", "modin", "modoc", "modom", "modus", "moeni", "moers", "mofos", "mogar", "mogas", "moggy", "mogos", "mogra", "mogue", "mohar", "mohel", "mohos", "mohrs", "mohua", "mohur", "moile", "moils", "moira", "moire", "moits", "moity", "mojos", "moker", "mokes", "mokey", "mokis", "mokky", "mokos", "mokus", "molal", "molas", "molds", "moled", "moler", "moles", "moley", "molie", "molla", "molle", "mollo", "molls", "molly", "moloi", "molos", "molto", "molts", "molue", "molvi", "molys", "momes", "momie", "momma", "momme", "mommy", "momos", "mompe", "momus", "monad", "monal", "monas", "monde", "mondo", "moner", "mongo", "mongs", "monic", "monie", "monks", "monos", "monpe", "monte", "monty", "moobs", "mooch", "moods", "mooed", "mooey", "mooks", "moola", "mooli", "mools", "mooly", "moong", "mooni", "moons", "moony", "moops", "moors", "moory", "mooth", "moots", "moove", "moped", "moper", "mopes", "mopey", "moppy", "mopsy", "mopus", "morae", "morah", "moran", "moras", "morat", "moray", "moree", "morel", "mores", "morgy", "moria", "morin", "mormo", "morna", "morne", "morns", "moror", "morra", "morro", "morse", "morts", "moruk", "mosed", "moses", "mosey", "mosks", "mosso", "moste", "mosto", "mosts", "moted", "moten", "motes", "motet", "motey", "moths", "mothy", "motis", "moton", "motte", "motts", "motty", "motus", "motza", "mouch", "moues", "moufs", "mould", "moule", "mouls", "mouly", "moups", "moust", "mousy", "moved", "moves", "mowas", "mowed", "mowie", "mowra", "moxas", "moxie", "moyas", "moyle", "moyls", "mozed", "mozes", "mozos", "mpret", "mrads", "msasa", "mtepe", "mucho", "mucic", "mucid", "mucin", "mucko", "mucks", "mucor", "mucro", "mudar", "mudge", "mudif", "mudim", "mudir", "mudra", "muffs", "muffy", "mufti", "mugga", "muggs", "muggy", "mugho", "mugil", "mugos", "muhly", "muids", "muils", "muirs", "muiry", "muist", "mujik", "mukim", "mukti", "mulai", "mulct", "muled", "mules", "muley", "mulga", "mulie", "mulla", "mulls", "mulse", "mulsh", "mumbo", "mumms", "mumph", "mumps", "mumsy", "mumus", "munds", "mundu", "munga", "munge", "mungi", "mungo", "mungs", "mungy", "munia", "munis", "munja", "munjs", "munts", "muntu", "muons", "muras", "mured", "mures", "murex", "murgh", "murgi", "murid", "murks", "murls", "murly", "murra", "murre", "murri", "murrs", "murry", "murth", "murti", "muruk", "murva", "musar", "musca", "mused", "musee", "muser", "muses", "muset", "musha", "musit", "musks", "musos", "musse", "mussy", "musta", "musth", "musts", "mutas", "mutch", "muted", "muter", "mutes", "mutha", "mutic", "mutis", "muton", "mutti", "mutts", "mutum", "muvva", "muxed", "muxes", "muzak", "muzzy", "mvula", "mvule", "mvuli", "myall", "myals", "mylar", "mynah", "mynas", "myoid", "myoma", "myons", "myope", "myops", "myopy", "mysid", "mysie", "mythi", "myths", "mythy", "myxos", "mzees", "naams", "naans", "naats", "nabam", "nabby", "nabes", "nabis", "nabks", "nabla", "nabob", "nache", "nacho", "nacre", "nadas", "naeve", "naevi", "naffs", "nagar", "nagas", "nages", "naggy", "nagor", "nahal", "naiad", "naibs", "naice", "naids", "naieo", "naifs", "naiks", "nails", "naily", "nains", "naios", "naira", "nairu", "najib", "nakas", "naked", "naker", "nakfa", "nalas", "naled", "nalla", "namad", "namak", "namaz", "named", "namer", "names", "namma", "namus", "nanas", "nance", "nancy", "nandu", "nanna", "nanos", "nante", "nanti", "nanto", "nants", "nanty", "nanua", "napas", "naped", "napes", "napoh", "napoo", "nappa", "nappe", "nappy", "naras", "narco", "narcs", "nards", "nares", "naric", "naris", "narks", "narky", "narod", "narra", "narre", "nashi", "nasho", "nasis", "nason", "nasus", "natak", "natch", "nates", "natis", "natto", "natty", "natya", "nauch", "naunt", "navar", "naved", "naves", "navew", "navvy", "nawab", "nawal", "nazar", "nazes", "nazir", "nazis", "nazzy", "nduja", "neafe", "neals", "neant", "neaps", "nears", "neath", "neato", "neats", "nebby", "nebek", "nebel", "neche", "necks", "neddy", "neebs", "needs", "neefs", "neeld", "neele", "neemb", "neems", "neeps", "neese", "neeze", "nefie", "negri", "negro", "negus", "neifs", "neist", "neive", "nelia", "nelis", "nelly", "nemas", "nemic", "nemns", "nempt", "nenes", "nenta", "neons", "neosa", "neoza", "neper", "nepit", "neral", "neram", "nerds", "nerfs", "nerka", "nerks", "nerol", "nerts", "nertz", "nervy", "neski", "nests", "nesty", "netas", "netes", "netop", "netta", "netts", "netty", "neuks", "neume", "neums", "nevel", "neves", "nevis", "nevus", "nevvy", "newbs", "newed", "newel", "newie", "newsy", "newts", "nexal", "nexin", "nexts", "nexum", "nexus", "ngaio", "ngaka", "ngana", "ngapi", "ngati", "ngege", "ngoma", "ngoni", "ngram", "ngwee", "nibby", "nicad", "niced", "nicey", "nicht", "nicks", "nicky", "nicol", "nidal", "nided", "nides", "nidor", "nidus", "niefs", "niess", "nieve", "nifes", "niffs", "niffy", "nifle", "nifty", "niger", "nigga", "nighs", "nigre", "nigua", "nihil", "nikab", "nikah", "nikau", "nilas", "nills", "nimbi", "nimbs", "nimby", "nimps", "niner", "nines", "ninon", "ninta", "niopo", "nioza", "nipas", "nipet", "nippy", "niqab", "nirls", "nirly", "nisei", "nisin", "nisse", "nisus", "nital", "niter", "nites", "nitid", "niton", "nitre", "nitro", "nitry", "nitta", "nitto", "nitty", "nival", "nivas", "nivel", "nixed", "nixer", "nixes", "nixie", "nizam", "njirl", "nkosi", "nmoli", "nmols", "noahs", "nobby", "nocks", "nodal", "noddy", "noded", "nodes", "nodum", "nodus", "noels", "noema", "noeme", "nogal", "noggs", "noggy", "nohow", "noias", "noils", "noily", "noint", "noire", "noirs", "nokes", "noles", "nolle", "nolls", "nolos", "nomas", "nomen", "nomes", "nomic", "nomoi", "nomos", "nonan", "nonas", "nonce", "noncy", "nonda", "nondo", "nones", "nonet", "nongs", "nonic", "nonis", "nonna", "nonno", "nonny", "nonyl", "noobs", "noois", "nooit", "nooks", "nooky", "noone", "noons", "noops", "noove", "nopal", "noria", "norie", "noris", "norks", "norma", "norms", "nosed", "noser", "noses", "noshi", "nosir", "notal", "notam", "noted", "noter", "notes", "notum", "nougs", "nouja", "nould", "noule", "nouls", "nouns", "nouny", "noups", "noust", "novae", "novas", "novia", "novio", "novum", "noway", "nowds", "nowed", "nowls", "nowts", "nowty", "noxal", "noxas", "noxes", "noyau", "noyed", "noyes", "nrtta", "nrtya", "nsima", "nubby", "nubia", "nucha", "nucin", "nuddy", "nuder", "nudes", "nudgy", "nudie", "nudzh", "nuevo", "nuffs", "nugae", "nujol", "nuked", "nukes", "nulla", "nullo", "nulls", "nully", "numbs", "numen", "nummy", "numps", "nunks", "nunky", "nunny", "nunus", "nuque", "nurds", "nurdy", "nurls", "nurrs", "nurts", "nurtz", "nused", "nuses", "nutso", "nutsy", "nyaff", "nyala", "nyams", "nying", "nyong", "nyssa", "nyung", "nyuse", "nyuze", "oafos", "oaked", "oaker", "oakum", "oared", "oarer", "oasal", "oases", "oasis", "oasts", "oaten", "oater", "oaths", "oaves", "obang", "obbos", "obeah", "obeli", "obeys", "obias", "obied", "obiit", "obits", "objet", "oboes", "obole", "oboli", "obols", "occam", "ocher", "oches", "ochre", "ochry", "ocker", "ocote", "ocrea", "octad", "octan", "octas", "octic", "octli", "octyl", "oculi", "odahs", "odals", "odeon", "odeum", "odism", "odist", "odium", "odoom", "odors", "odour", "odums", "odyle", "odyls", "ofays", "offed", "offie", "oflag", "ofter", "ofuro", "ogams", "ogeed", "ogees", "oggin", "ogham", "ogive", "ogled", "ogler", "ogles", "ogmic", "ogres", "ohelo", "ohias", "ohing", "ohmic", "ohone", "oicks", "oidia", "oiled", "oiler", "oilet", "oinks", "oints", "oiran", "ojime", "okapi", "okays", "okehs", "okies", "oking", "okole", "okras", "okrug", "oktas", "olate", "oldie", "oldly", "olehs", "oleic", "olein", "olent", "oleos", "oleum", "oleyl", "oligo", "olios", "oliva", "ollas", "ollav", "oller", "ollie", "ology", "olona", "olpae", "olpes", "omasa", "omber", "ombus", "omdah", "omdas", "omdda", "omdeh", "omees", "omens", "omers", "omiai", "omits", "omlah", "ommel", "ommin", "omnes", "omovs", "omrah", "omuls", "oncer", "onces", "oncet", "oncus", "ondes", "ondol", "onely", "oners", "onery", "ongon", "onium", "onkus", "onlap", "onlay", "onmun", "onned", "onsen", "ontal", "ontic", "ooaas", "oobit", "oohed", "ooids", "oojah", "oomph", "oonts", "oopak", "ooped", "oopsy", "oorie", "ooses", "ootid", "ooyah", "oozed", "oozes", "oozie", "oozle", "opahs", "opals", "opens", "opepe", "opery", "opgaf", "opihi", "oping", "oppos", "opsat", "opsin", "opsit", "opted", "opter", "opzit", "orach", "oracy", "orals", "orang", "orans", "orant", "orate", "orbat", "orbed", "orbic", "orcas", "orcin", "ordie", "ordos", "oread", "orfes", "orful", "orgia", "orgic", "orgue", "oribi", "oriel", "origo", "orixa", "orles", "orlon", "orlop", "ormer", "ornee", "ornis", "orped", "orpin", "orris", "ortet", "ortho", "orval", "orzos", "osars", "oscar", "osetr", "oseys", "oshac", "osier", "oskin", "oslin", "osmic", "osmol", "osone", "ossia", "ostia", "otaku", "otary", "othyl", "otium", "ottar", "ottos", "oubit", "ouche", "oucht", "oueds", "ouens", "ouija", "oulks", "oumas", "oundy", "oupas", "ouped", "ouphe", "ouphs", "ourey", "ourie", "ousel", "ousia", "ousts", "outby", "outed", "outen", "outie", "outre", "outro", "outta", "ouzel", "ouzos", "ovals", "ovels", "ovens", "overs", "ovism", "ovist", "ovoli", "ovolo", "ovule", "oware", "owari", "owche", "owers", "owies", "owled", "owler", "owlet", "owned", "ownio", "owres", "owrie", "owsen", "oxbow", "oxeas", "oxers", "oxeye", "oxids", "oxies", "oxime", "oxims", "oxine", "oxlip", "oxman", "oxmen", "oxter", "oyama", "oyers", "ozeki", "ozena", "ozzie", "paaho", "paals", "paans", "pacai", "pacas", "pacay", "paced", "pacer", "paces", "pacey", "pacha", "packs", "packy", "pacos", "pacta", "pacts", "padam", "padas", "paddo", "padis", "padle", "padma", "padou", "padre", "padri", "paean", "paedo", "paeon", "paged", "pager", "pages", "pagle", "pagne", "pagod", "pagri", "pahit", "pahos", "pahus", "paiks", "pails", "pains", "paipe", "paips", "paire", "pairs", "paisa", "paise", "pakay", "pakka", "pakki", "pakua", "pakul", "palak", "palar", "palas", "palay", "palea", "paled", "pales", "palet", "palis", "palki", "palla", "palls", "pallu", "pally", "palms", "palmy", "palpi", "palps", "palsa", "palus", "pamby", "pampa", "panax", "pance", "panch", "panda", "pands", "pandy", "paned", "panes", "panga", "pangs", "panim", "panir", "panko", "panks", "panna", "panne", "panni", "panny", "panto", "pants", "panty", "paoli", "paolo", "papad", "papas", "papaw", "papes", "papey", "pappi", "pappy", "papri", "parae", "paras", "parch", "parcs", "pardi", "pards", "pardy", "pared", "paren", "pareo", "pares", "pareu", "parev", "parge", "pargo", "parid", "paris", "parki", "parks", "parky", "parle", "parly", "parma", "parmo", "parms", "parol", "parps", "parra", "parrs", "parte", "parti", "parts", "parve", "parvo", "pasag", "pasar", "pasch", "paseo", "pases", "pasha", "pashm", "paska", "pasmo", "paspy", "passe", "passu", "pasts", "patas", "pated", "patee", "patel", "paten", "pater", "pates", "paths", "patia", "patin", "patka", "patly", "patta", "patte", "pattu", "patus", "pauas", "pauls", "pauxi", "pavan", "pavas", "paved", "paven", "paver", "paves", "pavid", "pavie", "pavin", "pavis", "pavon", "pavvy", "pawas", "pawaw", "pawed", "pawer", "pawks", "pawky", "pawls", "pawns", "paxes", "payed", "payor", "paysd", "peage", "peags", "peake", "peaks", "peaky", "peals", "peans", "peare", "pears", "peart", "pease", "peasy", "peats", "peaty", "peavy", "peaze", "pebas", "pechs", "pecia", "pecke", "pecks", "pecky", "pects", "pedes", "pedis", "pedon", "pedos", "pedro", "peece", "peeks", "peeky", "peels", "peely", "peens", "peent", "peeoy", "peepe", "peeps", "peepy", "peers", "peery", "peeve", "peevo", "peggy", "peghs", "pegma", "pegos", "peine", "peins", "peise", "peisy", "peize", "pekan", "pekau", "pekea", "pekes", "pekid", "pekin", "pekoe", "pelas", "pelau", "pelch", "peles", "pelfs", "pells", "pelma", "pelog", "pelon", "pelsh", "pelta", "pelts", "pelus", "pends", "pendu", "pened", "penes", "pengo", "penie", "penis", "penks", "penna", "penni", "pense", "pensy", "pents", "peola", "peons", "peony", "pepla", "peple", "pepon", "pepos", "peppy", "pepsi", "pequi", "perae", "perai", "perce", "percs", "perdu", "perdy", "perea", "peres", "perfs", "peris", "perks", "perle", "perls", "perms", "permy", "perne", "perns", "perog", "perps", "perry", "perse", "persp", "perst", "perts", "perve", "pervo", "pervs", "pervy", "pesch", "pesos", "pesta", "pests", "pesty", "petar", "peter", "petit", "petos", "petre", "petri", "petti", "petto", "pewed", "pewee", "pewit", "peyse", "pfftt", "phage", "phang", "phare", "pharm", "phasm", "pheer", "pheme", "phene", "pheon", "phese", "phial", "phies", "phish", "phizz", "phlox", "phobe", "phoca", "phono", "phons", "phooh", "phooo", "phota", "phots", "photy", "phpht", "phubs", "phuts", "phutu", "phwat", "phyla", "phyle", "phyma", "phynx", "physa", "piais", "piani", "pians", "pibal", "pical", "picas", "piccy", "picey", "pichi", "picks", "picon", "picot", "picra", "picul", "pieds", "piend", "piers", "piert", "pieta", "piets", "piezo", "pight", "pigly", "pigmy", "piing", "pikas", "pikau", "piked", "pikel", "piker", "pikes", "pikey", "pikis", "pikul", "pilae", "pilaf", "pilao", "pilar", "pilau", "pilaw", "pilch", "pilea", "piled", "pilei", "piler", "piles", "piley", "pilin", "pilis", "pills", "pilon", "pilow", "pilum", "pilus", "pimas", "pimps", "pinas", "pinax", "pince", "pinda", "pinds", "pined", "piner", "pines", "pinga", "pinge", "pingo", "pings", "pinko", "pinks", "pinna", "pinny", "pinol", "pinon", "pinot", "pinta", "pints", "pinup", "pions", "piony", "pious", "pioye", "pioys", "pipal", "pipas", "piped", "pipes", "pipet", "pipid", "pipis", "pipit", "pippy", "pipul", "piqui", "pirai", "pirks", "pirls", "pirns", "pirog", "pirre", "pirri", "pirrs", "pisco", "pises", "pisky", "pisos", "pissy", "piste", "pitas", "piths", "piton", "pitot", "pitso", "pitsu", "pitta", "pittu", "piuma", "piums", "pivos", "pixes", "piyut", "pized", "pizer", "pizes", "plaas", "plack", "plaga", "plage", "plaig", "planc", "planh", "plans", "plaps", "plash", "plasm", "plast", "plats", "platt", "platy", "plaud", "plaur", "plavs", "playa", "plays", "pleas", "plebe", "plebs", "pleck", "pleep", "plein", "plena", "plene", "pleno", "pleon", "plesh", "plets", "plews", "plexi", "plica", "plies", "pligs", "plims", "pling", "plink", "plips", "plish", "ploat", "ploce", "plock", "plods", "ploit", "plomb", "plong", "plonk", "plook", "ploot", "plops", "plore", "plots", "plotz", "plouk", "plout", "plows", "plowt", "ploye", "ploys", "pluds", "plues", "pluff", "plugs", "pluke", "plums", "plumy", "plung", "pluot", "plups", "plute", "pluto", "pluty", "plyer", "pneus", "poach", "poaka", "poake", "poalo", "pobby", "poboy", "pocan", "poche", "pocho", "pocks", "pocky", "podal", "poddy", "podex", "podge", "podgy", "podia", "podos", "podus", "poems", "poena", "poeps", "poete", "poets", "pogey", "pogge", "poggy", "pogos", "pogue", "pohed", "poilu", "poind", "poire", "pokal", "poked", "pokes", "pokey", "pokie", "pokit", "poled", "poler", "poles", "poley", "polio", "polis", "polje", "polks", "pollo", "polls", "polly", "polos", "polts", "polys", "pomas", "pombe", "pomes", "pomme", "pommy", "pomos", "pompa", "pomps", "ponce", "poncy", "ponds", "pondy", "pones", "poney", "ponga", "pongo", "pongs", "pongy", "ponks", "ponor", "ponto", "ponts", "ponty", "ponzu", "pooay", "poods", "pooed", "pooey", "poofs", "poofy", "poohs", "poohy", "pooja", "pooka", "pooks", "pools", "pooly", "poons", "poopa", "poops", "poopy", "poori", "poort", "poots", "pooty", "poove", "poovy", "popes", "popia", "popos", "poppa", "popsy", "popup", "porae", "poral", "pored", "porer", "pores", "porey", "porge", "porgy", "porin", "porks", "porky", "porno", "porns", "porny", "porta", "porte", "porth", "ports", "porty", "porus", "posca", "posed", "poses", "poset", "posey", "posho", "posol", "poste", "posts", "potae", "potai", "potch", "poted", "potes", "potin", "potoo", "potro", "potsy", "potto", "potts", "potty", "pouce", "pouff", "poufs", "poufy", "pouis", "pouke", "pouks", "poule", "poulp", "poult", "poupe", "poupt", "pours", "pousy", "pouts", "povos", "powan", "powie", "powin", "powis", "powlt", "pownd", "powns", "powny", "powre", "powsy", "poxed", "poxes", "poyas", "poynt", "poyou", "poyse", "pozzy", "praam", "prads", "prags", "prahu", "prams", "prana", "prang", "praos", "praps", "prase", "prate", "prats", "pratt", "praty", "praus", "prays", "preak", "predy", "preed", "preem", "prees", "preif", "preke", "prems", "premy", "prent", "preon", "preop", "preps", "presa", "prese", "prest", "preta", "preux", "preve", "prexy", "preys", "prial", "prian", "pricy", "pridy", "prief", "prier", "pries", "prigs", "prill", "prima", "primi", "primp", "prims", "primy", "pring", "prink", "prion", "prise", "priss", "prius", "proal", "proas", "probs", "proby", "prodd", "prods", "proem", "profs", "progs", "proin", "proke", "prole", "proll", "promo", "proms", "pronk", "prook", "proot", "props", "prora", "prore", "proso", "pross", "prost", "prosy", "proto", "proul", "prowk", "prows", "proyn", "pruno", "prunt", "pruny", "pruta", "pryan", "pryer", "pryse", "pseud", "pshaw", "pshut", "psias", "psion", "psoae", "psoai", "psoas", "psora", "psych", "psyop", "ptish", "ptype", "pubby", "pubco", "pubes", "pubis", "pubsy", "pucan", "pucer", "puces", "pucka", "pucks", "puddy", "pudge", "pudic", "pudor", "pudsy", "pudus", "puers", "puffa", "puffs", "puggy", "pugil", "puhas", "pujah", "pujas", "pukas", "puked", "puker", "pukes", "pukey", "pukka", "pukus", "pulao", "pulas", "puled", "puler", "pules", "pulik", "pulis", "pulka", "pulks", "pulli", "pulls", "pully", "pulmo", "pulps", "pulus", "pulut", "pumas", "pumie", "pumps", "pumpy", "punas", "punce", "punga", "pungi", "pungo", "pungs", "pungy", "punim", "punji", "punka", "punks", "punky", "punny", "punto", "punts", "punty", "pupae", "pupal", "pupas", "puppa", "pupus", "purao", "purau", "purda", "purdy", "pured", "pures", "purga", "purin", "puris", "purls", "puros", "purps", "purpy", "purre", "purrs", "purry", "pursy", "purty", "puses", "pusle", "pussy", "putas", "puter", "putid", "putin", "puton", "putos", "putti", "putto", "putts", "puttu", "putza", "puuko", "puyas", "puzel", "puzta", "pwned", "pyats", "pyets", "pygal", "pyins", "pylon", "pyned", "pynes", "pyoid", "pyots", "pyral", "pyran", "pyres", "pyrex", "pyric", "pyros", "pyrus", "pyuff", "pyxed", "pyxes", "pyxie", "pyxis", "pzazz", "qadis", "qaids", "qajaq", "qanat", "qapik", "qibla", "qilas", "qipao", "qophs", "qorma", "quabs", "quads", "quaff", "quags", "quair", "quais", "quaky", "quale", "qualy", "quank", "quant", "quare", "quarl", "quass", "quate", "quats", "quawk", "quaws", "quayd", "quays", "qubit", "quean", "queck", "queek", "queem", "queme", "quena", "quern", "queso", "quete", "queyn", "queys", "queyu", "quibs", "quich", "quids", "quies", "quiff", "quila", "quims", "quina", "quine", "quink", "quino", "quins", "quint", "quipo", "quips", "quipu", "quire", "quirl", "quirt", "quist", "quits", "quoad", "quods", "quoif", "quoin", "quois", "quoit", "quoll", "quonk", "quops", "quork", "quorl", "quouk", "quoys", "quran", "qursh", "quyte", "raads", "raake", "rabat", "rabic", "rabis", "raced", "races", "rache", "racks", "racon", "raddi", "raddy", "radge", "radgy", "radif", "radix", "radon", "rafee", "raffs", "raffy", "rafik", "rafiq", "rafts", "rafty", "ragas", "ragde", "raged", "ragee", "rager", "rages", "ragga", "raggs", "raggy", "ragis", "ragus", "rahed", "rahui", "raiah", "raias", "raids", "raike", "raiks", "raile", "rails", "raine", "rains", "raird", "raita", "raith", "raits", "rajas", "rajes", "raked", "rakee", "raker", "rakes", "rakhi", "rakia", "rakis", "rakki", "raksi", "rakus", "rales", "ralli", "ramal", "ramee", "rames", "ramet", "ramie", "ramin", "ramis", "rammy", "ramon", "ramps", "ramse", "ramsh", "ramus", "ranas", "rance", "rando", "rands", "raned", "ranee", "ranes", "ranga", "rangi", "rangs", "rangy", "ranid", "ranis", "ranke", "ranks", "ranns", "ranny", "ranse", "rants", "ranty", "raped", "rapee", "raper", "rapes", "raphe", "rapin", "rappe", "rapso", "rared", "raree", "rares", "rarks", "rasam", "rasas", "rased", "raser", "rases", "rasps", "rasse", "rasta", "ratal", "ratan", "ratas", "ratch", "rated", "ratel", "rater", "rates", "ratha", "rathe", "raths", "ratoo", "ratos", "ratti", "ratus", "rauli", "rauns", "raupo", "raved", "ravel", "raver", "raves", "ravey", "ravin", "rawdy", "rawer", "rawin", "rawks", "rawly", "rawns", "raxed", "raxes", "rayah", "rayas", "rayed", "rayle", "rayls", "rayne", "razai", "razed", "razee", "razer", "razes", "razet", "razoo", "readd", "reads", "reais", "reaks", "realo", "reals", "reame", "reams", "reamy", "reans", "reaps", "reard", "rears", "reast", "reata", "reate", "reave", "rebab", "rebbe", "rebec", "rebid", "rebit", "rebop", "rebud", "rebuy", "recal", "recce", "recco", "reccy", "recep", "recit", "recks", "recon", "recta", "recte", "recti", "recto", "recue", "redan", "redds", "reddy", "reded", "redes", "redia", "redid", "redif", "redig", "redip", "redly", "redon", "redos", "redox", "redry", "redub", "redug", "redux", "redye", "reeaf", "reech", "reede", "reeds", "reefs", "reefy", "reeks", "reeky", "reels", "reely", "reems", "reens", "reerd", "reest", "reeve", "reeze", "refan", "refed", "refel", "reffo", "refis", "refix", "refly", "refry", "regar", "reges", "reget", "regex", "reggo", "regia", "regie", "regle", "regma", "regna", "regos", "regot", "regur", "rehem", "reifs", "reify", "reiki", "reiks", "reine", "reing", "reink", "reins", "reird", "reist", "reive", "rejas", "rejig", "rejon", "reked", "rekes", "rekey", "relet", "relie", "relit", "rello", "relos", "reman", "remap", "remen", "remet", "remex", "remix", "remou", "renay", "rends", "rendu", "reney", "renga", "rengs", "renig", "renin", "renks", "renne", "renos", "rente", "rents", "reoil", "reorg", "repas", "repat", "repeg", "repen", "repin", "repla", "repos", "repot", "repps", "repro", "repun", "reput", "reran", "rerig", "resam", "resat", "resaw", "resay", "resee", "reses", "resew", "resid", "resit", "resod", "resol", "resow", "resto", "rests", "resty", "resue", "resus", "retag", "retam", "retax", "retem", "retia", "retie", "retin", "retip", "retox", "reune", "reups", "revet", "revie", "revow", "rewan", "rewax", "rewed", "rewet", "rewin", "rewon", "rewth", "rexes", "rezes", "rhabd", "rheas", "rheid", "rheme", "rheum", "rhies", "rhime", "rhine", "rhody", "rhomb", "rhone", "rhumb", "rhymy", "rhyne", "rhyta", "riads", "rials", "riant", "riata", "riato", "ribas", "ribby", "ribes", "riced", "ricer", "rices", "ricey", "riche", "richt", "ricin", "ricks", "rides", "ridgy", "ridic", "riels", "riems", "rieve", "rifer", "riffs", "riffy", "rifte", "rifts", "rifty", "riggs", "rigmo", "rigol", "rikka", "rikwa", "riled", "riles", "riley", "rille", "rills", "rilly", "rimae", "rimed", "rimer", "rimes", "rimon", "rimus", "rince", "rinds", "rindy", "rines", "ringe", "rings", "ringy", "rinks", "rioja", "rione", "riots", "rioty", "riped", "ripes", "ripps", "riqqs", "rises", "rishi", "risks", "risps", "rists", "risus", "rites", "rithe", "ritts", "ritzy", "rivas", "rived", "rivel", "riven", "rives", "riyal", "rizas", "roads", "roady", "roake", "roaky", "roams", "roans", "roany", "roars", "roary", "roate", "robbo", "robed", "rober", "robes", "roble", "robug", "robur", "roche", "rocks", "roded", "rodes", "rodny", "roers", "rogan", "roguy", "rohan", "rohes", "rohun", "rohus", "roids", "roils", "roily", "roins", "roist", "rojak", "rojis", "roked", "roker", "rokes", "rokey", "rokos", "rolag", "roleo", "roles", "rolfs", "rolls", "rolly", "romal", "roman", "romeo", "romer", "romps", "rompu", "rompy", "ronde", "rondo", "roneo", "rones", "ronin", "ronne", "ronte", "ronts", "ronuk", "roods", "roofs", "roofy", "rooks", "rooky", "rooms", "roons", "roops", "roopy", "roosa", "roose", "roots", "rooty", "roped", "roper", "ropes", "ropey", "roque", "roral", "rores", "roric", "rorid", "rorie", "rorts", "rorty", "rosal", "rosco", "rosed", "roses", "roset", "rosha", "roshi", "rosin", "rosit", "rosps", "rossa", "rosso", "rosti", "rosts", "rotal", "rotan", "rotas", "rotch", "roted", "rotes", "rotis", "rotls", "roton", "rotos", "rotta", "rotte", "rotto", "rotty", "rouen", "roues", "rouet", "roufs", "rougy", "rouks", "rouky", "roule", "rouls", "roums", "roups", "roupy", "roust", "routh", "routs", "roved", "roven", "roves", "rowan", "rowed", "rowel", "rowen", "rowet", "rowie", "rowme", "rownd", "rowns", "rowth", "rowts", "royet", "royne", "royst", "rozes", "rozet", "rozit", "ruach", "ruana", "rubai", "ruban", "rubby", "rubel", "rubes", "rubin", "rubio", "ruble", "rubli", "rubor", "rubus", "ruche", "ruchy", "rucks", "rudas", "rudds", "rudes", "rudie", "rudis", "rueda", "ruers", "ruffe", "ruffs", "ruffy", "rufus", "rugae", "rugal", "rugas", "ruggy", "ruice", "ruing", "ruins", "rukhs", "ruled", "rules", "rully", "rumal", "rumbo", "rumen", "rumes", "rumly", "rummy", "rumpo", "rumps", "rumpy", "runce", "runch", "runds", "runed", "runer", "runes", "rungs", "runic", "runny", "runos", "runts", "runty", "runup", "ruote", "rupia", "rurps", "rurus", "rusas", "ruses", "rushy", "rusks", "rusky", "rusma", "russe", "rusts", "ruths", "rutin", "rutty", "ruvid", "ryals", "rybat", "ryiji", "ryijy", "ryked", "rykes", "rymer", "rymme", "rynds", "ryoti", "ryots", "ryper", "rypin", "rythe", "ryugi", "saags", "sabal", "sabed", "saber", "sabes", "sabha", "sabin", "sabir", "sabji", "sable", "sabos", "sabot", "sabra", "sabre", "sabzi", "sacks", "sacra", "sacre", "saddo", "saddy", "sades", "sadhe", "sadhu", "sadic", "sadis", "sados", "sadza", "saeta", "safed", "safes", "sagar", "sagas", "sager", "sages", "saggy", "sagos", "sagum", "sahab", "saheb", "sahib", "saice", "saick", "saics", "saids", "saiga", "sails", "saims", "saine", "sains", "sairs", "saist", "saith", "sajou", "sakai", "saker", "sakes", "sakia", "sakis", "sakti", "salal", "salas", "salat", "salep", "sales", "salet", "salic", "salis", "salix", "salle", "salmi", "salol", "salop", "salpa", "salps", "salse", "salto", "salts", "salud", "salue", "salut", "saman", "samas", "samba", "sambo", "samek", "samel", "samen", "sames", "samey", "samfi", "samfu", "sammy", "sampi", "samps", "sanad", "sands", "saned", "sanes", "sanga", "sangh", "sango", "sangs", "sanko", "sansa", "santo", "sants", "saola", "sapan", "sapid", "sapor", "saran", "sards", "sared", "saree", "sarge", "sargo", "sarin", "sarir", "saris", "sarks", "sarky", "sarod", "saros", "sarus", "sarvo", "saser", "sasin", "sasse", "satai", "satay", "sated", "satem", "sater", "sates", "satis", "sauba", "sauch", "saugh", "sauls", "sault", "saunf", "saunt", "saury", "sauts", "sauve", "saved", "saver", "saves", "savey", "savin", "sawah", "sawed", "sawer", "saxes", "sayas", "sayed", "sayee", "sayer", "sayid", "sayne", "sayon", "sayst", "sazes", "scabs", "scads", "scaff", "scags", "scail", "scala", "scall", "scams", "scand", "scans", "scapa", "scape", "scapi", "scarp", "scars", "scart", "scath", "scats", "scatt", "scaud", "scaup", "scaur", "scaws", "sceat", "scena", "scend", "schav", "schif", "schmo", "schul", "schwa", "scifi", "scind", "scire", "sclim", "scobe", "scody", "scogs", "scoog", "scoot", "scopa", "scops", "scorp", "scote", "scots", "scoug", "scoup", "scowp", "scows", "scrab", "scrae", "scrag", "scran", "scrat", "scraw", "scray", "scrim", "scrip", "scrob", "scrod", "scrog", "scroo", "scrow", "scudi", "scudo", "scuds", "scuff", "scuft", "scugs", "sculk", "scull", "sculp", "sculs", "scums", "scups", "scurf", "scurs", "scuse", "scuta", "scute", "scuts", "scuzz", "scyes", "sdayn", "sdein", "seals", "seame", "seams", "seamy", "seans", "seare", "sears", "sease", "seats", "seaze", "sebum", "secco", "sechs", "sects", "seder", "sedes", "sedge", "sedgy", "sedum", "seeds", "seeks", "seeld", "seels", "seely", "seems", "seeps", "seepy", "seers", "sefer", "segar", "segas", "segni", "segno", "segol", "segos", "sehri", "seifs", "seils", "seine", "seirs", "seise", "seism", "seity", "seiza", "sekos", "sekts", "selah", "seles", "selfs", "selfy", "selky", "sella", "selle", "sells", "selva", "semas", "semee", "semes", "semie", "semis", "senas", "sends", "senes", "senex", "sengi", "senna", "senor", "sensa", "sensi", "sensu", "sente", "senti", "sents", "senvy", "senza", "sepad", "sepal", "sepic", "sepoy", "seppo", "septa", "septs", "serac", "serai", "seral", "sered", "serer", "seres", "serfs", "serge", "seria", "seric", "serin", "serir", "serks", "seron", "serow", "serra", "serre", "serrs", "serry", "servo", "sesey", "sessa", "setae", "setal", "seter", "seths", "seton", "setts", "sevak", "sevir", "sewan", "sewar", "sewed", "sewel", "sewen", "sewin", "sexed", "sexer", "sexes", "sexor", "sexto", "sexts", "seyen", "sezes", "shads", "shags", "shahs", "shaka", "shako", "shakt", "shalm", "shaly", "shama", "shams", "shand", "shans", "shaps", "sharn", "shart", "shash", "shaul", "shawm", "shawn", "shaws", "shaya", "shays", "shchi", "sheaf", "sheal", "sheas", "sheds", "sheel", "shend", "sheng", "shent", "sheol", "sherd", "shere", "shero", "shets", "sheva", "shewn", "shews", "shiai", "shiel", "shier", "shies", "shill", "shily", "shims", "shins", "shiok", "ships", "shirr", "shirs", "shish", "shiso", "shist", "shite", "shits", "shiur", "shiva", "shive", "shivs", "shlep", "shlub", "shmek", "shmoe", "shoat", "shoed", "shoer", "shoes", "shogi", "shogs", "shoji", "shojo", "shola", "shonk", "shool", "shoon", "shoos", "shope", "shops", "shorl", "shote", "shots", "shott", "shoud", "showd", "shows", "shoyu", "shred", "shris", "shrow", "shtar", "shtik", "shtum", "shtup", "shuba", "shule", "shuln", "shuls", "shuns", "shura", "shute", "shuts", "shwas", "shyer", "sials", "sibbs", "sibia", "sibyl", "sices", "sicht", "sicko", "sicks", "sicky", "sidas", "sided", "sider", "sides", "sidey", "sidha", "sidhe", "sidle", "sield", "siens", "sient", "sieth", "sieur", "sifts", "sighs", "sigil", "sigla", "signa", "signs", "sigri", "sijos", "sikas", "siker", "sikes", "silds", "siled", "silen", "siler", "siles", "silex", "silks", "sills", "silos", "silts", "silty", "silva", "simar", "simas", "simba", "simis", "simps", "simul", "sinds", "sined", "sines", "sings", "sinhs", "sinks", "sinky", "sinsi", "sinus", "siped", "sipes", "sippy", "sired", "siree", "sires", "sirih", "siris", "siroc", "sirra", "sirup", "sisal", "sises", "sista", "sists", "sitar", "sitch", "sited", "sites", "sithe", "sitka", "situp", "situs", "siver", "sixer", "sixes", "sixmo", "sixte", "sizar", "sized", "sizel", "sizer", "sizes", "skags", "skail", "skald", "skank", "skarn", "skart", "skats", "skatt", "skaws", "skean", "skear", "skeds", "skeed", "skeef", "skeen", "skeer", "skees", "skeet", "skeev", "skeez", "skegg", "skegs", "skein", "skelf", "skell", "skelm", "skelp", "skene", "skens", "skeos", "skeps", "skerm", "skers", "skets", "skews", "skids", "skied", "skies", "skiey", "skimo", "skims", "skink", "skins", "skint", "skios", "skips", "skirl", "skirr", "skite", "skits", "skive", "skivy", "sklim", "skoal", "skobe", "skody", "skoff", "skofs", "skogs", "skols", "skool", "skort", "skosh", "skran", "skrik", "skroo", "skuas", "skugs", "skyed", "skyer", "skyey", "skyfs", "skyre", "skyrs", "skyte", "slabs", "slade", "slaes", "slags", "slaid", "slake", "slams", "slane", "slank", "slaps", "slart", "slats", "slaty", "slave", "slaws", "slays", "slebs", "sleds", "sleer", "slews", "sleys", "slier", "slily", "slims", "slipe", "slips", "slipt", "slish", "slits", "slive", "sloan", "slobs", "sloes", "slogs", "sloid", "slojd", "sloka", "slomo", "sloom", "sloot", "slops", "slopy", "slorm", "slots", "slove", "slows", "sloyd", "slubb", "slubs", "slued", "slues", "sluff", "slugs", "sluit", "slums", "slurb", "slurs", "sluse", "sluts", "slyer", "slype", "smaak", "smaik", "smalm", "smalt", "smarm", "smaze", "smeek", "smees", "smeik", "smeke", "smerk", "smews", "smick", "smily", "smirr", "smirs", "smits", "smize", "smogs", "smoko", "smolt", "smoor", "smoot", "smore", "smorg", "smout", "smowt", "smugs", "smurs", "smush", "smuts", "snabs", "snafu", "snags", "snaps", "snarf", "snark", "snars", "snary", "snash", "snath", "snaws", "snead", "sneap", "snebs", "sneck", "sneds", "sneed", "snees", "snell", "snibs", "snick", "snied", "snies", "snift", "snigs", "snips", "snipy", "snirt", "snits", "snive", "snobs", "snods", "snoek", "snoep", "snogs", "snoke", "snood", "snook", "snool", "snoot", "snots", "snowk", "snows", "snubs", "snugs", "snush", "snyes", "soaks", "soaps", "soare", "soars", "soave", "sobas", "socas", "soces", "socia", "socko", "socks", "socle", "sodas", "soddy", "sodic", "sodom", "sofar", "sofas", "softa", "softs", "softy", "soger", "sohur", "soils", "soily", "sojas", "sojus", "sokah", "soken", "sokes", "sokol", "solah", "solan", "solas", "solde", "soldi", "soldo", "solds", "soled", "solei", "soler", "soles", "solon", "solos", "solum", "solus", "soman", "somas", "sonce", "sonde", "sones", "songo", "songs", "songy", "sonly", "sonne", "sonny", "sonse", "sonsy", "sooey", "sooks", "sooky", "soole", "sools", "sooms", "soops", "soote", "soots", "sophs", "sophy", "sopor", "soppy", "sopra", "soral", "soras", "sorbi", "sorbo", "sorbs", "sorda", "sordo", "sords", "sored", "soree", "sorel", "sorer", "sores", "sorex", "sorgo", "sorns", "sorra", "sorta", "sorts", "sorus", "soths", "sotol", "sotto", "souce", "souct", "sough", "souks", "souls", "souly", "soums", "soups", "soupy", "sours", "souse", "souts", "sowar", "sowce", "sowed", "sowff", "sowfs", "sowle", "sowls", "sowms", "sownd", "sowne", "sowps", "sowse", "sowth", "soxes", "soyas", "soyle", "soyuz", "sozin", "spack", "spacy", "spado", "spads", "spaed", "spaer", "spaes", "spags", "spahi", "spail", "spain", "spait", "spake", "spald", "spale", "spall", "spalt", "spams", "spane", "spang", "spans", "spard", "spars", "spart", "spate", "spats", "spaul", "spawl", "spaws", "spayd", "spays", "spaza", "spazz", "speal", "spean", "speat", "specs", "spect", "speel", "speer", "speil", "speir", "speks", "speld", "spelk", "speos", "spesh", "spets", "speug", "spews", "spewy", "spial", "spica", "spick", "spics", "spide", "spier", "spies", "spiff", "spifs", "spiks", "spile", "spims", "spina", "spink", "spins", "spirt", "spiry", "spits", "spitz", "spivs", "splay", "splog", "spode", "spods", "spoom", "spoor", "spoot", "spork", "sposa", "sposh", "sposo", "spots", "sprad", "sprag", "sprat", "spred", "sprew", "sprit", "sprod", "sprog", "sprue", "sprug", "spuds", "spued", "spuer", "spues", "spugs", "spule", "spume", "spumy", "spurs", "sputa", "spyal", "spyre", "squab", "squaw", "squee", "squeg", "squid", "squit", "squiz", "srsly", "stabs", "stade", "stags", "stagy", "staig", "stane", "stang", "stans", "staph", "staps", "starn", "starr", "stars", "stary", "stats", "statu", "staun", "staws", "stays", "stean", "stear", "stedd", "stede", "steds", "steek", "steem", "steen", "steez", "steik", "steil", "stela", "stele", "stell", "steme", "stems", "stend", "steno", "stens", "stent", "steps", "stept", "stere", "stets", "stews", "stewy", "steys", "stich", "stied", "sties", "stilb", "stile", "stime", "stims", "stimy", "stipa", "stipe", "stire", "stirk", "stirp", "stirs", "stive", "stivy", "stoae", "stoai", "stoas", "stoat", "stobs", "stoep", "stogs", "stogy", "stoit", "stoln", "stoma", "stond", "stong", "stonk", "stonn", "stook", "stoor", "stope", "stops", "stopt", "stoss", "stots", "stott", "stoun", "stoup", "stour", "stown", "stowp", "stows", "strad", "strae", "strag", "strak", "strep", "strew", "stria", "strig", "strim", "strop", "strow", "stroy", "strum", "stubs", "stucs", "stude", "studs", "stull", "stulm", "stumm", "stums", "stuns", "stupa", "stupe", "sture", "sturt", "stush", "styed", "styes", "styli", "stylo", "styme", "stymy", "styre", "styte", "subah", "subak", "subas", "subby", "suber", "subha", "succi", "sucks", "sucky", "sucre", "sudan", "sudds", "sudor", "sudsy", "suede", "suent", "suers", "suete", "suets", "suety", "sugan", "sughs", "sugos", "suhur", "suids", "suint", "suits", "sujee", "sukhs", "sukis", "sukuk", "sulci", "sulfa", "sulfo", "sulks", "sulls", "sulph", "sulus", "sumis", "summa", "sumos", "sumph", "sumps", "sunis", "sunks", "sunna", "sunns", "sunts", "sunup", "suona", "suped", "supes", "supra", "surah", "sural", "suras", "surat", "surds", "sured", "sures", "surfs", "surfy", "surgy", "surra", "sused", "suses", "susus", "sutor", "sutra", "sutta", "swabs", "swack", "swads", "swage", "swags", "swail", "swain", "swale", "swaly", "swamy", "swang", "swank", "swans", "swaps", "swapt", "sward", "sware", "swarf", "swart", "swats", "swayl", "sways", "sweal", "swede", "sweed", "sweel", "sweer", "swees", "sweir", "swelt", "swerf", "sweys", "swies", "swigs", "swile", "swims", "swink", "swipe", "swire", "swiss", "swith", "swits", "swive", "swizz", "swobs", "swole", "swoll", "swoln", "swops", "swopt", "swots", "swoun", "sybbe", "sybil", "syboe", "sybow", "sycee", "syces", "sycon", "syeds", "syens", "syker", "sykes", "sylis", "sylph", "sylva", "symar", "synch", "syncs", "synds", "syned", "synes", "synth", "syped", "sypes", "syphs", "syrah", "syren", "sysop", "sythe", "syver", "taals", "taata", "tabac", "taber", "tabes", "tabid", "tabis", "tabla", "tabls", "tabor", "tabos", "tabun", "tabus", "tacan", "taces", "tacet", "tache", "tachi", "tacho", "tachs", "tacks", "tacos", "tacts", "tadah", "taels", "tafia", "taggy", "tagma", "tagua", "tahas", "tahrs", "taiga", "taigs", "taiko", "tails", "tains", "taira", "taish", "taits", "tajes", "takas", "takes", "takhi", "takht", "takin", "takis", "takky", "talak", "talaq", "talar", "talas", "talcs", "talcy", "talea", "taler", "tales", "talik", "talks", "talky", "talls", "talma", "talpa", "taluk", "talus", "tamal", "tamas", "tamed", "tames", "tamin", "tamis", "tammy", "tamps", "tanas", "tanga", "tangi", "tangs", "tanhs", "tania", "tanka", "tanks", "tanky", "tanna", "tansu", "tansy", "tante", "tanti", "tanto", "tanty", "tapas", "taped", "tapen", "tapes", "tapet", "tapis", "tappa", "tapus", "taras", "tardo", "tards", "tared", "tares", "targa", "targe", "tarka", "tarns", "taroc", "tarok", "taros", "tarps", "tarre", "tarry", "tarse", "tarsi", "tarte", "tarts", "tarty", "tarzy", "tasar", "tasca", "tased", "taser", "tases", "tasks", "tassa", "tasse", "tasso", "tasto", "tatar", "tater", "tates", "taths", "tatie", "tatou", "tatts", "tatus", "taube", "tauld", "tauon", "taupe", "tauts", "tauty", "tavah", "tavas", "taver", "tawaf", "tawai", "tawas", "tawed", "tawer", "tawie", "tawse", "tawts", "taxed", "taxer", "taxes", "taxis", "taxol", "taxon", "taxor", "taxus", "tayra", "tazza", "tazze", "teade", "teads", "teaed", "teaks", "teals", "teams", "tears", "teats", "teaze", "techs", "techy", "tecta", "tecum", "teels", "teems", "teend", "teene", "teens", "teeny", "teers", "teets", "teffs", "teggs", "tegua", "tegus", "tehee", "tehrs", "teiid", "teils", "teind", "teins", "tekke", "telae", "telco", "teles", "telex", "telia", "telic", "tells", "telly", "teloi", "telos", "temed", "temes", "tempi", "temps", "tempt", "temse", "tench", "tends", "tendu", "tenes", "tenge", "tenia", "tenne", "tenno", "tenny", "tenon", "tents", "tenty", "tenue", "tepal", "tepas", "tepoy", "terai", "teras", "terce", "terek", "teres", "terfe", "terfs", "terga", "terms", "terne", "terns", "terre", "terry", "terts", "terza", "tesla", "testa", "teste", "tests", "tetes", "teths", "tetra", "tetri", "teuch", "teugh", "tewed", "tewel", "tewit", "texas", "texes", "texta", "texts", "thack", "thagi", "thaim", "thale", "thali", "thana", "thane", "thang", "thans", "thanx", "tharm", "thars", "thaws", "thawt", "thawy", "thebe", "theca", "theed", "theek", "thees", "thegn", "theic", "thein", "thelf", "thema", "thens", "theor", "theow", "therm", "thesp", "thete", "thews", "thewy", "thigs", "thilk", "thill", "thine", "thins", "thiol", "thirl", "thoft", "thole", "tholi", "thoro", "thorp", "thots", "thous", "thowl", "thrae", "thraw", "thrid", "thrip", "throe", "thuds", "thugs", "thuja", "thunk", "thurl", "thuya", "thymi", "thymy", "tians", "tiare", "tiars", "tical", "ticca", "ticed", "tices", "tichy", "ticks", "ticky", "tiddy", "tided", "tides", "tiefs", "tiers", "tiffs", "tifos", "tifts", "tiges", "tigon", "tikas", "tikes", "tikia", "tikis", "tikka", "tilak", "tiled", "tiler", "tiles", "tills", "tilly", "tilth", "tilts", "timbo", "timed", "times", "timon", "timps", "tinas", "tinct", "tinds", "tinea", "tined", "tines", "tinge", "tings", "tinks", "tinny", "tinto", "tints", "tinty", "tipis", "tippy", "tipup", "tired", "tires", "tirls", "tiros", "tirrs", "tirth", "titar", "titas", "titch", "titer", "tithi", "titin", "titir", "titis", "titre", "titty", "titup", "tiyin", "tiyns", "tizes", "tizzy", "toads", "toady", "toaze", "tocks", "tocky", "tocos", "todde", "todea", "todos", "toeas", "toffs", "toffy", "tofts", "tofus", "togae", "togas", "toged", "toges", "togue", "tohos", "toidy", "toile", "toils", "toing", "toise", "toits", "toity", "tokay", "toked", "toker", "tokes", "tokos", "tolan", "tolar", "tolas", "toled", "toles", "tolls", "tolly", "tolts", "tolus", "tolyl", "toman", "tombo", "tombs", "tomen", "tomes", "tomia", "tomin", "tomme", "tommy", "tomos", "tomoz", "tondi", "tondo", "toned", "toner", "tones", "toney", "tongs", "tonka", "tonks", "tonne", "tonus", "tools", "tooms", "toons", "toots", "toped", "topee", "topek", "toper", "topes", "tophe", "tophi", "tophs", "topis", "topoi", "topos", "toppy", "toque", "torah", "toran", "toras", "torcs", "tores", "toric", "torii", "toros", "torot", "torrs", "torse", "torsi", "torsk", "torta", "torte", "torts", "tosas", "tosed", "toses", "toshy", "tossy", "tosyl", "toted", "toter", "totes", "totty", "touks", "touns", "tours", "touse", "tousy", "touts", "touze", "touzy", "towai", "towed", "towie", "towno", "towns", "towny", "towse", "towsy", "towts", "towze", "towzy", "toyed", "toyer", "toyon", "toyos", "tozed", "tozes", "tozie", "trabs", "trads", "trady", "traga", "tragi", "trags", "tragu", "traik", "trams", "trank", "tranq", "trans", "trant", "trape", "trapo", "traps", "trapt", "trass", "trats", "tratt", "trave", "trayf", "trays", "treck", "treed", "treen", "trees", "trefa", "treif", "treks", "trema", "trems", "tress", "trest", "trets", "trews", "treyf", "treys", "triac", "tride", "trier", "tries", "trifa", "triff", "trigo", "trigs", "trike", "trild", "trill", "trims", "trine", "trins", "triol", "trior", "trios", "trips", "tripy", "trist", "troad", "troak", "troat", "trock", "trode", "trods", "trogs", "trois", "troke", "tromp", "trona", "tronc", "trone", "tronk", "trons", "trooz", "tropo", "troth", "trots", "trows", "troys", "trued", "trues", "trugo", "trugs", "trull", "tryer", "tryke", "tryma", "tryps", "tsade", "tsadi", "tsars", "tsked", "tsuba", "tsubo", "tuans", "tuart", "tuath", "tubae", "tubar", "tubas", "tubby", "tubed", "tubes", "tucks", "tufas", "tuffe", "tuffs", "tufts", "tufty", "tugra", "tuile", "tuina", "tuism", "tuktu", "tules", "tulpa", "tulps", "tulsi", "tumid", "tummy", "tumps", "tumpy", "tunas", "tunds", "tuned", "tuner", "tunes", "tungs", "tunny", "tupek", "tupik", "tuple", "tuque", "turds", "turfs", "turfy", "turks", "turme", "turms", "turns", "turnt", "turon", "turps", "turrs", "tushy", "tusks", "tusky", "tutee", "tutes", "tutti", "tutty", "tutus", "tuxes", "tuyer", "twaes", "twain", "twals", "twank", "twats", "tways", "tweel", "tween", "tweep", "tweer", "twerk", "twerp", "twier", "twigs", "twill", "twilt", "twink", "twins", "twiny", "twire", "twirk", "twirp", "twite", "twits", "twocs", "twoer", "twonk", "twyer", "tyees", "tyers", "tyiyn", "tykes", "tyler", "tymps", "tynde", "tyned", "tynes", "typal", "typed", "types", "typey", "typic", "typos", "typps", "typto", "tyran", "tyred", "tyres", "tyros", "tythe", "tzars", "ubacs", "ubity", "udals", "udons", "udyog", "ugali", "ugged", "uhlan", "uhuru", "ukase", "ulama", "ulans", "ulema", "ulmin", "ulmos", "ulnad", "ulnae", "ulnar", "ulnas", "ulpan", "ulvas", "ulyie", "ulzie", "umami", "umbel", "umber", "umble", "umbos", "umbre", "umiac", "umiak", "umiaq", "ummah", "ummas", "ummed", "umped", "umphs", "umpie", "umpty", "umrah", "umras", "unagi", "unais", "unapt", "unarm", "unary", "unaus", "unbag", "unban", "unbar", "unbed", "unbid", "unbox", "uncap", "unces", "uncia", "uncos", "uncoy", "uncus", "undam", "undee", "undos", "undug", "uneth", "unfix", "ungag", "unget", "ungod", "ungot", "ungum", "unhat", "unhip", "unica", "unios", "units", "unjam", "unked", "unket", "unkey", "unkid", "unkut", "unlap", "unlaw", "unlay", "unled", "unleg", "unlet", "unlid", "unmad", "unman", "unmew", "unmix", "unode", "unold", "unown", "unpay", "unpeg", "unpen", "unpin", "unply", "unpot", "unput", "unred", "unrid", "unrig", "unrip", "unsaw", "unsay", "unsee", "unsew", "unsex", "unsod", "unsub", "untag", "untax", "untin", "unwet", "unwit", "unwon", "upbow", "upbye", "updos", "updry", "upend", "upful", "upjet", "uplay", "upled", "uplit", "upped", "upran", "uprun", "upsee", "upsey", "uptak", "upter", "uptie", "uraei", "urali", "uraos", "urare", "urari", "urase", "urate", "urbex", "urbia", "urdee", "ureal", "ureas", "uredo", "ureic", "ureid", "urena", "urent", "urged", "urger", "urges", "urial", "urite", "urman", "urnal", "urned", "urped", "ursae", "ursid", "urson", "urubu", "urupa", "urvas", "usens", "users", "useta", "usnea", "usnic", "usque", "ustad", "uster", "usure", "usury", "uteri", "utero", "uveal", "uveas", "uvula", "vacas", "vacay", "vacua", "vacui", "vacuo", "vadas", "vaded", "vades", "vadge", "vagal", "vagus", "vaids", "vails", "vaire", "vairs", "vairy", "vajra", "vakas", "vakil", "vales", "valis", "valli", "valse", "vamps", "vampy", "vanda", "vaned", "vanes", "vanga", "vangs", "vants", "vaped", "vaper", "vapes", "varan", "varas", "varda", "vardo", "vardy", "varec", "vares", "varia", "varix", "varna", "varus", "varve", "vasal", "vases", "vasts", "vasty", "vatas", "vatha", "vatic", "vatje", "vatos", "vatus", "vauch", "vaute", "vauts", "vawte", "vaxes", "veale", "veals", "vealy", "veena", "veeps", "veers", "veery", "vegas", "veges", "veggo", "vegie", "vegos", "vehme", "veils", "veily", "veins", "veiny", "velar", "velds", "veldt", "veles", "vells", "velum", "venae", "venal", "venas", "vends", "vendu", "veney", "venge", "venin", "venti", "vents", "venus", "verba", "verbs", "verde", "verra", "verre", "verry", "versa", "verst", "verte", "verts", "vertu", "vespa", "vesta", "vests", "vetch", "veuve", "veves", "vexed", "vexer", "vexes", "vexil", "vezir", "vials", "viand", "vibed", "vibes", "vibex", "vibey", "viced", "vices", "vichy", "vicus", "viers", "vieux", "views", "viewy", "vifda", "viffs", "vigas", "vigia", "vilde", "viler", "ville", "villi", "vills", "vimen", "vinal", "vinas", "vinca", "vined", "viner", "vines", "vinew", "vinho", "vinic", "vinny", "vinos", "vints", "viold", "viols", "vired", "vireo", "vires", "virga", "virge", "virgo", "virid", "virls", "virtu", "visas", "vised", "vises", "visie", "visna", "visne", "vison", "visto", "vitae", "vitas", "vitex", "vitro", "vitta", "vivas", "vivat", "vivda", "viver", "vives", "vivos", "vivre", "vizir", "vizor", "vlast", "vleis", "vlies", "vlogs", "voars", "vobla", "vocab", "voces", "voddy", "vodou", "vodun", "voema", "vogie", "voici", "voids", "voile", "voips", "volae", "volar", "voled", "voles", "volet", "volke", "volks", "volta", "volte", "volti", "volts", "volva", "volve", "vomer", "voted", "votes", "vouge", "voulu", "vowed", "vower", "voxel", "voxes", "vozhd", "vraic", "vrils", "vroom", "vrous", "vrouw", "vrows", "vuggs", "vuggy", "vughs", "vughy", "vulgo", "vulns", "vulva", "vutty", "vygie", "waacs", "wacke", "wacko", "wacks", "wadas", "wadds", "waddy", "waded", "wader", "wades", "wadge", "wadis", "wadts", "waffs", "wafts", "waged", "wages", "wagga", "wagyu", "wahay", "wahey", "wahoo", "waide", "waifs", "waift", "wails", "wains", "wairs", "waite", "waits", "wakas", "waked", "waken", "waker", "wakes", "wakfs", "waldo", "walds", "waled", "waler", "wales", "walie", "walis", "walks", "walla", "walls", "wally", "walty", "wamed", "wames", "wamus", "wands", "waned", "wanes", "waney", "wangs", "wanks", "wanky", "wanle", "wanly", "wanna", "wanta", "wants", "wanty", "wanze", "waqfs", "warbs", "warby", "wards", "wared", "wares", "warez", "warks", "warms", "warns", "warps", "warre", "warst", "warts", "wases", "washi", "washy", "wasms", "wasps", "waspy", "wasts", "watap", "watts", "wauff", "waugh", "wauks", "waulk", "wauls", "waurs", "waved", "waves", "wavey", "wawas", "wawes", "wawls", "waxed", "waxer", "waxes", "wayed", "wazir", "wazoo", "weald", "weals", "weamb", "weans", "wears", "webby", "weber", "wecht", "wedel", "wedgy", "weeds", "weeis", "weeke", "weeks", "weels", "weems", "weens", "weeny", "weeps", "weepy", "weest", "weete", "weets", "wefte", "wefts", "weids", "weils", "weirs", "weise", "weize", "wekas", "welds", "welke", "welks", "welkt", "wells", "welly", "welts", "wembs", "wench", "wends", "wenge", "wenny", "wents", "werfs", "weros", "wersh", "wests", "wetas", "wetly", "wexed", "wexes", "whamo", "whams", "whang", "whaps", "whare", "whata", "whats", "whaup", "whaur", "wheal", "whear", "wheek", "wheen", "wheep", "wheft", "whelk", "whelm", "whens", "whets", "whews", "wheys", "whids", "whies", "whift", "whigs", "whilk", "whims", "whins", "whios", "whips", "whipt", "whirr", "whirs", "whish", "whiss", "whist", "whits", "whity", "whizz", "whomp", "whoof", "whoot", "whops", "whore", "whorl", "whort", "whoso", "whows", "whump", "whups", "whyda", "wicca", "wicks", "wicky", "widdy", "wides", "wiels", "wifed", "wifes", "wifey", "wifie", "wifts", "wifty", "wigan", "wigga", "wiggy", "wikis", "wilco", "wilds", "wiled", "wiles", "wilga", "wilis", "wilja", "wills", "wilts", "wimps", "winds", "wined", "wines", "winey", "winge", "wings", "wingy", "winks", "winky", "winna", "winns", "winos", "winze", "wiped", "wiper", "wipes", "wired", "wirer", "wires", "wirra", "wirri", "wised", "wises", "wisha", "wisht", "wisps", "wists", "witan", "wited", "wites", "withe", "withs", "withy", "wived", "wiver", "wives", "wizen", "wizes", "wizzo", "woads", "woady", "woald", "wocks", "wodge", "wodgy", "woful", "wojus", "woker", "wokka", "wolds", "wolfs", "wolly", "wolve", "womas", "wombs", "womby", "womyn", "wonga", "wongi", "wonks", "wonky", "wonts", "woods", "wooed", "woofs", "woofy", "woold", "wools", "woons", "woops", "woopy", "woose", "woosh", "wootz", "words", "works", "worky", "worms", "wormy", "worts", "wowed", "wowee", "wowse", "woxen", "wrang", "wraps", "wrapt", "wrast", "wrate", "wrawl", "wrens", "wrick", "wried", "wrier", "wries", "writs", "wroke", "wroot", "wroth", "wryer", "wuddy", "wudus", "wuffs", "wulls", "wunga", "wurst", "wuses", "wushu", "wussy", "wuxia", "wyled", "wyles", "wynds", "wynns", "wyted", "wytes", "wythe", "xebec", "xenia", "xenic", "xenon", "xeric", "xerox", "xerus", "xoana", "xolos", "xrays", "xviii", "xylan", "xylem", "xylic", "xylol", "xylyl", "xysti", "xysts", "yaars", "yaass", "yabas", "yabba", "yabby", "yacca", "yacka", "yacks", "yadda", "yaffs", "yager", "yages", "yagis", "yagna", "yahoo", "yaird", "yajna", "yakka", "yakow", "yales", "yamen", "yampa", "yampy", "yamun", "yandy", "yangs", "yanks", "yapok", "yapon", "yapps", "yappy", "yarak", "yarco", "yards", "yarer", "yarfa", "yarks", "yarns", "yarra", "yarrs", "yarta", "yarto", "yates", "yatra", "yauds", "yauld", "yaups", "yawed", "yawey", "yawls", "yawns", "yawny", "yawps", "yayas", "ybore", "yclad", "ycled", "ycond", "ydrad", "ydred", "yeads", "yeahs", "yealm", "yeans", "yeard", "years", "yecch", "yechs", "yechy", "yedes", "yeeds", "yeeek", "yeesh", "yeggs", "yelks", "yells", "yelms", "yelps", "yelts", "yenta", "yente", "yerba", "yerds", "yerks", "yeses", "yesks", "yests", "yesty", "yetis", "yetts", "yeuch", "yeuks", "yeuky", "yeven", "yeves", "yewen", "yexed", "yexes", "yfere", "yiked", "yikes", "yills", "yince", "yipes", "yippy", "yirds", "yirks", "yirrs", "yirth", "yites", "yitie", "ylems", "ylide", "ylids", "ylike", "ylkes", "ymolt", "ympes", "yobbo", "yobby", "yocks", "yodel", "yodhs", "yodle", "yogas", "yogee", "yoghs", "yogic", "yogin", "yogis", "yohah", "yohay", "yoick", "yojan", "yokan", "yoked", "yokeg", "yokel", "yoker", "yokes", "yokul", "yolks", "yolky", "yolps", "yomim", "yomps", "yonic", "yonis", "yonks", "yonny", "yoofs", "yoops", "yopos", "yoppo", "yores", "yorga", "yorks", "yorps", "youks", "yourn", "yours", "yourt", "youse", "yowed", "yowes", "yowie", "yowls", "yowsa", "yowza", "yoyos", "yrapt", "yrent", "yrivd", "yrneh", "ysame", "ytost", "yuans", "yucas", "yucca", "yucch", "yucko", "yucks", "yucky", "yufts", "yugas", "yuked", "yukes", "yukky", "yukos", "yulan", "yules", "yummo", "yummy", "yumps", "yupon", "yuppy", "yurta", "yurts", "yuzus", "zabra", "zacks", "zaida", "zaide", "zaidy", "zaire", "zakat", "zamac", "zamak", "zaman", "zambo", "zamia", "zamis", "zanja", "zante", "zanza", "zanze", "zappy", "zarda", "zarfs", "zaris", "zatis", "zawns", "zaxes", "zayde", "zayin", "zazen", "zeals", "zebec", "zebub", "zebus", "zedas", "zeera", "zeins", "zendo", "zerda", "zerks", "zeros", "zests", "zetas", "zexes", "zezes", "zhomo", "zhush", "zhuzh", "zibet", "ziffs", "zigan", "zikrs", "zilas", "zilch", "zilla", "zills", "zimbi", "zimbs", "zinco", "zincs", "zincy", "zineb", "zines", "zings", "zingy", "zinke", "zinky", "zinos", "zippo", "zippy", "ziram", "zitis", "zitty", "zizel", "zizit", "zlote", "zloty", "zoaea", "zobos", "zobus", "zocco", "zoeae", "zoeal", "zoeas", "zoism", "zoist", "zokor", "zolle", "zombi", "zonae", "zonda", "zoned", "zoner", "zones", "zonks", "zooea", "zooey", "zooid", "zooks", "zooms", "zoomy", "zoons", "zooty", "zoppa", "zoppo", "zoril", "zoris", "zorro", "zorse", "zouks", "zowee", "zowie", "zulus", "zupan", "zupas", "zuppa", "zurfs", "zuzim", "zygal", "zygon", "zymes", "zymic", "cigar", "rebut", "sissy", "humph", "awake", "blush", "focal", "evade", "naval", "serve", "heath", "dwarf", "model", "karma", "stink", "grade", "quiet", "bench", "abate", "feign", "major", "death", "fresh", "crust", "stool", "colon", "abase", "marry", "react", "batty", "pride", "floss", "helix", "croak", "staff", "paper", "unfed", "whelp", "trawl", "outdo", "adobe", "crazy", "sower", "repay", "digit", "crate", "cluck", "spike", "mimic", "pound", "maxim", "linen", "unmet", "flesh", "booby", "forth", "first", "stand", "belly", "ivory", "seedy", "print", "yearn", "drain", "bribe", "stout", "panel", "crass", "flume", "offal", "agree", "error", "swirl", "argue", "bleed", "delta", "flick", "totem", "wooer", "front", "shrub", "parry", "biome", "lapel", "start", "greet", "goner", "golem", "lusty", "loopy", "round", "audit", "lying", "gamma", "labor", "islet", "civic", "forge", "corny", "moult", "basic", "salad", "agate", "spicy", "spray", "essay", "fjord", "spend", "kebab", "guild", "aback", "motor", "alone", "hatch", "hyper", "thumb", "dowry", "ought", "belch", "dutch", "pilot", "tweed", "comet", "jaunt", "enema", "steed", "abyss", "growl", "fling", "dozen", "boozy", "erode", "world", "gouge", "click", "briar", "great", "altar", "pulpy", "blurt", "coast", "duchy", "groin", "fixer", "group", "rogue", "badly", "smart", "pithy", "gaudy", "chill", "heron", "vodka", "finer", "surer", "radio", "rouge", "perch", "retch", "wrote", "clock", "tilde", "store", "prove", "bring", "solve", "cheat", "grime", "exult", "usher", "epoch", "triad", "break", "rhino", "viral", "conic", "masse", "sonic", "vital", "trace", "using", "peach", "champ", "baton", "brake", "pluck", "craze", "gripe", "weary", "picky", "acute", "ferry", "aside", "tapir", "troll", "unify", "rebus", "boost", "truss", "siege", "tiger", "banal", "slump", "crank", "gorge", "query", "drink", "favor", "abbey", "tangy", "panic", "solar", "shire", "proxy", "point", "robot", "prick", "wince", "crimp", "knoll", "sugar", "whack", "mount", "perky", "could", "wrung", "light", "those", "moist", "shard", "pleat", "aloft", "skill", "elder", "frame", "humor", "pause", "ulcer", "ultra", "robin", "cynic", "aroma", "caulk", "shake", "dodge", "swill", "tacit", "other", "thorn", "trove", "bloke", "vivid", "spill", "chant", "choke", "rupee", "nasty", "mourn", "ahead", "brine", "cloth", "hoard", "sweet", "month", "lapse", "watch", "today", "focus", "smelt", "tease", "cater", "movie", "saute", "allow", "renew", "their", "slosh", "purge", "chest", "depot", "epoxy", "nymph", "found", "shall", "stove", "lowly", "snout", "trope", "fewer", "shawl", "natal", "comma", "foray", "scare", "stair", "black", "squad", "royal", "chunk", "mince", "shame", "cheek", "ample", "flair", "foyer", "cargo", "oxide", "plant", "olive", "inert", "askew", "heist", "shown", "zesty", "trash", "larva", "forgo", "story", "hairy", "train", "homer", "badge", "midst", "canny", "shine", "gecko", "farce", "slung", "tipsy", "metal", "yield", "delve", "being", "scour", "glass", "gamer", "scrap", "money", "hinge", "album", "vouch", "asset", "tiara", "crept", "bayou", "atoll", "manor", "creak", "showy", "phase", "froth", "depth", "gloom", "flood", "trait", "girth", "piety", "goose", "float", "donor", "atone", "primo", "apron", "blown", "cacao", "loser", "input", "gloat", "awful", "brink", "smite", "beady", "rusty", "retro", "droll", "gawky", "hutch", "pinto", "egret", "lilac", "sever", "field", "fluff", "agape", "voice", "stead", "berth", "madam", "night", "bland", "liver", "wedge", "roomy", "wacky", "flock", "angry", "trite", "aphid", "tryst", "midge", "power", "elope", "cinch", "motto", "stomp", "upset", "bluff", "cramp", "quart", "coyly", "youth", "rhyme", "buggy", "alien", "smear", "unfit", "patty", "cling", "glean", "label", "hunky", "khaki", "poker", "gruel", "twice", "twang", "shrug", "treat", "waste", "merit", "woven", "needy", "clown", "irony", "ruder", "gauze", "chief", "onset", "prize", "fungi", "charm", "gully", "inter", "whoop", "taunt", "leery", "class", "theme", "lofty", "tibia", "booze", "alpha", "thyme", "doubt", "parer", "chute", "stick", "trice", "alike", "recap", "saint", "glory", "grate", "admit", "brisk", "soggy", "usurp", "scald", "scorn", "leave", "twine", "sting", "bough", "marsh", "sloth", "dandy", "vigor", "howdy", "enjoy", "valid", "ionic", "equal", "floor", "catch", "spade", "stein", "exist", "quirk", "denim", "grove", "spiel", "mummy", "fault", "foggy", "flout", "carry", "sneak", "libel", "waltz", "aptly", "piney", "inept", "aloud", "photo", "dream", "stale", "unite", "snarl", "baker", "there", "glyph", "pooch", "hippy", "spell", "folly", "louse", "gulch", "vault", "godly", "threw", "fleet", "grave", "inane", "shock", "crave", "spite", "valve", "skimp", "claim", "rainy", "musty", "pique", "daddy", "quasi", "arise", "aging", "valet", "opium", "avert", "stuck", "recut", "mulch", "genre", "plume", "rifle", "count", "incur", "total", "wrest", "mocha", "deter", "study", "lover", "safer", "rivet", "funny", "smoke", "mound", "undue", "sedan", "pagan", "swine", "guile", "gusty", "equip", "tough", "canoe", "chaos", "covet", "human", "udder", "lunch", "blast", "stray", "manga", "melee", "lefty", "quick", "paste", "given", "octet", "risen", "groan", "leaky", "grind", "carve", "loose", "sadly", "spilt", "apple", "slack", "honey", "final", "sheen", "eerie", "minty", "slick", "derby", "wharf", "spelt", "coach", "erupt", "singe", "price", "spawn", "fairy", "jiffy", "filmy", "stack", "chose", "sleep", "ardor", "nanny", "niece", "woozy", "handy", "grace", "ditto", "stank", "cream", "usual", "diode", "valor", "angle", "ninja", "muddy", "chase", "reply", "prone", "spoil", "heart", "shade", "diner", "arson", "onion", "sleet", "dowel", "couch", "palsy", "bowel", "smile", "evoke", "creek", "lance", "eagle", "idiot", "siren", "built", "embed", "award", "dross", "annul", "goody", "frown", "patio", "laden", "humid", "elite", "lymph", "edify", "might", "reset", "visit", "gusto", "purse", "vapor", "crock", "write", "sunny", "loath", "chaff", "slide", "queer", "venom", "stamp", "sorry", "still", "acorn", "aping", "pushy", "tamer", "hater", "mania", "awoke", "brawn", "swift", "exile", "birch", "lucky", "freer", "risky", "ghost", "plier", "lunar", "winch", "snare", "nurse", "house", "borax", "nicer", "lurch", "exalt", "about", "savvy", "toxin", "tunic", "pried", "inlay", "chump", "lanky", "cress", "eater", "elude", "cycle", "kitty", "boule", "moron", "tenet", "place", "lobby", "plush", "vigil", "index", "blink", "clung", "qualm", "croup", "clink", "juicy", "stage", "decay", "nerve", "flier", "shaft", "crook", "clean", "china", "ridge", "vowel", "gnome", "snuck", "icing", "spiny", "rigor", "snail", "flown", "rabid", "prose", "thank", "poppy", "budge", "fiber", "moldy", "dowdy", "kneel", "track", "caddy", "quell", "dumpy", "paler", "swore", "rebar", "scuba", "splat", "flyer", "horny", "mason", "doing", "ozone", "amply", "molar", "ovary", "beset", "queue", "cliff", "magic", "truce", "sport", "fritz", "edict", "twirl", "verse", "llama", "eaten", "range", "whisk", "hovel", "rehab", "macaw", "sigma", "spout", "verve", "sushi", "dying", "fetid", "brain", "buddy", "thump", "scion", "candy", "chord", "basin", "march", "crowd", "arbor", "gayly", "musky", "stain", "dally", "bless", "bravo", "stung", "title", "ruler", "kiosk", "blond", "ennui", "layer", "fluid", "tatty", "score", "cutie", "zebra", "barge", "matey", "bluer", "aider", "shook", "river", "privy", "betel", "frisk", "bongo", "begun", "azure", "weave", "genie", "sound", "glove", "braid", "scope", "wryly", "rover", "assay", "ocean", "bloom", "irate", "later", "woken", "silky", "wreck", "dwelt", "slate", "smack", "solid", "amaze", "hazel", "wrist", "jolly", "globe", "flint", "rouse", "civil", "vista", "relax", "cover", "alive", "beech", "jetty", "bliss", "vocal", "often", "dolly", "eight", "joker", "since", "event", "ensue", "shunt", "diver", "poser", "worst", "sweep", "alley", "creed", "anime", "leafy", "bosom", "dunce", "stare", "pudgy", "waive", "choir", "stood", "spoke", "outgo", "delay", "bilge", "ideal", "clasp", "seize", "hotly", "laugh", "sieve", "block", "meant", "grape", "noose", "hardy", "shied", "drawl", "daisy", "putty", "strut", "burnt", "tulip", "crick", "idyll", "vixen", "furor", "geeky", "cough", "naive", "shoal", "stork", "bathe", "aunty", "check", "prime", "brass", "outer", "furry", "razor", "elect", "evict", "imply", "demur", "quota", "haven", "cavil", "swear", "crump", "dough", "gavel", "wagon", "salon", "nudge", "harem", "pitch", "sworn", "pupil", "excel", "stony", "cabin", "unzip", "queen", "trout", "polyp", "earth", "storm", "until", "taper", "enter", "child", "adopt", "minor", "fatty", "husky", "brave", "filet", "slime", "glint", "tread", "steal", "regal", "guest", "every", "murky", "share", "spore", "hoist", "buxom", "inner", "otter", "dimly", "level", "sumac", "donut", "stilt", "arena", "sheet", "scrub", "fancy", "slimy", "pearl", "silly", "porch", "dingo", "sepia", "amble", "shady", "bread", "friar", "reign", "dairy", "quill", "cross", "brood", "tuber", "shear", "posit", "blank", "villa", "shank", "piggy", "freak", "which", "among", "fecal", "shell", "would", "algae", "large", "rabbi", "agony", "amuse", "bushy", "copse", "swoon", "knife", "pouch", "ascot", "plane", "crown", "urban", "snide", "relay", "abide", "viola", "rajah", "straw", "dilly", "crash", "amass", "third", "trick", "tutor", "woody", "blurb", "grief", "disco", "where", "sassy", "beach", "sauna", "comic", "clued", "creep", "caste", "graze", "snuff", "frock", "gonad", "drunk", "prong", "lurid", "steel", "halve", "buyer", "vinyl", "utile", "smell", "adage", "worry", "tasty", "local", "trade", "finch", "ashen", "modal", "gaunt", "clove", "enact", "adorn", "roast", "speck", "sheik", "missy", "grunt", "snoop", "party", "touch", "mafia", "emcee", "array", "south", "vapid", "jelly", "skulk", "angst", "tubal", "lower", "crest", "sweat", "cyber", "adore", "tardy", "swami", "notch", "groom", "roach", "hitch", "young", "align", "ready", "frond", "strap", "puree", "realm", "venue", "swarm", "offer", "seven", "dryer", "diary", "dryly", "drank", "acrid", "heady", "theta", "junto", "pixie", "quoth", "bonus", "shalt", "penne", "amend", "datum", "build", "piano", "shelf", "lodge", "suing", "rearm", "coral", "ramen", "worth", "psalm", "infer", "overt", "mayor", "ovoid", "glide", "usage", "poise", "randy", "chuck", "prank", "fishy", "tooth", "ether", "drove", "idler", "swath", "stint", "while", "begat", "apply", "slang", "tarot", "radar", "credo", "aware", "canon", "shift", "timer", "bylaw", "serum", "three", "steak", "iliac", "shirk", "blunt", "puppy", "penal", "joist", "bunny", "shape", "beget", "wheel", "adept", "stunt", "stole", "topaz", "chore", "fluke", "afoot", "bloat", "bully", "dense", "caper", "sneer", "boxer", "jumbo", "lunge", "space", "avail", "short", "slurp", "loyal", "flirt", "pizza", "conch", "tempo", "droop", "plate", "bible", "plunk", "afoul", "savoy", "steep", "agile", "stake", "dwell", "knave", "beard", "arose", "motif", "smash", "broil", "glare", "shove", "baggy", "mammy", "swamp", "along", "rugby", "wager", "quack", "squat", "snaky", "debit", "mange", "skate", "ninth", "joust", "tramp", "spurn", "medal", "micro", "rebel", "flank", "learn", "nadir", "maple", "comfy", "remit", "gruff", "ester", "least", "mogul", "fetch", "cause", "oaken", "aglow", "meaty", "gaffe", "shyly", "racer", "prowl", "thief", "stern", "poesy", "rocky", "tweet", "waist", "spire", "grope", "havoc", "patsy", "truly", "forty", "deity", "uncle", "swish", "giver", "preen", "bevel", "lemur", "draft", "slope", "annoy", "lingo", "bleak", "ditty", "curly", "cedar", "dirge", "grown", "horde", "drool", "shuck", "crypt", "cumin", "stock", "gravy", "locus", "wider", "breed", "quite", "chafe", "cache", "blimp", "deign", "fiend", "logic", "cheap", "elide", "rigid", "false", "renal", "pence", "rowdy", "shoot", "blaze", "envoy", "posse", "brief", "never", "abort", "mouse", "mucky", "sulky", "fiery", "media", "trunk", "yeast", "clear", "skunk", "scalp", "bitty", "cider", "koala", "duvet", "segue", "creme", "super", "grill", "after", "owner", "ember", "reach", "nobly", "empty", "speed", "gipsy", "recur", "smock", "dread", "merge", "burst", "kappa", "amity", "shaky", "hover", "carol", "snort", "synod", "faint", "haunt", "flour", "chair", "detox", "shrew", "tense", "plied", "quark", "burly", "novel", "waxen", "stoic", "jerky", "blitz", "beefy", "lyric", "hussy", "towel", "quilt", "below", "bingo", "wispy", "brash", "scone", "toast", "easel", "saucy", "value", "spice", "honor", "route", "sharp", "bawdy", "radii", "skull", "phony", "issue", "lager", "swell", "urine", "gassy", "trial", "flora", "upper", "latch", "wight", "brick", "retry", "holly", "decal", "grass", "shack", "dogma", "mover", "defer", "sober", "optic", "crier", "vying", "nomad", "flute", "hippo", "shark", "drier", "obese", "bugle", "tawny", "chalk", "feast", "ruddy", "pedal", "scarf", "cruel", "bleat", "tidal", "slush", "semen", "windy", "dusty", "sally", "igloo", "nerdy", "jewel", "shone", "whale", "hymen", "abuse", "fugue", "elbow", "crumb", "pansy", "welsh", "syrup", "terse", "suave", "gamut", "swung", "drake", "freed", "afire", "shirt", "grout", "oddly", "tithe", "plaid", "dummy", "broom", "blind", "torch", "enemy", "again", "tying", "pesky", "alter", "gazer", "noble", "ethos", "bride", "extol", "decor", "hobby", "beast", "idiom", "utter", "these", "sixth", "alarm", "erase", "elegy", "spunk", "piper", "scaly", "scold", "hefty", "chick", "sooty", "canal", "whiny", "slash", "quake", "joint", "swept", "prude", "heavy", "wield", "femme", "lasso", "maize", "shale", "screw", "spree", "smoky", "whiff", "scent", "glade", "spent", "prism", "stoke", "riper", "orbit", "cocoa", "guilt", "humus", "shush", "table", "smirk", "wrong", "noisy", "alert", "shiny", "elate", "resin", "whole", "hunch", "pixel", "polar", "hotel", "sword", "cleat", "mango", "rumba", "puffy", "filly", "billy", "leash", "clout", "dance", "ovate", "facet", "chili", "paint", "liner", "curio", "salty", "audio", "snake", "fable", "cloak", "navel", "spurt", "pesto", "balmy", "flash", "unwed", "early", "churn", "weedy", "stump", "lease", "witty", "wimpy", "spoof", "saner", "blend", "salsa", "thick", "warty", "manic", "blare", "squib", "spoon", "probe", "crepe", "knack", "force", "debut", "order", "haste", "teeth", "agent", "widen", "icily", "slice", "ingot", "clash", "juror", "blood", "abode", "throw", "unity", "pivot", "slept", "troop", "spare", "sewer", "parse", "morph", "cacti", "tacky", "spool", "demon", "moody", "annex", "begin", "fuzzy", "patch", "water", "lumpy", "admin", "omega", "limit", "tabby", "macho", "aisle", "skiff", "basis", "plank", "verge", "botch", "crawl", "lousy", "slain", "cubic", "raise", "wrack", "guide", "foist", "cameo", "under", "actor", "revue", "fraud", "harpy", "scoop", "climb", "refer", "olden", "clerk", "debar", "tally", "ethic", "cairn", "tulle", "ghoul", "hilly", "crude", "apart", "scale", "older", "plain", "sperm", "briny", "abbot", "rerun", "quest", "crisp", "bound", "befit", "drawn", "suite", "itchy", "cheer", "bagel", "guess", "broad", "axiom", "chard", "caput", "leant", "harsh", "curse", "proud", "swing", "opine", "taste", "lupus", "gumbo", "miner", "green", "chasm", "lipid", "topic", "armor", "brush", "crane", "mural", "abled", "habit", "bossy", "maker", "dusky", "dizzy", "lithe", "brook", "jazzy", "fifty", "sense", "giant", "surly", "legal", "fatal", "flunk", "began", "prune", "small", "slant", "scoff", "torus", "ninny", "covey", "viper", "taken", "moral", "vogue", "owing", "token", "entry", "booth", "voter", "chide", "elfin", "ebony", "neigh", "minim", "melon", "kneed", "decoy", "voila", "ankle", "arrow", "mushy", "tribe", "cease", "eager", "birth", "graph", "odder", "terra", "weird", "tried", "clack", "color", "rough", "weigh", "uncut", "ladle", "strip", "craft", "minus", "dicey", "titan", "lucid", "vicar", "dress", "ditch", "gypsy", "pasta", "taffy", "flame", "swoop", "aloof", "sight", "broke", "teary", "chart", "sixty", "wordy", "sheer", "leper", "nosey", "bulge", "savor", "clamp", "funky", "foamy", "toxic", "brand", "plumb", "dingy", "butte", "drill", "tripe", "bicep", "tenor", "krill", "worse", "drama", "hyena", "think", "ratio", "cobra", "basil", "scrum", "bused", "phone", "court", "camel", "proof", "heard", "angel", "petal", "pouty", "throb", "maybe", "fetal", "sprig", "spine", "shout", "cadet", "macro", "dodgy", "satyr", "rarer", "binge", "trend", "nutty", "leapt", "amiss", "split", "myrrh", "width", "sonar", "tower", "baron", "fever", "waver", "spark", "belie", "sloop", "expel", "smote", "baler", "above", "north", "wafer", "scant", "frill", "awash", "snack", "scowl", "frail", "drift", "limbo", "fence", "motel", "ounce", "wreak", "revel", "talon", "prior", "knelt", "cello", "flake", "debug", "anode", "crime", "salve", "scout", "imbue", "pinky", "stave", "vague", "chock", "fight", "video", "stone", "teach", "cleft", "frost", "prawn", "booty", "twist", "apnea", "stiff", "plaza", "ledge", "tweak", "board", "grant", "medic", "bacon", "cable", "brawl", "slunk", "raspy", "forum", "drone", "women", "mucus", "boast", "toddy", "coven", "tumor", "truer", "wrath", "stall", "steam", "axial", "purer", "daily", "trail", "niche", "mealy", "juice", "nylon", "plump", "merry", "flail", "papal", "wheat", "berry", "cower", "erect", "brute", "leggy", "snipe", "sinew", "skier", "penny", "jumpy", "rally", "umbra", "scary", "modem", "gross", "avian", "greed", "satin", "tonic", "parka", "sniff", "livid", "stark", "trump", "giddy", "reuse", "taboo", "avoid", "quote", "devil", "liken", "gloss", "gayer", "beret", "noise", "gland", "dealt", "sling", "rumor", "opera", "thigh", "tonga", "flare", "wound", "white", "bulky", "etude", "horse", "circa", "paddy", "inbox", "fizzy", "grain", "exert", "surge", "gleam", "belle", "salvo", "crush", "fruit", "sappy", "taker", "tract", "ovine", "spiky", "frank", "reedy", "filth", "spasm", "heave", "mambo", "right", "clank", "trust", "lumen", "borne", "spook", "sauce", "amber", "lathe", "carat", "corer", "dirty", "slyly", "affix", "alloy", "taint", "sheep", "kinky", "wooly", "mauve", "flung", "yacht", "fried", "quail", "brunt", "grimy", "curvy", "cagey", "rinse", "deuce", "state", "grasp", "milky", "bison", "graft", "sandy", "baste", "flask", "hedge", "girly", "swash", "boney", "coupe", "endow", "abhor", "welch", "blade", "tight", "geese", "miser", "mirth", "cloud", "cabal", "leech", "close", "tenth", "pecan", "droit", "grail", "clone", "guise", "ralph", "tango", "biddy", "smith", "mower", "payee", "serif", "drape", "fifth", "spank", "glaze", "allot", "truck", "kayak", "virus", "testy", "tepee", "fully", "zonal", "metro", "curry", "grand", "banjo", "axion", "bezel", "occur", "chain", "nasal", "gooey", "filer", "brace", "allay", "pubic", "raven", "plead", "gnash", "flaky", "munch", "dully", "eking", "thing", "slink", "hurry", "theft", "shorn", "pygmy", "ranch", "wring", "lemon", "shore", "mamma", "froze", "newer", "style", "moose", "antic", "drown", "vegan", "chess", "guppy", "union", "lever", "lorry", "image", "cabby", "druid", "exact", "truth", "dopey", "spear", "cried", "chime", "crony", "stunk", "timid", "batch", "gauge", "rotor", "crack", "curve", "latte", "witch", "bunch", "repel", "anvil", "soapy", "meter", "broth", "madly", "dried", "scene", "known", "magma", "roost", "woman", "thong", "punch", "pasty", "downy", "knead", "whirl", "rapid", "clang", "anger", "drive", "goofy", "email", "music", "stuff", "bleep", "rider", "mecca", "folio", "setup", "verso", "quash", "fauna", "gummy", "happy", "newly", "fussy", "relic", "guava", "ratty", "fudge", "femur", "chirp", "forte", "alibi", "whine", "petty", "golly", "plait", "fleck", "felon", "gourd", "brown", "thrum", "ficus", "stash", "decry", "wiser", "junta", "visor", "daunt", "scree", "impel", "await", "press", "whose", "turbo", "stoop", "speak", "mangy", "eying", "inlet", "crone", "pulse", "mossy", "staid", "hence", "pinch", "teddy", "sully", "snore", "ripen", "snowy", "attic", "going", "leach", "mouth", "hound", "clump", "tonal", "bigot", "peril", "piece", "blame", "haute", "spied", "undid", "intro", "basal", "rodeo", "guard", "steer", "loamy", "scamp", "scram", "manly", "hello", "vaunt", "organ", "feral", "knock", "extra", "condo", "adapt", "willy", "polka", "rayon", "skirt", "faith", "torso", "match", "mercy", "tepid", "sleek", "riser", "twixt", "peace", "flush", "catty", "login", "eject", "roger", "rival", "untie", "refit", "aorta", "adult", "judge", "rower", "artsy", "rural", "shave", "bobby", "eclat", "fella", "gaily", "harry", "hasty", "hydro", "liege", "octal", "ombre", "payer", "sooth", "unset", "unlit", "vomit", "fanny", "fetus", "butch", "stalk", "flack", "widow", "augur"]
              , _a = {
                unknown: 0,
                absent: 1,
                present: 2,
                correct: 3
            };
            function Ea(e) {
                const a = ["th", "st", "nd", "rd"]
                  , s = e % 100;
                return e + (a[(s - 20) % 10] || a[s] || a[0])
            }
            const xa = 864e5
              , za = new Date(2021,5,19,0,0,0,0);
            function Na(e, a) {
                const s = new Date(e)
                  , t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
                return Math.round(t / xa)
            }
            const ja = "abcdefghijklmnopqrstuvwxyz"
              , Ca = e=>e.overlays
              , Sa = (0,
            G.P1)(Ca, (e=>e.modal))
              , Oa = (0,
            G.P1)(Ca, (e=>e.error))
              , Pa = (0,
            G.P1)(Ca, (e=>e.page))
              , La = (0,
            G.P1)(Ca, (e=>e.isNavModalOpen))
              , Aa = (0,
            G.P1)(Ca, (e=>e.toasts))
              , Ia = (0,
            G.P1)(Ca, (e=>e.isPageClosing))
              , Ta = (0,
            G.P1)(Ca, (e=>e.wasModalOpenedByClick))
              , Da = e=>e.persist.game
              , Ba = (0,
            G.P1)(Da, (e=>e.boardState))
              , Ma = (0,
            G.P1)(Da, (e=>e.status))
              , Ra = (0,
            G.P1)(Da, (e=>e.currentRowIndex))
              , Ga = (0,
            G.P1)([Ba, Ra], ((e,a)=>e[a]))
              , Wa = (0,
            G.P1)(Da, (e=>e.dayOffset || null))
              , qa = (0,
            G.P1)(Da, (e=>e.id))
              , Ha = (0,
            G.P1)(Da, (e=>e.timestamps.lastPlayed))
              , Va = (0,
            G.P1)(Da, (e=>e.timestamps.lastCompleted))
              , Fa = (0,
            G.P1)([Ba, Ra, ka], ((e,a,s)=>e.map(((e,t)=>t >= a ? null : function(e, a) {
                const s = Array(a.length).fill("absent")
                  , t = Array(a.length).fill(!0)
                  , o = Array(a.length).fill(!0);
                for (let r = 0; r < e.length; r += 1)
                    e[r] === a[r] && o[r] && (s[r] = "correct",
                    t[r] = !1,
                    o[r] = !1);
                for (let r = 0; r < e.length; r += 1) {
                    const n = e[r];
                    if (t[r])
                        for (let e = 0; e < a.length; e += 1) {
                            const t = a[e];
                            if (o[e] && n === t) {
                                s[r] = "present",
                                o[e] = !1;
                                break
                            }
                        }
                }
                return s
            }(e, s)))))
              , Ua = e=>e.transient
              , Ya = (0,
            G.P1)(Ua, (e=>e.isAnimatingRow))
              , Za = (0,
            G.P1)(Ua, (e=>e.isRestoringSession))
              , Ka = (0,
            G.P1)(Ua, (e=>e.lastRowInvalid))
              , Xa = (0,
            G.P1)(Ua, (e=>e.lastRowWin))
              , Ja = (0,
            G.P1)([Ma, Ya, Ra, Sa, Pa], ((e,a,s,t,o)=>"IN_PROGRESS" !== e || a || t || o || s >= Z))
              , Qa = (0,
            G.P1)([Ba, Fa, Ra, Ya, Za], ((e,a,s,t,o)=>{
                if (o)
                    return {};
                const r = t ? s - 1 : s;
                return function(e, a) {
                    const s = {};
                    return e.forEach(((e,t)=>{
                        const o = a[t];
                        if (o)
                            for (let a = 0; a < e.length; a += 1) {
                                const t = e[a]
                                  , r = o[a]
                                  , n = s[t] || "unknown";
                                _a[r] > _a[n] && (s[t] = r)
                            }
                    }
                    )),
                    s
                }(e, a.slice(0, r))
            }
            ))
              , $a = e=>e.persist.stats
              , es = (0,
            G.P1)([$a, Ha], ((e,a)=>e.hasPlayed || !!a))
              , as = (0,
            G.P1)($a, (e=>!!e.isOnStreak))
              , ss = (0,
            G.P1)($a, (e=>e.gamesPlayed))
              , ts = (0,
            G.P1)($a, (e=>e.gamesWon))
              , os = (0,
            G.P1)($a, (e=>e.maxStreak))
              , rs = (0,
            G.P1)($a, (e=>e.currentStreak))
              , ns = (0,
            G.P1)($a, (e=>e.guesses))
              , is = (0,
            G.P1)([as, Va], ((e,a)=>function() {
                let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                return !!e || !!a && 1 === Na(new Date(a), s)
            }
            ))
              , ls = (0,
            G.P1)([Fa, Wa, Ra, q, Ma, H, V], ((e,a,s,t,o,r,n)=>{
                let i = "Wordle ".concat(a);
                i += " ".concat("WIN" === o ? s : "X", "/").concat(Z),
                t && (i += "*");
                let l = "";
                return e.forEach((e=>{
                    e && (e.forEach((e=>{
                        if (!e)
                            return;
                        let a = "";
                        switch (e) {
                        case "correct":
                            a = (e=>e ? "🟧" : "🟩")(n);
                            break;
                        case "present":
                            a = (e=>e ? "🟦" : "🟨")(n);
                            break;
                        case "absent":
                            a = (e=>e ? "⬛" : "⬜")(r)
                        }
                        l += a
                    }
                    )),
                    l += "\n")
                }
                )),
                {
                    text: "".concat(i, "\n\n").concat(l.trim())
                }
            }
            ))
              , cs = "wordle/game/START_GAME"
              , ds = "wordle/game/CONTINUE_GAME"
              , us = "wordle/game/ADD_LETTER"
              , ms = "wordle/game/BACKSPACE"
              , ps = "wordle/game/EVALUATE_ROW"
              , ys = e=>(a,s)=>{
                const t = Ja(s())
                  , o = Ga(s());
                t || o.length >= K || a({
                    type: us,
                    payload: {
                        letter: e
                    }
                })
            }
              , gs = ()=>(e,a)=>{
                Ja(a()) || e({
                    type: ms
                })
            }
              , hs = ()=>(e,a)=>{
                const s = a()
                  , t = Ja(s)
                  , o = Ga(s)
                  , r = ka(s)
                  , n = Ba(s)
                  , i = Fa(s)
                  , l = Ra(s)
                  , c = q(s)
                  , d = is(s);
                if (t)
                    return;
                if (o.length !== K)
                    return e(Se({
                        text: r,
                        invalidate: !0
                    }));
                if (!function(e, a) {
                    return e === a || va.includes(e)
                }(o, r))
                    return e(Se({
                        text: "Not in word list",
                        invalidate: !0
                    }));
                if (c) {
                    const {validGuess: a, errorMessage: s} = function(e, a, s) {
                        if (!e || !a || !s)
                            return {
                                validGuess: !0
                            };
                        for (let t = 0; t < s.length; t += 1)
                            if ("correct" === s[t] && e[t] !== a[t])
                                return {
                                    validGuess: !1,
                                    errorMessage: "".concat(Ea(t + 1), " letter must be ").concat(a[t].toUpperCase())
                                };
                        const t = {};
                        for (let e = 0; e < s.length; e += 1)
                            ["correct", "present"].includes(s[e]) && (t[a[e]] ? t[a[e]] += 1 : t[a[e]] = 1);
                        const o = e.split("").reduce(((e,a)=>(e[a] ? e[a] += 1 : e[a] = 1,
                        e)), {})
                          , r = Object.keys(t);
                        for (let e = 0; e < r.length; e += 1) {
                            const a = r[e];
                            if ((o[a] || 0) < t[a])
                                return {
                                    validGuess: !1,
                                    errorMessage: "Guess must contain ".concat(a.toUpperCase())
                                }
                        }
                        return {
                            validGuess: !0
                        }
                    }(o, n[l - 1], i[l - 1]);
                    if (!a)
                        return e(Se({
                            text: s || "Not valid in hard mode",
                            invalidate: !0
                        }))
                }
                const u = l + 1
                  , m = o === r
                  , p = !m && u >= Z
                  , y = d()
                  , g = m && y;
                let h = "IN_PROGRESS";
                m ? h = "WIN" : p && (h = "FAIL"),
                "IN_PROGRESS" !== h && function() {
                    try {
                        N.setItem(z, !0)
                    } catch (e) {
                        console.error(e)
                    }
                }(),
                e({
                    type: ps,
                    payload: {
                        now: Date.now(),
                        status: h,
                        isStreak: g,
                        numGuesses: u,
                        guess: o
                    }
                })
            }
              , bs = ["timestamp", "schemaVersion"];
            const ks = "prod" === n.OB.name ? "https://www.nytimes.com" : "https://www.stg.nytimes.com"
              , fs = "wordle/api/MOOGLE_OPT_IN"
              , ws = "wordle/api/LOAD_MOOGLE_GET"
              , vs = "wordle/api/MOOGLE_GET_SUCCESS"
              , _s = "wordle/api/MOOGLE_GET_ERROR"
              , Es = "wordle/api/LOAD_MOOGLE_POST"
              , xs = "wordle/api/MOOGLE_POST_SUCCESS"
              , zs = "wordle/api/MOOGLE_POST_ERROR"
              , Ns = "wordle/api/MOOGLE_POST_RESET"
              , js = "wordle/api/LOAD_SOLUTION"
              , Cs = "wordle/api/SOLUTION_SUCCESS"
              , Ss = "wordle/api/SOLUTION_ERROR"
              , Os = "wordle/api/LOAD_PROFILE_INFO"
              , Ps = "wordle/api/PROFILE_INFO_SUCCESS"
              , Ls = "wordle/api/PROFILE_INFO_ERROR"
              , As = "wordle/api/START_SYNC"
              , Is = "wordle/api/APP_LOADED"
              , Ts = e=>{
                let {today: a} = e;
                return e=>{
                    return e({
                        type: js
                    }),
                    n.Be.get((s = a,
                    "".concat(n.OB.edge, "/svc/wordle/v2/").concat((0,
                    Ie.Z)(s, "yyyy-MM-dd"), ".json"))).catch((e=>{
                        if ("1970-01-01" === (0,
                        Ie.Z)(a, "yyyy-MM-dd")) {
                            const s = ["message: ".concat(e.message), "today: ".concat(a), "new Date(): ".concat(new Date), "new Date().getTimezoneOffset(): ".concat((new Date).getTimezoneOffset()), "Intl.DateTimeFormat().resolvedOptions().timeZone: ".concat(Intl.DateTimeFormat().resolvedOptions().timeZone)];
                            e.message = s.join(", "),
                            (0,
                            n.lY)(new Error(e.message), {
                                api: "games-puzzles",
                                category: "wordle-solution-date-invalid"
                            })
                        } else
                            (0,
                            n.lY)(new Error(e.message), {
                                api: "games-puzzles",
                                category: "wordle-solution"
                            });
                        throw e
                    }
                    )).then((a=>{
                        if (!a.hasOwnProperty("solution"))
                            throw new Error;
                        !function(a) {
                            e({
                                type: Cs,
                                payload: {
                                    data: {
                                        solution: a.solution,
                                        dayOffset: a.days_since_launch,
                                        id: a.id,
                                        editor: a.editor
                                    }
                                }
                            })
                        }(a)
                    }
                    )).catch((a=>{
                        e({
                            type: Ss
                        }),
                        a.message && "No internet" === a.message ? e(ze("offline")) : e(ze("default"))
                    }
                    ));
                    var s
                }
            }
              , Ds = ()=>{
                window.NativeBridge && window.NativeBridge.gamesGetUserDetails().then((e=>{
                    if (e.success) {
                        const {values: {gamesGetUserDetails: {nytsCookie: a, isUserLoggedIn: s}}} = e
                          , t = -9999999999
                          , o = new Date((new Date).getTime() + t);
                        s ? ((0,
                        M.Z)("User is logged in. Setting NYT-S cookie on webview", [a]),
                        document.cookie = "NYT-S=".concat(e.values.gamesGetUserDetails.nytsCookie, "; path=/; domain=nytimes.com; secure;"),
                        document.cookie = "SIDNY=; max-age=".concat(t, "; expires=").concat(o, ";")) : ((0,
                        M.Z)("User is not logged in. Deleting any existing cookies"),
                        document.cookie = "NYT-S=; max-age=".concat(t, "; expires=").concat(o),
                        document.cookie = "SIDNY=; max-age=".concat(t, "; expires=").concat(o))
                    }
                }
                ))
            }
              , Bs = "user not authenticated for GET /state"
              , Ms = e=>{
                let {fetchFromMoogle: a, optIn: s=!1} = e;
                return e=>a && (()=>{
                    const e = document.cookie.toLowerCase();
                    return e.includes("nyt-s") || e.includes("sidny")
                }
                )() ? (e({
                    type: ws
                }),
                n.Be.get("".concat(ks, "/svc/games/state/wordle/latest"), {
                    withCookie: !1
                }).then((a=>{
                    if ("forbidden" === a.error)
                        throw new Error(Bs);
                    if (!a.timestamp && !a.user_id)
                        throw new Error("malformed Moogle response data");
                    e({
                        type: vs,
                        payload: {
                            data: a,
                            optIn: s
                        }
                    })
                }
                )).catch((a=>{
                    a.message !== Bs && e({
                        type: _s,
                        payload: {
                            message: a.message
                        }
                    })
                }
                ))) : Promise.resolve()
            }
              , Rs = e=>(a,s)=>{
                const t = ia(s())
                  , {timestamp: o, schemaVersion: r} = e
                  , i = function(e, a) {
                    if (null == e)
                        return {};
                    var s, t, o = function(e, a) {
                        if (null == e)
                            return {};
                        var s, t, o = {}, r = Object.keys(e);
                        for (t = 0; t < r.length; t++)
                            s = r[t],
                            a.indexOf(s) >= 0 || (o[s] = e[s]);
                        return o
                    }(e, a);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        for (t = 0; t < r.length; t++)
                            s = r[t],
                            a.indexOf(s) >= 0 || Object.prototype.propertyIsEnumerable.call(e, s) && (o[s] = e[s])
                    }
                    return o
                }(e, bs);
                return t ? (a({
                    type: Es
                }),
                n.Be.post("".concat(ks, "/svc/games/state"), {
                    game: "wordle",
                    game_data: i,
                    puzzle_id: "1",
                    schema_version: r || "0.0.0",
                    timestamp: o,
                    user_id: t
                }, {
                    withCookie: !1
                }).then((e=>{
                    if (!e.version)
                        throw new Error("malformed Moogle response data");
                    a({
                        type: xs,
                        payload: {
                            data: e
                        }
                    })
                }
                )).catch((s=>{
                    a({
                        type: zs,
                        payload: {
                            saveData: e
                        }
                    }),
                    a(Se({
                        text: "There was an error while saving. Please refresh the page and try again",
                        duration: 3e3,
                        isSystem: !0
                    }))
                }
                ))) : Promise.resolve()
            }
              , Gs = e=>{
                let {optIn: a=!1, printDate: s=null} = e;
                return e=>{
                    let t = new Date
                      , o = !0;
                    return s && (t = new Date("".concat(s, "T12:00:00")),
                    o = !1),
                    a && e({
                        type: fs
                    }),
                    Promise.all([e(Ms({
                        fetchFromMoogle: o,
                        optIn: a
                    })), e(Ts({
                        today: t
                    }))]).then((()=>{
                        e(((e,a)=>{
                            const s = a()
                              , t = la(s)
                              , o = ia(s);
                            if (t) {
                                const e = $(!0) || ee()
                                  , a = J(!0, o);
                                Q(a, e)
                            }
                        }
                        ))
                    }
                    )).then((()=>{
                        e(((e,a)=>{
                            const s = a()
                              , t = ra(s)
                              , o = ia(s)
                              , r = na(s) || 0
                              , n = ea(s)
                              , i = $(n, o)
                              , l = (null == i ? void 0 : i.timestamp) || 0;
                            return e((e=>({
                                type: wa,
                                payload: e
                            }))(r && r >= l ? t : i || ee()))
                        }
                        )),
                        e(((e,a)=>{
                            var s;
                            const t = Ra(a())
                              , o = Wa(a())
                              , r = fa(a())
                              , n = Ma(a());
                            if (("prod" === (null === (s = window.env) || void 0 === s ? void 0 : s.name) || !document.location.search.includes("reset")) && o && o === r)
                                return e({
                                    type: ds,
                                    payload: {
                                        currentRowIndex: t
                                    }
                                });
                            e({
                                type: cs,
                                payload: {
                                    id: ha(a()),
                                    numRows: Z,
                                    dayOffset: r,
                                    isOnStreak: "WIN" === n && !!o && r - o <= 1
                                }
                            })
                        }
                        )),
                        e({
                            type: Is,
                            payload: {
                                appLoaded: !0
                            }
                        })
                    }
                    )).catch((e=>{
                        console.error("loadApp promise rejected", e)
                    }
                    ))
                }
            }
            ;
            var Ws = s(4403)
              , qs = s.n(Ws);
            const Hs = (e,a)=>{
                let s;
                return function() {
                    for (var t = arguments.length, o = new Array(t), r = 0; r < t; r++)
                        o[r] = arguments[r];
                    const n = this;
                    clearTimeout(s),
                    s = setTimeout((()=>e.apply(n, o)), a)
                }
            }
            ;
            var Vs = ()=>{
                const [e,a] = (0,
                t.useState)({
                    winHeight: window.innerHeight,
                    winWidth: window.innerWidth
                });
                return (0,
                t.useEffect)((()=>{
                    const e = Hs((()=>{
                        a({
                            winHeight: window.innerHeight,
                            winWidth: window.innerWidth
                        })
                    }
                    ), 50);
                    return window.addEventListener("resize", e),
                    ()=>window.removeEventListener("resize", e)
                }
                ), []),
                e
            }
            ;
            const Fs = e=>{
                let {winHeight: a, winWidth: s} = e;
                const t = s / a;
                return a <= 650 && t > 1.8 || a < 400 && t > 1
            }
            ;
            var Us = ()=>{
                const e = (e=>{
                    const {winHeight: a, winWidth: s} = Vs();
                    return e({
                        winHeight: a,
                        winWidth: s
                    })
                }
                )(Fs)
                  , a = U(H);
                return e ? t.createElement(t.Fragment, null, t.createElement("div", {
                    "data-testid": "landscape-warning",
                    className: qs()("LandscapeWarning-module_landscapeWarning__MFIwn", a ? "LandscapeWarning-module_darkMode__Y36XD" : "")
                }, t.createElement("i", {
                    className: "LandscapeWarning-module_rotate__Qrx4Q"
                }), t.createElement("p", null, "Oh no! We can’t fit everything on your screen.", t.createElement("br", null), t.createElement("span", null, "Please rotate your device.")))) : null
            }
              , Ys = e=>{
                let {buttonStyle: a, textStyle: s, handler: o, trackData: r} = e;
                return t.createElement("button", {
                    type: "button",
                    "data-testid": "back-button",
                    className: qs()("BackButton-module_backButton__W2d63", a),
                    onClick: ()=>{
                        var e;
                        const {elementName: a, context: s, moduleLabel: t} = r;
                        (0,
                        n.$g)("click", s, a, "back", t),
                        o && o(),
                        null === (e = window.NativeBridge) || void 0 === e || e.gamesBackToHub()
                    }
                }, t.createElement("span", {
                    className: qs()("BackButton-module_backButtonText__myVSA", s)
                }, "Back"))
            }
            ;
            const Zs = e=>{
                let {children: a} = e;
                return window.isHybridWebView || window.newsreaderAppPlatform ? null : a
            }
              , Ks = e=>{
                let {children: a} = e;
                return window.isHybridWebView && window.NativeBridge ? a : null
            }
            ;
            var Xs = s(2652);
            const Js = e=>{
                let {icon: a} = e;
                return t.createElement("i", {
                    className: "pz-icon pz-icon-".concat(a)
                })
            }
            ;
            Js.propTypes = {
                icon: s.n(Xs)().string.isRequired
            };
            var Qs = Js
              , $s = e=>{
                let {title: a, icon: s, message: o, ctaLink: r, newTab: n, showMultipleIconsBanner: i, onClickLink: l, onVisible: c} = e;
                return (0,
                t.useEffect)((()=>{
                    c && c()
                }
                ), [c]),
                i ? t.createElement("a", {
                    href: null != r ? r : "",
                    target: n ? "_blank" : "_self",
                    rel: "noopener noreferrer",
                    onClick: ()=>{
                        l && l()
                    }
                    ,
                    className: "NonDismissalBanner-module_multiIconBannerTest__t8tvf",
                    "aria-live": "polite"
                }, t.createElement("div", {
                    className: "NonDismissalBanner-module_bannerInformationTest__Q0Dqp",
                    "aria-label": "Information"
                }, t.createElement("div", {
                    className: "NonDismissalBanner-module_iconHolder__PGtkn"
                }, t.createElement(Qs, {
                    icon: "daily"
                }), t.createElement(Qs, {
                    icon: "mini"
                }), t.createElement(Qs, {
                    icon: "spelling-bee"
                }), t.createElement(Qs, {
                    icon: "tiles"
                }), t.createElement(Qs, {
                    icon: "sudoku"
                }), t.createElement(Qs, {
                    icon: "wordle"
                })), t.createElement("div", {
                    className: "NonDismissalBanner-module_bannerBodyTest__UrtZZ"
                }, t.createElement("h3", null, a))), t.createElement("button", {
                    className: "NonDismissalBanner-module_iconButtonTest__oaGgl",
                    type: "button"
                }, t.createElement(Qs, {
                    icon: "caret-right"
                }))) : t.createElement("a", {
                    href: null != r ? r : "",
                    target: n ? "_blank" : "_self",
                    rel: "noopener noreferrer",
                    onClick: ()=>{
                        l && l()
                    }
                    ,
                    className: "NonDismissalBanner-module_banner__CqPDp",
                    "aria-live": "polite"
                }, t.createElement("button", {
                    className: "NonDismissalBanner-module_iconButton__hwSOB",
                    type: "button"
                }, t.createElement(Qs, {
                    icon: "caret-right"
                })), t.createElement("div", {
                    className: qs()("NonDismissalBanner-module_bannerInformation__hwApG", {
                        "NonDismissalBanner-module_bannerMessageIcon__xCwfD": o
                    }),
                    "aria-label": "Information"
                }, t.createElement(Qs, {
                    icon: null != s ? s : ""
                }), t.createElement("div", {
                    className: qs()("NonDismissalBanner-module_bannerBody__ZtWzl", {
                        "NonDismissalBanner-module_clickArea__oNUnX": !o
                    })
                }, t.createElement("h3", {
                    className: o ? "NonDismissalBanner-module_bannerMessageTitle__BJkZ4" : ""
                }, a), o && t.createElement("p", null, o))))
            }
              , et = e=>(0,
            t.useContext)(_)[e];
            function at() {
                return !(void 0 === window || !window.isHybridWebView)
            }
            function st() {
                return !(void 0 === window || !window.newsreaderAppPlatform)
            }
            function tt(e) {
                let {children: a, optIn: s, lireOfferAsset: o, styles: r="", trackEvent: n, ariaLabel: i=""} = e;
                const l = F()
                  , c = et("loginOffer")
                  , d = window.isHybridWebView;
                let u = s ? Ue : Ye;
                !s && o && c && !st() && (u = Ze(o));
                const m = d ? void 0 : u;
                return t.createElement("a", {
                    className: r,
                    "aria-label": i,
                    href: m,
                    onClick: ()=>{
                        if (n) {
                            const {eventName: e, sendContext: a, element: s} = n;
                            l(Pe(e, a, s))
                        }
                        var e;
                        d && (null === (e = window.NativeBridge) || void 0 === e || e.gamesAuthenticateUser("login").then((e=>{
                            var a, t;
                            const o = null === (a = e.values) || void 0 === a ? void 0 : a.aborted
                              , r = !0 === o || "true" === o;
                            e.success && !r && (null !== (t = e.values) && void 0 !== t && t.gamesAuthenticateUser.regiID && s && l({
                                type: fs
                            }),
                            l({
                                type: Is,
                                payload: {
                                    appLoaded: !1
                                }
                            }))
                        }
                        )))
                    }
                }, a)
            }
            var ot = "Welcome-module_contentWelcome__TL17B"
              , rt = "Welcome-module_contentWelcomeContainer__UO4Ei"
              , nt = "Welcome-module_title__uhLqe"
              , it = "Welcome-module_small__gRQGu"
              , lt = "Welcome-module_wordleMeta__P_0lJ"
              , ct = "Welcome-module_back__cUvW3";
            const dt = e=>{
                let {small: a} = e;
                return t.createElement("div", {
                    className: qs()({
                        "Welcome-module_smallIconAndTitle__iKdFc": a
                    })
                }, t.createElement("div", {
                    className: qs()("Welcome-module_icon__iYwGT", {
                        [it]: a
                    })
                }), t.createElement("div", {
                    className: qs()(nt, {
                        [it]: a
                    })
                }, "Wordle"))
            }
              , ut = e=>{
                let {children: a} = e;
                return t.createElement("div", {
                    className: "Welcome-module_subtitle__rL8EE"
                }, a)
            }
              , mt = e=>{
                let {dayOffset: a, editor: s} = e;
                if (!a)
                    return null;
                const o = function(e) {
                    const a = new Date(za.valueOf());
                    return a.setDate(a.getDate() + e),
                    a
                }(a).toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })
                  , r = s && null != a && a >= 506;
                return t.createElement("div", {
                    className: "Welcome-module_dateContainer__GTeM2"
                }, t.createElement("div", {
                    className: "Welcome-module_date__Fmbmx"
                }, o), t.createElement("div", {
                    className: lt
                }, "No. ", a), r && t.createElement("div", {
                    className: lt
                }, "Edited by ", s))
            }
              , pt = e=>{
                let {buttons: a} = e;
                return t.createElement("div", {
                    className: "Welcome-module_buttonContainer__K4GEw"
                }, a.filter((e=>!e.hide)).map((e=>{
                    let {onClick: a, text: s, secondary: o, isLogin: r} = e;
                    const n = t.createElement("button", {
                        key: s,
                        "data-testid": s,
                        type: "button",
                        onClick: a,
                        className: qs()("Welcome-module_button__ZG0Zh", {
                            "Welcome-module_secondary__fv3cc": o
                        })
                    }, s);
                    return r ? t.createElement(tt, {
                        key: s,
                        optIn: !1
                    }, n) : n
                }
                )))
            }
            ;
            var yt = {
                container: "Note-module_container__TXglF",
                note: "Note-module_note__lbrbA",
                statsIcon: "Note-module_statsIcon__RRy1C",
                moreLink: "Note-module_moreLink__uzCuy",
                noteHeader: "Note-module_noteHeader__jt707",
                noteDescription: "Note-module_noteDescription__QmvW2",
                noteSummary: "Note-module_noteSummary__niOPe"
            };
            function gt(e) {
                let {closeMoment: a, trackLink: s} = e;
                const o = F();
                return t.createElement("div", {
                    className: yt.container
                }, t.createElement("div", {
                    className: yt.note
                }, t.createElement("div", {
                    className: yt.statsIcon
                }, t.createElement("img", {
                    alt: "Wordle",
                    style: {
                        content: "var(--wordle-stats-mini)"
                    }
                })), t.createElement("div", null, t.createElement("div", {
                    className: yt.noteHeader
                }, "NOTE"), t.createElement("div", {
                    className: yt.noteDescription
                }, "See your stats wherever you play."), t.createElement("div", {
                    className: yt.noteSummary
                }, "To see your stats in the app, go to where you normally play and link them to a free account."), t.createElement("button", {
                    className: yt.moreLink,
                    type: "button",
                    onClick: ()=>{
                        a(),
                        o(ve("linkInfo")),
                        s()
                    }
                }, "Tell me more"))))
            }
            var ht = function(e, a) {
                const s = (0,
                t.useRef)(e);
                (0,
                t.useLayoutEffect)((()=>{
                    s.current = e
                }
                ), [e]),
                (0,
                t.useEffect)((()=>{
                    if (!a && 0 !== a)
                        return;
                    const e = setTimeout((()=>s.current()), a);
                    return ()=>clearTimeout(e)
                }
                ), [a])
            }
              , bt = {
                spinner: "Spinner-module_spinner__GJU3x",
                spin: "Spinner-module_spin__D72mN"
            };
            function kt(e) {
                let {circleColor: a="#DFDFDF", barColor: s="#959595"} = e;
                return t.createElement("svg", {
                    className: bt.spinner,
                    "data-testid": "spinner",
                    width: "82",
                    height: "82",
                    viewBox: "0 0 82 82",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, t.createElement("circle", {
                    cx: "41",
                    cy: "41",
                    r: "40.0391",
                    stroke: a,
                    strokeWidth: "1.92188"
                }), t.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.4763 73.6983L18.4497 75.3237C24.8956 79.5452 32.6028 82 40.8834 82C62.8396 82 80.7649 64.7413 81.833 43.05H79.9087C78.8425 63.6793 61.778 80.0781 40.8834 80.0781C32.9802 80.0781 25.6251 77.732 19.4763 73.6983Z",
                    fill: s
                }))
            }
            const ft = "wordle/transient/LAST_TILE_REVEAL"
              , wt = "wordle/transient/REMOVE_INVALID"
              , vt = ()=>({
                type: wt
            })
              , _t = e=>(a,s)=>{
                const t = s()
                  , o = Ra(t)
                  , r = Ma(t)
                  , n = ka(t)
                  , i = Za(t);
                if (e === o - 1 && (a({
                    type: ft
                }),
                ["WIN", "FAIL"].includes(r))) {
                    if (i)
                        return a(we("stats"));
                    "WIN" === r && a(Se({
                        text: X[o - 1],
                        duration: 2e3,
                        win: !0
                    })),
                    "FAIL" === r && a(Se({
                        text: n.toUpperCase(),
                        duration: 1 / 0
                    })),
                    setTimeout((()=>{
                        a(we("stats"))
                    }
                    ), 2500)
                }
            }
            ;
            var Et = {
                tile: "Tile-module_tile__UWEHN",
                small: "Tile-module_small__dKW39",
                PopIn: "Tile-module_PopIn__CmX51",
                FlipIn: "Tile-module_FlipIn__PCdh1",
                FlipOut: "Tile-module_FlipOut__xeJcb"
            };
            function xt(e) {
                let {letter: a, evaluation: s, flipDelay: o=0, onFlipEnd: r, small: n=!1} = e;
                const [i,l] = t.useState("idle")
                  , [c,d] = t.useState(!1)
                  , u = t.useRef(!1);
                t.useEffect((()=>{
                    u.current && a && l("pop"),
                    u.current = !0
                }
                ), [a]),
                ht((()=>l("flip-in")), s && !c && "flip-in" !== i ? o : null);
                let m = "empty";
                c && s ? m = s : a && (m = "tbd");
                let p = "empty";
                return c && s ? p = "".concat(a, " ").concat(m) : a && (p = a),
                t.createElement("div", {
                    className: qs()(Et.tile, {
                        [Et.small]: n
                    }),
                    onAnimationEnd: e=>{
                        e.animationName === Et.PopIn && "pop" === i && l("idle"),
                        e.animationName === Et.FlipIn && (d(!0),
                        l("flip-out")),
                        e.animationName === Et.FlipOut && (l("idle"),
                        r && r())
                    }
                    ,
                    role: "img",
                    "aria-roledescription": "tile",
                    "aria-label": p,
                    "aria-live": "polite",
                    "data-state": m,
                    "data-animation": i || "idle",
                    "data-testid": "tile"
                }, a)
            }
            var zt = {
                row: "Row-module_row__pwpBq",
                invalid: "Row-module_invalid__RNDXZ",
                Shake: "Row-module_Shake__LeteU",
                win: "Row-module_win__U9cQp",
                Bounce: "Row-module_Bounce__TMGbC"
            };
            function Nt(e) {
                const {letters: a, evaluation: s, rowIndex: o, length: r, invalid: n, win: i, removeInvalid: l, onFlipEnd: c} = e
                  , d = U(Za) ? 100 : 300;
                return t.createElement("div", {
                    className: qs()(zt.row, {
                        [zt.invalid]: n
                    }),
                    onAnimationEnd: e=>{
                        e.animationName === zt.Shake && l()
                    }
                    ,
                    role: "group",
                    "aria-label": "Row ".concat(o + 1)
                }, Array(r).fill(!0).map(((e,o)=>t.createElement("div", {
                    key: o,
                    className: i ? zt.win : "",
                    style: {
                        animationDelay: "".concat(100 * o, "ms")
                    }
                }, t.createElement(xt, {
                    letter: a[o] || "",
                    evaluation: s && s[o],
                    flipDelay: o * d,
                    onFlipEnd: o === r - 1 ? c : void 0
                })))))
            }
            var jt = {
                boardContainer: "Board-module_boardContainer__TBHNL",
                board: "Board-module_board__jeoPS"
            };
            const Ct = 350
              , St = (e,a,s)=>Math.min(Math.max(e, a), s);
            function Ot(e) {
                let {adProps: a={}} = e;
                const {couldHaveAd: s, hasAd: o, pageScrollable: r} = a
                  , n = Vs()
                  , i = U(Ba)
                  , l = U(Fa)
                  , c = U(Ra)
                  , d = U(Ka)
                  , u = U(Xa)
                  , m = F()
                  , p = t.useRef(null)
                  , y = t.useRef(null);
                return t.useEffect((()=>{
                    (()=>{
                        const e = p.current
                          , a = y.current;
                        if (!e || !a)
                            return;
                        const t = s && o ? 300 : 0
                          , r = Math.floor(e.clientHeight * (K / Z))
                          , n = St(r, t, Ct)
                          , i = Math.floor(n / K) * Z;
                        a.style.width = "".concat(n, "px"),
                        a.style.height = "".concat(i, "px"),
                        e.style.overflow = s && o && n === t ? "unset" : ""
                    }
                    )()
                }
                ), [o, n, r]),
                t.createElement("div", {
                    className: jt.boardContainer,
                    ref: p
                }, t.createElement("div", {
                    className: jt.board,
                    ref: y
                }, Array(Z).fill(!0).map(((e,a)=>t.createElement(Nt, {
                    key: a,
                    letters: i[a] || "",
                    length: K,
                    evaluation: l[a],
                    rowIndex: a,
                    invalid: a === c && d,
                    win: a === c - 1 && u,
                    removeInvalid: ()=>m(vt()),
                    onFlipEnd: ()=>m(_t(a))
                })))))
            }
            const Pt = {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24"
            }
              , Lt = {
                width: "24",
                height: "24",
                viewBox: "4 4 24 24"
            }
              , At = {
                width: "28",
                height: "28",
                viewBox: "4 4 24 24"
            };
            var It = e=>{
                const [a,s] = (0,
                t.useState)(Lt)
                  , o = "help" === e || "statistics" === e || "settings" === e;
                return (0,
                t.useEffect)((()=>{
                    function e() {
                        let e = Lt;
                        window.matchMedia("(min-width: 768px)").matches && (e = At),
                        s(e)
                    }
                    return o ? (e(),
                    window.addEventListener("resize", e)) : s(Pt),
                    ()=>{
                        o && window.removeEventListener("resize", e)
                    }
                }
                ), []),
                a
            }
            ;
            const Tt = {
                help: "M14.8333 23H17.1666V20.6667H14.8333V23ZM15.9999 4.33334C9.55992 4.33334 4.33325 9.56001 4.33325 16C4.33325 22.44 9.55992 27.6667 15.9999 27.6667C22.4399 27.6667 27.6666 22.44 27.6666 16C27.6666 9.56001 22.4399 4.33334 15.9999 4.33334ZM15.9999 25.3333C10.8549 25.3333 6.66659 21.145 6.66659 16C6.66659 10.855 10.8549 6.66668 15.9999 6.66668C21.1449 6.66668 25.3333 10.855 25.3333 16C25.3333 21.145 21.1449 25.3333 15.9999 25.3333ZM15.9999 9.00001C13.4216 9.00001 11.3333 11.0883 11.3333 13.6667H13.6666C13.6666 12.3833 14.7166 11.3333 15.9999 11.3333C17.2833 11.3333 18.3333 12.3833 18.3333 13.6667C18.3333 16 14.8333 15.7083 14.8333 19.5H17.1666C17.1666 16.875 20.6666 16.5833 20.6666 13.6667C20.6666 11.0883 18.5783 9.00001 15.9999 9.00001Z",
                settings: "M25.52 17.2534C25.5733 16.8534 25.6 16.44 25.6 16C25.6 15.5734 25.5733 15.1467 25.5067 14.7467L28.2133 12.64C28.4533 12.4534 28.52 12.0934 28.3733 11.8267L25.8133 7.40004C25.6533 7.10671 25.32 7.01338 25.0267 7.10671L21.84 8.38671C21.1733 7.88004 20.4667 7.45338 19.68 7.13338L19.2 3.74671C19.1467 3.42671 18.88 3.20004 18.56 3.20004H13.44C13.12 3.20004 12.8666 3.42671 12.8133 3.74671L12.3333 7.13338C11.5467 7.45338 10.8267 7.89338 10.1733 8.38671L6.98665 7.10671C6.69332 7.00004 6.35998 7.10671 6.19998 7.40004L3.65332 11.8267C3.49332 12.1067 3.54665 12.4534 3.81332 12.64L6.51998 14.7467C6.45332 15.1467 6.39998 15.5867 6.39998 16C6.39998 16.4134 6.42665 16.8534 6.49332 17.2534L3.78665 19.36C3.54665 19.5467 3.47998 19.9067 3.62665 20.1734L6.18665 24.6C6.34665 24.8934 6.67998 24.9867 6.97332 24.8934L10.16 23.6134C10.8267 24.12 11.5333 24.5467 12.32 24.8667L12.8 28.2534C12.8667 28.5734 13.12 28.8 13.44 28.8H18.56C18.88 28.8 19.1467 28.5734 19.1867 28.2534L19.6667 24.8667C20.4533 24.5467 21.1733 24.12 21.8267 23.6134L25.0133 24.8934C25.3067 25 25.64 24.8934 25.8 24.6L28.36 20.1734C28.52 19.88 28.4533 19.5467 28.2 19.36L25.52 17.2534ZM16 20.8C13.36 20.8 11.2 18.64 11.2 16C11.2 13.36 13.36 11.2 16 11.2C18.64 11.2 20.8 13.36 20.8 16C20.8 18.64 18.64 20.8 16 20.8Z",
                backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
                close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
                share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
                statistics: "M20.6666 14.8333V5.5H11.3333V12.5H4.33325V26.5H27.6666V14.8333H20.6666ZM13.6666 7.83333H18.3333V24.1667H13.6666V7.83333ZM6.66659 14.8333H11.3333V24.1667H6.66659V14.8333ZM25.3333 24.1667H20.6666V17.1667H25.3333V24.1667Z"
            };
            function Dt(e) {
                let {icon: a, onClick: s, disabled: o=!1, id: r, fillColor: n} = e;
                const i = It(a);
                return t.createElement("svg", {
                    id: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    height: i.height,
                    viewBox: i.viewBox,
                    width: i.width,
                    className: "game-icon",
                    onClick: s,
                    "data-testid": "icon-".concat(a)
                }, t.createElement("path", {
                    fill: n || (o ? "var(--icon-disabled)" : "share" === a ? "var(--white)" : "var(--color-tone-1)"),
                    d: Tt[a]
                }))
            }
            var Bt = {
                container: "Loading-module_container__JOli8",
                loadingContainer: "Loading-module_loadingContainer__bVEha",
                hide: "Loading-module_hide__Z00E7"
            };
            const Mt = 300;
            function Rt(e) {
                let {waitFor: a=Mt, setBackground: s="dark"} = e;
                const [o,r] = t.useState(!1)
                  , n = U(H)
                  , i = "light" !== s && n
                  , l = i ? "#121213" : "#FFF";
                return ht((()=>r(!0)), a),
                o ? t.createElement("div", {
                    className: Bt.container,
                    style: l ? {
                        backgroundColor: l
                    } : {},
                    "data-testid": "loading"
                }, t.createElement("div", {
                    className: Bt.loadingContainer
                }, t.createElement(kt, {
                    circleColor: i ? "#666666" : "#DFDFDF",
                    barColor: i ? "#DFDFDF" : "#959595"
                }))) : null
            }
            var Gt = (e,a)=>{
                const s = t.useRef(null);
                (0,
                t.useEffect)((()=>{
                    var t;
                    e && null != a && a.current && (s.current = document.activeElement,
                    a.current.focus()),
                    e || null === (t = s.current) || void 0 === t || t.focus()
                }
                ), [e])
            }
              , Wt = {
                help: "Help-module_help__fbOXF",
                subheading: "Help-module_subheading__mbRG9",
                instructions: "Help-module_instructions__uXsG6",
                examples: "Help-module_examples__W3VXL",
                example: "Help-module_example__gldBI",
                tileContainer: "Help-module_tileContainer__vGHuc",
                page: "Help-module_page__oa72L",
                reminderSignUp: "Help-module_reminderSignUp__oQ42D",
                statsLogin: "Help-module_statsLogin__HkQec",
                loginArrow: "Help-module_loginArrow__VYc4x",
                loginText: "Help-module_loginText__lhtLY",
                statsIcon: "Help-module_statsIcon__gZPRN"
            };
            const qt = [{
                helpWord: "weary",
                letters: [{
                    letter: "w",
                    evaluation: "correct"
                }, {
                    letter: "e"
                }, {
                    letter: "a"
                }, {
                    letter: "r"
                }, {
                    letter: "y"
                }]
            }, {
                helpWord: "pills",
                letters: [{
                    letter: "p"
                }, {
                    letter: "i",
                    evaluation: "present"
                }, {
                    letter: "l"
                }, {
                    letter: "l"
                }, {
                    letter: "s"
                }]
            }, {
                helpWord: "vague",
                letters: [{
                    letter: "v"
                }, {
                    letter: "a"
                }, {
                    letter: "g"
                }, {
                    letter: "u",
                    evaluation: "absent"
                }, {
                    letter: "e"
                }]
            }]
              , Ht = e=>{
                let {helpWord: a, letters: s} = e;
                return t.createElement(t.Fragment, null, s.map(((e,s)=>{
                    let {letter: o, evaluation: r} = e;
                    return t.createElement("div", {
                        "data-testid": "".concat(a, "-letter"),
                        className: Wt.tileContainer,
                        key: "".concat(a, "-").concat(o, "-").concat(s)
                    }, t.createElement(xt, {
                        letter: o,
                        evaluation: r,
                        small: !0
                    }))
                }
                )))
            }
            ;
            function Vt(e) {
                let {isPage: a, isLoggedIn: s=!1, dataOptIn: o=!1, regiId: r} = e;
                const i = "".concat(U(Wa))
                  , l = F()
                  , c = s && !o
                  , d = !U(Ta);
                return t.createElement(t.Fragment, null, t.createElement("h2", {
                    className: Wt.subheading
                }, "Guess the Wordle in 6 tries."), t.createElement("section", {
                    className: qs()(Wt.help, {
                        [Wt.page]: a
                    })
                }, t.createElement("ul", {
                    className: Wt.instructions
                }, t.createElement("li", null, "Each guess must be a valid 5-letter word."), t.createElement("li", null, "The color of the tiles will change to show how close your guess was to the word.")), t.createElement("div", {
                    className: Wt.examples
                }, t.createElement("p", null, t.createElement("strong", null, "Examples")), t.createElement("div", {
                    "aria-label": qt[0].helpWord,
                    className: Wt.example
                }, Ht(qt[0]), t.createElement("p", null, t.createElement("strong", null, "W"), " is in the word and in the correct spot.")), t.createElement("div", {
                    "aria-label": qt[1].helpWord,
                    className: Wt.example
                }, Ht(qt[1]), t.createElement("p", null, t.createElement("strong", null, "I"), " is in the word but in the wrong spot.")), t.createElement("div", {
                    "aria-label": qt[2].helpWord,
                    className: Wt.example
                }, Ht(qt[2]), t.createElement("p", null, t.createElement("strong", null, "U"), " is not in the word in any spot."))), !s && t.createElement("div", {
                    className: Wt.statsLogin
                }, t.createElement("div", {
                    className: Wt.statsIcon
                }, t.createElement("img", {
                    alt: "Green Bar Graph",
                    style: {
                        content: "var(--wordle-stats-mini-check)"
                    }
                })), t.createElement("div", {
                    className: Wt.loginText
                }, t.createElement(tt, {
                    ariaLabel: "Link for logging in or creating a free account",
                    trackEvent: {
                        eventName: d ? "log-in-welcome" : "help",
                        sendContext: !0,
                        element: {
                            name: "wordle",
                            label: "log-in-welcome"
                        }
                    },
                    optIn: !1,
                    lireOfferAsset: "wordle-how-to-play"
                }, "Log in or create a free NYT account"), " ", "to link your stats.")), c && t.createElement("div", {
                    className: Wt.statsLogin
                }, t.createElement("div", {
                    className: Wt.statsIcon
                }, t.createElement("img", {
                    alt: "Green Bar Graph",
                    style: {
                        content: "var(--wordle-stats-mini-check)"
                    }
                })), t.createElement("div", {
                    className: Wt.loginText
                }, t.createElement("button", {
                    type: "button",
                    "aria-label": "Link your stats to your NYT account.",
                    onClick: ()=>{
                        l(Pe(null, !0, {
                            label: "stats-link-welcome",
                            name: "wordle"
                        })),
                        l(ve("statsLink"))
                    }
                }, "Link your stats to your NYT account."))), t.createElement("div", {
                    className: Wt.reminderSignUp
                }, t.createElement("p", null, "A new puzzle is released daily at midnight. If you haven’t already, you can", " ", t.createElement("a", {
                    href: "https://www.nytimes.com/newsletters/signup/NTWO",
                    target: "_blank",
                    rel: "noreferrer",
                    onClick: ()=>{
                        (0,
                        n.ob)({
                            name: "wordle",
                            label: null,
                            element: {
                                name: "wordle",
                                label: "newsletter-sign-up"
                            },
                            context: i
                        })
                    }
                }, "sign up"), " ", "for our daily reminder email."))))
            }
            const Ft = "wordle/stats/TRACK_STATS_IMPRESSION"
              , Ut = e=>({
                type: Ft,
                payload: {
                    isGameComplete: e
                }
            });
            var Yt = s(3401)
              , Zt = s(3628);
            const Kt = (e,a,s,t)=>{
                try {
                    const s = t.target
                      , o = document.createElement("textarea");
                    o.style.position = "absolute",
                    o.style.left = "-1000px",
                    o.style.top = "-1000px",
                    o.value = e.text,
                    s.parentElement.appendChild(o),
                    o.select(),
                    document.execCommand("copy"),
                    s.parentElement.removeChild(o),
                    a()
                } catch (e) {
                    s(),
                    console.warn("Share failed", e)
                }
            }
            ;
            function Xt(e, a, s, t) {
                var o, r;
                (0,
                Yt.Og)() ? (o = null == e ? void 0 : e.text,
                null === (r = window.NativeBridge) || void 0 === r || r.share(o, "", "")) : "android" === window.newsreaderAppPlatform ? Kt(e, a, s, t) : function(e, a, s) {
                    try {
                        (0,
                        x.K1)() && !(navigator.userAgent.toLowerCase().indexOf("firefox") > -1) && void 0 !== navigator.share && navigator.canShare && navigator.canShare(e) ? navigator.share(e).catch((()=>{}
                        )) : Zt.nx(e.text).then(a, s)
                    } catch (e) {
                        s(),
                        console.warn("Share failed", e)
                    }
                }(e, a, s)
            }
            var Jt = {
                container: "MiniAuthCTA-module_container__c9Atk",
                icon: "MiniAuthCTA-module_icon__xDcPq",
                buttonsContainer: "MiniAuthCTA-module_buttonsContainer__IoQWk",
                loginButton: "MiniAuthCTA-module_loginButton__x7_fR"
            };
            function Qt(e) {
                let {loggedIn: a, moogleOptedIn: s} = e;
                const o = F()
                  , r = a && !s;
                return s ? null : t.createElement(t.Fragment, null, t.createElement("div", {
                    className: Jt.container
                }, t.createElement("div", null, t.createElement("img", {
                    className: Jt.icon,
                    alt: "Statistics Graph Bar",
                    style: {
                        content: "var(--stats-auth)"
                    }
                })), t.createElement("div", {
                    className: Jt.buttonsContainer
                }, !a && t.createElement("div", {
                    className: Jt.loginButton
                }, t.createElement(tt, {
                    ariaLabel: "Link for logging in or creating a free account",
                    optIn: !0,
                    trackEvent: {
                        eventName: "log-in-congrats",
                        sendContext: !0
                    }
                }, "Log In or create a free account to link your stats.")), r && t.createElement("button", {
                    type: "button",
                    className: Jt.loginButton,
                    "aria-label": "Link stats to my account",
                    onClick: ()=>{
                        o(Pe(null, !0, {
                            label: "stats-link-congrats",
                            name: "wordle"
                        })),
                        o(ve("statsLink"))
                    }
                }, "Link these stats to your account."))))
            }
            var $t = {
                gameStats: "Stats-module_gameStats__X2eDU",
                statisticsHeading: "Stats-module_statisticsHeading__CExdL",
                statistics: "Stats-module_statistics__oFLEK",
                statisticContainer: "Stats-module_statisticContainer__woJli",
                statistic: "Stats-module_statistic__u5db0",
                timer: "Stats-module_timer__ndCDz",
                label: "Stats-module_label__sQwFu",
                guessDistribution: "Stats-module_guessDistribution__ibfJS",
                graphContainer: "Stats-module_graphContainer__Al4D1",
                graph: "Stats-module_graph__f4tUv",
                graphBar: "Stats-module_graphBar__HvdG8",
                highlight: "Stats-module_highlight__lrZJU",
                alignRight: "Stats-module_alignRight__ljKmf",
                numGuesses: "Stats-module_numGuesses__jFa2m",
                footer: "Stats-module_footer__jx3ae",
                countdown: "Stats-module_countdown__C3zxv",
                share: "Stats-module_share__EvF2C",
                noData: "Stats-module_noData__J1mBk",
                shareButton: "Stats-module_shareButton__L4E0m",
                shareIconContainer: "Stats-module_shareIconContainer__RUxSV",
                statsBtnLeft: "Stats-module_statsBtnLeft__IyDkc",
                statsBtnCenter: "Stats-module_statsBtnCenter__AG0A8",
                statsInfoBtn: "Stats-module_statsInfoBtn__bPz7C",
                promoButton: "Stats-module_promoButton__AfY3n",
                promoIcon: "Stats-module_promoIcon__YEC17",
                promoButtonContainer: "Stats-module_promoButtonContainer__jGI1r",
                ctaContainer: "Stats-module_ctaContainer__1Krdy",
                guess: "Stats-module_guess__Fc0Xn",
                testGameStats: "Stats-module_testGameStats__dznYC",
                testTimer: "Stats-module_testTimer__GYTLQ",
                botLink: "Stats-module_botLink__Gf9gC",
                botIcon: "Stats-module_botIcon__OLfCO",
                botLinkContent: "Stats-module_botLinkContent__Vscao",
                mobileOnly: "Stats-module_mobileOnly___jt2m"
            };
            const eo = {
                currentStreak: "Current Streak",
                maxStreak: "Max Streak",
                winPercentage: "Win %",
                gamesPlayed: "Played",
                gamesWon: "Won",
                averageGuesses: "Av. Guesses"
            }
              , ao = ["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"];
            function so(e) {
                let {stats: a} = e;
                return t.createElement("div", {
                    className: $t.statistics
                }, ao.map((e=>{
                    const s = eo[e]
                      , o = a[e];
                    return t.createElement("div", {
                        className: $t.statisticContainer,
                        key: e
                    }, t.createElement("div", {
                        className: $t.statistic
                    }, o), t.createElement("div", {
                        className: $t.label
                    }, s))
                }
                )))
            }
            const to = 7
              , oo = e=>{
                let {rowGuess: a, percentGuesses: s, numGuesses: o, addHighlight: r, index: n} = e;
                return t.createElement("div", {
                    className: $t.graphContainer,
                    key: n
                }, t.createElement("div", {
                    className: $t.guess
                }, a), t.createElement("div", {
                    className: $t.graph
                }, t.createElement("div", {
                    style: {
                        width: "".concat(s, "%")
                    },
                    className: qs()($t.graphBar, {
                        [$t.alignRight]: o > 0,
                        [$t.highlight]: r
                    })
                }, t.createElement("div", {
                    className: $t.numGuesses
                }, o))))
            }
            ;
            function ro(e) {
                let {guesses: a, rowIndex: s, gameStatus: o, loggedIn: r} = e;
                const n = []
                  , i = Math.max(...Object.values(a))
                  , l = Object.values(a).every((e=>0 === e))
                  , c = F();
                if (l)
                    return t.createElement(t.Fragment, null, t.createElement("h1", null, "Guess Distribution"), t.createElement("div", {
                        className: $t.noData
                    }, "No Data"));
                for (let e = 1; e < Object.keys(a).length; e += 1) {
                    const t = e
                      , r = a[e]
                      , l = Math.max(to, Math.round(r / i * 100))
                      , c = oo({
                        rowGuess: t,
                        percentGuesses: l,
                        numGuesses: r,
                        addHighlight: "WIN" === o && e === s,
                        index: e
                    });
                    n.push(c)
                }
                return t.createElement(t.Fragment, null, t.createElement("div", {
                    className: $t.statsBtnLeft
                }, t.createElement("h1", null, "Guess Distribution")), t.createElement("div", {
                    className: $t.guessDistribution
                }, n), r && t.createElement("button", {
                    type: "button",
                    className: $t.statsInfoBtn,
                    onClick: ()=>{
                        c(ve("statsProblem"))
                    }
                }, "My stats don't look right ›"))
            }
            var no = {
                container: "AuthCTA-module_container__zFB9w",
                icon: "AuthCTA-module_icon__qiC67",
                promoIcon: "AuthCTA-module_promoIcon__Jl339",
                textContainer: "AuthCTA-module_textContainer__z9l0e",
                bold: "AuthCTA-module_bold__VLJFv",
                subText: "AuthCTA-module_subText__Jcvdw",
                title: "AuthCTA-module_title___f_tF",
                line1: "AuthCTA-module_line1__VDwfv",
                line2: "AuthCTA-module_line2__ud8_3",
                buttonsContainer: "AuthCTA-module_buttonsContainer__CQBNT",
                moreLink: "AuthCTA-module_moreLink__vsWSz",
                loginButton: "AuthCTA-module_loginButton__f2zTX",
                promoButton: "AuthCTA-module_promoButton__LHPc2",
                sbButtonFooter: "AuthCTA-module_sbButtonFooter__vm2YY",
                sbPlayButton: "AuthCTA-module_sbPlayButton__L0iE8",
                shareButton: "AuthCTA-module_shareButton__ULVqS",
                shareIcon: "AuthCTA-module_shareIcon__WGE7Z",
                shareText: "AuthCTA-module_shareText__MmVG6",
                bottomSheet: "AuthCTA-module_bottomSheet__hHrQy",
                bottomSheetContainer: "AuthCTA-module_bottomSheetContainer__lKtf3",
                nextWordle: "AuthCTA-module_nextWordle__xpEHJ",
                buttonContainer: "AuthCTA-module_buttonContainer__EvCbE",
                mediumText: "AuthCTA-module_mediumText__iVf9D"
            }
              , io = {
                container: "SpellingBeeCTA-module_container__iJS15",
                cardContainer: "SpellingBeeCTA-module_cardContainer__re6a6",
                spellingBeeCardEmphasis: "SpellingBeeCTA-module_spellingBeeCardEmphasis__OPJ36",
                promoIcon: "SpellingBeeCTA-module_promoIcon__jOVZp",
                cardText: "SpellingBeeCTA-module_cardText__mFOX0",
                arrow: "SpellingBeeCTA-module_arrow__nLJJh",
                gameTitle: "SpellingBeeCTA-module_gameTitle__LS_DG",
                cardDescription: "SpellingBeeCTA-module_cardDescription__C75jz"
            };
            function lo() {
                return t.createElement("div", {
                    className: io.cardText
                }, t.createElement("span", {
                    className: io.cardDescription
                }, "Play Today’s Spelling Bee"))
            }
            function co(e) {
                let {handleTrack: a, promoParam: s} = e;
                const o = !!window.newsreaderAppPlatform && window.isHybridWebView
                  , r = null != s && s.includes("?") ? "&hybrid=news" : "?hybrid=news"
                  , n = o ? r : "";
                return t.createElement("div", {
                    className: io.container,
                    "data-testid": "spellingBeeCTA"
                }, t.createElement("div", {
                    className: io.cardContainer
                }, t.createElement("a", {
                    href: "/puzzles/spelling-bee".concat(s).concat(n),
                    className: io.spellingBeeCardEmphasis,
                    onClick: ()=>{
                        a()
                    }
                }, t.createElement("span", {
                    className: io.promoIcon
                }), t.createElement(lo, null), t.createElement("div", {
                    className: io.arrow
                }, "›"))))
            }
            function uo(e) {
                let {handleShare: a, handleTrack: s, promoParam: o=""} = e;
                return t.createElement("div", {
                    className: qs()(no.bottomSheet, no.sbButtonFooter)
                }, t.createElement("div", {
                    className: no.bottomSheetContainer
                }, t.createElement("button", {
                    type: "button",
                    className: no.shareButton,
                    onClick: a
                }, t.createElement("span", {
                    className: no.shareText
                }, "Share"), t.createElement(Dt, {
                    id: no.shareIcon,
                    icon: "share"
                })), t.createElement(co, {
                    handleTrack: s,
                    promoParam: o
                })))
            }
            function mo(e) {
                let {isLinkBackVariant: a=!1} = e;
                const s = F()
                  , o = "".concat(U(Wa))
                  , r = U($a)
                  , i = U(Ma)
                  , l = U(Ra)
                  , c = U(ls)
                  , d = U(ea)
                  , u = !!U(ia)
                  , m = !!window.gamesAppPlatform;
                (0,
                t.useEffect)((()=>{
                    s(Ut("IN_PROGRESS" !== i))
                }
                ), []);
                const p = ()=>t.createElement("a", {
                    href: "https://www.nytimes.com/interactive/2022/upshot/wordle-bot.html",
                    className: $t.botLink,
                    onClick: ()=>{
                        (0,
                        n.ob)({
                            name: "wordle",
                            label: "wordlebot",
                            context: o
                        })
                    }
                }, t.createElement("div", {
                    className: $t.botIcon
                }), t.createElement("div", {
                    className: $t.botLinkContent
                }, t.createElement("p", null, "Wordlebot gives an analysis of your guesses.", t.createElement("br", null), " ", t.createElement("span", null, "Did you beat the bot? ›"))))
                  , y = (0,
                Yt.x0)() ? "?embed=ios&entry=playTab" : "";
                return t.createElement("div", null, t.createElement("div", {
                    "data-testid": "authContainer",
                    className: qs()($t.gameStats, $t.testGameStats)
                }, t.createElement("h1", {
                    className: $t.statisticsHeading
                }, "Statistics"), t.createElement(so, {
                    stats: r
                }), t.createElement(ro, {
                    guesses: r.guesses,
                    rowIndex: l,
                    gameStatus: i,
                    loggedIn: u
                }), !m && t.createElement(p, null), t.createElement("div", {
                    className: $t.ctaContainer
                }, t.createElement(Qt, {
                    loggedIn: u,
                    moogleOptedIn: d
                }), t.createElement(uo, {
                    handleTrack: ()=>{
                        (0,
                        n.ob)({
                            name: "wordle",
                            label: "next-game",
                            context: "spelling-bee",
                            useBeacon: !0
                        })
                    }
                    ,
                    handleShare: e=>{
                        e.preventDefault(),
                        e.stopPropagation();
                        const t = ()=>{
                            s(Se({
                                text: "Copied results to clipboard",
                                duration: 2e3,
                                isSystem: !0
                            }))
                        }
                          , r = ()=>{
                            s(Se({
                                text: "Share failed",
                                duration: 2e3,
                                isSystem: !0
                            }))
                        }
                        ;
                        (0,
                        n.ob)({
                            name: "wordle",
                            label: "share",
                            context: o
                        }),
                        Xt(a ? {
                            text: "".concat(c.text, "\n\nnyt.com/wordle‌")
                        } : c, t, r, e)
                    }
                    ,
                    promoParam: y
                }))))
            }
            const po = "ON_wordle_regi_modal"
              , yo = "AUD_wordleShareUrl";
            var go = {
                regiModalContainer: "ActivationRegiModal-module_regiModalContainer__YtnuA",
                copyContainer: "ActivationRegiModal-module_copyContainer__sveqD",
                copyHeader: "ActivationRegiModal-module_copyHeader__LnHo5",
                copyBody: "ActivationRegiModal-module_copyBody__Lpr_0",
                loginLink: "ActivationRegiModal-module_loginLink__qqJOJ",
                statsIcon: "ActivationRegiModal-module_statsIcon__E2E2U"
            };
            const ho = "activation-regi-modal"
              , bo = 2
              , ko = ()=>{
                const e = document.cookie.split("; ").reduce(((e,a)=>{
                    const s = a.split("=");
                    return s[0] === ho ? s[1] : e
                }
                ), "");
                return Number.isNaN(parseInt(e)) ? 0 : parseInt(e)
            }
            ;
            function fo(e) {
                let {isLoggedIn: a=!1} = e;
                const s = k();
                return (0,
                t.useEffect)((()=>{
                    (0,
                    n.hX)("regi-modal", "wordle-welcome", po, ""),
                    s.reportExposure(po),
                    (()=>{
                        const e = ko();
                        if (e < bo) {
                            const a = new Date;
                            a.setMonth(a.getMonth() + 12),
                            document.cookie = "".concat(ho, "=").concat(e + 1, "; expires=").concat(a.toUTCString(), ";")
                        }
                    }
                    )()
                }
                ), []),
                t.createElement("div", {
                    "data-testid": "activationRegiModalContainer",
                    className: go.regiModalContainer
                }, t.createElement("img", {
                    alt: "Large sized wordle stats icon",
                    className: go.statsIcon,
                    style: {
                        content: "var(--large-stats)"
                    }
                }), t.createElement("div", {
                    className: go.copyContainer
                }, t.createElement("div", {
                    className: go.copyHeader
                }, "Wordle is even better with a free New York Times account."), t.createElement("div", {
                    className: go.copyBody
                }, "You can save your stats wherever you play and you’ll never lose a streak again.")), !a && t.createElement(tt, {
                    ariaLabel: "Link for logging in or creating a free account",
                    lireOfferAsset: "wordle-regi-modal",
                    trackEvent: {
                        eventName: "moduleInteraction",
                        sendContext: !0,
                        element: {
                            name: "wordle",
                            label: "log-in-regi-modal"
                        }
                    },
                    optIn: !1,
                    styles: go.loginLink
                }, "Log in or create an account"))
            }
            const wo = "wordle/settings/CHANGE_SETTING"
              , vo = (e,a)=>({
                type: wo,
                payload: {
                    name: e,
                    value: a
                }
            })
              , _o = {
                anon: "anon",
                sub: "news sub",
                cr: "games sub",
                reg: "regi",
                "sub,cr": "all access sub",
                "anon,sub": "anon app sub"
            }
              , Eo = e=>{
                var a;
                let {regiId: s, emailSubject: t="Wordle Feedback", entitlement: o} = e;
                const r = (new Date).getTimezoneOffset()
                  , n = se(s);
                var i;
                return "mailto:nytgames@nytimes.com" + function(e) {
                    const a = [];
                    return Object.keys(e).forEach((s=>{
                        a.push("".concat(encodeURIComponent(s), "=").concat(encodeURIComponent(e[s])))
                    }
                    )),
                    "?".concat(a.join("&"))
                }({
                    subject: t,
                    body: "\r\n\r\n\n--\nDevice summary:\nPage: /games/wordle\nPlatform: ".concat((0,
                    x.K1)() ? "Web (Mobile)" : "Web (Desktop)", " \nBrowser: ").concat((i = function() {
                        let e, a = navigator.userAgent;
                        return e = a.match(/chrome|chromium|crios/i) ? "chrome" : a.match(/firefox|fxios/i) ? "firefox" : a.match(/safari/i) ? "safari" : a.match(/opr\//i) ? "opera" : a.match(/edg/i) ? "edge" : "No browser detection",
                        e
                    }(),
                    i.charAt(0).toUpperCase() + i.slice(1)), "\nScreen Resolution: ").concat(window.screen.width, " x ").concat(window.screen.height, "\nViewport Size: ").concat(document.documentElement.clientWidth, " x ").concat(document.documentElement.clientHeight, "\nTimezone: ", "UTC".concat(r > 0 ? "" : "+").concat(r / -60), "\nBuild: ").concat(null === (a = window.sentryConfig) || void 0 === a ? void 0 : a.release, "\n\nAnon Local Storage:\n").concat(n.anon, "\n\nLocal Storage Statistics:\n").concat(n.stats, "\n\nLocal Storage for regi: ").concat(s || "[NONE]", ":\n").concat(n.regi, "\n\nStatus: ").concat(_o[o] ? _o[o] : o, "\n\nRegi ID: ").concat(s || "anon", "\n  ")
                })
            }
              , xo = e=>{
                var a;
                const s = se(e)
                  , t = e || "[NONE]"
                  , o = (new Date).getTimezoneOffset()
                  , r = Object.entries(window.abra.tests).map((e=>e.join("="))).join(",")
                  , i = ["Hybrid summary:", "Platform: ".concat(window.newsreaderAppPlatform ? "News App" : "XW App"), "Viewport Size: ".concat(document.documentElement.clientWidth, " x ").concat(document.documentElement.clientHeight), "Timezone: ".concat("UTC".concat(o > 0 ? "" : "+").concat(o / -60)), "Logged In: ".concat(e ? "yes" : "no"), "Regi: ".concat(t), "Web Version: ".concat(window.env.version), "Flags: ".concat(r), "Anon Local Storage: ".concat(s.anon), "Local Storage Statistics: ".concat(s.stats), "Local Storage for regi ".concat(t, ": ").concat(s.regi), "Build: ".concat(null === (a = window.sentryConfig) || void 0 === a ? void 0 : a.release)].join("\n");
                return window.NativeBridge.gamesSendEmail({
                    type: n.N1.WORDLE,
                    debugInfo: i
                })
            }
            ;
            function zo(e) {
                let {children: a, styles: s} = e;
                const {userType: o} = (0,
                l.Z)()
                  , {regiId: r, entitlement: n} = o || {}
                  , i = window.isHybridWebView && window.NativeBridge
                  , c = i ? void 0 : Eo({
                    regiId: r,
                    entitlement: n
                });
                return t.createElement("a", {
                    "aria-label": "Send feedback to nytgames@nytimes.com",
                    className: s,
                    href: c,
                    tabIndex: 0,
                    title: "nytgames@nytimes.com",
                    onClick: e=>{
                        i && (e.preventDefault(),
                        xo(r))
                    }
                }, a)
            }
            const No = e=>{
                let {disabled: a, name: s, onClick: o, selected: r} = e;
                return t.createElement("div", {
                    id: s,
                    className: qs()("Switch-module_container__PO0Ll", {
                        "Switch-module_checked__R4Ixx": r
                    })
                }, t.createElement("button", {
                    "aria-checked": r,
                    "aria-label": s,
                    className: "Switch-module_switch__isHE_",
                    onClick: o,
                    role: "switch",
                    type: "button",
                    disabled: a
                }, t.createElement("span", {
                    className: "Switch-module_knob__B3HtC"
                })))
            }
            ;
            var jo = "Settings-module_setting__EaMz6"
              , Co = "Settings-module_title__NWAOC"
              , So = "Settings-module_text__l3Wz3"
              , Oo = "Settings-module_description__m0Tpo";
            const Po = ()=>{
                const e = F()
                  , a = "".concat(U(Wa))
                  , s = U(Ma)
                  , o = U(Ra)
                  , r = U(V)
                  , n = U(H)
                  , i = U(q)
                  , l = !i && "IN_PROGRESS" === s && 0 !== o;
                return t.createElement(t.Fragment, null, t.createElement("div", {
                    className: "Settings-module_container__utVKC"
                }, t.createElement("section", null, t.createElement("div", {
                    className: jo,
                    onClick: ()=>{
                        l && e(Se({
                            text: "Hard mode can only be enabled at the start of a round",
                            duration: 1500,
                            isSystem: !0
                        }))
                    }
                }, t.createElement("div", {
                    className: So
                }, t.createElement("div", {
                    className: Co
                }, "Hard Mode"), t.createElement("div", {
                    className: Oo
                }, "Any revealed hints must be used in subsequent guesses")), t.createElement("div", null, t.createElement(No, {
                    disabled: l,
                    name: "hardMode",
                    onClick: ()=>{
                        l || e(vo("hardMode", !i))
                    }
                    ,
                    selected: i
                }))), t.createElement("div", {
                    className: jo
                }, t.createElement("div", {
                    className: So
                }, t.createElement("div", {
                    className: Co
                }, "Dark Theme")), t.createElement("div", null, t.createElement(No, {
                    name: "darkMode",
                    onClick: ()=>e(vo("darkMode", !n)),
                    selected: n
                }))), t.createElement("div", {
                    className: jo
                }, t.createElement("div", {
                    className: So
                }, t.createElement("div", {
                    className: Co
                }, "High Contrast Mode"), t.createElement("div", {
                    className: Oo
                }, "For improved color vision")), t.createElement("div", null, t.createElement(No, {
                    name: "colorblindMode",
                    onClick: ()=>e(vo("colorblindMode", !r)),
                    selected: r
                })))), t.createElement("section", null, t.createElement("div", {
                    className: jo
                }, t.createElement("div", {
                    className: So
                }, t.createElement("div", {
                    className: Co
                }, "Feedback")), t.createElement("div", null, t.createElement(zo, {
                    styles: "Settings-module_feedbackLink__xHvaM"
                }, "Email"))), t.createElement("div", {
                    className: jo
                }, t.createElement("div", {
                    className: So
                }, t.createElement("div", {
                    className: Co
                }, "Community")), t.createElement("div", null, t.createElement("a", {
                    href: "https://twitter.com/NYTGames",
                    target: "blank",
                    title: "@NYTGames"
                }, "Twitter"))), t.createElement("div", {
                    className: jo
                }, t.createElement("div", {
                    className: So
                }, t.createElement("div", {
                    className: Co
                }, "Questions?")), t.createElement("div", null, t.createElement("a", {
                    href: "https://help.nytimes.com/hc/en-us/articles/360029050872-Word-Games-and-Logic-Puzzles#h_01FVGCB2Z00ZQMDMCYWBPWJNXB",
                    target: "blank"
                }, "FAQ"))))), t.createElement("div", {
                    className: "Settings-module_footnote__TOUR0"
                }, t.createElement("div", {
                    id: "copyright"
                }, "© ", (new Date).getFullYear(), " The New York Times Company"), t.createElement("div", null, t.createElement("div", null, "#", a))))
            }
            ;
            var Lo = {
                modalOverlay: "Modal-module_modalOverlay__cdZDa",
                content: "Modal-module_content__TrPIX",
                SlideIn: "Modal-module_SlideIn__BF5gw",
                testExtraWidth: "Modal-module_testExtraWidth__Dptic",
                paddingTop: "Modal-module_paddingTop__xhWdR",
                extraPadding: "Modal-module_extraPadding__XGzkT",
                closing: "Modal-module_closing__Ly9iT",
                SlideOut: "Modal-module_SlideOut__cmGvu",
                closeIcon: "Modal-module_closeIcon__TcEKb",
                heading: "Modal-module_heading__u2uxI",
                newHeading: "Modal-module_newHeading__Ah45w",
                flexContainer: "Modal-module_flexContainer__avPDp",
                testNoMinHeight: "Modal-module_testNoMinHeight__w7_BF",
                shortStatsModal: "Modal-module_shortStatsModal__JqZJK",
                noPadding: "Modal-module_noPadding__O80OB"
            };
            function Ao() {
                const e = (0,
                t.useRef)(null)
                  , a = F()
                  , s = U(Sa)
                  , o = U(Pa)
                  , [r,i] = (0,
                t.useState)(!1)
                  , l = U(ea)
                  , c = U(ia)
                  , d = !!U(ia)
                  , u = (U(Ma),
                "stats" === s && l)
                  , m = "activationRegiModal" === s
                  , p = "stats" === s
                  , y = k();
                y.getVariant(yo),
                Gt(Boolean(s), e);
                const g = "".concat(U(Wa))
                  , h = et("activationRegiModalControl")
                  , b = U(es);
                if (!s && !d && b && h && y.reportExposure(po),
                !s)
                    return null;
                const f = {
                    help: t.createElement(Vt, {
                        isPage: !1,
                        isLoggedIn: d,
                        dataOptIn: l,
                        regiId: c
                    }),
                    stats: t.createElement(mo, null),
                    settings: t.createElement(Po, null),
                    activationRegiModal: t.createElement(fo, {
                        isLoggedIn: d
                    })
                }[s]
                  , w = {
                    help: "How To Play",
                    stats: !1,
                    settings: "settings",
                    activationRegiModal: ""
                }[s];
                return t.createElement("dialog", {
                    open: !0,
                    className: qs()(Lo.modalOverlay, {
                        [Lo.paddingTop]: "help" === s
                    }),
                    "data-testid": "modal-overlay",
                    "aria-label": "".concat(s, " Modal"),
                    onClick: e=>{
                        e.currentTarget === e.target && ("activationRegiModal" === s && (0,
                        n.ob)({
                            name: "wordle",
                            label: "close-regi-modal",
                            context: g
                        }),
                        i(!0))
                    }
                    ,
                    onBlur: a=>{
                        var s, t;
                        if (o)
                            return !1;
                        null !== (s = a.currentTarget) && void 0 !== s && s.contains(a.relatedTarget) || null === (t = e.current) || void 0 === t || t.focus()
                    }
                    ,
                    onAnimationEnd: e=>{
                        e.animationName === Lo.SlideOut && (i(!1),
                        a(_e()))
                    }
                    ,
                    onKeyDown: e=>{
                        "Escape" === e.key && i(!0)
                    }
                }, t.createElement("div", {
                    className: qs()(Lo.content, Lo.testExtraWidth, {
                        [Lo.closing]: r,
                        [Lo.shortStatsModal]: u,
                        [Lo.noPadding]: p,
                        [Lo.testNoMinHeight]: m,
                        [Lo.flexContainer]: "settings" === s,
                        [Lo.extraPadding]: "help" === s
                    })
                }, w ? t.createElement("h1", {
                    className: qs()(Lo.heading, {
                        [Lo.newHeading]: "help" === s
                    })
                }, w) : null, t.createElement("button", {
                    ref: e,
                    className: Lo.closeIcon,
                    type: "button",
                    "aria-label": "Close",
                    onKeyDown: e=>{
                        "Enter" === e.key && i(!0)
                    }
                }, t.createElement(Dt, {
                    icon: "close",
                    onClick: ()=>{
                        "activationRegiModal" === s && (0,
                        n.ob)({
                            name: "wordle",
                            label: "close-regi-modal",
                            context: g
                        }),
                        i(!0)
                    }
                })), f))
            }
            function Io() {
                const e = F();
                return t.createElement("a", {
                    href: "https://www.nytimes.com/crosswords",
                    onClick: ()=>e(Ce("wordle", "games-logo-nav", !0, null))
                }, t.createElement("svg", {
                    className: "pz-nav__logo",
                    width: "95",
                    height: "18",
                    viewBox: "0 0 138 25",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-label": "New York Times Games Logo. Click for more puzzles"
                }, t.createElement("rect", {
                    width: "138",
                    height: "25",
                    fill: "none"
                }), t.createElement("path", {
                    d: "M42.4599 1.03519C44.219 1.00558 45.9577 1.41634 47.5176 2.23008V1.45245H53.4162V8.80515H47.5239C47.1067 7.03494 46.3607 6.2257 44.5904 6.2257C42.365 6.23834 41.0058 7.86947 41.0058 12.4151C41.0058 17.3148 42.2386 18.8827 45.0077 18.8827C45.7187 18.8975 46.4203 18.7183 47.0371 18.3643V16.2211H45.2037V11.9283H53.4225V24.0543H48.3648V22.9289C46.902 24.0012 45.1195 24.5471 43.307 24.4778C36.9216 24.4778 32.4392 20.2546 32.4392 12.4214C32.4708 5.2584 36.9849 1.03519 42.4599 1.03519Z",
                    fill: "var(--color-tone-1)"
                }), t.createElement("path", {
                    d: "M59.8645 24.3471C56.3494 24.3471 54.2883 22.4505 54.2883 19.2198C54.2883 15.9892 56.7097 13.9345 60.541 13.9345C61.9923 13.9222 63.4232 14.2767 64.701 14.965C64.6377 13.2264 63.3164 12.0947 60.8634 12.0947C59.0925 12.1015 57.3477 12.5215 55.7677 13.3212V9.25608C58.149 8.58084 60.6136 8.24457 63.0888 8.25718C69.7966 8.25718 72.0853 11.1907 72.0853 13.7701V19.8647H73.4382V24.0563H64.7705V22.5074C63.544 23.8603 61.7359 24.3471 59.8645 24.3471ZM64.859 18.8658C64.888 18.6431 64.8655 18.4166 64.7931 18.204C64.7207 17.9914 64.6005 17.7982 64.4417 17.6394C64.2829 17.4805 64.0897 17.3603 63.877 17.288C63.6644 17.2156 63.438 17.193 63.2153 17.222C62.1215 17.222 61.3755 17.7721 61.3755 18.8974C61.3755 20.0228 62.0077 20.478 63.1836 20.478C64.3596 20.478 64.8653 19.9911 64.8653 18.8848L64.859 18.8658Z",
                    fill: "var(--color-tone-1)"
                }), t.createElement("path", {
                    d: "M75.8371 19.8644V12.7709H74.5726V8.57927H83.1455V10.2546C85.1433 8.73732 86.2055 8.25684 87.786 8.25684C89.7206 8.25684 90.8839 8.80687 92.3949 10.3874C94.3611 8.83848 95.7456 8.25684 97.4526 8.25684C100.614 8.25684 102.801 10.419 102.801 13.2197V19.858H104.066V24.0496H95.5054V14.6739C95.5054 13.4473 95.0249 12.7772 94.1841 12.7772C93.3432 12.7772 92.9576 13.4094 92.9576 14.6739V19.8644H94.0513V24.056H85.6681V14.6106C85.6681 13.5169 85.1497 12.7709 84.4036 12.7709C83.6576 12.7709 83.1392 13.479 83.1392 14.6106V19.8644H84.2646V24.056H74.5474V19.8644H75.8371Z",
                    fill: "var(--color-tone-1)"
                }), t.createElement("path", {
                    d: "M113.781 24.3784C111.46 24.3784 108.881 23.8979 107.073 22.2858C106.216 21.5344 105.534 20.6058 105.072 19.5643C104.61 18.5229 104.38 17.3935 104.398 16.2544C104.398 11.1967 108.432 8.25684 113.25 8.25684C118.453 8.25684 121.924 11.93 121.924 16.3555C121.924 16.874 121.892 17.3545 121.86 17.8729H111.745C111.941 19.681 112.908 20.4839 114.387 20.4839C114.871 20.4803 115.347 20.3544 115.769 20.1178C116.191 19.8813 116.547 19.5418 116.803 19.131H121.86C120.773 22.6777 117.498 24.3784 113.781 24.3784ZM111.688 15.5273H115.481V15.1417C115.481 13.8204 115.159 12.4674 113.585 12.4674C113.201 12.4558 112.824 12.5691 112.51 12.7903C112.197 13.0115 111.964 13.3286 111.846 13.6939C111.68 14.2856 111.624 14.9028 111.682 15.5147L111.688 15.5273Z",
                    fill: "var(--color-tone-1)"
                }), t.createElement("path", {
                    d: "M126.195 24.059H122.712V18.8875H126.164C126.581 20.2404 127.131 20.9485 128.452 20.9485C129.451 20.9485 130.064 20.5313 130.064 19.7536C130.064 19.2036 129.71 18.7863 129.034 18.4892L125.683 17.073C124.909 16.7631 124.246 16.2281 123.779 15.5371C123.313 14.8462 123.064 14.0312 123.066 13.1975C123.066 10.5549 125.677 8.23462 128.964 8.23462C130.352 8.25084 131.718 8.58156 132.96 9.20191V8.5697H136.469V13.4062H133.244C132.954 11.9584 132.372 11.244 131.215 11.244C130.374 11.244 129.729 11.6612 129.729 12.3377C129.729 12.9194 130.115 13.3998 130.924 13.7223L134.212 14.9867C136.374 15.8276 137.373 17.2121 137.373 19.0835C137.373 22.0486 134.844 24.3372 131.215 24.3372C129.603 24.3372 128.477 24.078 126.157 23.2435L126.195 24.059Z",
                    fill: "var(--color-tone-1)"
                }), t.createElement("path", {
                    d: "M25.9544 1.46704H25.3601V24.0372H25.9544V1.46704Z",
                    fill: "var(--color-tone-1)"
                }), t.createElement("path", {
                    d: "M19.2574 15.4535C18.8889 16.497 18.3042 17.4509 17.5416 18.2527C16.7789 19.0546 15.8555 19.6863 14.8318 20.1066V15.4535L17.3607 13.1586L14.8318 10.8952V7.69619C15.8763 7.67489 16.8715 7.24792 17.6067 6.50567C18.3419 5.76342 18.7593 4.76418 18.7706 3.71953C18.7706 0.975708 16.1532 0.00209168 14.6675 0.00209168C14.2653 -0.0102783 13.8633 0.0322617 13.4726 0.128535V0.261301C13.6686 0.261301 13.9594 0.22969 14.0542 0.22969C15.0847 0.22969 15.8624 0.716498 15.8624 1.65218C15.8562 1.85411 15.809 2.05266 15.7235 2.23571C15.638 2.41875 15.5161 2.58244 15.3652 2.71677C15.2143 2.85109 15.0376 2.95323 14.8459 3.01695C14.6542 3.08066 14.4515 3.1046 14.2502 3.08732C11.7213 3.08732 8.693 1.01996 5.43075 1.01996C2.52255 1.00732 0.537385 3.17583 0.537385 5.36962C0.537385 7.56342 1.80182 8.24622 3.12316 8.7267L3.15477 8.60026C2.91743 8.45028 2.72511 8.23886 2.59822 7.98842C2.47133 7.73797 2.41459 7.45785 2.43404 7.17777C2.4493 6.92796 2.51386 6.68363 2.62398 6.45888C2.73411 6.23414 2.88763 6.03341 3.07569 5.86826C3.26375 5.70312 3.48264 5.57683 3.71973 5.49668C3.95683 5.41652 4.20745 5.38408 4.45714 5.40124C7.20096 5.40124 11.6265 7.69619 14.3766 7.69619H14.6359V10.9268L12.107 13.1586L14.6359 15.4535V20.1572C13.5788 20.533 12.4638 20.7192 11.342 20.7072C7.07452 20.7072 4.38759 18.1215 4.38759 13.8287C4.37897 12.8127 4.51955 11.8009 4.80486 10.8257L6.93543 9.88999V19.3733L11.2661 17.4766V7.75941L4.88072 10.6044C5.17861 9.73458 5.646 8.93247 6.25588 8.24446C6.86575 7.55645 7.606 6.99621 8.43379 6.59613L8.40218 6.5013C4.13471 7.43698 0 10.6739 0 15.5167C0 21.1055 4.71635 25 10.2103 25C16.0267 25 19.3206 21.1245 19.3522 15.4725L19.2574 15.4535Z",
                    fill: "var(--color-tone-1)"
                })))
            }
            var To = {
                container: "Nav-module_container__OHjbB",
                navLink: "Nav-module_navLink__zndY2",
                gameList: "Nav-module_gameList__IkaW6",
                nytList: "Nav-module_nytList__rVjMX",
                navItem: "Nav-module_navItem__khSKK",
                navIcon: "Nav-module_navIcon__HFwtS",
                navHeader: "Nav-module_navHeader__JaDrY",
                moreText: "Nav-module_moreText__Jg_7K",
                privacy: "Nav-module_privacy__T32_r",
                privacyStatic: "Nav-module_privacyStatic__cQ4AX",
                privacyItem: "Nav-module_privacyItem__tSFYv",
                beta: "Nav-module_beta__x2SH0"
            };
            new Date("05/22/2023 06:00:00 GMT-0400");
            const Do = new Date("06/30/2023 12:00:00 GMT-0400")
              , Bo = [{
                copy: "Final Hours",
                startDate: new Date("06/29/2023 18:00:00 GMT-0400")
            }, {
                copy: "Ends Today",
                startDate: new Date("06/29/2023 06:00:00 GMT-0400")
            }, {
                copy: "Ends Tomorrow",
                startDate: new Date("06/28/2023 06:00:00 GMT-0400")
            }, {
                copy: "Ends Soon",
                startDate: new Date("06/20/2023 06:00:00 GMT-0400")
            }, {
                copy: "Offer Won’t Last",
                startDate: new Date("06/05/2023 06:00:00 GMT-0400")
            }, {
                copy: "Limited Time Offer",
                startDate: new Date("05/22/2023 06:00:00 GMT-0400")
            }];
            var Mo = ()=>{
                const {isGamesSaleActive: e, upgradeMessage: a, acqMessage: s, getUrgencyMessage: t} = {
                    isGamesSaleActive: et("gamesSaleCTA"),
                    getUrgencyMessage: e=>{
                        const a = (e=>{
                            const a = e || new Date(Date.now());
                            if (void 0 === typeof window)
                                return a;
                            const s = new URLSearchParams(window.location.search).get("date-override");
                            return s ? new Date(s) : a
                        }
                        )(e)
                          , s = Bo.find((e=>{
                            let {startDate: s} = e;
                            return a >= s && a < Do
                        }
                        ));
                        return (null == s ? void 0 : s.copy) || ""
                    }
                    ,
                    acqMessage: "Subscribe for 50% off",
                    upgradeMessage: "Upgrade and save"
                }
                  , {userType: {entitlement: o}} = (0,
                l.Z)();
                return {
                    isGamesSaleActive: e,
                    getButtonText: ()=>e ? "sub" === o || "cr" === o ? a : s : "Subscribe",
                    getUrgencyMessage: t
                }
            }
              , Ro = {
                navLoggedIn: "NavAccount-module_navLoggedIn__DU0tY",
                navLoggedOut: "NavAccount-module_navLoggedOut__L52sW",
                navDrawerHeading: "NavAccount-module_navDrawerHeading__kKsMu",
                navDrawerAccount: "NavAccount-module_navDrawerAccount__f1pjJ",
                navProfileAccount: "NavAccount-module_navProfileAccount__cyEAP",
                navButton: "NavAccount-module_navButton__UTgBV",
                logoutButton: "NavAccount-module_logoutButton__Xiu49",
                subscribeButton: "NavAccount-module_subscribeButton__F3y0Z",
                loginButton: "NavAccount-module_loginButton__p4LNv",
                navDrawerLink: "NavAccount-module_navDrawerLink__RNbG5",
                subscribeGamesSale: "NavAccount-module_subscribeGamesSale__OSUGb",
                navGamesSale: "NavAccount-module_navGamesSale__sZGtR"
            };
            function Go() {
                const e = (0,
                Yt.mo)() || (0,
                Yt.R7)()
                  , {userType: a} = (0,
                l.Z)()
                  , s = "".concat(U(Wa))
                  , {isGamesSaleActive: o, getButtonText: r} = Mo()
                  , i = r()
                  , c = t.createElement("a", {
                    href: Me,
                    role: "button",
                    className: qs()(Ro.subscribeButton, {
                        [Ro.subscribeGamesSale]: o
                    }),
                    onClick: ()=>(0,
                    n.ob)({
                        name: "wordle",
                        element: {
                            name: "wordle",
                            label: "subscribe-nav"
                        },
                        useBeacon: !0,
                        context: s
                    })
                }, i)
                  , d = t.createElement("a", {
                    href: Ye,
                    role: "button",
                    className: Ro.loginButton,
                    "data-track-label": "log-in-nav",
                    onClick: ()=>(0,
                    n.ob)({
                        name: "wordle",
                        element: {
                            name: "wordle",
                            label: "log-in-nav"
                        },
                        useBeacon: !0,
                        context: s
                    })
                }, "Log In")
                  , u = t.createElement("a", {
                    href: Xe,
                    role: "button",
                    className: Ro.logoutButton,
                    "data-track-label": "log-out-nav",
                    onClick: ()=>(0,
                    n.ob)({
                        name: "wordle",
                        element: {
                            name: "wordle",
                            label: "log-out-nav"
                        },
                        useBeacon: !0,
                        context: s
                    })
                }, "Log Out")
                  , m = t.createElement("div", {
                    className: Ro.navProfileAccount
                }, t.createElement("h4", {
                    className: Ro.navDrawerHeading
                }, "Profile"), t.createElement("a", {
                    href: window.navigationLinks.account,
                    className: Ro.navDrawerLink
                }, "Account details"), t.createElement("div", {
                    className: Ro.navLoggedIn
                }, !e && !a.hasXwd && c, u))
                  , p = t.createElement("div", {
                    className: Ro.navProfileAccount
                }, t.createElement("h4", {
                    className: Ro.navDrawerHeading
                }, "Profile"), t.createElement("a", {
                    href: window.navigationLinks.account,
                    className: Ro.navDrawerLink
                }, "Account details"), t.createElement("div", {
                    className: Ro.navGamesSale
                }, u, c))
                  , y = o ? p : m;
                return t.createElement("div", {
                    className: Ro.navDrawerAccount
                }, a.isLoggedIn ? y : t.createElement("div", {
                    className: Ro.navLoggedOut
                }, !e && !a.hasXwd && c, d))
            }
            function Wo() {
                (0,
                t.useEffect)((()=>{
                    (0,
                    n.vO)()
                }
                ), []);
                const e = (0,
                n.Xy)()
                  , a = [{
                    id: "spelling-bee",
                    name: "Spelling Bee",
                    url: "/puzzles/spelling-bee?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
                    backgroundImage: "var(--spelling-bee)",
                    dataTrackLabel: "spelling-bee-nav"
                }, {
                    id: "crossword",
                    name: "The Crossword",
                    url: "/crosswords/game/daily?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
                    backgroundImage: "var(--daily)",
                    dataTrackLabel: "daily-page-nav"
                }, {
                    id: "mini",
                    name: "The Mini",
                    url: "/crosswords/game/mini?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
                    backgroundImage: "var(--mini)",
                    dataTrackLabel: "mini-page-nav"
                }, {
                    id: "digits",
                    name: "Digits",
                    url: "/games/digits",
                    backgroundImage: "var(--digits)",
                    dataTrackLabel: "digits-nav"
                }, {
                    id: "wordlebot",
                    name: "WordleBot: Your Daily Wordle Companion",
                    url: "/interactive/2022/upshot/wordle-bot.html?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
                    backgroundImage: "var(--wordlebot-walking-icon)",
                    dataTrackLabel: "wordle-bot-nav"
                }, {
                    id: "gameplay-stories",
                    name: "Gameplay Stories",
                    url: "/column/wordplay?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
                    dataTrackLabel: "gameplay-stories-nav"
                }, {
                    id: "more-games",
                    name: "More Games",
                    url: "/puzzles?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
                    dataTrackLabel: "all-games-nav"
                }].filter((e=>"digits" !== e.id || Je))
                  , s = function() {
                    return {
                        backgroundImage: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        backgroundSize: "20px"
                    }
                }
                  , o = F();
                return t.createElement("nav", {
                    className: To.container
                }, t.createElement("span", {
                    className: To.navHeader
                }, t.createElement(Io, null)), t.createElement("span", {
                    className: To.moreText
                }, "More From New York Times Games"), t.createElement("div", {
                    className: To.gameList
                }, a.map((e=>t.createElement("a", {
                    "aria-label": e.name,
                    key: e.id,
                    className: To.navLink,
                    href: e.url,
                    onClick: ()=>o(Ce("wordle", e.dataTrackLabel, !0, null))
                }, t.createElement("div", {
                    className: To.navItem
                }, t.createElement("span", {
                    style: s(e.backgroundImage),
                    className: To.navIcon
                }), e.name, "digits" === e.id && t.createElement("span", {
                    className: To.beta
                }, "BETA")))))), t.createElement("div", {
                    className: To.nytList
                }, [{
                    id: "nyt",
                    name: "The New York Times",
                    url: "https://www.nytimes.com/?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
                    backgroundImage: "var(--nyt)",
                    dataTrackLabel: "nyt-nav"
                }, {
                    id: "cooking",
                    name: "New York Times Cooking",
                    url: "https://cooking.nytimes.com",
                    backgroundImage: "var(--cooking)",
                    dataTrackLabel: "cooking-nav"
                }, {
                    id: "wirecutter",
                    name: "New York Times Wirecutter",
                    url: "https://www.nytimes.com/wirecutter/?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
                    backgroundImage: "var(--wirecutter)",
                    dataTrackLabel: "wirecutter-nav"
                }, {
                    id: "athletic",
                    name: "The Athletic",
                    url: "https://theathletic.com/?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
                    backgroundImage: "var(--athletic)",
                    dataTrackLabel: "athletic-nav"
                }].map((e=>t.createElement("a", {
                    "aria-label": e.name,
                    href: e.url,
                    className: To.navLink,
                    onClick: ()=>o(Ce("wordle", e.dataTrackLabel, !0, null)),
                    id: e.id,
                    key: e.id,
                    "data-track-label": e.dataTrackLabel
                }, t.createElement("div", {
                    className: To.navItem
                }, t.createElement("span", {
                    style: s(e.backgroundImage),
                    className: To.navIcon
                }), e.name))))), t.createElement("div", {
                    className: To.privacyStatic
                }, t.createElement("a", {
                    className: To.privacyItem,
                    href: "https://www.nytimes.com/privacy/privacy-policy",
                    "data-track-label": "privacy-policy-nav",
                    onClick: ()=>o(Ce("wordle", "privacy-policy-nav", !0, null))
                }, "Privacy Policy"), t.createElement(t.Fragment, null, "show" === e.PURR_DataSaleOptOutUI_v2 && t.createElement("div", {
                    className: "ccpa-opt-out"
                }, t.createElement("a", {
                    href: "#ccpa-hamburger",
                    "data-region": "menu",
                    "data-track": "linkOptOut",
                    className: qs()(To.privacyItem, "ccpa-link ccpa-opt-out-link ccpa-impression")
                }, "Do Not Sell/Share My Information")), "show-opted-out" === e.PURR_DataSaleOptOutUI_v2 && t.createElement("div", null, t.createElement("a", {
                    href: "#opted-out-footer",
                    "data-region": "menu",
                    "data-track": "optedOut",
                    className: qs()(To.privacyItem, "ccpa-user-opted-out ccpa-impression")
                }, "We No Longer Sell/Share Your Information")), "show" === e.PURR_CaliforniaNoticesUI && t.createElement("div", null, t.createElement("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://www.nytimes.com/privacy/privacy-policy#california-notice",
                    "data-region": "menu",
                    "data-track": "linkCANotice",
                    className: qs()(To.privacyItem, "ccpa-link ccpa-california-notice-link ccpa-impression")
                }, "California Notices")), "show" === e.PURR_LimitSensitivePI && t.createElement("div", null, t.createElement("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://www.nytimes.com/data-subject-request",
                    "data-region": "menu",
                    "data-track": "linkLimitInfo",
                    className: qs()(To.privacyItem, "ccpa-link ccpa-california-limit-information ccpa-impression")
                }, "Limit the Use of My Sensitive Information")))), t.createElement(Go, null))
            }
            var qo = {
                overlayNav: "NavModal-module_overlayNav__EewdW",
                contentNav: "NavModal-module_contentNav__gdDZp",
                SlideRight: "NavModal-module_SlideRight__OZJm6",
                closingNav: "NavModal-module_closingNav__vsGdD",
                SlideLeft: "NavModal-module_SlideLeft__bnLDK",
                closeIconNav: "NavModal-module_closeIconNav__P3kl2"
            };
            function Ho() {
                const e = (0,
                t.useRef)(null)
                  , a = F()
                  , s = U(La)
                  , [o,r] = (0,
                t.useState)(!1);
                return Gt(Boolean(s), e),
                s ? t.createElement("div", {
                    role: "navigation",
                    "aria-label": "More from New York Times Games",
                    className: qo.overlayNav,
                    "data-testid": "nav-modal-overlay",
                    onClick: ()=>{
                        r(!0)
                    }
                    ,
                    onKeyDown: e=>{
                        "Escape" === e.key && r(!0),
                        "Enter" === e.key && e.stopPropagation()
                    }
                    ,
                    onAnimationEnd: e=>{
                        e.animationName === qo.SlideLeft && (r(!1),
                        a(je()))
                    }
                    ,
                    onBlur: a=>{
                        var s, t;
                        null !== (s = a.currentTarget) && void 0 !== s && s.contains(a.relatedTarget) || null === (t = e.current) || void 0 === t || t.focus()
                    }
                }, t.createElement("div", {
                    className: qs()(qo.contentNav, {
                        [qo.closingNav]: o
                    }),
                    id: "content-nav"
                }, t.createElement("button", {
                    ref: e,
                    className: qo.closeIconNav,
                    "aria-label": "Close",
                    type: "button",
                    onKeyDown: e=>{
                        "Enter" === e.key && r(!0)
                    }
                }, t.createElement(Dt, {
                    "aria-hidden": "true",
                    icon: "close"
                })), t.createElement(Wo, null))) : null
            }
            const Vo = {
                linkInfo: {
                    title: "You can now link your Wordle stats to a free New York Times account.",
                    getText: ()=>["Wordle stats are currently saved locally in the browser where you play, which means different devices may save different stats.", "If the browser memory is cleared, your stats will be lost.", "Linking your stats to a free account means keeping your streak and stats anywhere you're logged in."],
                    text2: "<b>You can continue to play Wordle without an account,</b> but your stats will not appear across devices and may reset if the browser data is cleared.",
                    icon: "var(--link-info)",
                    alt: "Wordle Icon with NYT Logo"
                },
                statsProblem: {
                    title: "Something doesn't look right.",
                    getText: (e,a)=>e ? a ? ["Experiencing a problem? Wordle currently saves your stats and game progress to your New York Times account.", "<b>If your data is incorrect,</b> make sure you are logged in to the correct account. If you share your account, you may be seeing game data from another user of your account.", 'For more information about playing Wordle, visit our <a target="_blank" href="https://help.nytimes.com/hc/en-us/articles/360029050872-Word-Games-and-Logic-Puzzles#h_01FVGCB2Z00ZQMDMCYWBPWJNXB">Help Center</a> for assistance.'] : ["Experiencing a problem? By default, Wordle saves your stats and game progress to your device or browser. You can also link your data to your New York Times account so your data is available anywhere.", "<b>If your data is incorrect,</b> you may have played on a different device or browser today, or someone else may have played on the device or browser you are currently using.", 'For more information about playing Wordle, visit our <a target="_blank" href="https://help.nytimes.com/hc/en-us/articles/360029050872-Word-Games-and-Logic-Puzzles#h_01FVGCB2Z00ZQMDMCYWBPWJNXB">Help Center</a> for assistance.'] : ["Experiencing a problem? By default, Wordle saves your stats and game progress to your device or browser. You can also link your data to a New York Times account so your data is available anywhere.", "<b>If your data is incorrect,</b> you may need to log in to your New York Times account. If you do not have an account, you may have played on a different device or browser today, or someone else may have played on the device or browser you are currently using.", 'For more information about playing Wordle, visit our <a target="_blank" href="https://help.nytimes.com/hc/en-us/articles/360029050872-Word-Games-and-Logic-Puzzles#h_01FVGCB2Z00ZQMDMCYWBPWJNXB">Help Center</a> for assistance.'],
                    icon: "var(--stats-problem)",
                    alt: "Wordle Icon with Question Mark"
                }
            };
            var Fo = {
                title: "Explainer-module_title__pxagP",
                containerLink: "Explainer-module_containerLink__Eahjg",
                containerProblems: "Explainer-module_containerProblems__YkeXK",
                explainerFooterText: "Explainer-module_explainerFooterText__v5jPj",
                text: "Explainer-module_text__DosQz",
                statsLinkContainer: "Explainer-module_statsLinkContainer__UwtoZ",
                actionButton: "Explainer-module_actionButton__QMznh",
                helpButton: "Explainer-module_helpButton__Y3kVe",
                loginButton: "Explainer-module_loginButton__ndryx",
                gamesIcon: "Explainer-module_gamesIcon___J53J",
                headerNew: "Explainer-module_headerNew__y8y2y",
                close: "Explainer-module_close__wTSom"
            };
            function Uo(e) {
                let {type: a, loggedIn: s=!1, optedIn: o=!1, closeButton: r, trackExplainerClick: n} = e;
                const i = F()
                  , {getText: l, title: c, icon: d, alt: u, text2: m=""} = Vo[a]
                  , p = l(s, o)
                  , y = !!m && !o
                  , g = "linkInfo" === a ? Fo.containerLink : Fo.containerProblems;
                return t.createElement(t.Fragment, null, t.createElement("div", {
                    className: Fo.headerNew
                }, t.createElement("p", null, t.createElement("img", {
                    className: Fo.gamesIcon,
                    alt: "NYT Games Logo",
                    style: {
                        content: "var(--gameslogo)"
                    }
                })), r()), t.createElement("div", {
                    className: g
                }, t.createElement("img", {
                    alt: u,
                    style: {
                        content: d
                    }
                }), t.createElement("h1", {
                    className: Fo.title
                }, c), t.createElement("div", null, p.map(((e,a)=>t.createElement("p", {
                    key: a,
                    className: Fo.text,
                    dangerouslySetInnerHTML: {
                        __html: e
                    }
                })))), t.createElement("div", {
                    className: Fo.statsLinkContainer
                }, t.createElement("a", {
                    className: Fo.helpButton,
                    "aria-label": "Link to visit the Help Center",
                    href: "https://help.nytimes.com/hc/en-us/articles/360029050872-Word-Games-and-Logic-Puzzles#h_01FVGCB2Z00ZQMDMCYWBPWJNXB",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: ()=>n("help-center-broken-stats")
                }, "Visit the Help Center"), !s && t.createElement(tt, {
                    optIn: !0,
                    ariaLabel: "Button to login or create a free account",
                    styles: Fo.loginButton,
                    trackEvent: {
                        eventName: "",
                        sendContext: !1,
                        element: {
                            label: "log-in-broken-stats",
                            name: "wordle"
                        }
                    }
                }, "Log in or create a free account"), s && !o && t.createElement("button", {
                    type: "button",
                    className: Fo.loginButton,
                    onClick: ()=>{
                        i(ve("statsLink")),
                        n("link-broken-stats")
                    }
                }, "Link stats to my account"))), y && t.createElement("p", {
                    className: Fo.explainerFooterText,
                    dangerouslySetInnerHTML: {
                        __html: m
                    }
                }))
            }
            var Yo = "StatsLink-module_container__KRItx"
              , Zo = "StatsLink-module_header__mvxLj"
              , Ko = "StatsLink-module_logo__GD7nw"
              , Xo = "StatsLink-module_heading__CvzrG"
              , Jo = "StatsLink-module_paragraph__XnMNC";
            const Qo = {
                line1: "Your stats will be linked to this",
                line2: "New York Times account"
            }
              , $o = {
                line1: "We're sorry, but we're having a technical issue.",
                line2: "We're unable to link your stats to this account right now."
            };
            var er = e=>{
                let {onClose: a} = e;
                const [s,o] = (0,
                t.useState)(!0)
                  , r = F()
                  , i = U(ma)
                  , l = U(ua)
                  , c = U(ca);
                (0,
                t.useEffect)((()=>{
                    r({
                        type: Ns
                    }),
                    r((e=>{
                        const a = ()=>{
                            e({
                                type: Ls
                            });
                            const a = new Error("profile");
                            var s;
                            e((s = a,
                            e=>{
                                e(_e()),
                                e(Ee()),
                                e(je()),
                                "malformed Moogle response data" === s.message && (0,
                                n.lY)(new Error(s.message), {
                                    api: "moogle",
                                    category: "game_state"
                                }),
                                s.message && "No internet" === s.message ? e(ze("offline")) : s.message && "profile" === s.message ? e(ze("profile")) : e(ze("default"))
                            }
                            ))
                        }
                          , s = window.isHybridWebView && window.NativeBridge ? window.NativeBridge.gamesGetUserDetails().then((e=>e.values.gamesGetUserDetails)) : n.Be.get(Ge, {
                            withCookie: !1,
                            headers: {
                                client_id: "games"
                            }
                        });
                        return e({
                            type: Os
                        }),
                        s.then((s=>{
                            s.email ? e({
                                type: Ps,
                                payload: {
                                    data: {
                                        email: s.email
                                    }
                                }
                            }) : a()
                        }
                        )).catch((()=>{
                            a()
                        }
                        ))
                    }
                    ))
                }
                ), []),
                (0,
                t.useEffect)((()=>{
                    i ? o(!0) : i || o(!1)
                }
                ), [i]);
                const {line1: d, line2: u} = c ? $o : Qo;
                return s ? t.createElement("div", {
                    className: Yo
                }, t.createElement("header", {
                    className: Zo
                }, t.createElement("img", {
                    alt: "New York Times logo",
                    className: Ko,
                    style: {
                        content: "var(--nyt-logo)"
                    }
                })), t.createElement("div", null, t.createElement(Rt, {
                    waitFor: 150,
                    setBackground: "light"
                }))) : t.createElement("div", {
                    className: Yo
                }, t.createElement("header", {
                    className: Zo
                }, t.createElement("img", {
                    alt: "New York Times logo",
                    className: Ko,
                    style: {
                        content: "var(--nyt-logo)"
                    }
                })), t.createElement("div", {
                    className: "StatsLink-module_content__G_CBB"
                }, t.createElement("div", {
                    className: "StatsLink-module_statsIconWrapper__a0GRV"
                }, c && t.createElement("svg", {
                    className: "StatsLink-module_statsFailureBadge__KnXhP",
                    width: "44",
                    height: "44",
                    viewBox: "0 0 44 44",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, t.createElement("path", {
                    d: "M13.7145 41.3977C16.2788 42.4691 19.0443 43 22 43C24.9241 43 27.6726 42.4685 30.2355 41.3977C32.7847 40.3326 35.0117 38.8526 36.9071 36.9571C38.8013 35.0629 40.2889 32.8377 41.3704 30.2909C42.46 27.7252 43 24.9579 43 22C43 19.0738 42.4593 16.3233 41.3704 13.7591C40.2889 11.2123 38.8013 8.98713 36.9071 7.09289C35.0129 5.19865 32.7877 3.71108 30.2409 2.62956C27.6767 1.54066 24.9262 1 22 1C19.0421 1 16.2748 1.54004 13.7091 2.62956C11.1623 3.71108 8.93713 5.19865 7.04289 7.09289C5.14744 8.98834 3.66735 11.2153 2.6023 13.7645C1.53151 16.3274 1 19.0759 1 22C1 24.9557 1.53091 27.7212 2.6023 30.2855C3.66735 32.8347 5.14744 35.0617 7.04289 36.9571C8.93834 38.8526 11.1653 40.3326 13.7145 41.3977ZM22.65 12.7V23.35H21.65V12.7H22.65ZM22.4679 30.8179C22.3474 30.9384 22.2139 31 22 31C21.7861 31 21.6526 30.9384 21.5321 30.8179C21.4116 30.6974 21.35 30.5639 21.35 30.35C21.35 30.1361 21.4116 30.0026 21.5321 29.8821C21.6526 29.7616 21.7861 29.7 22 29.7C22.2139 29.7 22.3474 29.7616 22.4679 29.8821C22.5884 30.0026 22.65 30.1361 22.65 30.35C22.65 30.5639 22.5884 30.6974 22.4679 30.8179Z",
                    fill: "#E33D26",
                    stroke: "white",
                    strokeWidth: "2"
                })), t.createElement("img", {
                    alt: "Large sized wordle stats icon",
                    className: "StatsLink-module_statsIcon__RlhG_",
                    style: {
                        content: "var(--large-stats)"
                    }
                })), t.createElement("div", {
                    className: "StatsLink-module_headingWrapper__zGFbL"
                }, t.createElement("h1", {
                    className: Xo
                }, d), t.createElement("h1", {
                    className: Xo
                }, u)), t.createElement("div", {
                    className: "StatsLink-module_paragraphWrapper__DTlYG"
                }, c && t.createElement("p", {
                    className: Jo
                }, "You are logged in as"), t.createElement("p", {
                    className: qs()(Jo, "StatsLink-module_email__AZFwy")
                }, l && l.email)), t.createElement("button", {
                    className: "StatsLink-module_button__yaJ5g",
                    onClick: c ? ()=>{
                        r(Pe("", !1, {
                            label: "stats-link-error",
                            name: "wordle"
                        })),
                        a()
                    }
                    : ()=>{
                        c || (r({
                            type: fs
                        }),
                        r({
                            type: As,
                            payload: {}
                        }),
                        r(Pe("", !1, {
                            label: "stats-link-confirm",
                            name: "wordle"
                        })))
                    }
                    ,
                    type: "button"
                }, c ? "Go back to stats" : "Confirm and save"), t.createElement("footer", {
                    className: "StatsLink-module_footer__YeNSn"
                }, !c && t.createElement(t.Fragment, null, t.createElement("p", {
                    className: qs()(Jo, "StatsLink-module_linkPrompt__FDQf_")
                }, "Not the right account?"), t.createElement(tt, {
                    optIn: !0,
                    styles: "StatsLink-module_link__NK410",
                    ariaLabel: "Link for logging in or creating a free account"
                }, "Log in to or create another free account ›")))))
            }
              , ar = {
                page: "Page-module_page__Py6Ys",
                SlideIn: "Page-module_SlideIn__AgM2I",
                closing: "Page-module_closing__YdTL_",
                SlideOut: "Page-module_SlideOut__Kn9ZJ",
                pageNew: "Page-module_pageNew__DnZEs",
                gamesIcon: "Page-module_gamesIcon__LZrZ6",
                close: "Page-module_close__woWx7",
                noDarkMode: "Page-module_noDarkMode__g_QCc",
                content: "Page-module_content__ZZpzo",
                pageFixed: "Page-module_pageFixed__Yu8Dx",
                headerNew: "Page-module_headerNew__FQAkL",
                contentContainer: "Page-module_contentContainer__DXzS4"
            };
            function sr(e) {
                let {adProps: a={}} = e;
                const s = (0,
                t.useRef)(null)
                  , {couldHaveAd: o, hasAd: r} = a
                  , i = F()
                  , l = U(Pa)
                  , [c,d] = (0,
                t.useState)(!1)
                  , u = !!U(ia)
                  , m = U(ea)
                  , p = U(Ia)
                  , y = U(aa)
                  , g = "".concat(U(Wa));
                if ((0,
                t.useEffect)((()=>{
                    p && d(!0)
                }
                ), [p]),
                t.useRef(null),
                Gt(Boolean(l), s),
                !l)
                    return null;
                const h = e=>t.createElement("button", {
                    ref: s,
                    type: "button",
                    className: ar.close,
                    "data-testid": "close",
                    onClick: ()=>{
                        d(!0),
                        "statsProblem" === e && y && i(Pe("", !1, {
                            label: "stats-link-error",
                            name: "wordle"
                        }))
                    }
                }, t.createElement(Dt, {
                    icon: "close"
                }))
                  , b = {
                    linkInfo: {
                        content: t.createElement(Uo, {
                            closeButton: ()=>h("linkInfo"),
                            type: "linkInfo",
                            loggedIn: u,
                            optedIn: m,
                            trackExplainerClick: ()=>i(Pe("more-info", !1))
                        }),
                        title: ""
                    },
                    statsProblem: {
                        content: t.createElement(Uo, {
                            closeButton: ()=>h("statsProblem"),
                            loggedIn: u,
                            optedIn: m,
                            type: "statsProblem",
                            trackExplainerClick: e=>(0,
                            n.ob)({
                                name: "",
                                label: null,
                                element: {
                                    name: "wordle",
                                    label: e
                                },
                                context: g
                            })
                        }),
                        title: ""
                    },
                    statsLink: {
                        content: t.createElement(er, {
                            onClose: ()=>d(!0)
                        }),
                        title: ""
                    }
                }
                  , {content: k} = b[l]
                  , f = ["statsLink"].includes(l);
                return t.createElement("dialog", {
                    open: !0,
                    "data-testid": "pageNew",
                    className: qs()(ar.pageNew, {
                        [ar.pageFixed]: o && r,
                        [ar.closing]: c,
                        [ar.noDarkMode]: f
                    }),
                    onAnimationEnd: e=>{
                        e.animationName === ar.SlideOut && (d(!1),
                        i(Ee()))
                    }
                    ,
                    onBlur: e=>{
                        var a, t;
                        null !== (a = e.currentTarget) && void 0 !== a && a.contains(e.relatedTarget) || null === (t = s.current) || void 0 === t || t.focus()
                    }
                    ,
                    onKeyDown: e=>{
                        "Escape" === e.key && d(!0)
                    }
                }, t.createElement("div", {
                    className: ar.content
                }, t.createElement("div", {
                    className: ar.contentContainer
                }, k)))
            }
            var tr = {
                toaster: "ToastContainer-module_toaster__TYGMD",
                gameToaster: "ToastContainer-module_gameToaster__HPkaC",
                systemToaster: "ToastContainer-module_systemToaster__K3Q61"
            }
              , or = {
                toast: "Toast-module_toast__iiVsN",
                win: "Toast-module_win__kqUor",
                fade: "Toast-module_fade__hF7us"
            };
            function rr(e) {
                let {toast: a} = e;
                const {text: s, duration: o, timestamp: r} = a
                  , n = F()
                  , [i,l] = (0,
                t.useState)(!1);
                return ht((()=>l(!0)), o === 1 / 0 ? null : o),
                t.createElement("div", {
                    className: qs()(or.toast, {
                        [or.fade]: i
                    }),
                    onTransitionEnd: ()=>{
                        n(Oe(s, r))
                    }
                    ,
                    "aria-live": "polite"
                }, s)
            }
            function nr() {
                const e = U(Aa)
                  , a = e.filter((e=>e.isSystem))
                  , s = e.filter((e=>!e.isSystem))
                  , o = (e,a)=>t.createElement("div", {
                    tabIndex: 0,
                    className: tr.toaster,
                    id: a
                }, e.map((e=>t.createElement(rr, {
                    key: "".concat(e.text, "-").concat(e.timestamp),
                    toast: e
                }))));
                return t.createElement(t.Fragment, null, o(s, tr.gameToaster), o(a, tr.systemToaster))
            }
            const ir = e=>{
                const a = "ios" === window.newsreaderAppPlatform && "1_BackToPlayTab" === e;
                if (window.isHybridWebView && window.NativeBridge)
                    window.NativeBridge.gamesBackToHub();
                else if (window.isPlayTab || a) {
                    const e = document.createElement("a");
                    e.href = "nytimes://play",
                    e.click()
                } else
                    window.location.href = "/crosswords";
                return null
            }
            ;
            var lr = {
                container: "Error-module_container__qq_q0",
                SlideIn: "Error-module_SlideIn__WlIVo",
                errorContainer: "Error-module_errorContainer__guLQP",
                errorText: "Error-module_errorText__m3mh6",
                errorTilesContainer: "Error-module_errorTilesContainer__V7shi",
                errorTiles: "Error-module_errorTiles__AE9kN",
                backButton: "Error-module_backButton___ydkt",
                errorBannerContainer: "Error-module_errorBannerContainer__pfK75",
                errorTitle: "Error-module_errorTitle__rS8xm",
                close: "Error-module_close__cXxlX",
                errorRow: "Error-module_errorRow__No1ux",
                hideBanner: "Error-module_hideBanner__Q6BVU",
                SlideOut: "Error-module_SlideOut__NeDv_"
            };
            const cr = e=>{
                let {text: a="error"} = e;
                return t.createElement("div", {
                    className: lr.errorTilesContainer
                }, a.split("").map(((e,a)=>t.createElement("div", {
                    className: lr.errorTiles,
                    key: "".concat(a, "-").concat(e)
                }, e))))
            }
              , dr = ()=>t.createElement("div", {
                className: lr.errorText
            }, "You’re offline.", t.createElement("br", null), "Find a connection and come back.")
              , ur = ()=>t.createElement("div", {
                className: lr.errorText
            }, "Oops, something went wrong.", t.createElement("br", null), "Please try again later.");
            function mr() {
                const e = U(Oa)
                  , a = "profile" === e
                  , s = window.isHybridWebView
                  , o = document.referrer.includes("nytimes") && !a
                  , r = F();
                if (!e)
                    return null;
                const n = {
                    offline: {
                        tiles: t.createElement(cr, {
                            text: "yikes"
                        }),
                        content: t.createElement(dr, null)
                    },
                    default: {
                        tiles: t.createElement(cr, null),
                        content: t.createElement(ur, null)
                    },
                    profile: {
                        tiles: t.createElement(cr, null),
                        content: t.createElement(ur, null)
                    }
                }
                  , i = t.createElement("button", {
                    className: lr.backButton,
                    type: "button",
                    onClick: ()=>{
                        r(Pe("", !1, {
                            label: "stats-link-error",
                            name: "wordle"
                        })),
                        s ? ir() : document.location.reload()
                    }
                }, s ? "Back" : "Reload")
                  , {tiles: l, content: c} = n[e];
                return t.createElement("div", {
                    className: lr.container,
                    role: "dialog"
                }, t.createElement("div", {
                    className: lr.errorContainer
                }, l, c, o && t.createElement("button", {
                    className: lr.backButton,
                    type: "button",
                    "data-testid": "back",
                    onClick: ()=>{
                        "offline" === e && r(Pe("stats-link-offline", !1)),
                        ir()
                    }
                }, "Back"), a && i))
            }
            function pr() {
                const [e,a] = (0,
                t.useState)(!1);
                return t.createElement("div", {
                    "aria-hidden": e,
                    className: qs()(lr.errorBannerContainer, {
                        [lr.hideBanner]: e
                    })
                }, t.createElement("div", {
                    className: lr.errorRow,
                    "aria-hidden": e
                }, t.createElement("p", {
                    className: lr.errorTitle
                }, "Error"), t.createElement("span", {
                    role: "button",
                    className: lr.close,
                    onClick: ()=>a(!0)
                }, t.createElement(Dt, {
                    icon: "close",
                    fillColor: "var(--white)"
                }))), t.createElement("p", null, "Oops, something went wrong. Please try again later."))
            }
            var yr = {
                key: "Key-module_key__kchQI",
                fade: "Key-module_fade__dc3AW",
                half: "Key-module_half__HooWu",
                one: "Key-module_one__zlfH6",
                oneAndAHalf: "Key-module_oneAndAHalf__bq8Tw"
            };
            const gr = {
                backspace: "←",
                enter: "↵"
            }
              , hr = e=>e === gr.backspace ? t.createElement(Dt, {
                icon: "backspace"
            }) : e === gr.enter ? "enter" : e >= "a" && e <= "z" ? e : void 0;
            function br(e) {
                let {value: a, evaluation: s} = e;
                const [o,r] = t.useState(!1)
                  , n = hr(a);
                if (t.useEffect((()=>{
                    s && r(!0)
                }
                ), [s]),
                !n)
                    return t.createElement("div", {
                        "data-testid": "spacer",
                        className: 1 === a.length ? yr.half : yr.one
                    });
                let i;
                return a === gr.backspace ? i = "backspace" : s && (i = "".concat(a, " ").concat(s)),
                t.createElement("button", {
                    type: "button",
                    "data-key": a,
                    "data-state": s,
                    "aria-label": i,
                    className: qs()(yr.key, {
                        [yr.oneAndAHalf]: a === gr.backspace || a === gr.enter,
                        [yr.fade]: o
                    }),
                    onTransitionEnd: ()=>r(!1)
                }, n)
            }
            var kr = {
                keyboard: "Keyboard-module_keyboard__uYuqf",
                row: "Keyboard-module_row__ilOKU"
            };
            const fr = [["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"], ["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-"], ["↵", "z", "x", "c", "v", "b", "n", "m", "←"]];
            function wr() {
                const e = (0,
                t.useRef)(null)
                  , a = F()
                  , s = U(Qa)
                  , o = e=>{
                    "←" === e || "Backspace" === e ? a(gs()) : "↵" === e || "Enter" === e ? a(hs()) : ja.includes(e.toLowerCase()) && a(ys(e.toLowerCase()))
                }
                ;
                return (0,
                t.useEffect)((()=>{
                    const e = e=>{
                        if (!0 === e.repeat)
                            return;
                        const {key: a, metaKey: s, ctrlKey: t} = e;
                        s || t || (ja.includes(a.toLowerCase()) || "Backspace" === a || "Enter" === a) && o(a)
                    }
                    ;
                    return window.addEventListener("keydown", e),
                    ()=>window.removeEventListener("keydown", e)
                }
                ), []),
                t.createElement("div", {
                    className: kr.keyboard,
                    role: "group",
                    "aria-label": "Keyboard",
                    ref: e,
                    onClick: a=>{
                        const s = a.target.closest("button");
                        s && e.current && e.current.contains(s) && void 0 !== s.dataset.key && o(s.dataset.key)
                    }
                }, fr.map(((e,a)=>t.createElement("div", {
                    className: kr.row,
                    key: a
                }, e.map(((e,o)=>t.createElement(br, {
                    key: "".concat(e, "-").concat(a, "-").concat(o),
                    value: e,
                    evaluation: s[e]
                })))))))
            }
            var vr = e=>{
                var a;
                let {dismissIcon: s} = e;
                const [o,r] = t.useState((null === (a = window.navigator) || void 0 === a ? void 0 : a.onLine) || !1);
                t.useEffect((()=>{
                    const e = ()=>r(!0)
                      , a = ()=>r(!1);
                    return window.addEventListener("online", e),
                    window.addEventListener("offline", a),
                    ()=>{
                        window.removeEventListener("online", e),
                        window.removeEventListener("offline", a)
                    }
                }
                ), []);
                const n = qs()("pz-offline-ticker", {
                    "is-offline": !o
                });
                return t.createElement("div", {
                    className: n,
                    "aria-hidden": o
                }, "You're offline! Progress may not be saved.", s && t.createElement("span", {
                    role: "button",
                    className: "offline-ticker-dismiss",
                    onClick: ()=>r(!0)
                }, s))
            }
              , _r = e=>{
                let {id: a, position: s, className: o} = e;
                const r = qs()("ad", "place-ad", "Ad-module_adContainer__ZAFEc", "Ad-module_hasAdLabel__IXofl", o);
                return t.createElement("div", {
                    ref: e=>{
                        var t, o, r;
                        null === (t = window) || void 0 === t || null === (o = t.AdSlot4) || void 0 === o || null === (r = o.initializeAd) || void 0 === r || r.call(o, e, {
                            id: a,
                            position: s
                        })
                    }
                    ,
                    className: r,
                    id: a,
                    "data-position": s
                })
            }
            ;
            const Er = (e,a)=>{
                const {hasAbraLoaded: s, getVariant: t} = k();
                return s && t(e) === a
            }
            ;
            var xr = ()=>{
                const e = (()=>{
                    const e = Er("dfp_wordle_ad", "1_topad")
                      , a = Er("dfp_wordle_ad", "2_midad")
                      , s = e || a;
                    return !(0,
                    x.K1)() && !at() && !st() && s
                }
                )()
                  , [a,s] = (0,
                t.useState)(0)
                  , [o,r] = (0,
                t.useState)(!0)
                  , [n,i] = (0,
                t.useState)(!1)
                  , [l,c] = (0,
                t.useState)(!1)
                  , [d,u] = (0,
                t.useState)(!1)
                  , m = Er("dfp_wordle_ad", "2_midad");
                return (0,
                t.useEffect)((()=>{
                    new Promise(((e,a)=>{
                        const s = new XMLHttpRequest;
                        s.open("HEAD", "https://www.nytimes.com/ads.txt", !0),
                        s.onreadystatechange = ()=>{
                            s.readyState === s.HEADERS_RECEIVED && (s.abort(),
                            e(!1))
                        }
                        ,
                        s.onerror = a=>{
                            e(!0)
                        }
                        ,
                        s.send()
                    }
                    )).then((e=>{
                        i(e),
                        r(!e)
                    }
                    ))
                }
                ), []),
                (0,
                t.useEffect)((()=>{
                    document && !document.body.classList.contains("scrollable") && o ? (document.body.classList.add("scrollable"),
                    u(!0)) : o || (document.body.classList.remove("scrollable"),
                    u(!1))
                }
                ), [o]),
                (0,
                t.useEffect)((()=>{
                    if (!e || l)
                        return;
                    const t = e=>a=>{
                        const {slot: s, id: t, type: o, isEmpty: n} = a;
                        (0 === e || n) && (r(!1),
                        i(!0))
                    }
                      , o = e=>t=>{
                        const {slot: o, id: n, type: i} = t;
                        if (n || o) {
                            var l;
                            const t = document.getElementById(n || o.getSlotElementId())
                              , {height: i=0} = (null == t || null === (l = t.getBoundingClientRect) || void 0 === l ? void 0 : l.call(t)) || {};
                            (i > a || "AdEmpty" === e) && (s(i - 1),
                            s(i)),
                            r("AdEmpty" !== e)
                        }
                    }
                    ;
                    let n = [];
                    return window.AdSlot4 && e && (c(!0),
                    window.AdSlot4.cmd.push((()=>{
                        var e, a;
                        const s = null === (e = window) || void 0 === e || null === (a = e.AdSlot4) || void 0 === a ? void 0 : a.events;
                        n = [null == s ? void 0 : s.subscribe({
                            name: "script_loader_error",
                            callback: t(0),
                            scope: "all"
                        }), null == s ? void 0 : s.subscribe({
                            name: "BidderError",
                            callback: t(0),
                            scope: "all"
                        }), null == s ? void 0 : s.subscribe({
                            name: "AdEmpty",
                            callback: t(1),
                            scope: "all"
                        }), null == s ? void 0 : s.subscribe({
                            name: "AdEnteredViewport",
                            callback: o("AdEnteredViewport"),
                            scope: "all"
                        }), null == s ? void 0 : s.subscribe({
                            name: "AdViewable",
                            callback: o("AdViewable"),
                            scope: "all"
                        }), null == s ? void 0 : s.subscribe({
                            name: "AdRefreshed",
                            callback: o("AdRefreshed"),
                            scope: "all"
                        })]
                    }
                    ))),
                    ()=>{
                        for (; n.length; ) {
                            var e;
                            null === (e = n.pop()) || void 0 === e || e.remove()
                        }
                    }
                }
                ), [e, o]),
                {
                    height: a,
                    hasAd: o,
                    couldHaveAd: e,
                    showAdBelowMasthead: m,
                    hasAdError: n,
                    pageScrollable: d
                }
            }
              , zr = s(2058)
              , Nr = s(6470);
            const jr = "impression"
              , Cr = "impression"
              , Sr = ["slot", "id", "pos", "position"];
            function Or(e, a) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    a && (t = t.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }
                    ))),
                    s.push.apply(s, t)
                }
                return s
            }
            function Pr(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var s = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? Or(Object(s), !0).forEach((function(a) {
                        Lr(e, a, s[a])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : Or(Object(s)).forEach((function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(s, a))
                    }
                    ))
                }
                return e
            }
            function Lr(e, a, s) {
                return a in e ? Object.defineProperty(e, a, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = s,
                e
            }
            const Ar = [Nr.hg.AD_SLOT_READY, Nr.hg.AD_DEFINED, Nr.hg.AD_CALLED, Nr.hg.AD_REQUEST_SENT, Nr.hg.AD_RESPONSE, Nr.hg.AD_RENDERED, Nr.hg.AD_LOADED, Nr.hg.AD_VIEWABLE, Nr.hg.AD_EMPTY]
              , Ir = ["adSlotEventName", "pageType", "slotId", "position", "lineItemId", "creativeId", "timeDefined", "timeCalled", "timeCallSent", "timeRendered", "timeLoaded", "timeViewed", "isEmpty"]
              , Tr = e=>{
                let[a] = e;
                return Ir.includes(a)
            }
              , Dr = e=>a=>{
                if (e !== Nr.hg.AD_EMPTY || a.type !== Nr.hg.AD_BLOCK_ON) {
                    const s = (e=>{
                        const {slot: a, id: s, pos: t, position: o} = e
                          , r = function(e, a) {
                            if (null == e)
                                return {};
                            var s, t, o = function(e, a) {
                                if (null == e)
                                    return {};
                                var s, t, o = {}, r = Object.keys(e);
                                for (t = 0; t < r.length; t++)
                                    s = r[t],
                                    a.indexOf(s) >= 0 || (o[s] = e[s]);
                                return o
                            }(e, a);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                for (t = 0; t < r.length; t++)
                                    s = r[t],
                                    a.indexOf(s) >= 0 || Object.prototype.propertyIsEnumerable.call(e, s) && (o[s] = e[s])
                            }
                            return o
                        }(e, Sr)
                          , n = (null == a ? void 0 : a.getResponseInformation()) || {}
                          , i = Object.entries(Pr(Pr(Pr(Pr(Pr(Pr({}, r), function() {
                            let {creativeId: e, sourceAgnosticCreativeId: a} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return e || a ? {
                                creativeId: e || a
                            } : {}
                        }(n)), function() {
                            let {lineItemId: e, sourceAgnosticLineItemId: a} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return e || a ? {
                                lineItemId: e || a
                            } : {}
                        }(n)), t || o ? {
                            position: t || o
                        } : {}), s ? {
                            slotId: s
                        } : {}), {}, {
                            pageType: "wordle"
                        }))
                          , l = i.filter(Tr);
                        return Object.fromEntries(l)
                    }
                    )(Pr(Pr({}, a), {}, {
                        adSlotEventName: e
                    }));
                    (e=>{
                        let {event: a=jr, type: s=Cr, data: t} = e;
                        const o = {
                            type: s,
                            trigger: "ad"
                        };
                        (0,
                        n.j)(a, {
                            eventData: o,
                            ad: t
                        })
                    }
                    )({
                        data: s
                    })
                }
            }
            ;
            var Br = e=>{
                let {timeUntilEnabled: a, onClick: s} = e;
                const o = Math.round(Math.max(0, a))
                  , r = qs()("Skip-module_skipButton__lRmBN");
                return t.createElement("div", {
                    className: r,
                    role: "button",
                    onClick: o ? void 0 : s,
                    onKeyDown: o ? void 0 : s,
                    tabIndex: 0
                }, "Continue to Wordle", (n = o,
                t.createElement("svg", {
                    width: "26",
                    height: "26",
                    viewBox: "0 0 26 26",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, t.createElement("circle", {
                    cx: "13",
                    cy: "13",
                    r: "13",
                    fill: "#121212"
                }), n && t.createElement("text", {
                    x: "50%",
                    y: "55%",
                    dominantBaseline: "middle",
                    textAnchor: "middle",
                    fill: "white"
                }, n), !n && t.createElement("path", {
                    d: "M10.3984 7.7998L15.5984 12.9998L10.3984 18.1998",
                    stroke: "white",
                    strokeWidth: "1.5"
                }))));
                var n
            }
              , Mr = s(1586)
              , Rr = (e,a)=>{
                var s, t, o, r, n, i;
                ((null === (s = window) || void 0 === s || null === (t = s.AdSlot4) || void 0 === t || null === (o = t.getAdReq) || void 0 === o ? void 0 : o.call(t)) || {})[e] !== a && (null === (r = window) || void 0 === r || null === (n = r.AdSlot4) || void 0 === n || null === (i = n.updateAdReq) || void 0 === i || i.call(n, {
                    [e]: a
                }))
            }
              , Gr = e=>{
                let {id: a, position: s, className: o, adClassName: r, onClose: n} = e;
                const {isFluid: i, hasIntAdError: c, hasIntAd: d, isAdReady: u} = (()=>{
                    const [e,a] = (0,
                    t.useState)(void 0)
                      , [s,o] = (0,
                    t.useState)(!1)
                      , [r,n] = (0,
                    t.useState)(!1)
                      , [i,l] = (0,
                    t.useState)(!1)
                      , [c,d] = (0,
                    t.useState)(!1);
                    return (0,
                    t.useEffect)((()=>{
                        const e = e=>s=>{
                            const {slot: t, id: o, type: r, isEmpty: n} = s;
                            (0 === e || n) && (a(!1),
                            l(!0))
                        }
                          , s = e=>s=>{
                            const {slot: t, id: r, size: i} = s;
                            (r || t) && a("AdEmpty" !== e),
                            e === Nr.hg.AD_LOADED && o(!0),
                            e === Nr.hg.AD_RENDERED && n(!0),
                            "AdRendered" === e && i && 0 === i[1] && d(!0)
                        }
                        ;
                        let t = [];
                        return window.AdSlot4 && window.AdSlot4.cmd.push((()=>{
                            var a, o;
                            const r = null === (a = window) || void 0 === a || null === (o = a.AdSlot4) || void 0 === o ? void 0 : o.events;
                            var n;
                            t = [null == r ? void 0 : r.subscribe({
                                name: "script_loader_error",
                                callback: e(0),
                                scope: "all"
                            }), null == r ? void 0 : r.subscribe({
                                name: "BidderError",
                                callback: e(0),
                                scope: "all"
                            }), null == r ? void 0 : r.subscribe({
                                name: "AdEmpty",
                                callback: e(1),
                                scope: "all"
                            }), null == r ? void 0 : r.subscribe({
                                name: "AdRendered",
                                callback: s("AdRendered"),
                                scope: "all"
                            }), null == r ? void 0 : r.subscribe({
                                name: Nr.hg.AD_LOADED,
                                callback: s(Nr.hg.AD_LOADED),
                                scope: "all"
                            })].concat((n = r) ? Ar.map((e=>n.subscribe({
                                name: e,
                                scope: "all",
                                callback: Dr(e)
                            }))) : [])
                        }
                        )),
                        ()=>{
                            for (; t.length; ) {
                                var e;
                                null === (e = t.pop()) || void 0 === e || e.remove()
                            }
                        }
                    }
                    ), []),
                    {
                        hasIntAd: e,
                        hasIntAdError: i,
                        isFluid: c,
                        isAdReady: r && s
                    }
                }
                )()
                  , {userType: m} = (0,
                l.Z)();
                (0,
                t.useEffect)((()=>{
                    c && n()
                }
                ), [c]);
                const p = qs()("AdInterstitial-module_modalOverlay__vkSkL", {
                    "AdInterstitial-module_interstitialPlaceholder__j2blZ": !u
                }, o)
                  , y = qs()("AdInterstitial-module_adSlug__gEvZI", {
                    "AdInterstitial-module_adSlugVisible__J4wbE": u
                })
                  , g = qs()("AdInterstitial-module_ad__VoWrx", r, {
                    "AdInterstitial-module_fluid__HDmJz": i
                });
                return t.createElement("dialog", {
                    className: p
                }, t.createElement("div", {
                    className: y
                }, u && t.createElement("h3", null, "advertisement"), t.createElement("div", {
                    ref: e=>{
                        var t, o, r;
                        Rr("sub", m.entitlement),
                        Rr("page_view_id", zr.Z.current),
                        null === (t = window) || void 0 === t || null === (o = t.AdSlot4) || void 0 === o || null === (r = o.initializeAd) || void 0 === r || r.call(o, e, {
                            id: a,
                            position: s
                        })
                    }
                    ,
                    className: g,
                    id: a,
                    "data-position": s
                })), t.createElement(Br, {
                    onClick: ()=>{
                        n(),
                        (0,
                        Mr.j)("moduleInteraction", {
                            eventData: {
                                type: "click_skip_wordle",
                                trigger: "ad"
                            }
                        })
                    }
                    ,
                    timeUntilEnabled: 0
                }))
            }
            ;
            const Wr = "DFP_WordleMobile_0423"
              , qr = "DFP_WordleMobile_Mock";
            var Hr = e=>(e=>"IN_PROGRESS" === e)(e) && !at() && !st() && (()=>{
                var e, a, s, t, o;
                const r = /Tablet|iPad|GT-P|SM-T|Xoom|SC-|LG-V|Nexus 7|Nexus 10|KFAPWI|KFTHWI|KFOT|KFTBWI|SGP/i.test(null === (e = navigator) || void 0 === e ? void 0 : e.userAgent)
                  , n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(null === (a = navigator) || void 0 === a ? void 0 : a.userAgent);
                return !(null === (s = window) || void 0 === s || null === (t = s.matchMedia) || void 0 === t || null === (o = t.call(s, "(max-width: 640px)")) || void 0 === o || !o.matches) && n && !r
            }
            )() && (()=>{
                const {getVariant: e, reportExposure: a} = n.Fi;
                return e(qr) && a(qr),
                !0
            }
            )() && (()=>{
                const {getVariant: e, reportExposure: a} = n.Fi
                  , s = e(Wr);
                return s && a(Wr),
                "1_Interstitial" === s
            }
            )()
              , Vr = "App-module_gameContainer__K_CBh"
              , Fr = "App-module_game__yruqo"
              , Ur = {
                burgerSvg: "NavIcon-module_burgerSvg__j9Cig"
            };
            function Yr() {
                return t.createElement("svg", {
                    className: Ur.burgerSvg,
                    width: "20",
                    height: "17",
                    viewBox: "0 0 24 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, t.createElement("rect", {
                    x: "0.172974",
                    width: "20",
                    height: "3",
                    rx: "1.5",
                    fill: "var(--color-tone-1)"
                }), t.createElement("rect", {
                    x: "0.172974",
                    y: "7",
                    width: "20",
                    height: "3",
                    rx: "1.5",
                    fill: "var(--color-tone-1)"
                }), t.createElement("rect", {
                    x: "0.172974",
                    y: "14",
                    width: "20",
                    height: "3",
                    rx: "1.5",
                    fill: "var(--color-tone-1)"
                }))
            }
            var Zr = s(6128);
            const Kr = "https://www.nytimes.com/subscription/games"
              , Xr = (e,a)=>{
                const s = function(e) {
                    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                    if (!a || !a.navigationLinks || !a.navigationLinks.subscribe)
                        return Kr;
                    const s = a.navigationLinks.subscribe;
                    return e && s[e] ? s[e] : s.default || Kr
                }(e);
                return window.isHybridWebView && window.NativeBridge ? window.NativeBridge.gamesAuthenticateUser("subscribe").then((e=>{
                    if (!e.success)
                        throw new Error(e.error);
                    window.dispatchEvent(new CustomEvent("gamesUserCredentialChanged",{
                        detail: e
                    })),
                    a && (0,
                    Zr.Af)(e.values.gamesAuthenticateUser, a)
                }
                )).catch((e=>{
                    console.error("Failed to authenticate user", e)
                }
                )) : (0,
                Zr.I3)(s) ? (0,
                Zr.Hu)(s) : window.location.assign(s),
                null
            }
            ;
            var Jr = {
                appHeader: "AppHeader-module_appHeader__Jn4R7",
                icon: "AppHeader-module_icon__qLz07",
                subscribeLink: "AppHeader-module_subscribeLink__VBUGi",
                title: "AppHeader-module_title__EQr6V",
                menuLeft: "AppHeader-module_menuLeft__q6t_Z",
                menuRight: "AppHeader-module_menuRight__Noasd",
                longTextVariant: "AppHeader-module_longTextVariant__guJaD",
                navButton: "AppHeader-module_navButton__nKv2h"
            };
            function Qr(e) {
                let {isLoading: a} = e;
                const s = "".concat(U(Wa))
                  , o = F()
                  , {userType: r} = (0,
                l.Z)()
                  , i = U(Oa)
                  , c = {
                    context: s || void 0,
                    elementName: "wordle",
                    moduleLabel: "in-game"
                }
                  , d = !!i || a
                  , {getVariant: u, reportExposure: m} = k()
                  , p = "GAMES_wordleSubscribeButtonHoldout_0523"
                  , y = u(p)
                  , g = "0_control" !== y && !r.hasXwd;
                return t.useEffect((()=>{
                    y && g && m(p)
                }
                ), []),
                t.createElement("header", {
                    className: qs()(Jr.appHeader, "wordle-app-header"),
                    onKeyDown: e=>{
                        "Enter" === e.key && e.stopPropagation()
                    }
                }, t.createElement("div", {
                    className: Jr.menuLeft
                }, t.createElement(Zs, null, t.createElement("button", {
                    type: "button",
                    id: Jr.navButton,
                    className: Jr.icon,
                    "aria-label": "Navigation menu. Click for links to other NYT Games and our Privacy Policy.",
                    onClick: ()=>o(Ne())
                }, t.createElement(Yr, null))), t.createElement(Ks, null, t.createElement(Ys, {
                    trackData: c
                }))), t.createElement("div", {
                    className: Jr.title
                }, "Wordle"), t.createElement("div", {
                    className: qs()(Jr.menuRight, {
                        [Jr.longTextVariant]: g
                    })
                }, t.createElement("button", {
                    type: "button",
                    id: "help-button",
                    className: Jr.icon,
                    "aria-label": "Help",
                    onClick: ()=>{
                        (0,
                        n.ob)({
                            name: "wordle",
                            label: "help",
                            context: s,
                            useBeacon: !0
                        }),
                        o(we("help", !0))
                    }
                }, t.createElement(Dt, {
                    icon: "help"
                })), t.createElement("button", {
                    type: "button",
                    id: "statistics-button",
                    className: Jr.icon,
                    "aria-label": "Statistics",
                    onClick: ()=>o(we("stats", !0)),
                    disabled: d
                }, t.createElement(Dt, {
                    icon: "statistics",
                    disabled: d
                })), t.createElement("button", {
                    type: "button",
                    id: "settings-button",
                    className: Jr.icon,
                    "aria-label": "Settings",
                    onClick: ()=>{
                        (0,
                        n.ob)({
                            name: "wordle",
                            label: "settings",
                            context: s,
                            useBeacon: !0
                        }),
                        o(we("settings"))
                    }
                    ,
                    disabled: d
                }, t.createElement(Dt, {
                    icon: "settings",
                    disabled: d
                })), g && t.createElement(Zs, null, t.createElement("button", {
                    type: "button",
                    className: Jr.subscribeLink,
                    onClick: ()=>{
                        Xr("wordle"),
                        (0,
                        n.ob)({
                            name: "wordle",
                            element: {
                                name: "wordle",
                                label: "subscribe"
                            },
                            context: s,
                            useBeacon: !0
                        })
                    }
                }, "Subscribe to Games"))))
            }
            const $r = {
                welcome: {
                    component: e=>{
                        let {transition: a} = e;
                        const s = F()
                          , o = U(Ra)
                          , r = !!U(ia)
                          , i = U(Wa)
                          , l = U(ba)
                          , c = !!U(na)
                          , d = o > 0
                          , u = ((e,a)=>{
                            const s = U(Ma)
                              , o = U(rs)
                              , r = U(Ra)
                              , n = U(is)();
                            return e && "IN_PROGRESS" === s ? "Youʼre on attempt ".concat(r + 1, " out of 6. Keep it up!") : "WIN" === s ? "Great job on todayʼs puzzle! Check out your progress." : "FAIL" === s ? "Tomorrow’s a new day, with a new puzzle. See you then." : a && !e && o > 0 && n ? t.createElement(t.Fragment, null, "Go ahead, add another day to your", " ", t.createElement("span", {
                                className: "Welcome-module_bold___70f6"
                            }, o, " day"), " streak.") : t.createElement(t.Fragment, null, "Get 6 chances to guess a", " ", t.createElement("span", {
                                className: "Welcome-module_noWrap__ThSVO"
                            }, "5-letter"), " word.")
                        }
                        )(d, r)
                          , m = (e=>{
                            const a = U(Ma);
                            return e ? "IN_PROGRESS" !== a ? "Hi Wordler" : "Welcome Back" : ""
                        }
                        )(d)
                          , p = (e=>{
                            const a = U(Ma);
                            return e ? "IN_PROGRESS" === a ? "Continue" : "See Stats" : "Play"
                        }
                        )(d)
                          , y = (e=>{
                            const a = U(Ma);
                            return e ? "IN_PROGRESS" === a ? "continue" : "see-stats" : "play"
                        }
                        )(d)
                          , g = !window.isHybridWebView && !window.newsreaderAppPlatform && (0,
                        x.K1)()
                          , h = n.Fi.getVariant("GAMES_wordleAppDownloadCTACopy_0523")
                          , b = h && "0_control" !== h ? {
                            "1_gameName": "Play Wordle, Sudoku, Spelling Bee and more in the NYT Games app.",
                            "2_gameType": "Play logic, word, and visual games in the NYT Games app.",
                            "3_icon": "Play Wordle and more in the NYT Games app."
                        }[h] : "Play in the New York Times Games app."
                          , k = "3_icon" === h
                          , {name: f, region: w, label: v, context: _} = ((e,a)=>{
                            const s = U(rs)
                              , t = "".concat(U(Wa))
                              , o = U(Ma)
                              , r = U(ea);
                            let n = ""
                              , i = "welcome-modal";
                            const l = t;
                            return a ? r && (n = "".concat(s)) : n = "log-in",
                            e && (i = "welcome-back-modal",
                            "IN_PROGRESS" !== o && (i = "welcome-see-stats-modal")),
                            {
                                label: n,
                                name: i,
                                region: "wordle-welcome",
                                context: l
                            }
                        }
                        )(d, r)
                          , E = {
                            context: "".concat(i) || void 0,
                            elementName: "wordle",
                            moduleLabel: "welcome"
                        }
                          , z = e=>{
                            (0,
                            n.ob)({
                                name: "wordle",
                                context: "".concat(i),
                                label: e
                            })
                        }
                        ;
                        t.useEffect((()=>{
                            (0,
                            n.hX)(f, w, v, _)
                        }
                        ), []),
                        t.useEffect((()=>{
                            h && n.Fi.reportExposure("GAMES_wordleAppDownloadCTACopy_0523")
                        }
                        ), [h]);
                        const N = [{
                            hide: d || c,
                            text: "How to play",
                            secondary: !0,
                            onClick: ()=>{
                                a("game"),
                                s(we("help")),
                                z("help-welcome")
                            }
                        }, {
                            hide: d || r || !!window.newsreaderAppPlatform,
                            text: "Log in",
                            secondary: !0,
                            isLogin: !0,
                            onClick: ()=>{
                                z("log-in-welcome")
                            }
                        }, {
                            text: p,
                            onClick: ()=>{
                                a("game"),
                                z(y)
                            }
                        }]
                          , j = window.isHybridWebView && !c && !d
                          , C = t.createElement("div", {
                            className: ot
                        }, t.createElement(Ks, null, t.createElement("div", {
                            className: ct
                        }, t.createElement(Ys, {
                            trackData: E
                        }))), t.createElement("div", {
                            className: rt
                        }, t.createElement(dt, {
                            small: d
                        }), m && t.createElement("div", {
                            className: nt
                        }, m), t.createElement(ut, null, u), t.createElement(pt, {
                            buttons: N
                        }), t.createElement(mt, {
                            dayOffset: i,
                            editor: l
                        })), j && t.createElement(gt, {
                            closeMoment: ()=>a("game"),
                            trackLink: ()=>z("welcome-more-info")
                        }));
                        return t.createElement(t.Fragment, null, C, g && t.createElement($s, {
                            title: b,
                            icon: "crossword-app",
                            ctaLink: "https://fpx3r.app.goo.gl/app-wordle",
                            newTab: !0,
                            onVisible: ()=>{
                                (0,
                                n.hX)("welcome", "wordle", "download-app")
                            }
                            ,
                            onClickLink: ()=>{
                                (0,
                                n.$g)("", "".concat(i), "wordle", "welcome-download-app", "".concat(function() {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
                                    return /Android/.test(e) ? "https://play.google.com/store/apps/details?id=com.nytimes.crossword&referrer=utm_source%3DAndroidReaderMini%26utm_medium%3DCongratsModule%26utm_term%3DgetTheApp%26utm_campaign%3DMiniUpsell&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" : /|iPad|iPhone|/.test(e) ? "https://itunes.apple.com/us/app/nytimes-crossword-daily-word/id307569751?mt=8" : ""
                                }()))
                            }
                            ,
                            showMultipleIconsBanner: k
                        }))
                    }
                    ,
                    animateOut: !0
                },
                loading: {
                    component: e=>{
                        let {hasLoaded: a, transition: s} = e;
                        const [o,r] = t.useState(!1);
                        return ht((()=>r(!0)), a ? null : 300),
                        t.useEffect((()=>{
                            a && s("welcome")
                        }
                        ), [a]),
                        t.createElement("div", {
                            className: ot
                        }, t.createElement(Ks, null, t.createElement("div", {
                            className: ct
                        }, t.createElement(Ys, {
                            trackData: {
                                elementName: "wordle",
                                moduleLabel: "loading"
                            }
                        }))), t.createElement("div", {
                            className: rt
                        }, o && t.createElement(t.Fragment, null, t.createElement(dt, {
                            small: !0
                        }), t.createElement("div", {
                            className: "Welcome-module_spinner__ko9gy"
                        }, t.createElement(kt, null)))))
                    }
                },
                game: {
                    component: function(e) {
                        let {hasLoaded: a} = e;
                        const s = xr()
                          , o = k()
                          , {userType: r, hasLoaded: n} = (0,
                        l.Z)()
                          , {couldHaveAd: i, showAdBelowMasthead: c, hasAd: d, hasAdError: u} = s
                          , m = U(ea)
                          , p = U(aa)
                          , y = o.getVariant(yo)
                          , g = U(Ma)
                          , [h,b] = (0,
                        t.useState)(n && !r.hasXwd && Hr(g));
                        (e=>{
                            const a = F()
                              , s = U(es)
                              , t = U(Oa);
                            ht((()=>a(we("help"))), s || !e || t ? null : 100)
                        }
                        )(a),
                        (e=>{
                            const a = F()
                              , s = !!U(ia)
                              , t = U(es)
                              , o = U(Oa)
                              , r = et("activationRegiModal")
                              , n = U(Ra) > 0
                              , i = !st() && !at() && !n && !(ko() >= bo) && !s && r && t && e && !o;
                            ht((()=>a(we("activationRegiModal"))), i ? 100 : null)
                        }
                        )(a),
                        (0,
                        t.useEffect)((()=>{
                            y && o.reportExposure(yo)
                        }
                        ), [y]),
                        (0,
                        t.useEffect)((()=>{
                            b(n && !r.hasXwd && Hr(g))
                        }
                        ), [n, r, g]);
                        const f = i && d ? {
                            height: "calc(100% - 210px)"
                        } : {
                            height: "100%"
                        }
                          , w = a && i && !u && t.createElement(_r, {
                            position: "top",
                            id: "top"
                        })
                          , v = t.createElement("div", {
                            className: Fr,
                            id: "wordle-app-game"
                        }, m && t.createElement(vr, {
                            dismissIcon: t.createElement(Dt, {
                                icon: "close"
                            })
                        }), p && t.createElement(pr, null), t.createElement(Ot, {
                            adProps: s
                        }), t.createElement(wr, null), t.createElement(nr, null), t.createElement(mr, null));
                        return t.createElement(t.Fragment, null, !c && w, t.createElement(Ao, null), h && t.createElement(Gr, {
                            id: "intsl",
                            position: "intsl",
                            onClose: ()=>{
                                b(!1)
                            }
                        }), c && t.createElement(Ho, null), t.createElement(sr, {
                            adProps: s
                        }), t.createElement("div", {
                            className: Vr,
                            style: f
                        }, !c && t.createElement(Ho, null), t.createElement(Qr, {
                            isLoading: !a
                        }), c && w, a ? v : t.createElement(Rt, null)))
                    }
                }
            }
              , en = ()=>document.referrer.includes("myaccount") ? "game" : "loading";
            var an = e=>{
                let {analyticsPuzzleID: a, game: s, puzzleID: o} = e;
                (0,
                t.useEffect)((()=>{
                    if (window.isHybridWebView && window.NativeBridge) {
                        var e;
                        const t = e=>{
                            const t = {};
                            t[R.Iu] = {
                                [s]: {
                                    analyticsPuzzleID: a,
                                    puzzleID: o
                                }
                            },
                            e.respondWith(t)
                        }
                        ;
                        return null === (e = window.NativeBridge) || void 0 === e || e.addEventListener(R.Iu, t),
                        ()=>{
                            var e;
                            null === (e = window.NativeBridge) || void 0 === e || e.removeEventListener(R.Iu, t)
                        }
                    }
                }
                ), [a, o])
            }
            ;
            const sn = ()=>{
                const e = U(Sa)
                  , a = U(Pa)
                  , s = F();
                (0,
                t.useEffect)((()=>{
                    if (window.isHybridWebView && window.NativeBridge) {
                        const t = t=>{
                            const o = {};
                            e || a ? (s(_e()),
                            s(Ee()),
                            o[R.Q5] = !0,
                            t.respondWith(o)) : (o[R.Q5] = !1,
                            t.respondWith(o))
                        }
                        ;
                        return window.NativeBridge.addEventListener(R.Q5, t),
                        ()=>{
                            var e;
                            null === (e = window.NativeBridge) || void 0 === e || e.removeEventListener(R.Q5, t)
                        }
                    }
                }
                ), [e, a, s])
            }
            ;
            function tn() {
                const e = !!U(ia)
                  , a = U(ea)
                  , s = U(la)
                  , o = U(sa)
                  , r = U(Wa)
                  , n = U(qa)
                  , i = F()
                  , {hasAbraLoaded: l} = k();
                return t.useEffect((()=>{
                    (0,
                    Yt.Ys)() && Ds()
                }
                ), []),
                t.useEffect((()=>{
                    const e = S();
                    return ()=>clearInterval(e)
                }
                ), []),
                sn(),
                t.useEffect((()=>{
                    if (!o && l) {
                        const e = new URLSearchParams(window.location.search)
                          , s = "true" === e.get("success")
                          , t = window.location.pathname.includes("/puzzles") && e.get("date") || null;
                        i(Gs({
                            optIn: (s || a) && !t,
                            printDate: t
                        }))
                    }
                }
                ), [o, l]),
                t.useEffect((()=>{
                    l && e && !a && i(Se({
                        text: "You are now logged in to your Times Account.",
                        duration: 2e3,
                        isSystem: !0
                    }))
                }
                ), [e, a, l]),
                t.useEffect((()=>{
                    l && e && s && (i(Se({
                        text: "Your stats have been linked to your account.",
                        duration: 2e3,
                        isSystem: !0
                    })),
                    i(xe()),
                    i(Le("stats-successful", "wordle-stats-link")))
                }
                ), [s, e, l]),
                an({
                    analyticsPuzzleID: "".concat(r),
                    puzzleID: n,
                    game: "wordle"
                }),
                te(),
                t.createElement(t.Fragment, null, (0,
                x.K1)() && t.createElement(Us, null), t.createElement(B, {
                    hasLoaded: o,
                    config: $r,
                    initialMoment: en()
                }))
            }
            var on = s(118)
              , rn = s(6441);
            function nn(e, a) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    a && (t = t.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }
                    ))),
                    s.push.apply(s, t)
                }
                return s
            }
            function ln(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var s = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? nn(Object(s), !0).forEach((function(a) {
                        cn(e, a, s[a])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : nn(Object(s)).forEach((function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(s, a))
                    }
                    ))
                }
                return e
            }
            function cn(e, a, s) {
                return a in e ? Object.defineProperty(e, a, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = s,
                e
            }
            const dn = {
                id: null,
                boardState: [],
                dayOffset: null,
                currentRowIndex: 0,
                timestamps: {
                    lastPlayed: null,
                    lastCompleted: null
                },
                status: "IN_PROGRESS"
            };
            function un(e, a) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    a && (t = t.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }
                    ))),
                    s.push.apply(s, t)
                }
                return s
            }
            function mn(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var s = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? un(Object(s), !0).forEach((function(a) {
                        pn(e, a, s[a])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : un(Object(s)).forEach((function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(s, a))
                    }
                    ))
                }
                return e
            }
            function pn(e, a, s) {
                return a in e ? Object.defineProperty(e, a, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = s,
                e
            }
            const yn = {
                hardMode: !1,
                darkMode: (null === (gn = document.body) || void 0 === gn || null === (hn = gn.className) || void 0 === hn ? void 0 : hn.includes("dark")) || !1,
                colorblindMode: !1
            };
            var gn, hn;
            function bn(e, a) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    a && (t = t.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }
                    ))),
                    s.push.apply(s, t)
                }
                return s
            }
            function kn(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var s = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? bn(Object(s), !0).forEach((function(a) {
                        fn(e, a, s[a])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : bn(Object(s)).forEach((function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(s, a))
                    }
                    ))
                }
                return e
            }
            function fn(e, a, s) {
                return a in e ? Object.defineProperty(e, a, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = s,
                e
            }
            function wn(e, a) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    a && (t = t.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }
                    ))),
                    s.push.apply(s, t)
                }
                return s
            }
            function vn(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var s = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? wn(Object(s), !0).forEach((function(a) {
                        _n(e, a, s[a])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : wn(Object(s)).forEach((function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(s, a))
                    }
                    ))
                }
                return e
            }
            function _n(e, a, s) {
                return a in e ? Object.defineProperty(e, a, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = s,
                e
            }
            const En = {
                modal: null,
                page: null,
                error: null,
                isNavModalOpen: !1,
                toasts: [],
                isPageClosing: !1,
                wasModalOpenedByClick: !1
            };
            function xn(e, a) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    a && (t = t.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }
                    ))),
                    s.push.apply(s, t)
                }
                return s
            }
            function zn(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var s = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? xn(Object(s), !0).forEach((function(a) {
                        Nn(e, a, s[a])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : xn(Object(s)).forEach((function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(s, a))
                    }
                    ))
                }
                return e
            }
            function Nn(e, a, s) {
                return a in e ? Object.defineProperty(e, a, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = s,
                e
            }
            const jn = {
                isAnimatingRow: !1,
                lastRowInvalid: !1,
                lastRowWin: !1,
                isRestoringSession: !1
            };
            function Cn(e, a) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    a && (t = t.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }
                    ))),
                    s.push.apply(s, t)
                }
                return s
            }
            function Sn(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var s = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? Cn(Object(s), !0).forEach((function(a) {
                        On(e, a, s[a])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : Cn(Object(s)).forEach((function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(s, a))
                    }
                    ))
                }
                return e
            }
            function On(e, a, s) {
                return a in e ? Object.defineProperty(e, a, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = s,
                e
            }
            const Pn = {
                moogleGet: {
                    isLoading: !1,
                    error: !1,
                    errorMessage: null,
                    data: null,
                    optedIn: !1
                },
                mooglePost: {
                    isLoading: !1,
                    error: !1,
                    lastFailedSaveData: null
                },
                solution: {
                    isLoading: !1,
                    error: !1,
                    data: null
                },
                profileInfo: {
                    isLoading: !1,
                    error: !1,
                    data: null
                },
                appLoaded: !1
            };
            const Ln = (0,
            on.UY)({
                persist: (0,
                on.UY)({
                    game: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dn
                          , a = arguments.length > 1 ? arguments[1] : void 0;
                        switch (a.type) {
                        case wa:
                            var s;
                            return null !== (s = a.payload) && void 0 !== s && s.game ? a.payload.game : e;
                        case cs:
                            {
                                const {numRows: s, id: t, dayOffset: o} = a.payload;
                                return ln(ln({}, e), {}, {
                                    id: t,
                                    dayOffset: o,
                                    boardState: Array(s).fill(""),
                                    currentRowIndex: 0,
                                    status: "IN_PROGRESS"
                                })
                            }
                        case us:
                            return ln(ln({}, e), {}, {
                                boardState: e.boardState.map(((s,t)=>t === e.currentRowIndex ? "".concat(s).concat(a.payload.letter) : s))
                            });
                        case ms:
                            return ln(ln({}, e), {}, {
                                boardState: e.boardState.map(((a,s)=>s === e.currentRowIndex ? a.slice(0, a.length - 1) : a))
                            });
                        case ps:
                            {
                                const {now: s, status: t} = a.payload;
                                return ln(ln({}, e), {}, {
                                    currentRowIndex: e.currentRowIndex + 1,
                                    timestamps: ln(ln({}, e.timestamps), {}, {
                                        lastCompleted: "IN_PROGRESS" === t ? e.timestamps.lastCompleted : s,
                                        lastPlayed: s
                                    }),
                                    status: t
                                })
                            }
                        default:
                            return e
                        }
                    },
                    settings: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yn
                          , a = arguments.length > 1 ? arguments[1] : void 0;
                        switch (a.type) {
                        case wa:
                            var s;
                            return null !== (s = a.payload) && void 0 !== s && s.settings ? a.payload.settings : e;
                        case wo:
                            {
                                const {name: s, value: t} = a.payload;
                                return mn(mn({}, e), {}, {
                                    [s]: t
                                })
                            }
                        default:
                            return e
                        }
                    },
                    stats: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y
                          , a = arguments.length > 1 ? arguments[1] : void 0;
                        switch (a.type) {
                        case wa:
                            var s;
                            if (null !== (s = a.payload) && void 0 !== s && s.stats) {
                                var t, o;
                                const {stats: e, game: s} = a.payload;
                                return kn(kn({}, e), {}, {
                                    isOnStreak: null !== (t = e.isOnStreak) && void 0 !== t && t,
                                    hasPlayed: null !== (o = e.hasPlayed) && void 0 !== o ? o : !!s.timestamps.lastPlayed
                                })
                            }
                            return e;
                        case cs:
                            return kn(kn({}, e), {}, {
                                isOnStreak: a.payload.isOnStreak
                            });
                        case ps:
                            {
                                const {status: s, isStreak: t, numGuesses: o} = a.payload;
                                return "IN_PROGRESS" === s ? kn(kn({}, e), {}, {
                                    hasPlayed: !0
                                }) : ((e,a)=>{
                                    let {isWin: s, isStreak: t, numGuesses: o} = a;
                                    const r = kn(kn({}, e), {}, {
                                        hasPlayed: !0,
                                        guesses: kn({}, e.guesses)
                                    });
                                    return s ? (r.guesses[o] += 1,
                                    t ? r.currentStreak += 1 : r.currentStreak = 1) : (r.currentStreak = 0,
                                    r.guesses.fail += 1),
                                    r.maxStreak = Math.max(r.currentStreak, r.maxStreak),
                                    r.gamesPlayed += 1,
                                    r.gamesWon += s ? 1 : 0,
                                    r.winPercentage = Math.round(r.gamesWon / r.gamesPlayed * 100),
                                    0 === r.gamesWon ? r.averageGuesses = 0 : r.averageGuesses = Math.round(Object.entries(r.guesses).reduce(((e,a)=>{
                                        let[s,t] = a;
                                        const o = e + parseInt(s, 10) * t;
                                        return "fail" !== s ? o : e
                                    }
                                    ), 0) / r.gamesWon),
                                    r
                                }
                                )(e, {
                                    isWin: "WIN" === s,
                                    isStreak: t,
                                    numGuesses: o
                                })
                            }
                        default:
                            return e
                        }
                    }
                }),
                overlays: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : En
                      , a = arguments.length > 1 ? arguments[1] : void 0;
                    switch (a.type) {
                    case ie:
                        return vn(vn({}, e), {}, {
                            modal: a.payload.modal,
                            wasModalOpenedByClick: a.payload.isClicked
                        });
                    case le:
                        return vn(vn({}, e), {}, {
                            modal: null,
                            wasModalOpenedByClick: !1
                        });
                    case ce:
                        return vn(vn({}, e), {}, {
                            page: a.payload.page
                        });
                    case de:
                        return vn(vn({}, e), {}, {
                            page: null,
                            isPageClosing: !1
                        });
                    case me:
                        return vn(vn({}, e), {}, {
                            error: a.payload.error
                        });
                    case "wordle/overlays/CLOSE_ERROR":
                        return vn(vn({}, e), {}, {
                            error: null
                        });
                    case pe:
                        return vn(vn({}, e), {}, {
                            isNavModalOpen: !0
                        });
                    case ye:
                        return vn(vn({}, e), {}, {
                            isNavModalOpen: !1
                        });
                    case he:
                        {
                            const {text: s, duration: t, isSystem: o, timestamp: r} = a.payload
                              , n = {
                                text: s,
                                duration: t || 1e3,
                                isSystem: o,
                                timestamp: r
                            }
                              , {toasts: i} = e;
                            return vn(vn({}, e), {}, {
                                toasts: [n, ...i]
                            })
                        }
                    case be:
                        {
                            const {text: s, timestamp: t} = a.payload
                              , {toasts: o} = e
                              , r = o.filter((e=>e.text !== s || e.timestamp !== t));
                            return vn(vn({}, e), {}, {
                                toasts: r
                            })
                        }
                    case ue:
                        return vn(vn({}, e), {}, {
                            isPageClosing: !0
                        });
                    default:
                        return e
                    }
                },
                transient: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jn
                      , a = arguments.length > 1 ? arguments[1] : void 0;
                    switch (a.type) {
                    case ms:
                        return zn(zn({}, e), {}, {
                            lastRowInvalid: !1
                        });
                    case he:
                        {
                            const {invalidate: s, win: t} = a.payload;
                            return s ? zn(zn({}, e), {}, {
                                lastRowInvalid: !0
                            }) : t ? zn(zn({}, e), {}, {
                                lastRowWin: !0
                            }) : e
                        }
                    case wt:
                        return zn(zn({}, e), {}, {
                            lastRowInvalid: !1
                        });
                    case ds:
                        return 0 === a.payload.currentRowIndex ? e : zn(zn({}, e), {}, {
                            isAnimatingRow: !0,
                            isRestoringSession: !0
                        });
                    case ps:
                        return zn(zn({}, e), {}, {
                            isAnimatingRow: !0
                        });
                    case ft:
                        return zn(zn({}, e), {}, {
                            isAnimatingRow: !1,
                            isRestoringSession: !1
                        });
                    default:
                        return e
                    }
                },
                api: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pn
                      , a = arguments.length > 1 ? arguments[1] : void 0;
                    switch (a.type) {
                    case fs:
                        return Sn(Sn({}, e), {}, {
                            moogleGet: Sn(Sn({}, e.moogleGet), {}, {
                                optedIn: !0
                            })
                        });
                    case ws:
                        return Sn(Sn({}, e), {}, {
                            moogleGet: Sn(Sn({}, e.moogleGet), {}, {
                                isLoading: !0
                            })
                        });
                    case js:
                        return Sn(Sn({}, e), {}, {
                            solution: Sn(Sn({}, e.solution), {}, {
                                isLoading: !0
                            })
                        });
                    case vs:
                        {
                            const {data: s, optIn: t} = a.payload;
                            return Sn(Sn({}, e), {}, {
                                moogleGet: Sn(Sn({}, e.moogleGet), {}, {
                                    data: s,
                                    isLoading: !1,
                                    error: !1,
                                    optedIn: t || !!s.version
                                })
                            })
                        }
                    case Cs:
                        {
                            const {solution: s, id: t, dayOffset: o, editor: r} = a.payload.data;
                            return Sn(Sn({}, e), {}, {
                                solution: Sn(Sn({}, e.solution), {}, {
                                    data: {
                                        solution: s,
                                        id: t,
                                        dayOffset: o,
                                        editor: r
                                    },
                                    isLoading: !1,
                                    error: !1
                                })
                            })
                        }
                    case _s:
                        return Sn(Sn({}, e), {}, {
                            moogleGet: Sn(Sn({}, e.moogleGet), {}, {
                                isLoading: !1,
                                error: !0,
                                errorMessage: a.payload.message
                            })
                        });
                    case Ss:
                        return Sn(Sn({}, e), {}, {
                            solution: Sn(Sn({}, e.solution), {}, {
                                isLoading: !1,
                                error: !0
                            })
                        });
                    case Os:
                        return Sn(Sn({}, e), {}, {
                            profileInfo: {
                                isLoading: !0,
                                data: null,
                                error: !1
                            }
                        });
                    case Ps:
                        return Sn(Sn({}, e), {}, {
                            profileInfo: {
                                isLoading: !1,
                                data: a.payload.data,
                                error: !1
                            }
                        });
                    case Ls:
                        return Sn(Sn({}, e), {}, {
                            profileInfo: {
                                isLoading: !1,
                                data: null,
                                error: !0
                            }
                        });
                    case Es:
                        return Sn(Sn({}, e), {}, {
                            mooglePost: Sn(Sn({}, e.mooglePost), {}, {
                                isLoading: !0,
                                error: !1
                            })
                        });
                    case xs:
                        return Sn(Sn({}, e), {}, {
                            mooglePost: {
                                isLoading: !1,
                                error: !1,
                                lastFailedSaveData: null
                            }
                        });
                    case zs:
                        return Sn(Sn({}, e), {}, {
                            mooglePost: {
                                isLoading: !1,
                                error: !0,
                                lastFailedSaveData: a.payload.saveData
                            }
                        });
                    case Is:
                        return Sn(Sn({}, e), {}, {
                            appLoaded: a.payload.appLoaded
                        });
                    case Ns:
                        return Sn(Sn({}, e), {}, {
                            mooglePost: {
                                isLoading: !1,
                                error: !1,
                                lastFailedSaveData: null
                            }
                        });
                    default:
                        return e
                    }
                }
            });
            var An = s(8609);
            function In(e, a) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    a && (t = t.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }
                    ))),
                    s.push.apply(s, t)
                }
                return s
            }
            function Tn(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var s = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? In(Object(s), !0).forEach((function(a) {
                        Dn(e, a, s[a])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : In(Object(s)).forEach((function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(s, a))
                    }
                    ))
                }
                return e
            }
            function Dn(e, a, s) {
                return a in e ? Object.defineProperty(e, a, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = s,
                e
            }
            const Bn = e=>{
                const a = (0,
                An.Z)((a=>e.dispatch(Rs(a))), 1200);
                return window.addEventListener("online", (()=>{
                    const s = da(e.getState());
                    s && a(s)
                }
                )),
                s=>t=>{
                    const o = s(t)
                      , r = e.getState()
                      , n = ia(r)
                      , i = ea(r)
                      , l = la(r)
                      , c = Math.floor(Date.now() / 1e3)
                      , d = Tn(Tn({}, r.persist), {}, {
                        timestamp: c,
                        schemaVersion: "0.2.0"
                    })
                      , u = J(i, n)
                      , m = [wo, ps, cs, As];
                    return (e=>{
                        const {game: {dayOffset: a}, timestamp: s} = e
                          , t = (o = new Date(1e3 * s),
                        Na(za, o));
                        var o;
                        return a && a < t
                    }
                    )(d) || (m.includes(t.type) && (Q(u, d),
                    i && (t.type === As ? e.dispatch(Rs(d)) : a(d))),
                    l && t.type === ds && a(d)),
                    o
                }
            }
            ;
            var Mn = e=>a=>s=>{
                const t = a(s)
                  , o = e.getState()
                  , r = V(o)
                  , i = H(o)
                  , l = "".concat(Wa(o))
                  , c = q(o);
                switch (s.type) {
                case ie:
                    {
                        const {modal: e, isClicked: a} = s.payload;
                        "stats" === e && a && (0,
                        n.$g)("click", l, "wordle", e);
                        break
                    }
                case ce:
                    {
                        const {page: e} = s.payload;
                        if ("linkInfo" === e || "statsLink" === e)
                            break;
                        let a = e;
                        "statsProblem" === e && (a = "stats-problem"),
                        e && (0,
                        n.$g)("click", l, "wordle", a);
                        break
                    }
                case pe:
                    (0,
                    n.ob)({
                        name: "wordle",
                        label: "click-nav",
                        useBeacon: !0,
                        context: null
                    });
                    break;
                case ge:
                    {
                        const {name: e, label: a, useBeacon: t, context: o} = s.payload;
                        (0,
                        n.ob)({
                            name: e,
                            label: a,
                            useBeacon: t,
                            context: o
                        });
                        break
                    }
                case wo:
                    {
                        const {name: e, value: a} = s.payload
                          , t = {
                            darkMode: "dark-mode",
                            colorblindMode: "high-contrast",
                            hardMode: "hard-mode"
                        }
                          , o = a ? "turn-on" : "turn-off";
                        (0,
                        n.$g)("click", l, "wordle", t[e], o);
                        break
                    }
                case ps:
                    {
                        const e = r ? "1" : "0"
                          , a = i ? "1" : "0"
                          , t = c ? "h" : "e"
                          , {numGuesses: o, status: d, guess: u} = s.payload;
                        1 === o && (0,
                        n.$g)("click", l, "wordle", "start-game", "CB=".concat(e, " DM=").concat(a)),
                        (0,
                        n.$g)("click", l, "wordle", "solve-attempt", "".concat(o.toString(), "-").concat(u)),
                        "IN_PROGRESS" !== d && (0,
                        n.$g)("click", l, "wordle", "100%-complete", "".concat(t, "-").concat("WIN" === d ? o : 0));
                        break
                    }
                case Ft:
                    {
                        const {isGameComplete: e} = s.payload
                          , a = e ? "congrats-modal" : "stats"
                          , t = ss(o)
                          , r = os(o)
                          , i = rs(o)
                          , c = ns(o)
                          , d = ts(o);
                        (0,
                        n.hX)("wordle", a, ["p: ".concat(t), "w: ".concat(d), "cs: ".concat(i), "ms: ".concat(r), "1: ".concat(c[1]), "2: ".concat(c[2]), "3: ".concat(c[3]), "4: ".concat(c[4]), "5: ".concat(c[5]), "6: ".concat(c[6])], l),
                        e && n.Fi.getVariant("GAMES_wordlebotSBCTA_0822") && n.Fi.reportExposure("GAMES_wordlebotSBCTA_0822");
                        break
                    }
                case ke:
                    {
                        const {label: e, sendContext: a, element: t} = s.payload
                          , o = a ? l : null
                          , r = t ? {
                            name: "",
                            label: e,
                            element: t,
                            useBeacon: !0,
                            context: o
                        } : {
                            name: "wordle",
                            label: e,
                            useBeacon: !0,
                            context: o
                        };
                        (0,
                        n.ob)(r);
                        break
                    }
                case fe:
                    {
                        const {name: e, region: a} = s.payload;
                        (0,
                        n.hX)(e, a);
                        break
                    }
                }
                return t
            }
            ;
            const Rn = document.body;
            o.render(t.createElement(t.Fragment, null, t.createElement(c, null), t.createElement(r.zt, {
                store: (()=>{
                    const e = void 0 !== window.__REDUX_DEVTOOLS_EXTENSION__
                      , a = [(0,
                    on.md)(rn.Z, Bn, Mn)];
                    return e && a.push(window.__REDUX_DEVTOOLS_EXTENSION__()),
                    (0,
                    on.MT)(Ln, (0,
                    on.qC)(...a))
                }
                )()
            }, t.createElement(i.Z, {
                disableShortz: !0
            }, t.createElement(b, null, t.createElement(E, null, t.createElement(tn, null)))))), Rn)
        },
        5489: function(e, a, s) {
            s.d(a, {
                $g: function() {
                    return d.$g
                },
                Be: function() {
                    return k.B
                },
                Fg: function() {
                    return y.Fg
                },
                Fi: function() {
                    return h.F
                },
                N1: function() {
                    return g.N
                },
                NT: function() {
                    return o.NT
                },
                OB: function() {
                    return o.OB
                },
                Rt: function() {
                    return o.Rt
                },
                Tv: function() {
                    return y.Tv
                },
                Xy: function() {
                    return b.Xy
                },
                hX: function() {
                    return d.hX
                },
                j: function() {
                    return d.j
                },
                kh: function() {
                    return o.kh
                },
                lY: function() {
                    return y.lY
                },
                ob: function() {
                    return d.ob
                },
                vO: function() {
                    return m.v
                }
            });
            var t = s(4395)
              , o = s(2042)
              , r = s(6303)
              , n = s(1069)
              , i = s(3649)
              , l = s(7006)
              , c = s(7719)
              , d = s(1586)
              , u = s(8198)
              , m = s(3104)
              , p = s(800)
              , y = s(1239)
              , g = s(7644)
              , h = s(2714)
              , b = s(8093)
              , k = s(3251);
            (0,
            g.Z)(),
            (0,
            d.U9)(),
            (0,
            y.ZP)(u.p_.sentryConfig),
            (0,
            t.Z)(),
            u.p_.isHybridWebView || "wordle" === u.p_.pageName || (l.E.initialize(),
            c.U.initialize()),
            (0,
            i.ku)(),
            (0,
            n.IX)(),
            (0,
            c.q)(),
            u.p_.addEventListener("load", (()=>{
                (0,
                p._)()
            }
            ), {
                once: !0
            }),
            (null === l.A || void 0 === l.A ? void 0 : l.A.inShortzMode) && o.G7 ? u.p_.dataLayer = [] : ((0,
            r.I5)(),
            u.p_.addEventListener("load", (()=>{
                (0,
                m.Z)(),
                (0,
                r.YY)(u.p_.adUnitPath || "default", h.F.getTests()),
                (0,
                d.Sv)()
            }
            )))
        },
        3104: function(e, a, s) {
            s.d(a, {
                v: function() {
                    return u
                }
            });
            var t = s(2042)
              , o = s(6023)
              , r = s(3251)
              , n = s(431)
              , i = s(3682);
            const l = "prod" === t.OB.name ? "https://purr.nytimes.com" : "https://purr.dev.nytimes.com";
            r.B.get("".concat(l, "/v1/purr-cache"), {
                withCookie: !1
            });
            const c = (e,a)=>'\n  <div class="ccpa-snackbar" role="status" data-region="popup">\n    <div clas="ccpa-snackbar__container">\n      '.concat(a ? '<p class="ccpa-snackbar__header">'.concat(a, "</p>") : "", "\n      ").concat(e ? '<p class="ccpa-snackbar__description">'.concat(e, "</p>") : "", "\n    </div>\n  </div>\n")
              , d = '\n  <div class="ccpa-snackbar error" role="status">\n    <div class="ccpa-snackbar__error">An error occured, please try again.</div>\n  </div>\n'
              , u = ()=>{
                if (window.ccpa)
                    return;
                let e, a, s, u, m, p;
                try {
                    e = [...document.getElementsByClassName("ccpa-impression")],
                    a = [...document.getElementsByClassName("ccpa-opt-out")],
                    s = [...document.querySelectorAll(".ccpa-link")],
                    u = [...document.getElementsByClassName("ccpa-user-opted-out")]
                } catch (e) {
                    return
                }
                s.forEach((e=>{
                    e.addEventListener("click", i.gc)
                }
                )),
                e.forEach((e=>{
                    (0,
                    o.Z)(e, i._k)
                }
                ));
                const y = e=>{
                    let a;
                    m && clearTimeout(m),
                    a = "error" === e ? document.querySelectorAll(".ccpa-snackbar.error") : document.querySelectorAll(".ccpa-snackbar"),
                    a.forEach((e=>{
                        e.remove()
                    }
                    ))
                }
                  , g = e=>{
                    e.preventDefault();
                    const a = t.Rt ? "Based on your preference, we will not sell or share your information, and you have been opted out of targeted advertising." : "Based on your preference, we will not sell or share your information, and you have been opted out of targeted advertising. If you clear your cookies, your preference will be forgotten."
                      , s = c(a, "");
                    document.body.insertAdjacentHTML("beforeend", s),
                    (0,
                    i.vq)("optedOut", a),
                    window.setTimeout(y, 6e3)
                }
                  , h = e=>{
                    function s(e) {
                        const s = !(e instanceof Error)
                          , r = t.Rt ? "Your preference has been saved for this account." : "Your preference has been stored for this browser and device."
                          , n = t.Rt ? "We will not sell or share your information, and you will be opted out of targeted advertising." : "We will not sell or share your information, and you will be opted out of targeted advertising. If you clear your cookies, your preference will be forgotten."
                          , l = s ? c(n, r) : d;
                        document.body.insertAdjacentHTML("beforeend", l),
                        s || ((0,
                        i.vq)("optOut", d),
                        m = window.setTimeout(y, 3e3)),
                        s && (a.forEach((e=>{
                            const {className: a, dataset: {region: s}} = e.firstChild;
                            e.innerHTML = '<a href="opted-out-footer" class="'.concat(a, '" data-region="').concat(s, '" data-track="optedOut">We No Longer Sell/Share Your Information</span>'),
                            e.removeEventListener("click", h),
                            (0,
                            o.Z)(e, i._k),
                            e.addEventListener("click", g);
                            const r = t.Rt ? 6e3 : 7e3;
                            m = window.setTimeout(y, r)
                        }
                        )),
                        (0,
                        i.vq)("optOut", "".concat(r, " ").concat(n))),
                        p = !1
                    }
                    e.preventDefault(),
                    p || (p = !0,
                    document.URL.includes("/games/wordle") ? r.B.post("".concat(l, "/v2/preferences"), {
                        ccpa_pref: "opt-out"
                    }, {
                        withCookie: !1
                    }).then(s).catch((e=>{
                        console.warn(e)
                    }
                    )) : r.B.post("".concat(l, "/v1/preferences"), {
                        ccpa_pref: "opt-out"
                    }, {
                        withCookie: !1
                    }).then(s).catch(s))
                }
                ;
                a.forEach((e=>{
                    (0,
                    n.Oo)(e, "click", h)
                }
                )),
                u.forEach((e=>{
                    (0,
                    n.Oo)(e, "click", g)
                }
                )),
                window.ccpa = !0
            }
            ;
            a.Z = u
        },
        9385: function(e, a, s) {
            s.d(a, {
                Iu: function() {
                    return y
                },
                N$: function() {
                    return k
                },
                N1: function() {
                    return h
                },
                OD: function() {
                    return l
                },
                PU: function() {
                    return b
                },
                Q5: function() {
                    return p
                },
                kU: function() {
                    return r
                },
                m$: function() {
                    return c
                },
                yL: function() {
                    return g
                }
            });
            const t = "sendAnalytic"
              , o = "setPullToRefreshEnabled"
              , r = "gamesAuthenticateUser"
              , n = "gamesBackToHub"
              , i = "gamesCacheRefresh"
              , l = "gamesGetUserDetails"
              , c = "gamesInitializeState"
              , d = "gamesSendEmail"
              , u = "share"
              , m = "gamesSetNativeColorTheme"
              , p = "gamesOnNavigateBack"
              , y = "gamesGetGameData"
              , g = [t, o, r, n, i, l, c, d, u, m];
            let h, b;
            !function(e) {
                e.SUGGESTION = "suggest",
                e.FEEDBACK = "feedback",
                e.LETTERBOXED = "feedback-letter-boxed",
                e.SUDOKU = "feedback-sudoku",
                e.TILES = "feedback-tiles",
                e.WORDLE = "feedback-wordle"
            }(h || (h = {})),
            function(e) {
                e.LIGHT = "light",
                e.DARK = "dark"
            }(b || (b = {}));
            const k = e=>({
                [t]: (a,s)=>e(t, {
                    eventName: a,
                    options: s || {}
                }),
                [o]: a=>e(o, {
                    value: a
                }),
                [r]: a=>e(r, {
                    type: a
                }),
                [n]: ()=>e(n),
                [i]: ()=>e(i),
                [l]: ()=>e(l),
                [c]: ()=>e(c),
                [d]: a=>{
                    let {type: s, debugInfo: t} = a;
                    return e(d, {
                        type: s,
                        debugInfo: t
                    })
                }
                ,
                [u]: (a,s,t)=>e(u, {
                    url: a,
                    text: s,
                    title: t
                }),
                [m]: a=>e(m, {
                    theme: a
                })
            })
        },
        3401: function(e, a, s) {
            s.d(a, {
                Og: function() {
                    return n
                },
                R7: function() {
                    return t
                },
                Ys: function() {
                    return i
                },
                mo: function() {
                    return o
                },
                x0: function() {
                    return r
                }
            });
            const t = ()=>"android" === window.newsreaderAppPlatform
              , o = ()=>"ios" === window.newsreaderAppPlatform
              , r = ()=>!0 === window.isPlayTab
              , n = ()=>("android" === window.gamesAppPlatform || t()) && window.isHybridWebView
              , i = ()=>("ios" === window.gamesAppPlatform || o()) && window.isHybridWebView
        },
        7644: function(e, a, s) {
            s.d(a, {
                N: function() {
                    return n.N1
                }
            });
            var t = s(3886)
              , o = s(329)
              , r = s(8229)
              , n = s(9385);
            a.Z = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                if ((0,
                o.HP)())
                    (0,
                    o.ZP)(e);
                else if ((0,
                t.m5)()) {
                    (0,
                    r.Z)("Initializing native bridge");
                    try {
                        (0,
                        t.ZP)(e)
                    } catch (e) {
                        (0,
                        r.Z)("Failed to initialize native bridge", [e])
                    }
                } else
                    (0,
                    r.Z)("Neither mock nor native bridge initialized")
            }
        },
        4658: function(e, a, s) {
            s.d(a, {
                tq: function() {
                    return g
                },
                K1: function() {
                    return t
                },
                bf: function() {
                    return h
                }
            });
            const t = function() {
                const e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") || navigator.userAgent || navigator.vendor || (window.opera ? "opera" : "");
                return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
            }
              , o = ()=>new URLSearchParams(window.location.search)
              , r = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return e.includes("Reader/") || /nyt[-_]?android/i.test(e)
            }
              , n = function() {
                return /nyt[-_]?ios/i.test(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "")
            }
              , i = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                const a = o()
                  , s = a.get("embed") || ""
                  , t = a.get("rid") || ""
                  , i = e || navigator.userAgent;
                return ["ios", "ipad", "iphone"].includes(s) || t || n(i) ? "ios" : ["android", "androidtab", "androidphone"].includes(s) || r(i) ? "android" : ""
            }
              , l = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").includes("Crosswords/")
            }
              , c = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").includes("nyt_xwords_ios/")
            }
              , d = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                const a = o()
                  , s = e || navigator.userAgent;
                return c(s) || "games" === a.get("hybrid") || "games-ios" === a.get("embed") ? "ios" : l(s) || "games-android" === a.get("embed") ? "android" : ""
            }
              , u = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return /i(Phone|Pad|Pod)/i.test(e) || c(e) || n(e) || function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator;
                    return /iPad/.test(e.platform) || "MacIntel" === e.platform && e.maxTouchPoints > 1
                }()
            }
              , m = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return /android/i.test(e) || l(e) || r(e)
            }
              , p = ["transitionend", "webkitTransitionEnd", "oTransitionEnd", "msTransitionEnd"].find((e=>"on".concat(e.toLowerCase())in window));
            function y(e) {
                const a = []
                  , s = document.getElementById(e)
                  , t = {
                    value: null == s ? void 0 : s.offsetWidth,
                    subscribe(e) {
                        return a.push(e),
                        function() {
                            a.splice(a.indexOf(e), 1)
                        }
                    }
                };
                return null == s || s.addEventListener(p, (function() {
                    const e = null == s ? void 0 : s.offsetWidth;
                    var o;
                    if (o = e,
                    t.value = o,
                    !a.length)
                        return;
                    let r = a.length;
                    for (; r > 0; )
                        r -= 1,
                        a[r](e)
                }
                ), !1),
                t
            }
            !function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                const a = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "") || navigator.userAgent;
                if (void 0 === e.newsreaderAppPlatform && (e.newsreaderAppPlatform = i()),
                void 0 === e.gamesAppPlatform && (e.gamesAppPlatform = d()),
                void 0 === e.isPlayTab && (e.isPlayTab = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    const a = o()
                      , s = e || navigator.userAgent;
                    return "playTab" === a.get("entry") && "ios" === i(s)
                }()),
                void 0 === e.isIOSDevice && (e.isIOSDevice = u(a)),
                void 0 === e.isAndroidDevice && (e.isAndroidDevice = m(a)),
                void 0 === e.isMobileDevice && (e.isMobileDevice = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return t(e) || u(e) || m(e)
                }(a)),
                void 0 === e.isHybridWebView) {
                    const a = e.pageName || "";
                    e.isHybridWebView = void 0 !== e.NYTG && (e=>!!["wordle", "sudoku", "tiles", "letter-boxed"].find((a=>e.includes(a))))(a) && !!d()
                }
                "mock" === o().get("bridge") && (e.isHybridWebView = !0)
            }(),
            (()=>{
                if (!window.isCacheSafe)
                    return;
                const e = document.querySelector("body")
                  , a = document.querySelector('[name="viewport"]')
                  , s = [];
                window.isMobileDevice ? (s.push("pz-mobile"),
                window.isIOSDevice && s.push("pz-mobile-ios"),
                window.isAndroidDevice && s.push("pz-mobile-android")) : s.push("pz-desktop"),
                window.isHybridWebView && (s.push("pz-hybrid"),
                null == a || a.setAttribute("content", "width=device-width, initial-scale=1, minimal-ui, maximum-scale=1, user-scalable=no")),
                window.gamesAppPlatform ? (s.push("pz-games-app"),
                s.push("pz-games-app-".concat(window.gamesAppPlatform))) : window.newsreaderAppPlatform ? (s.push("pz-newsreader"),
                s.push("pz-".concat(window.newsreaderAppPlatform)),
                window.isPlayTab && s.push("pz-play-tab")) : s.push("pz-web"),
                null == e || e.classList.add(...s)
            }
            )();
            const g = document.body.classList.contains("pz-mobile")
              , h = (y("ratio-hook"),
            y("width-hook"))
        }
    }, s = {};
    function t(e) {
        var o = s[e];
        if (void 0 !== o)
            return o.exports;
        var r = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return a[e](r, r.exports, t),
        r.loaded = !0,
        r.exports
    }
    t.m = a,
    e = [],
    t.O = function(a, s, o, r) {
        if (!s) {
            var n = 1 / 0;
            for (d = 0; d < e.length; d++) {
                s = e[d][0],
                o = e[d][1],
                r = e[d][2];
                for (var i = !0, l = 0; l < s.length; l++)
                    (!1 & r || n >= r) && Object.keys(t.O).every((function(e) {
                        return t.O[e](s[l])
                    }
                    )) ? s.splice(l--, 1) : (i = !1,
                    r < n && (n = r));
                if (i) {
                    e.splice(d--, 1);
                    var c = o();
                    void 0 !== c && (a = c)
                }
            }
            return a
        }
        r = r || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > r; d--)
            e[d] = e[d - 1];
        e[d] = [s, o, r]
    }
    ,
    t.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(a, {
            a: a
        }),
        a
    }
    ,
    t.d = function(e, a) {
        for (var s in a)
            t.o(a, s) && !t.o(e, s) && Object.defineProperty(e, s, {
                enumerable: !0,
                get: a[s]
            })
    }
    ,
    t.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    t.hmd = function(e) {
        return (e = Object.create(e)).children || (e.children = []),
        Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: function() {
                throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }),
        e
    }
    ,
    t.o = function(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }
    ,
    t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    function() {
        var e = {
            9219: 0
        };
        t.O.j = function(a) {
            return 0 === e[a]
        }
        ;
        var a = function(a, s) {
            var o, r, n = s[0], i = s[1], l = s[2], c = 0;
            if (n.some((function(a) {
                return 0 !== e[a]
            }
            ))) {
                for (o in i)
                    t.o(i, o) && (t.m[o] = i[o]);
                if (l)
                    var d = l(t)
            }
            for (a && a(s); c < n.length; c++)
                r = n[c],
                t.o(e, r) && e[r] && e[r][0](),
                e[r] = 0;
            return t.O(d)
        }
          , s = self.webpackChunk_xwords_phoenix = self.webpackChunk_xwords_phoenix || [];
        s.forEach(a.bind(null, 0)),
        s.push = a.bind(null, s.push.bind(s))
    }();
    var o = t.O(void 0, [9270, 3194, 6362, 1926, 7132, 4690, 7112, 5188, 4830, 7202, 5619, 8607], (function() {
        return t(6144)
    }
    ));
    o = t.O(o)
}();
//# sourceMappingURL=wordle.7e482ff98710cec4f9e0.js.map
