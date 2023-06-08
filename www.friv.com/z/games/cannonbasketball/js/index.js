!function(t) {
    function e(t, e, i) {
        this.onClick = new p,
        this.onDown = new p,
        this.onUp = new p,
        this.onOut = new p,
        e && (e = e.bind(i || this),
        this.onClick.add(e)),
        this.disposed = !1,
        this.isDown = !1,
        this.isOver = !1,
        this.name = "TintButton",
        this.upTint = 16777215,
        this.overTint = 15658734,
        this.downTint = 14540253,
        this.disableTint = 8947848,
        this.tint = this.upTint,
        PIXI.Sprite.call(this, t),
        this.mousedown = this.touchstart = this._mouseDown,
        this.mouseup = this.touchend = this.mouseupoutside = this.touchendoutside = this._mouseUp,
        this.mouseover = this._mouseOver,
        this.mouseout = this._mouseOut,
        this.click = this.tap = this._clickTap,
        this.interactive = !0,
        this.buttonMode = !0,
        this.anchor.set(.5, .5),
        this._cacheAnchorY = null
    }
    function i(t, e) {
        PIXI.Container.call(this),
        this.name = t || "Item",
        this.zOrder = e || U.zOrder.defaultZ,
        this._body = null,
        this.angleUpdate = !1,
        this.positionUpdate = !1
    }
    function n() {
        PIXI.Container.call(this);
        var t = new PIXI.TextStyle({
            fontFamily: "Impact",
            fontSize: 42,
            fill: "white",
            align: "center"
        })
          , e = new PIXI.Graphics;
        e.beginFill(0),
        e.drawRect(0, 0, lt.gameWidth0, lt.gameHeight0),
        e.endFill(),
        this.addChild(e),
        this._txtLoading = new PIXI.Text("Loading",t),
        this._txtLoading.scale.set(.5, .5),
        this._txtLoading.anchor.set(.5, .5),
        this._txtLoading.x = lt.gameWidth0 / 2,
        this._txtLoading.y = lt.gameHeight0 / 2 - 10,
        this.addChild(this._txtLoading),
        lt.pixi.ticker.add(this._update, this),
        this._loaded = 0,
        this._curr = 0
    }
    function a() {
        PIXI.Container.call(this);
        var t = lt.assets.getSprite("splash");
        t.anchor.set(.5, .5),
        t.x = lt.gameWidth0 / 2,
        t.y = lt.gameHeight0 / 2,
        this.addChild(t)
    }
    function o(t) {
        this.app = t
    }
    function s() {
        EventTarget.call(this),
        this._event = {},
        this._event.type = "",
        this._event.orientation = "",
        this._event.originalEvent = null,
        this._onVisibilityChange = this._onVisibilityChange.bind(this),
        this._onWebkitVisibilityChange = this._onWebkitVisibilityChange.bind(this),
        this._onPageShow = this._onPageShow.bind(this),
        this._onPageHide = this._onPageHide.bind(this),
        this._onFocus = this._onFocus.bind(this),
        this._onBlur = this._onBlur.bind(this),
        this._onResize = this._onResize.bind(this),
        this._onOrientationChange = this._onOrientationChange.bind(this),
        document.addEventListener("visibilitychange", this._onVisibilityChange, !1),
        document.addEventListener("webkitvisibilitychange", this._onWebkitVisibilityChange, !1),
        document.addEventListener("pageshow", this._onPageHide, !1),
        document.addEventListener("pagehide", this._onPageShow, !1),
        t.onfocus = this._onFocus,
        t.onblur = this._onBlur,
        this.orientation = this._getOrientation(),
        this._event.orientation = this.orientation,
        t.addEventListener("resize", this._onResize, !1),
        t.addEventListener("orientationchange", this._onOrientationChange, !1)
    }
    function r(t, e, i, n, a) {
        this.up = t,
        this.over = e,
        this.down = i,
        this.onClick = new p,
        this.onDown = new p,
        this.onUp = new p,
        this.onOut = new p,
        n && (n = n.bind(a || this),
        this.onClick.add(n)),
        this.name = "Button",
        this.disposed = !1,
        this.isDown = !1,
        this.isOver = !1,
        PIXI.Sprite.call(this, t),
        this.mousedown = this.touchstart = this._mouseDown,
        this.mouseup = this.touchend = this.mouseupoutside = this.touchendoutside = this._mouseUp,
        this.mouseover = this._mouseOver,
        this.mouseout = this._mouseOut,
        this.click = this.tap = this._clickTap,
        this.interactive = !0,
        this.anchor.set(.5, .5),
        this._cacheAnchorY = null
    }
    function h(t, i, n) {
        var a = lt.assets.getTexture("btnNumLevel", "atlasUI");
        e.call(this, a, i, n),
        this.num = t,
        this.name = "ButtonLevel" + t;
        var o = new PIXI.TextStyle({
            fontFamily: "Impact",
            fontSize: 32,
            fill: "black",
            stroke: "white",
            strokeThickness: 3
        });
        this.setLabel(t + "", o),
        this.scale.set(.5, .5)
    }
    function l(t, i, n, a, o) {
        PIXI.Container.call(this),
        this._callback = a,
        this._callbackScope = o,
        this._on = e.generateButton(t, n, this._onClick, this),
        this._on.name = "ON",
        this.addChild(this._on),
        this._off = e.generateButton(i, n, this._onClick, this),
        this._off.name = "OFF",
        this.addChild(this._off),
        this.on = !0
    }
    function c(t) {
        this.name = t || "Collection#" + ++c.__id,
        this._arr = [],
        this.throwIfIn = !1,
        this.throwIfNotIn = !1,
        this.throwIfOut = !1
    }
    function d() {
        Box2D.Dynamics.b2ContactListener.call(this),
        this._ee = new EventEmitter,
        this._eventNameBeginContact = "onBeginContact",
        this._eventNameEndContact = "onEndContact"
    }
    function p() {
        this.count = 0,
        this._callbacks = [],
        this._doItAfter = [],
        this._blocked = !1,
        this.disposed = !1
    }
    function u() {
        this.startTime = Date.now(),
        this.prevTime = this.startTime,
        this.ms = 0,
        this.msMin = 1 / 0,
        this.msMax = 0,
        this.fps = 0,
        this.fpsMin = 1 / 0,
        this.fpsMax = 0,
        this.frames = 0,
        this.update = this.update.bind(this)
    }
    function m(t) {
        this.stage = t,
        this.mouse = new PIXI.InteractionData,
        this.touchs = {},
        this.interactInvisible = !1,
        this.tempPoint = new PIXI.Point,
        this.mouseoverEnabled = !0,
        this.pool = [],
        this.interactiveItems = [],
        this.interactionDOMElement = null,
        this.onMouseMove = this.onMouseMove.bind(this),
        this.onMouseDown = this.onMouseDown.bind(this),
        this.onMouseOut = this.onMouseOut.bind(this),
        this.onMouseUp = this.onMouseUp.bind(this),
        this.onTouchStart = this.onTouchStart.bind(this),
        this.onTouchEnd = this.onTouchEnd.bind(this),
        this.onTouchMove = this.onTouchMove.bind(this),
        this.last = 0
    }
    function y() {
        this.localStorageEnable = !1,
        this._storage = {};
        try {
            this.localStorageEnable = "localStorage"in t && null !== t.localStorage
        } catch (t) {}
    }
    function g(e) {
        t.b2Vec2 = Box2D.Common.Math.b2Vec2,
        t.b2AABB = Box2D.Collision.b2AABB,
        t.b2BodyDef = Box2D.Dynamics.b2BodyDef,
        t.b2Body = Box2D.Dynamics.b2Body,
        t.b2FixtureDef = Box2D.Dynamics.b2FixtureDef,
        t.b2Fixture = Box2D.Dynamics.b2Fixture,
        t.b2World = Box2D.Dynamics.b2World,
        t.b2MassData = Box2D.Collision.Shapes.b2MassData,
        t.b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape,
        t.b2CircleShape = Box2D.Collision.Shapes.b2CircleShape,
        t.b2DebugDraw = Box2D.Dynamics.b2DebugDraw,
        t.b2MouseJointDef = Box2D.Dynamics.Joints.b2MouseJointDef,
        this.world = new nt(new Q(0,12),!0),
        this.contactListener = new d,
        this.world.SetContactListener(this.contactListener),
        lt.physWorld = this.world,
        this.clearDoIt(),
        this._canvas = null,
        this._context = null,
        e && this.enableDebugDraw(),
        lt.pixi.ticker.add(this._update, this)
    }
    function x(t) {
        "undefined" == typeof t && (t = []),
        this.c = 1,
        this.s0 = 0,
        this.s1 = 0,
        this.s2 = 0,
        this.sow(t)
    }
    function _() {
        this.shown = !1,
        PIXI.Container.call(this);
        var t = lt.assets.getSprite("dialog");
        t.scale.set(.5, .5),
        t.anchor.set(.5, .5),
        this.addChild(t),
        this.showX = lt.gameWidth0 - 30,
        this.showY = lt.gameHeight0 - 20,
        this.hideX = lt.gameWidth0 + this.width + 10,
        this.hideY = this.showY,
        this.x = this.hideX,
        this.y = this.hideY;
        var e = new PIXI.TextStyle({
            fontFamily: "Impact",
            fontSize: 32,
            fill: "white",
            stroke: "black",
            strokeThickness: 2,
            align: "center",
            lineHeight: 42
        })
          , i = new PIXI.Text("code & art :: OLEG KUZYK\nlevel design :: GEORGIY STEPANOV\nmusic :: Kevin MacLeod\nrender :: PIXI. JS\nphysics :: MATTER. JS\n",e);
        i.scale.set(.5, .5),
        i.anchor.set(.5, .45),
        this.addChild(i),
        this.pivot.set(this.width / 2, this.height / 2)
    }
    function v(t, i) {
        PIXI.Container.call(this),
        this._buttonsHandler = t;
        var n = lt.assets.getSprite("levelCompleted");
        n.scale.set(.5, .5),
        n.interactive = !0,
        this.addChild(n),
        this._btnRestart = e.generateButton("btnRestartComplete", "atlasUI", t, i),
        this._btnRestart.name = "Restart",
        this._btnRestart.scale.set(.5, .5),
        this._btnRestart.anchor.set(.5, .5),
        this._btnRestart.x = this._btnRestart.xIn = lt.gameWidth0 / 2,
        this._btnRestart.y = this._btnRestart.yIn = lt.gameHeight0 / 2 + 100,
        this._btnRestart.xOut = this._btnRestart.xIn,
        this._btnRestart.yOut = lt.gameHeight0 + this._btnRestart.height / 2 + 10,
        this.addChild(this._btnRestart),
        this._btnMenu = e.generateButton("btnMenuComplete", "atlasUI", t, i),
        this._btnMenu.name = "Menu",
        this._btnMenu.scale.set(.5, .5),
        this._btnMenu.anchor.set(.5, .5),
        this._btnMenu.x = this._btnMenu.xIn = this._btnRestart.x - this._btnRestart.width / 2 - this._btnMenu.width / 2 - 20,
        this._btnMenu.y = this._btnMenu.yIn = this._btnRestart.y,
        this._btnMenu.xOut = -this._btnMenu.width / 2 - 10,
        this._btnMenu.yOut = this._btnMenu.yIn,
        this.addChild(this._btnMenu),
        this._btnNext = e.generateButton("btnNextComplete", "atlasUI", t, i),
        this._btnNext.name = "Next",
        this._btnNext.scale.set(.5, .5),
        this._btnNext.anchor.set(.5, .5),
        this._btnNext.x = this._btnNext.xIn = this._btnRestart.x + this._btnRestart.width / 2 + this._btnNext.width / 2 + 20,
        this._btnNext.y = this._btnNext.yIn = this._btnRestart.y,
        this._btnNext.xOut = lt.gameWidth0 + this._btnNext.width / 2 + 10,
        this._btnNext.yOut = this._btnNext.yIn,
        this.addChild(this._btnNext);
        var a = new PIXI.TextStyle({
            fontFamily: "Impact",
            fontSize: 52,
            fill: "black",
            stroke: "white",
            strokeThickness: 3,
            align: "center"
        })
          , o = "LEVEL " + lt.levelMng.currLevel + " COMPLETED!";
        lt.levelMng.currLevel == lt.levelMng.totalLevels && (o = "CONGRATULATIONS!\nYOU'VE WON THE GAME!",
        a.fontSize = 36),
        this._text = new PIXI.Text(o,a),
        this._text.anchor.set(.5, .5),
        this._text.scale.set(.5, .5),
        this._text.x = lt.gameWidth0 / 2,
        this._text.y = lt.gameHeight0 / 2 - 50,
        this.addChild(this._text),
        this.sndWin = lt.assets.getSound("sndWin")
    }
    function b(t) {
        this.shown = !1,
        PIXI.Container.call(this),
        this._buttonsHandler = t;
        var e = lt.assets.getSprite("dialog");
        e.scale.set(.5, .5),
        e.anchor.set(.5, .5),
        this.addChild(e),
        this.showX = lt.gameWidth0 - 30,
        this.showY = lt.gameHeight0 - this.height - 40,
        this.hideX = lt.gameWidth0 + this.width + 10,
        this.hideY = this.showY,
        this.x = this.hideX,
        this.y = this.hideY;
        var i = 1;
        this._buttons = [],
        this._btnsContainer = new PIXI.Container,
        this.addChild(this._btnsContainer);
        for (var n = 15, a = 7, o = 0; o < 3; o++)
            for (var s = 0; s < 5; s++) {
                var r = new h(i,this._onClick,this);
                r.x += s * (n + r.width),
                r.y += o * (a + r.height),
                r.anchor.set(0, 0),
                this._btnsContainer.addChild(r),
                r.setLocked(i > lt.levelMng.lastOpened),
                this._buttons.push(r),
                i++
            }
        this._btnsContainer.y = -7,
        this._btnsContainer.pivot.set(this._btnsContainer.width / 2, this._btnsContainer.height / 2),
        this.pivot.set(this.width / 2, this.height / 2)
    }
    function w(t, e) {
        i.call(this, "Ball", U.zOrder.ball);
        var n = lt.assets.getSprite("ball", "atlasGame");
        n.scale.set(.5, .5),
        n.anchor.set(.5, .5),
        this.addChild(n),
        this.x = t,
        this.y = e;
        var a = g.createCircleShape(7.5)
          , o = g.createFixtureDef(a, .5, .15, 1, {
            item: this,
            isBall: !0
        })
          , s = g.createBodyDef(t, e, et.b2_dynamicBody, !1, !0, 0, !0);
        this._body = g.createBody(s, [o]),
        this._enableUpdate(),
        this.angleUpdate = !0,
        this.positionUpdate = !0
    }
    function P(t, e) {
        i.call(this, "Basket", U.zOrder.basket),
        this.x = t,
        this.y = e;
        var n = lt.assets.getSprite("basket", "atlasGame");
        n.scale.set(.55, .55),
        n.anchor.set(.5, .36),
        this.addChild(n);
        var a = g.createPolygonShape(22.5, 4, 0, 30)
          , o = g.createFixtureDef(a, .5, .1, 1, this)
          , s = g.createPolygonShape(4, 42, 14.85, 10.85, q.toRadians(15))
          , r = g.createFixtureDef(s, .5, .1, 1, this)
          , h = g.createPolygonShape(4, 42, -14.85, 10.85, q.toRadians(-15))
          , l = g.createFixtureDef(h, .5, .1, 1, this)
          , c = g.createPolygonShape(7.5, 6.6, 22.8, -7.75, q.toRadians(-15))
          , d = g.createFixtureDef(c, .5, .1, 1, this)
          , p = g.createPolygonShape(7.5, 6.6, -22.8, -7.75, q.toRadians(15))
          , u = g.createFixtureDef(p, .5, .1, 1, this)
          , m = g.createPolygonShape(27, 4)
          , y = g.createFixtureDef(m, .5, .1, 1, {
            item: this,
            basketSensor: !0
        }, !0)
          , f = g.createBodyDef(t, e, et.b2_staticBody);
        this._body = g.createBody(f, [o, r, l, d, u, y]),
        lt.physics.contactListener.addBeginContactListener(this._onBeginContact, this)
    }
    function S(t, e, n, a, o) {
        i.call(this, "BasketRail", U.zOrder.basket),
        this._orienation = 0 == n ? "v" : "h",
        this._end = a,
        this.x = t,
        this.y = e,
        this.id = o;
        var s = lt.assets.getSprite("railBasket", "atlasGame");
        s.scale.set(.55, .55),
        s.anchor.set(.5, .46),
        this.addChild(s);
        var r = g.createPolygonShape(22.5, 4, 0, 30)
          , h = g.createFixtureDef(r, .5, .1, 1, this)
          , l = g.createPolygonShape(4, 42, 14.85, 10.85, q.toRadians(15))
          , c = g.createFixtureDef(l, .5, .1, 1, this)
          , d = g.createPolygonShape(4, 42, -14.85, 10.85, q.toRadians(-15))
          , p = g.createFixtureDef(d, .5, .1, 1, this)
          , u = g.createPolygonShape(7.5, 6.6, 22.8, -7.75, q.toRadians(-15))
          , m = g.createFixtureDef(u, .5, .1, 1, this)
          , y = g.createPolygonShape(7.5, 6.6, -22.8, -7.75, q.toRadians(15))
          , f = g.createFixtureDef(y, .5, .1, 1, this)
          , x = g.createPolygonShape(27, 4)
          , _ = g.createFixtureDef(x, .5, .1, 1, {
            item: this,
            basketSensor: !0
        }, !0)
          , v = g.createBodyDef(t, e, et.b2_kinematicBody);
        this._body = g.createBody(v, [h, c, p, m, f, _]),
        this._createRails(),
        lt.physics.contactListener.addBeginContactListener(this._onBeginContact, this),
        i.events.on(i.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this),
        this.sndStart = lt.assets.getSound("sndRailStart"),
        this.sndStop = lt.assets.getSound("sndRailStop")
    }
    function I(t, e) {
        i.call(this, "Cannon", U.zOrder.cannon),
        this.lowerAngle = -45,
        this.upperAngle = 45,
        this.shotScale = 150,
        this.minPower = 250,
        this.maxPower = 500,
        this.x = t,
        this.y = e;
        var n = lt.assets.getSprite("cannonPlatform", "atlasGame");
        n.anchor.set(.5, 1),
        n.scale.set(.5, .5),
        this.addChild(n);
        var a = $.generateFrameNames("cannon_", 1, 15, "", 4)
          , o = lt.assets.getTextures(a, "atlasGame");
        this._cannon = new PIXI.extras.AnimatedSprite(o),
        this._cannon.anchor.set(.5, 1.32),
        this._cannon.scale.set(.5, .5),
        this._cannon.animationSpeed = 1,
        this._cannon.loop = !1,
        this.addChildAt(this._cannon, 0),
        this._shotComplete = this._shotComplete.bind(this),
        this._cannon.onComplete = this._shotComplete,
        this._frameChanged = this._frameChanged.bind(this),
        this._cannon.onFrameChange = this._frameChanged,
        this._shot = this._shot.bind(this),
        lt.playState.shotHandler.add(this._shot),
        this._helperPoint = new PIXI.Point,
        this._ballSpawnPoint = new PIXI.Point(0,-43),
        this._shoted = !1,
        lt.pixi.ticker.add(this._update, this),
        this._isAllowMove = !0,
        lt.playState.aimControl && (lt.playState.bg.on("pointerdown", this._pointerDown, this),
        lt.playState.bg.on("pointerup", this._pointerUp, this),
        this._isAllowMove = !1),
        this.sndShot = lt.assets.getSound("sndShot")
    }
    function D(t, e) {
        i.call(this, "Domino", U.zOrder.defaultZ),
        this.x = t,
        this.y = e;
        var n = lt.assets.getSprite("domino", "atlasGame");
        n.scale.set(.5, .5),
        n.anchor.set(.5, .5),
        this.addChild(n);
        var a = g.createPolygonShape(10, 50)
          , o = g.createFixtureDef(a, .5, 0, .5, {
            item: this
        })
          , s = g.createBodyDef(t, e, et.b2_dynamicBody);
        this._body = g.createBody(s, [o]),
        this._enableUpdate(),
        this.angleUpdate = !0,
        this.positionUpdate = !0
    }
    function C(t, e, n, a, o, s) {
        i.call(this, "Gate", U.zOrder.defaultZ);
        var r = 0;
        o = void 0 != o ? o : 90,
        s = s || !1,
        s && (r = o,
        o = 0,
        "right" == n && (r = -r)),
        this.inversed = s,
        r = q.toRadians(r),
        this.x = t,
        this.y = e,
        this.rotation = r,
        this.openAngle = q.toRadians(o),
        this.direction = n,
        this.opened = !1,
        this.rotation = r,
        this.id = a;
        var h = lt.assets.getSprite("gate_" + n, "atlasGame");
        h.scale.set(.5, .5),
        "left" == n ? h.anchor.set(.2, .5) : "right" == n && h.anchor.set(.8, .5),
        this.addChild(h);
        var l;
        "left" == n ? l = g.createPolygonShape(30, 8, 11) : "right" == n && (l = g.createPolygonShape(30, 8, -11));
        var c = g.createFixtureDef(l, 1, .1, .1)
          , d = g.createBodyDef(t, e, et.b2_kinematicBody, !1, !0, r);
        this._body = g.createBody(d, [c]),
        i.events.on(i.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this),
        this.sndGate = lt.assets.getSound("sndGate")
    }
    function T(t, e, n, a) {
        i.call(this, "Hammer", U.zOrder.defaultZ),
        a = a || 1,
        this.x = t,
        this.y = e,
        n = q.toRadians(n),
        this.rotation = n;
        var o = lt.assets.getSprite("hammer", "atlasGame");
        o.scale.set(.5, .5),
        o.anchor.set(.1, .5),
        this.addChild(o);
        var s = g.createPolygonShape(12, 74, 62, 0)
          , r = g.createFixtureDef(s, .3, .1, a, {
            item: this
        })
          , h = g.createPolygonShape(59, 12, 26, 0)
          , l = g.createFixtureDef(h, .3, .1, a, {
            item: this
        })
          , c = g.createBodyDef(t, e, et.b2_dynamicBody, !1, !0, n);
        this._body = g.createBody(c, [r, l]);
        var d = lt.physWorld.GetGroundBody()
          , p = new rt;
        p.Initialize(d, this._body, this._body.GetPosition()),
        lt.physWorld.CreateJoint(p),
        this._enableUpdate(),
        this.angleUpdate = !0,
        this.positionUpdate = !0
    }
    function O(t, e) {
        i.call(this, "Peg", U.zOrder.defaultZ),
        this.x = t,
        this.y = e;
        var n = lt.assets.getSprite("peg", "atlasGame");
        n.scale.set(.5, .5),
        n.anchor.set(.5, .5),
        this.addChild(n);
        var a = g.createCircleShape(15)
          , o = g.createFixtureDef(a, .2, .1, 1, {
            item: this,
            isPeg: !0
        })
          , s = g.createBodyDef(t, e, et.b2_staticBody);
        this._body = g.createBody(s, [o]),
        lt.physics.contactListener.addBeginContactListener(this._onBeginContact, this),
        this.sndPeg = lt.assets.getSound("sndPeg")
    }
    function B(t, e, n, a) {
        a = q.toRadians(a || 0);
        var o = 15;
        i.call(this, "Platform", U.zOrder.platform),
        this.x = t,
        this.y = e,
        this.rotation = a;
        var s = lt.assets.getSprite("platform", "atlasGame");
        s.scale.set(.5, .5),
        s.anchor.set(.5, .5),
        s.x = lt.rnd.realInRange(0, s.width / 2 - n / 2),
        this.addChild(s);
        var r = 2
          , h = new PIXI.Graphics;
        h.lineStyle(r, 3352345, 1),
        h.drawRect(-n / 2, -o / 2, n, o),
        this.addChild(h);
        var l = g.createPolygonShape(n, o)
          , c = g.createFixtureDef(l, 1, .1, 1, this)
          , d = g.createBodyDef(t, e, et.b2_staticBody, !1, !0, a, !1);
        this._body = g.createBody(d, [c]);
        var p = new PIXI.Graphics;
        p.beginFill(9160191, .4),
        p.drawRect(-n / 2, -o / 2, n, o),
        p.endFill(),
        this.addChild(p),
        this.mask = p
    }
    function E(t, e, n, a) {
        i.call(this, "PushButton", U.zOrder.pushButton),
        a = q.toRadians(a),
        this.x = t,
        this.y = e,
        this.rotation = a,
        this.id = n;
        var o = $.generateFrameNames("buttonPush_", 1, 4, "", 4)
          , s = lt.assets.getTextures(o, "atlasGame");
        this.btn = new PIXI.extras.AnimatedSprite(s),
        this.btn.anchor.set(.5, 1),
        this.btn.scale.set(.5, .5),
        this.btn.animationSpeed = .5,
        this.btn.loop = !1,
        this.addChildAt(this.btn, 0);
        var r = g.createPolygonShape(30, 4, 0, -12)
          , h = g.createFixtureDef(r, 1, 0, .1, {
            item: this,
            isSensor: !0
        }, !0)
          , l = g.createPolygonShape(40, 8, 0, -4)
          , c = g.createFixtureDef(l, 1, 0, .1, this)
          , d = g.createBodyDef(t, e, et.b2_staticBody, !1, !0, a);
        this._body = g.createBody(d, [h, c]),
        lt.physics.contactListener.addBeginContactListener(this._onBeginContact, this)
    }
    function k(t, e) {
        i.call(this, "Stopper", U.zOrder.defaultZ),
        this.x = t,
        this.y = e;
        var n = lt.assets.getSprite("stopper", "atlasGame");
        n.scale.set(.5, .5),
        n.anchor.set(.5, .5),
        this.addChild(n);
        var a = g.createCircleShape(5)
          , o = g.createFixtureDef(a, .2, .1, 1, this)
          , s = g.createBodyDef(t, e, et.b2_staticBody);
        this._body = g.createBody(s, [o])
    }
    function M(t, e, n) {
        i.call(this, "Swings", U.zOrder.peg),
        n = q.toRadians(n),
        this.x = t,
        this.y = e,
        this.rotation = n;
        var a = lt.assets.getSprite("swings", "atlasGame");
        a.scale.set(.5, .5),
        a.anchor.set(.5, .83),
        this.addChild(a);
        var o = g.createPolygonShape(60, 11, 0, .5)
          , s = g.createFixtureDef(o, 1, 0, .4, this)
          , r = g.createPolygonShape(11, 30, 0, -20)
          , h = g.createFixtureDef(r, 1, 0, .4, this)
          , l = g.createBodyDef(t, e, et.b2_dynamicBody, !1, !0, n);
        this._body = g.createBody(l, [s, h]);
        var c = lt.physWorld.GetGroundBody()
          , d = new rt;
        d.Initialize(c, this._body, this._body.GetPosition()),
        lt.physWorld.CreateJoint(d),
        this._enableUpdate(),
        this.angleUpdate = !0,
        this.positionUpdate = !0
    }
    function A(t, e, n, a) {
        i.call(this, "Teleport", U.zOrder.teleport),
        a = q.toRadians(a),
        this.x = t,
        this.y = e,
        this.rotation = a,
        this.id = n;
        var o = $.generateFrameNames("teleport_", 1, 20, "", 4)
          , s = lt.assets.getTextures(o, "atlasGame");
        this.btn = new PIXI.extras.AnimatedSprite(s),
        this.btn.anchor.set(.5, .3),
        this.btn.scale.set(.5, .5),
        this.btn.animationSpeed = .5,
        this.btn.loop = !0,
        this.btn.play(),
        this.addChildAt(this.btn, 0);
        var r = g.createPolygonShape(6, 60, -28, 12)
          , h = g.createFixtureDef(r, 1, 0, .2)
          , l = g.createPolygonShape(6, 60, 28, 12)
          , c = g.createFixtureDef(l, 1, 0, .2)
          , d = g.createPolygonShape(60, 6, 0, 39)
          , p = g.createFixtureDef(d, 1, 0, 1)
          , u = g.createPolygonShape(60, 6)
          , m = g.createFixtureDef(u, 1, 0, 1, {
            item: this,
            teleportSensor: !0
        }, !0)
          , y = g.createBodyDef(t, e, et.b2_staticBody, !0, !0, a);
        this._body = g.createBody(y, [h, c, p, m]),
        lt.physics.contactListener.addBeginContactListener(this._onBeginContact, this),
        lt.physics.contactListener.addEndContactListener(this._onEndContact, this),
        i.events.on(i.EVENT_TELEPORTATION, this._teleportation, this),
        this._inUse = !1,
        this.sndTeleport = lt.assets.getSound("sndTeleport")
    }
    function L(t, e, n, a, o) {
        i.call(this, "Tube", U.zOrder.defaultZ),
        a = a || 0,
        o = o || 0,
        n = q.toRadians(n),
        this.x = t,
        this.y = e,
        this.rotation = n;
        var s = q.vectorVelocityRad(n, 100);
        this._force = new Q(s.x,s.y);
        var r = lt.assets.getSprite("tube", "atlasGame");
        r.scale.set(.5, .5),
        r.anchor.set(.5, .5),
        this.addChild(r);
        var h = a + o
          , l = g.createPolygonShape(50, 6, 0, -13.5)
          , c = g.createFixtureDef(l, 1, .1, 1)
          , d = g.createPolygonShape(50, 6, 0, 13.5)
          , p = g.createFixtureDef(d, 1, .1, 1)
          , u = g.createPolygonShape(50 + h, 10, -a / 2 + o / 2)
          , m = g.createFixtureDef(u, 1, .1, 1, {
            item: this,
            tubeSensor: !0
        }, !0)
          , y = g.createBodyDef(t, e, et.b2_staticBody, !1, !0, n);
        this._body = g.createBody(y, [p, m, c]),
        this._enableUpdate()
    }
    function R(t) {
        if (i.call(this, "Tutorial", U.zOrder.defaultZ),
        1 == t) {
            var e = lt.assets.getSprite("tutorial1_1", "atlasUI");
            e.scale.set(.5, .5),
            e.anchor.set(.5, .5),
            e.x = 350,
            e.y = 100,
            this.addChild(e);
            var n = lt.assets.getSprite("tutorial1_2", "atlasUI");
            n.scale.set(.5, .5),
            n.anchor.set(.5, .5),
            n.x = 300,
            n.y = 400,
            this.addChild(n)
        } else if (2 == t) {
            var a = lt.assets.getSprite("tutorial2", "atlasUI");
            a.scale.set(.5, .5),
            a.anchor.set(.5, .5),
            a.x = 350,
            a.y = 100,
            this.addChild(a)
        }
    }
    function G(t, e, n) {
        i.call(this, "WightBall", U.zOrder.peg),
        n = n || 2,
        this.x = t,
        this.y = e;
        var a = lt.assets.getSprite("weightBall", "atlasGame");
        a.scale.set(.5, .5),
        a.anchor.set(.5, .5),
        this.addChild(a);
        var o = g.createCircleShape(40)
          , s = g.createFixtureDef(o, .2, .1, n, this)
          , r = g.createBodyDef(t, e, et.b2_dynamicBody);
        this._body = g.createBody(r, [s]),
        this._enableUpdate(),
        this.angleUpdate = !0,
        this.positionUpdate = !0
    }
    function F() {
        if (lt.menuState)
            throw new Error("MenuState singelton!");
        lt.menuState = this,
        PIXI.Container.call(this),
        lt.pixi.stage.addChildAt(this, 0);
        var t = lt.assets.getSprite("bg");
        t.scale.set(.5, .5),
        this.addChild(t);
        var i = new PIXI.Graphics;
        i.beginFill(0),
        i.alpha = .4,
        i.drawRect(0, 0, lt.gameWidth0, lt.gameHeight0),
        i.endFill(),
        this.addChild(i);
        var n = lt.assets.getSprite("gameName", null, !0);
        n.scale.set(.5, .5),
        n.x = n.width / 2 + 10,
        n.y = n.height / 2 + 10,
        this.addChild(n);
        var a = e.generateButton("btnPlayMenu", "atlasUI", this._onClick, this);
        a.name = "Play",
        a.scale.set(.5, .5),
        a.x = a.width / 2 + 40,
        a.y = n.y + n.height / 2 + a.height / 2 + 30,
        this.addChild(a);
        var o = e.generateButton("btnCreditsMenu", "atlasUI", this._onClick, this);
        o.name = "Credits",
        o.scale.set(.5, .5),
        o.x = o.width / 2 + 40,
        o.y = a.y + a.height / 2 + o.height / 2 + 20,
        this.addChild(o),
        this._onBtnsLevelClick = this._onBtnsLevelClick.bind(this),
        this._levelsDialog = new b(this._onBtnsLevelClick),
        this.addChild(this._levelsDialog),
        this._creditsDialog = new _,
        this.addChild(this._creditsDialog);
        var s = new l("btnMusicOn","btnMusicOff","atlasUI",this._onClick,this);
        s.name = "Music",
        s.scale.set(.5, .5),
        s.x = s.width / 2 + 40,
        s.y = lt.gameHeight0 - s.height / 2 - 7,
        s.on = lt.musicOn,
        this.addChild(s);
        var r = new l("btnSoundOn","btnSoundOff","atlasUI",this._onClick,this);
        r.name = "Sound",
        r.scale.set(.5, .5),
        r.x = s.x + s.width / 2 + r.width / 2 + 5,
        r.y = s.y,
        r.on = lt.soundOn,
        this.addChild(r),
        this.sndButton = lt.assets.getSound("sndButton")
    }
    function U() {
        if (lt.playState)
            throw new Error("MenuState singelton!");
        lt.playState = this,
        PIXI.Container.call(this),
        lt.pixi.stage.addChildAt(this, 0),
        this.aimControl = !lt.device.desktop,
        this.bg = lt.assets.getSprite("bg"),
        this.bg.scale.set(.5, .5),
        this.bg.interactive = !0,
        this.aimControl || this.bg.on("pointerdown", this._onStageClick, this),
        this.addChild(this.bg);
        var t = new PIXI.Graphics;
        t.alpha = .6,
        t.beginFill(0),
        t.drawRect(0, 0, lt.gameWidth0, lt.gameHeight0),
        t.endFill(),
        this.addChild(t),
        this.shotHandler = new p,
        this._onGameLayerChildAdded = this._onGameLayerChildAdded.bind(this),
        this.gameLayer = new PIXI.Container,
        this.gameLayer.onChildrenChange = this._onGameLayerChildAdded,
        this.addChild(this.gameLayer),
        this.ballLayer = new PIXI.Container,
        this.ballLayer.zOrder = U.zOrder.ball,
        this.gameLayer.addChild(this.ballLayer),
        this.uiLayer = new PIXI.Container,
        this.addChild(this.uiLayer),
        this._createUI(),
        this._levelComplete = new v(this._onBtnsClick,this),
        this._levelComplete.hide(),
        this.addChild(this._levelComplete),
        this._isComplete = !1,
        lt.levelMng.create(),
        lt.levelMng.currLevel >= 1 && lt.levelMng.currLevel <= 2 && this.gameLayer.addChild(new R(lt.levelMng.currLevel)),
        this.sndButton = lt.assets.getSound("sndButton"),
        this.aimControl && (this.aim = lt.assets.getSprite("aim"),
        this.aim.scale.set(.5, .5),
        this.aim.anchor.set(.5, .5),
        this.aim.visible = !1,
        this.addChild(this.aim))
    }
    function X() {
        this.currLevel = 1,
        this.lastOpened = lt.storage.get(lt.SAVE_KEY_LAST_OPENED) || 1,
        this.totalLevels = ht.length
    }
    function N() {
        PIXI.Container.call(this),
        lt.pixi.stage.addChild(this);
        var t = new PIXI.Graphics;
        t.beginFill(0),
        t.drawRect(0, 0, lt.gameWidth0, lt.gameHeight0),
        t.endFill(),
        this.addChild(t)
    }
    function H() {
        J(),
        lt.inited ? (lt.pixi.renderer.autoResize = !0,
        lt.pixi.renderer.resize(lt.canvasWidth, lt.canvasHeight),
        lt.pixi.stage.scale.set(lt.scale, lt.scale),
        lt.physics.enabledDD && lt.physics.updateCanvasSize()) : V(),
        lt.resizeHandler && lt.resizeHandler.call(),
        lt.imgRotate && (lt.imgRotate.position.set(lt.canvasWidth / 2, lt.canvasHeight / 2),
        lt.imgRotate.scale.x = lt.imgRotate.scale.y = lt.scale)
    }
    function V() {
        if (lt.device = new Device,
        lt.audioEnabled = lt.device.canPlayAudio("ogg"),
        lt.device.android && !lt.device.chrome) {
            var t = document.createElement("p")
              , e = document.createTextNode("This game doesn't work correctly in default Android browser. Please install Chrome on your device.");
            return t.appendChild(e),
            void document.getElementById("msg").appendChild(t)
        }
        var i = document.getElementById("msg");
        i.parentNode.removeChild(i),
        lt.pixi = new PIXI.Application(lt.canvasWidth,lt.canvasHeight,{
            antialias: !0
        }),
        lt.pixi.renderer.backgroundColor = 0,
        lt.pixi.stage.scale.set(lt.scale, lt.scale),
        document.body.appendChild(lt.pixi.view),
        document.ontouchstart = function(t) {
            t.preventDefault()
        }
        ,
        document.body.addEventListener("selectstart", function(t) {
            t.preventDefault()
        }, !1),
        console.log(lt.pixi.renderer.view.width, lt.pixi.renderer.view.height),
        lt.physics = new g(!1),
        lt.browserEvents = new s,
        lt.browserEvents.on("onResize", H),
        lt.browserEvents.on("onOrientationChange", H),
        lt.storage = new y;
        var a = [];
        a.push(lt.SAVE_KEY_LAST_OPENED, lt.SAVE_KEY_MUSIC, lt.SAVE_KEY_SOUND),
        lt.storage.read(a),
        lt.assets = new o(lt),
        lt.rnd = new x([(Date.now() * Math.random()).toString()]);
        try {
            lt.fps = new FPSMeter(document.body)
        } catch (t) {}
        if (lt.levelMng = new X,
        lt.shutter = new N,
        lt.pixi.stage.addChild(lt.preloader = new n),
        PIXI.loader.baseUrl = "assets",
        PIXI.loader.add("atlasUI", "images/atlasUI.json").add("atlasGame", "images/atlasGame.json").add("splash", "images/splash.png").add("bg", "images/bg.png"),
        lt.audioEnabled) {
            var r = lt.device.iOS ? ".m4a" : ".ogg";
            PIXI.loader.add("sndButton", "audio/buttons" + r).add("sndGate", "audio/gate" + r).add("sndPeg", "audio/peg" + r).add("sndRailStart", "audio/railStart" + r).add("sndRailStop", "audio/railStop" + r).add("sndShot", "audio/shot" + r).add("sndTeleport", "audio/teleport" + r).add("sndTheme", "audio/theme" + r).add("sndTube", "audio/tube" + r).add("sndWin", "audio/win" + r)
        }
        PIXI.loader.on("progress", W).load(z),
        lt.inited = !0
    }
    function W(t, e) {
        if (console.log("loading: " + e.url),
        lt.preloader) {
            var i = Math.round(t.progress);
            lt.preloader.setLoading(i)
        }
    }
    function z() {
        lt.preloader ? (lt.preloader.setLoading(100),
        lt.preloader.loadedCallback(Y)) : j()
    }
    function Y() {
        lt.splash = new a,
        lt.splash.runAfter(j),
        lt.pixi.stage.addChild(lt.splash)
    }
    function j() {
        if (lt.preloader && (lt.preloader.destroy(),
        lt.preloader = null),
        lt.splash && (lt.splash.destroy(),
        lt.splash = null),
        $.atHome(["xzx", "xzx", "localhost"])) {
            lt._checkAudio();
            var t = 1;
            1 == t ? new F : 2 == t && (lt.levelMng.currLevel = 1,
            new U),
            lt.shutter.hide()
        }
    }
    function J() {
        var e = t.innerWidth
          , i = t.innerHeight
          , n = K(lt.gameWidth0 / lt.gameHeight0, e, i);
        lt.gameWidth1 = n.width,
        lt.gameHeight1 = n.height,
        lt.scale = lt.gameWidth1 / lt.gameWidth0,
        lt.gameMaxWidth1 = lt.gameMaxWidth0 * lt.scale,
        lt.gameMaxHeight1 = lt.gameMaxHeight0 * lt.scale,
        lt.canvasWidth = lt.gameMaxWidth1 > e ? e : lt.gameMaxWidth1,
        lt.canvasHeight = lt.gameMaxHeight1 > i ? i : lt.gameMaxHeight1;
        var a = document.body;
        a.style.width = lt.canvasWidth + "px",
        a.style.height = lt.canvasHeight + "px",
        a.style.marginLeft = e / 2 - lt.canvasWidth / 2 + "px",
        a.style.marginTop = i / 2 - lt.canvasHeight / 2 + "px"
    }
    function K(t, e, i) {
        var n = Math.floor(e)
          , a = Math.floor(i);
        return t < 1 && e >= i ? n = Math.floor(i * t) : t >= 1 && e <= i ? a = Math.floor(e / t) : Math.floor(i * t) > e ? a = Math.floor(e / t) : n = Math.floor(i * t),
        {
            width: n,
            height: a
        }
    }
    e.prototype = Object.create(PIXI.Sprite.prototype),
    e.prototype.constructor = e,
    e.prototype.destroy = function() {
        this.disposed || (this.disposed = !0,
        this.parent && this.parent.removeChild(this),
        this.onClick.dispose(),
        this.onClick = null,
        this.onDown.dispose(),
        this.onDown = null,
        this.onUp.dispose(),
        this.onUp = null,
        this.onOut.dispose(),
        this.onOut = null,
        this._label && (this._label.destroy(),
        this._label = null),
        this.mousedown = this.touchstart = null,
        this.mouseup = this.touchend = this.mouseupoutside = this.touchendoutside = null,
        this.mouseover = null,
        this.mouseout = null,
        this.click = null,
        this.interactive = !1,
        this._cacheAnchorY = null)
    }
    ,
    e.prototype.setOpenURL = function(e) {
        this.disposed || this.onClick.add(function(i) {
            t.open(e, "_blank")
        })
    }
    ,
    e.prototype.setIcon = function(t, e, i, n, a) {
        if (!this.disposed) {
            i = i || 0,
            n = n || 0,
            a = a || 1;
            var o;
            if ("string" == typeof t)
                o = this.app.assets.getTexture(t, e);
            else if (t instanceof PIXI.Texture)
                o = t;
            else if (t instanceof PIXI.Sprite)
                this.icon = t;
            else if (null == t && this.icon)
                return this.removeChild(this.icon),
                void (this.icon = null);
            o && (this.icon ? this.icon.setTexture(o) : this.icon = new PIXI.Sprite(o)),
            this.icon.anchor.set(.5, .5),
            this.icon.x = i,
            this.icon.y = n,
            this.icon.scale.set(a, a),
            this.addChild(this.icon)
        }
    }
    ,
    e.prototype.setLabel = function(t, e, i, n) {
        t = t || "",
        i = i || 0,
        n = n || 0,
        this._label || (this._label = new PIXI.Text(t,e),
        this.addChild(this._label)),
        this._label.text = t,
        e && (this._label.style = e),
        this._label.x = this.width / 2 - this._label.width / 2 + i,
        this._label.y = this.height / 2 - this._label.height / 2 + n
    }
    ,
    e.prototype._mouseOver = function(t) {
        this.disposed || (this.isOver = !0,
        this.isDown || (this.tint = this.overTint))
    }
    ,
    e.prototype._mouseOut = function(t) {
        this.disposed || (this.isOver = !1,
        this.onOut.call(t),
        this.isDown || (this.tint = this.upTint))
    }
    ,
    e.prototype._mouseDown = function(t) {
        this.disposed || (this.isDown = !0,
        this.tint = this.downTint,
        this.onDown.call(t))
    }
    ,
    e.prototype._mouseUp = function(t) {
        this.disposed || (this.isDown = !1,
        this.isOver ? this.tint = this.overTint : this.tint = this.upTint,
        this.onUp.call(t))
    }
    ,
    e.prototype._clickTap = function(t) {
        this.disposed || this.onClick.call(t)
    }
    ,
    Object.defineProperty(e.prototype, "enable", {
        get: function() {
            return this.interactive
        },
        set: function(t) {
            this.disposed || (this.interactive = t,
            t === !1 ? (this.isOver = !1,
            this._mouseUp(),
            this.tint = this.disableTint) : this.tint = this.upTint)
        }
    }),
    e.generateButton = function(t, i, n, a) {
        var o = lt.assets.getTexture(t, i);
        return new e(o,n,a)
    }
    ,
    i.prototype = Object.create(PIXI.Container.prototype),
    i.prototype.constructor = i,
    i.prototype.destroy = function() {
        PIXI.Container.prototype.destroy.call(this),
        this._body && lt.physWorld.DestroyBody(this._body),
        this._body = null,
        lt.pixi.ticker.remove(this._update, this)
    }
    ,
    i.prototype.setPosition = function(t, e) {
        if (this._body) {
            var i = this;
            lt.physics.doIt(function() {
                i._body.SetPosition(new Q(t / lt.physScale,e / lt.physScale))
            })
        }
        this.position.set(t, e)
    }
    ,
    i.prototype._enableUpdate = function() {
        lt.pixi.ticker.add(this._update, this)
    }
    ,
    i.prototype._disableUpdate = function() {
        lt.pixi.ticker.remove(this._update, this)
    }
    ,
    i.prototype._update = function() {
        this.angleUpdate && (this.rotation = this._body.GetAngle()),
        this.positionUpdate && (this.x = this._body.GetPosition().x * lt.physScale,
        this.y = this._body.GetPosition().y * lt.physScale)
    }
    ,
    i.events = new EventEmitter,
    i.EVENT_TRIGGER_PRESSED = "TriggerPressed",
    i.EVENT_TELEPORTATION = "Teleportation",
    n.prototype = Object.create(PIXI.Container.prototype),
    n.prototype.constructor = n,
    n.prototype.setLoading = function(t) {
        this._loaded = t
    }
    ,
    n.prototype.loadedCallback = function(t) {
        this._loadedCB = t
    }
    ,
    n.prototype._update = function() {
        this._curr < this._loaded && (this._curr = Math.round(this._curr + 2 * lt.pixi.ticker.deltaTime)),
        this._curr > this._loaded && (this._curr = this._loaded),
        this._txtLoading.text = "Loading " + this._curr + "%",
        100 == this._curr && (lt.pixi.ticker.remove(this._update, this),
        this._loadedCB && setTimeout(this._loadedCB, 500))
    }
    ,
    a.prototype = Object.create(PIXI.Container.prototype),
    a.prototype.constructor = a,
    a.prototype.runAfter = function(t, e) {
        e = void 0 != e ? e : 1e3,
        setTimeout(t, e)
    }
    ,
    o.prototype.constructor = o,
    o.prototype.getTexture = function(t, e) {
        return e ? PIXI.loader.resources[e].textures[t] : PIXI.utils.TextureCache[t]
    }
    ,
    o.prototype.getTextures = function(t, e) {
        var i;
        i = e ? PIXI.loader.resources[e].textures : PIXI.utils.TextureCache;
        for (var n = [], a = 0; a < t.length; a++)
            n.push(i[t[a]]);
        return n
    }
    ,
    o.prototype.getSprite = function(t, e, i) {
        var n = new PIXI.Sprite(this.getTexture(t, e));
        return i && n.anchor.set(.5, .5),
        n
    }
    ,
    o.prototype.getSound = function(t) {
        return 0 == lt.audioEnabled ? null : PIXI.loader.resources[t].sound
    }
    ,
    s.prototype.constructor = s,
    s.prototype._onVisibilityChange = function(t) {
        t.preventDefault(),
        this._event.originalEvent = t,
        this._event.type = document.hidden === !1 ? "onPageShow" : "onPageHide",
        this.emit(this._event)
    }
    ,
    s.prototype._onWebkitVisibilityChange = function(t) {
        t.preventDefault(),
        this._event.originalEvent = t,
        this._event.type = document.webkitHidden === !1 ? "onPageShow" : "onPageHide",
        this.emit(this._event)
    }
    ,
    s.prototype._onPageShow = function(t) {
        t.preventDefault(),
        this._event.originalEvent = t,
        this._event.type = "onPageShow",
        this.emit(this._event)
    }
    ,
    s.prototype._onPageHide = function(t) {
        t.preventDefault(),
        this._event.originalEvent = t,
        this._event.type = "onPageHide",
        this.emit(this._event)
    }
    ,
    s.prototype._onFocus = function(t) {
        t.preventDefault(),
        this._event.originalEvent = t,
        this._event.type = "onFocusGet",
        this.emit(this._event)
    }
    ,
    s.prototype._onBlur = function(t) {
        t.preventDefault(),
        this._event.originalEvent = t,
        this._event.type = "onFocusLost",
        this.emit(this._event)
    }
    ,
    s.prototype._onResize = function(t) {
        t.preventDefault(),
        this._event.originalEvent = t,
        this._event.type = "onResize",
        this.emit(this._event);
        var e = this._getOrientation();
        this.orientation !== e && (this._event.orientation = this.orientation = e,
        this._onOrientationChange(t))
    }
    ,
    s.prototype._onOrientationChange = function(t) {
        t.preventDefault(),
        this._event.originalEvent = t,
        this._event.type = "onOrientationChange",
        this._event.orientation = this.orientation = this._getOrientation(),
        this.emit(this._event)
    }
    ,
    s.prototype._getOrientation = function() {
        return t.innerWidth > t.innerHeight ? "landscape" : "portrait"
    }
    ,
    EventTarget = function() {
        var t = {};
        this.addEventListener = this.on = function(e, i) {
            void 0 === t[e] && (t[e] = []),
            t[e].indexOf(i) === -1 && t[e].push(i)
        }
        ,
        this.dispatchEvent = this.emit = function(e) {
            if (t[e.type] && t[e.type].length)
                for (var i = 0, n = t[e.type].length; i < n; i++)
                    t[e.type][i](e)
        }
        ,
        this.removeEventListener = this.off = function(e, i) {
            var n = t[e].indexOf(i);
            n !== -1 && t[e].splice(n, 1)
        }
        ,
        this.removeAllEventListeners = function(e) {
            var i = t[e];
            i && (i.length = 0)
        }
    }
    ,
    r.prototype = Object.create(PIXI.Sprite.prototype),
    r.prototype.constructor = r,
    r.prototype.destroy = function() {
        this.disposed || (this.disposed = !0,
        this.parent && this.parent.removeChild(this),
        this.onClick.dispose(),
        this.onClick = null,
        this.onDown.dispose(),
        this.onDown = null,
        this.onUp.dispose(),
        this.onUp = null,
        this.onOut.dispose(),
        this.onOut = null,
        this.up = null,
        this.over = null,
        this.down = null,
        this.mousedown = this.touchstart = null,
        this.mouseup = this.touchend = this.mouseupoutside = this.touchendoutside = null,
        this.mouseover = null,
        this.mouseout = null,
        this.click = null,
        this.interactive = !1,
        this._cacheAnchorY = null)
    }
    ,
    r.prototype.setOpenURL = function(e) {
        this.disposed || this.onClick.add(function(i) {
            t.open(e, "_blank")
        })
    }
    ,
    r.prototype._mouseOver = function(t) {
        this.disposed || (this.isOver = !0,
        this.isDown || (this.over ? this.texture = this.over : (this._cacheAnchorY = this.anchor.y,
        this.anchor.y -= .01)))
    }
    ,
    r.prototype._mouseOut = function(t) {
        this.disposed || (this.isOver = !1,
        this.onOut.call(t),
        this.isDown || (this.texture = this.up,
        this._cacheAnchorY && (this.anchor.y = this._cacheAnchorY,
        this._cacheAnchorY = null)))
    }
    ,
    r.prototype._mouseDown = function(t) {
        this.disposed || (this.isDown = !0,
        this.down && (this.texture = this.down),
        this.onDown.call(t))
    }
    ,
    r.prototype._mouseUp = function(t) {
        this.disposed || (this.isDown = !1,
        this.isOver ? this.over ? this.texture = this.over : this.anchor.y = this._cacheAnchorY - .01 : (this.texture = this.up,
        this._cacheAnchorY && (this.anchor.y = this._cacheAnchorY,
        this._cacheAnchorY = null)),
        this.onUp.call(t))
    }
    ,
    r.prototype._clickTap = function(t) {
        this.disposed || this.onClick.call(t)
    }
    ,
    Object.defineProperty(r.prototype, "enable", {
        get: function() {
            return this.interactive
        },
        set: function(t) {
            this.disposed || (this.interactive = t,
            t === !1 && (this.isOver = !1,
            this._mouseUp()))
        }
    }),
    r.generateButton = function(t, e, i, n) {
        var a, o, s;
        a = lt.assets.getTexture(t + "up", e);
        try {
            o = lt.assets.getTexture(t + "over", e)
        } catch (t) {}
        try {
            s = lt.assets.getTexture(t + "down", e)
        } catch (t) {}
        return new r(a,o,s,i,n)
    }
    ,
    h.prototype = Object.create(e.prototype),
    h.prototype.constructor = h,
    h.prototype.setLocked = function(t) {
        this._lock || (this._lock = lt.assets.getSprite("icoLock", "atlasUI"),
        this._lock.x = this.width,
        this._lock.y = this.height,
        this._lock.anchor.set(.5, .5),
        this.addChild(this._lock)),
        this._lock.visible = t,
        this._label.visible = !t,
        this.enable = !t
    }
    ,
    l.prototype = Object.create(PIXI.Container.prototype),
    l.prototype.constructor = h,
    l.prototype._onClick = function(t) {
        t.target == this._on ? this.on = !1 : t.target == this._off && (this.on = !0),
        t.target = this,
        t.isOn = this.on,
        this._callback.call(this._callbackScope, t)
    }
    ,
    Object.defineProperty(l.prototype, "on", {
        get: function() {
            return this._on.visible
        },
        set: function(t) {
            this.disposed || (this._on.visible = t,
            this._off.visible = !t)
        }
    }),
    c.__id = 0,
    c.prototype.add = function(t) {
        var e = this._arr.indexOf(t);
        return e >= 0 ? void (this.throwIfIn && new Error("Item already in collection. [" + this.name + "].")) : void (this._arr[this._arr.length] = t)
    }
    ,
    c.prototype.remove = function(t) {
        var e = this._arr.indexOf(t);
        return e < 0 ? void (this.throwIfNotIn && new Error("There is not item in collection. [" + this.name + "].")) : void this._arr.splice(e, 1)
    }
    ,
    c.prototype.at = function(t) {
        return t < 0 ? (this.throwIfOut && new Error("Index is lower than zero. [" + this.name + "]."),
        t = 0) : t >= this._arr.length && (this.throwIfOut && new Error("Index is higher than total. [" + this.name + "]."),
        t = this._arr.length - 1),
        this._arr[t]
    }
    ,
    c.prototype.first = function() {
        return this._arr[0]
    }
    ,
    c.prototype.last = function() {
        return this._arr[this._arr.length - 1]
    }
    ,
    c.prototype.getByProperty = function(t, e) {
        if (null == t || null == e)
            return null;
        for (var i = this.total(), n = 0; n < i; n++) {
            var a = this._arr[n];
            if (a[t] && a[t] == e)
                return a
        }
        return null
    }
    ,
    c.prototype.has = function(t) {
        return this._arr.indexOf(t) >= 0
    }
    ,
    c.prototype.clear = function() {
        this._arr.splice(0, this._arr.length)
    }
    ,
    c.prototype.total = function() {
        return this._arr.length
    }
    ,
    d.prototype = Object.create(Box2D.Dynamics.b2ContactListener.prototype),
    d.prototype.constructor = d,
    d.prototype.BeginContact = function(t) {
        this._ee.emit(this._eventNameBeginContact, t)
    }
    ,
    d.prototype.EndContact = function(t) {
        this._ee.emit(this._eventNameEndContact, t)
    }
    ,
    d.prototype.addBeginContactListener = function(t, e) {
        this._ee.on(this._eventNameBeginContact, t, e)
    }
    ,
    d.prototype.removeBeginContactListener = function(t, e) {
        this._ee.off(this._eventNameBeginContact, t, e)
    }
    ,
    d.prototype.addEndContactListener = function(t, e) {
        this._ee.on(this._eventNameEndContact, t, e)
    }
    ,
    d.prototype.removeEndContactListener = function(t, e) {
        this._ee.off(this._eventNameEndContact, t, e)
    }
    ,
    Device = function() {
        this.patchAndroidClearRectBug = !1,
        this.desktop = !1,
        this.iOS = !1,
        this.cocoonJS = !1,
        this.ejecta = !1,
        this.android = !1,
        this.chromeOS = !1,
        this.linux = !1,
        this.macOS = !1,
        this.windows = !1,
        this.canvas = !1,
        this.file = !1,
        this.fileSystem = !1,
        this.localStorage = !1,
        this.webGL = !1,
        this.worker = !1,
        this.touch = !1,
        this.mspointer = !1,
        this.css3D = !1,
        this.pointerLock = !1,
        this.typedArray = !1,
        this.vibration = !1,
        this.quirksMode = !1,
        this.arora = !1,
        this.chrome = !1,
        this.epiphany = !1,
        this.firefox = !1,
        this.ie = !1,
        this.ieVersion = 0,
        this.trident = !1,
        this.tridentVersion = 0,
        this.mobileSafari = !1,
        this.midori = !1,
        this.opera = !1,
        this.safari = !1,
        this.webApp = !1,
        this.silk = !1,
        this.audioData = !1,
        this.webAudio = !1,
        this.ogg = !1,
        this.opus = !1,
        this.mp3 = !1,
        this.wav = !1,
        this.m4a = !1,
        this.webm = !1,
        this.iPhone = !1,
        this.iPhone4 = !1,
        this.iPad = !1,
        this.pixelRatio = 0,
        this.littleEndian = !1,
        this._checkAudio(),
        this._checkBrowser(),
        this._checkCSS3D(),
        this._checkDevice(),
        this._checkFeatures(),
        this._checkOS()
    }
    ,
    Device.prototype = {
        _checkOS: function() {
            var t = navigator.userAgent;
            /Android/.test(t) ? this.android = !0 : /CrOS/.test(t) ? this.chromeOS = !0 : /iP[ao]d|iPhone/i.test(t) ? this.iOS = !0 : /Linux/.test(t) ? this.linux = !0 : /Mac OS/.test(t) ? this.macOS = !0 : /Windows/.test(t) && (this.windows = !0),
            (this.windows || this.macOS || this.linux && this.silk === !1) && (this.desktop = !0)
        },
        _checkFeatures: function() {
            this.canvas = !!t.CanvasRenderingContext2D;
            try {
                this.localStorage = !!localStorage.getItem
            } catch (t) {
                this.localStorage = !1
            }
            this.file = !!(t.File && t.FileReader && t.FileList && t.Blob),
            this.fileSystem = !!t.requestFileSystem,
            this.webGL = function() {
                try {
                    var e = document.createElement("canvas");
                    return !!t.WebGLRenderingContext && (e.getContext("webgl") || e.getContext("experimental-webgl"))
                } catch (t) {
                    return !1
                }
            }(),
            null === this.webGL || this.webGL === !1 ? this.webGL = !1 : this.webGL = !0,
            this.worker = !!t.Worker,
            ("ontouchstart"in document.documentElement || t.navigator.maxTouchPoints && t.navigator.maxTouchPoints > 1) && (this.touch = !0),
            (t.navigator.msPointerEnabled || t.navigator.pointerEnabled) && (this.mspointer = !0),
            this.pointerLock = "pointerLockElement"in document || "mozPointerLockElement"in document || "webkitPointerLockElement"in document,
            this.quirksMode = "CSS1Compat" !== document.compatMode
        },
        _checkBrowser: function() {
            var e = navigator.userAgent;
            /Arora/.test(e) ? this.arora = !0 : /Chrome/.test(e) ? this.chrome = !0 : /Epiphany/.test(e) ? this.epiphany = !0 : /Firefox/.test(e) ? this.firefox = !0 : /Mobile Safari/.test(e) ? this.mobileSafari = !0 : /MSIE (\d+\.\d+); /.test(e) ? (this.ie = !0,
            this.ieVersion = parseInt(RegExp.$1, 10)) : /Midori/.test(e) ? this.midori = !0 : /Opera/.test(e) ? this.opera = !0 : /Safari/.test(e) ? this.safari = !0 : /Silk/.test(e) ? this.silk = !0 : /Trident\/(\d+\.\d+); /.test(e) && (this.ie = !0,
            this.trident = !0,
            this.tridentVersion = parseInt(RegExp.$1, 10)),
            navigator.standalone && (this.webApp = !0),
            navigator.isCocoonJS && (this.cocoonJS = !0),
            "undefined" != typeof t.ejecta && (this.ejecta = !0)
        },
        _checkAudio: function() {
            this.audioData = !!t.Audio,
            this.webAudio = !(!t.webkitAudioContext && !t.AudioContext);
            var e = document.createElement("audio")
              , i = !1;
            try {
                (i = !!e.canPlayType) && (e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "") && (this.ogg = !0),
                e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, "") && (this.opus = !0),
                e.canPlayType("audio/mpeg;").replace(/^no$/, "") && (this.mp3 = !0),
                e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "") && (this.wav = !0),
                (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;").replace(/^no$/, "")) && (this.m4a = !0),
                e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "") && (this.webm = !0))
            } catch (t) {}
        },
        _checkDevice: function() {
            this.pixelRatio = t.devicePixelRatio || 1,
            this.iPhone = navigator.userAgent.toLowerCase().indexOf("iphone") != -1,
            this.iPhone4 = 2 == this.pixelRatio && this.iPhone,
            this.iPad = navigator.userAgent.toLowerCase().indexOf("ipad") != -1,
            "undefined" != typeof Int8Array ? (this.littleEndian = new Int8Array(new Int16Array([1]).buffer)[0] > 0,
            this.typedArray = !0) : (this.littleEndian = !1,
            this.typedArray = !1),
            navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate,
            navigator.vibrate && (this.vibration = !0)
        },
        _checkCSS3D: function() {
            var e, i = document.createElement("p"), n = {
                webkitTransform: "-webkit-transform",
                OTransform: "-o-transform",
                msTransform: "-ms-transform",
                MozTransform: "-moz-transform",
                transform: "transform"
            };
            document.body.insertBefore(i, null);
            for (var a in n)
                void 0 !== i.style[a] && (i.style[a] = "translate3d(1px,1px,1px)",
                e = t.getComputedStyle(i).getPropertyValue(n[a]));
            document.body.removeChild(i),
            this.css3D = void 0 !== e && e.length > 0 && "none" !== e
        },
        canPlayAudio: function(t) {
            return !("mp3" != t || !this.mp3) || (!("ogg" != t || !this.ogg && !this.opus) || (!("m4a" != t || !this.m4a) || (!("wav" != t || !this.wav) || !("webm" != t || !this.webm))))
        },
        isConsoleOpen: function() {
            return !(!t.console || !t.console.firebug) || !!t.console && (console.profile(),
            console.profileEnd(),
            console.clear && console.clear(),
            console.profiles.length > 0)
        }
    },
    Device.prototype.constructor = Device,
    p.prototype.dispose = function() {
        this.disposed || (this.disposed = !0,
        this.count = 0,
        this._callbacks = null,
        this._doItAfter = null)
    }
    ,
    p.prototype.has = function(t, e) {
        if (!this.disposed)
            return this._callbacks.indexOf(t) >= 0
    }
    ,
    p.prototype.add = function(t) {
        if (!this.disposed && !this.has(t)) {
            var e = this
              , i = function() {
                e._callbacks[e.count] = t,
                e.count++
            };
            this._blocked ? this._doItAfter[this._doItAfter.length] = i : i()
        }
    }
    ,
    p.prototype.remove = function(t) {
        if (!(this.disposed || this._callbacks.indexOf(t) < 0)) {
            var e = this
              , i = function() {
                var i = e._callbacks.indexOf(t);
                e._callbacks.splice(i, 1),
                e.count--
            };
            this._blocked ? this._doItAfter[this._doItAfter.length] = i : i()
        }
    }
    ,
    p.prototype.call = function() {
        if (!this.disposed && this._callbacks.length > 0) {
            var t;
            for (this._blocked = !0,
            t = this._callbacks.length - 1; t >= 0; t--)
                this._callbacks[t].apply(null, arguments.length > 0 ? Array.prototype.slice.call(arguments) : null);
            if (this._blocked = !1,
            this.disposed)
                return;
            if (this._doItAfter.length > 0) {
                for (t = this._doItAfter.length - 1; t >= 0; t--)
                    this._doItAfter[t]();
                this._doItAfter.splice(0, this._doItAfter.length)
            }
        }
    }
    ,
    u.prototype.update = function() {
        var t = Date.now();
        this.ms = t - this.startTime,
        this.msMin = Math.min(this.msMin, this.ms),
        this.msMax = Math.max(this.msMax, this.ms),
        this.frames++,
        t > this.prevTime + 1e3 && (this.fps = Math.round(1e3 * this.frames / (t - this.prevTime)),
        this.fpsMin = Math.min(this.fpsMin, this.fps),
        this.fpsMax = Math.max(this.fpsMax, this.fps),
        this.prevTime = t,
        this.frames = 0)
    }
    ,
    m.prototype.constructor = m;
    var Z = "";
    m.prototype.collectInteractiveSprite = function(t, e) {
        for (var i = t.children, n = i.length, a = 0; a < n; a++) {
            var o = i[a];
            o.visible === !1 && this.interactInvisible === !1 || (o.interactive ? (console.log(Z, o.name),
            o.__iParent = e,
            this.interactiveItems.push(o),
            o.children.length > 0 && (Z += "\t",
            this.collectInteractiveSprite(o, o))) : (o.__iParent = null,
            o.children.length > 0 && this.collectInteractiveSprite(o, e)))
        }
        Z = ""
    }
    ,
    m.prototype.setTarget = function(t) {
        this.target = t,
        null === this.interactionDOMElement && this.setTargetDomElement(t.view),
        document.body.addEventListener("mouseup", this.onMouseUp, !0)
    }
    ,
    m.prototype.setTargetDomElement = function(e) {
        null !== this.interactionDOMElement && (this.interactionDOMElement.style["-ms-content-zooming"] = "",
        this.interactionDOMElement.style["-ms-touch-action"] = "",
        this.interactionDOMElement.removeEventListener("mousemove", this.onMouseMove, !0),
        this.interactionDOMElement.removeEventListener("mousedown", this.onMouseDown, !0),
        this.interactionDOMElement.removeEventListener("mouseout", this.onMouseOut, !0),
        this.interactionDOMElement.removeEventListener("touchstart", this.onTouchStart, !0),
        this.interactionDOMElement.removeEventListener("touchend", this.onTouchEnd, !0),
        this.interactionDOMElement.removeEventListener("touchmove", this.onTouchMove, !0)),
        t.navigator.msPointerEnabled && (e.style["-ms-content-zooming"] = "none",
        e.style["-ms-touch-action"] = "none"),
        this.interactionDOMElement = e,
        e.addEventListener("mousemove", this.onMouseMove, !0),
        e.addEventListener("mousedown", this.onMouseDown, !0),
        e.addEventListener("mouseout", this.onMouseOut, !0),
        e.addEventListener("touchstart", this.onTouchStart, !0),
        e.addEventListener("touchend", this.onTouchEnd, !0),
        e.addEventListener("touchmove", this.onTouchMove, !0)
    }
    ,
    m.prototype.update = function() {
        if (this.target) {
            var t = Date.now()
              , e = t - this.last;
            if (e = 30 * e / 1e3,
            !(e < 1)) {
                this.last = t;
                var i = 0;
                this.dirty && (this.dirty = !1,
                this.interactiveItems = [],
                this.stage.interactive && this.interactiveItems.push(this.stage),
                this.collectInteractiveSprite(this.stage, this.stage));
                this.interactionDOMElement.style.cursor = "inherit";
                var n = this.interactiveItems.length;
                for (i = n - 1; i >= 0; i--) {
                    var a = this.interactiveItems[i];
                    if (a.mouseover || a.mouseout || a.buttonMode) {
                        if (a.__iParent && a.__iParent.__target)
                            continue;
                        a.__hit = null != a.__target || this.hitTest(a, this.mouse),
                        a.__hit ? (a.buttonMode && (this.interactionDOMElement.style.cursor = a.defaultCursor),
                        a.__iParent && (a.__iParent.__target = a),
                        a.__target ? this.mouse.target = a.__target : this.mouse.target = a,
                        a.__isOver || (a.mouseover && a.mouseover(this.mouse),
                        a.__isOver = !0)) : a.__isOver && (a.mouseout && a.mouseout(this.mouse),
                        a.__isOver = !1)
                    }
                }
                for (i = n - 1; i >= 0; i--)
                    a = this.interactiveItems[i],
                    a.__target = null
            }
        }
    }
    ,
    m.prototype.onMouseMove = function(e) {
        this.mouse.originalEvent = e || t.event;
        var i = this.interactionDOMElement.getBoundingClientRect();
        this.mouse.global.x = (e.clientX - i.left) * (this.target.width / i.width),
        this.mouse.global.y = (e.clientY - i.top) * (this.target.height / i.height);
        for (var n = this.interactiveItems.length, a = 0; a < n; a++) {
            var o = this.interactiveItems[a];
            o.mousemove && o.mousemove(this.mouse)
        }
    }
    ,
    m.prototype.onMouseDown = function(e) {
        this.mouse.originalEvent = e || t.event;
        for (var i = this.interactiveItems.length, n = function(t, e) {
            return t === e || !!t.__target && n(t.__target, e)
        }, a = null, o = 0, s = i - 1; s >= 0; s--) {
            var r = this.interactiveItems[s];
            if (r.mousedown || r.click) {
                if (r != a && a && 0 == n(r, a))
                    continue;
                r.__hit = r.__target || this.hitTest(r, this.mouse),
                o++,
                r.__hit && (a || (a = r),
                r.__iParent && (r.__iParent.__target = r.__target || r),
                this.mouse.target = r.__target || r,
                r.mousedown && r.mousedown(this.mouse),
                r.__isDown = !0)
            } else
                r.__iParent.__target = r.__target
        }
        for (console.log(o, i),
        s = i - 1; s >= 0; s--)
            r = this.interactiveItems[s],
            r.__target = null
    }
    ,
    m.prototype.onMouseOut = function() {
        var t = this.interactiveItems.length;
        this.interactionDOMElement.style.cursor = "inherit";
        for (var e = 0; e < t; e++) {
            var i = this.interactiveItems[e];
            i.__isOver && (this.mouse.target = i,
            i.mouseout && i.mouseout(this.mouse),
            i.__isOver = !1)
        }
    }
    ,
    m.prototype.onMouseUp = function(e) {
        this.mouse.originalEvent = e || t.event;
        for (var i = this.interactiveItems.length, n = !1, a = 0; a < i; a++) {
            var o = this.interactiveItems[a];
            o.__hit = this.hitTest(o, this.mouse),
            o.__hit && !n ? (o.mouseup && o.mouseup(this.mouse),
            o.__isDown && o.click && o.click(this.mouse),
            o.interactiveChildren || (n = !0)) : o.__isDown && o.mouseupoutside && o.mouseupoutside(this.mouse),
            o.__isDown = !1
        }
    }
    ,
    m.prototype.hitTest = function(t, e) {
        var i = e.global;
        if (!t.worldVisible)
            return !1;
        var n = t instanceof PIXI.Sprite
          , a = t.worldTransform
          , o = a[0]
          , s = a[1]
          , r = a[2]
          , h = a[3]
          , l = a[4]
          , c = a[5]
          , d = 1 / (o * l + s * -h)
          , p = l * d * i.x + -s * d * i.y + (c * s - r * l) * d
          , u = o * d * i.y + -h * d * i.x + (-c * o + r * h) * d;
        if (t.hitArea && t.hitArea.contains)
            return !!t.hitArea.contains(p, u) && (e.target = t,
            !0);
        if (n) {
            var m, y = t.texture.frame.width, g = t.texture.frame.height, f = -y * t.anchor.x;
            if (p > f && p < f + y && (m = -g * t.anchor.y,
            u > m && u < m + g))
                return e.target = t,
                !0
        }
        for (var x = t.children.length, _ = 0; _ < x; _++) {
            var v = t.children[_]
              , b = this.hitTest(v, e);
            if (b)
                return e.target = v,
                e.currentTarget = t,
                !0
        }
        return !1
    }
    ,
    m.prototype.onTouchMove = function(e) {
        var i, n = this.interactionDOMElement.getBoundingClientRect(), a = e.changedTouches, o = 0;
        for (o = 0; o < a.length; o++) {
            var s = a[o];
            i = this.touchs[s.identifier],
            i.originalEvent = e || t.event,
            i.global.x = (s.clientX - n.left) * (this.target.width / n.width),
            i.global.y = (s.clientY - n.top) * (this.target.height / n.height),
            navigator.isCocoonJS && (i.global.x = s.clientX,
            i.global.y = s.clientY)
        }
        var r = this.interactiveItems.length;
        for (o = 0; o < r; o++) {
            var h = this.interactiveItems[o];
            h.touchmove && h.touchmove(i)
        }
    }
    ,
    m.prototype.onTouchStart = function(e) {
        for (var i = this.interactionDOMElement.getBoundingClientRect(), n = e.changedTouches, a = 0; a < n.length; a++) {
            var o = n[a]
              , s = this.pool.pop();
            s || (s = new PIXI.InteractionData),
            s.originalEvent = e || t.event,
            this.touchs[o.identifier] = s,
            s.global.x = (o.clientX - i.left) * (this.target.width / i.width),
            s.global.y = (o.clientY - i.top) * (this.target.height / i.height),
            navigator.isCocoonJS && (s.global.x = o.clientX,
            s.global.y = o.clientY);
            for (var r = this.interactiveItems.length, h = 0; h < r; h++) {
                var l = this.interactiveItems[h];
                if ((l.touchstart || l.tap) && (l.__hit = this.hitTest(l, s),
                l.__hit && (l.touchstart && l.touchstart(s),
                l.__isDown = !0,
                l.__touchData = s,
                !l.interactiveChildren)))
                    break
            }
        }
    }
    ,
    m.prototype.onTouchEnd = function(e) {
        for (var i = this.interactionDOMElement.getBoundingClientRect(), n = e.changedTouches, a = 0; a < n.length; a++) {
            var o = n[a]
              , s = this.touchs[o.identifier]
              , r = !1;
            s.global.x = (o.clientX - i.left) * (this.target.width / i.width),
            s.global.y = (o.clientY - i.top) * (this.target.height / i.height),
            navigator.isCocoonJS && (s.global.x = o.clientX,
            s.global.y = o.clientY);
            for (var h = this.interactiveItems.length, l = 0; l < h; l++) {
                var c = this.interactiveItems[l]
                  , d = c.__touchData;
                c.__hit = this.hitTest(c, s),
                d === s && (s.originalEvent = e || t.event,
                (c.touchend || c.tap) && (c.__hit && !r ? (c.touchend && c.touchend(s),
                c.__isDown && c.tap && c.tap(s),
                c.interactiveChildren || (r = !0)) : c.__isDown && c.touchendoutside && c.touchendoutside(s),
                c.__isDown = !1),
                c.__touchData = null)
            }
            this.pool.push(s),
            this.touchs[o.identifier] = null
        }
    }
    ,
    m.InteractionData = function() {
        this.global = new PIXI.Point,
        this.local = new PIXI.Point,
        this.currentTarget = null,
        this.target = null,
        this.originalEvent = null
    }
    ,
    m.InteractionData.prototype.getLocalPosition = function(t) {
        var e = t.worldTransform
          , i = this.global
          , n = e[0]
          , a = e[1]
          , o = e[2]
          , s = e[3]
          , r = e[4]
          , h = e[5]
          , l = 1 / (n * r + a * -s);
        return new PIXI.Point(r * l * i.x + -a * l * i.y + (h * a - o * r) * l,n * l * i.y + -s * l * i.x + (-h * n + o * s) * l)
    }
    ,
    m.InteractionData.prototype.constructor = m.InteractionData;
    var q = {};
    q.distance1 = function(t, e, i, n) {
        var a = i - t
          , o = n - e;
        return Math.sqrt(a * a + o * o)
    }
    ,
    q.distance2 = function(t, e) {
        var i = e.x - t.x
          , n = e.y - t.y;
        return Math.sqrt(i * i + n * n)
    }
    ,
    q.angleRad1 = function(t, e, i, n) {
        return Math.atan2(n - e, i - t)
    }
    ,
    q.angleDeg1 = function(t, e, i, n) {
        return Math.atan2(n - e, i - t) / Math.PI * 180
    }
    ,
    q.angleRad2 = function(t, e) {
        return Math.atan2(e.y - t.y, e.x - t.x)
    }
    ,
    q.angleDeg2 = function(t, e) {
        return Math.atan2(e.y - t.y, e.x - t.x) / Math.PI * 180
    }
    ,
    q.vectorVelocityRad = function(t, e) {
        return {
            x: Math.cos(t) * e,
            y: Math.sin(t) * e
        }
    }
    ,
    q.vectorVelocityDeg = function(t, e) {
        var i = t * Math.PI / 180;
        return {
            x: Math.cos(i) * e,
            y: Math.sin(i) * e
        }
    }
    ,
    q.equal = function(t, e, i) {
        return i = i || 1e-5,
        Math.abs(t - e) <= i
    }
    ,
    q.toDegrees = function(t) {
        return 180 * t / Math.PI
    }
    ,
    q.toRadians = function(t) {
        return t * Math.PI / 180
    }
    ,
    q.normAngleDeg = function(t, e) {
        return t %= 360,
        t = (t + 360) % 360,
        e && t > 180 && (t -= 360),
        t
    }
    ,
    q.pointLength = function(t) {
        return Math.sqrt(t.x * t.x + t.y * t.y)
    }
    ,
    q.pointNormalize = function(t, e) {
        var i = q.pointLength(t);
        return 0 == i ? t : (t.x /= i,
        t.y /= i,
        e && (t.x *= e,
        t.y *= e),
        t)
    }
    ,
    q.intersection = function(t, e, i, n, a, o, s, r, h) {
        if (t === a && e === o)
            return null != h && (h.x = t,
            h.y = e),
            !0;
        if (t == s && e == r)
            return null != h && (h.x = t,
            h.y = e),
            !0;
        if (i == a && n == o)
            return null != h && (h.x = i,
            h.y = n),
            !0;
        if (i == s && n == r)
            return null != h && (h.x = i,
            h.y = n),
            !0;
        var l = i - t
          , c = n - e
          , d = s - a
          , p = r - o
          , u = -c
          , m = l
          , y = -(u * t + m * e)
          , g = -p
          , x = d
          , _ = -(g * a + x * o)
          , v = g * t + x * e + _
          , b = g * i + x * n + _
          , w = u * a + m * o + y
          , P = u * s + m * r + y;
        if (v * b >= 0 || w * P >= 0)
            return !1;
        var S = v / (v - b);
        l *= S,
        c *= S;
        return null != h && (h.x = f.x,
        h.y = f.y),
        !0
    }
    ,
    q.intersection = function(t, e, i, n, a) {
        if (t.x == i.x && t.y == i.y)
            return null != a && a.set(t),
            !0;
        if (t.x == n.x && t.y == n.y)
            return null != a && a.set(t),
            !0;
        if (e.x == i.x && e.y == i.y)
            return null != a && a.set(e),
            !0;
        if (e.x == n.x && e.y == n.y)
            return null != a && a.set(e),
            !0;
        var o = e.sub(t)
          , s = n.sub(i)
          , r = -o.y
          , h = o.x
          , l = -(r * t.x + h * t.y)
          , c = -s.y
          , d = s.x
          , p = -(c * i.x + d * i.y)
          , u = c * t.x + d * t.y + p
          , m = c * e.x + d * e.y + p
          , y = r * i.x + h * i.y + l
          , g = r * n.x + h * n.y + l;
        if (u * m >= 0 || y * g >= 0)
            return !1;
        var f = u / (u - m);
        o.x *= f,
        o.y *= f;
        var x = t.add(o);
        return null != a && (a.x = x.x),
        null != a && (a.y = x.y),
        !0
    }
    ,
    y.prototype.get = function(t) {
        return this._storage[t]
    }
    ,
    y.prototype.set = function(t, e) {
        this._storage[t] = e.toString(),
        this.localStorageEnable && localStorage.setItem(t, e.toString())
    }
    ,
    y.prototype.read = function(t) {
        if (this.localStorageEnable)
            for (var e = t.length, i = 0; i < e; i++) {
                var n = t[i]
                  , a = localStorage.getItem(n);
                a && (this._storage[n] = a)
            }
    }
    ,
    y.prototype.clear = function() {
        this._storage = {},
        localStorage.clear()
    }
    ;
    var $ = {};
    $.generateFrameNames = function(t, e, i, n, a) {
        "undefined" == typeof n && (n = "");
        var o, s = [], r = "";
        if (e < i)
            for (o = e; o <= i; o++)
                r = "number" == typeof a ? $.pad(o.toString(), a, "0", 1) : o.toString(),
                r = t + r + n,
                s.push(r);
        else
            for (o = e; o >= i; o--)
                r = "number" == typeof a ? Phaser.Utils.pad(o.toString(), a, "0", 1) : o.toString(),
                r = t + r + n,
                s.push(r);
        return s
    }
    ,
    $.pad = function(t, e, i, n) {
        "undefined" == typeof e && (e = 0),
        "undefined" == typeof i && (i = " "),
        "undefined" == typeof n && (n = 3);
        var a = 0;
        if (e + 1 >= t.length)
            switch (n) {
            case 1:
                t = Array(e + 1 - t.length).join(i) + t;
                break;
            case 3:
                var o = Math.ceil((a = e - t.length) / 2)
                  , s = a - o;
                t = Array(s + 1).join(i) + t + Array(o + 1).join(i);
                break;
            default:
                t += Array(e + 1 - t.length).join(i)
            }
        return t
    }
    ,
    $.atHome = function(e) {
        var i = t.location.hostname;
        return e.indexOf(i) == -1
    }
    ;
    var Q = Box2D.Common.Math.b2Vec2
      , tt = (Box2D.Collision.b2AABB,
    Box2D.Dynamics.b2BodyDef)
      , et = Box2D.Dynamics.b2Body
      , it = Box2D.Dynamics.b2FixtureDef
      , nt = (Box2D.Dynamics.b2Fixture,
    Box2D.Dynamics.b2World)
      , at = (Box2D.Collision.Shapes.b2MassData,
    Box2D.Collision.Shapes.b2PolygonShape)
      , ot = Box2D.Collision.Shapes.b2CircleShape
      , st = Box2D.Dynamics.b2DebugDraw
      , rt = (Box2D.Dynamics.Joints.b2MouseJointDef,
    Box2D.Dynamics.Joints.b2RevoluteJointDef);
    g.prototype.constructor = g,
    g.prototype.enableDebugDraw = function() {
        this.enabledDD = !0,
        this._canvas = document.createElement("canvas"),
        this._canvas.id = "PhysDebugDraw",
        this._canvas.width = lt.pixi.renderer.width,
        this._canvas.height = lt.pixi.renderer.height,
        this._canvas.style.zIndex = 1,
        this._canvas.style.left = 0,
        this._canvas.style.position = "absolute",
        this._canvas.style.pointerEvents = "none",
        document.body.appendChild(this._canvas),
        this._context = this._canvas.getContext("2d"),
        this._context.scale(lt.scale, lt.scale);
        var t = new st;
        t.SetSprite(this._context),
        t.SetDrawScale(lt.physScale),
        t.SetFillAlpha(.3),
        t.SetLineThickness(1),
        t.SetFlags(st.e_shapeBit | st.e_jointBit),
        this.world.SetDebugDraw(t)
    }
    ,
    g.prototype.updateCanvasSize = function() {
        this.enabledDD && (this._canvas.width = lt.pixi.renderer.width,
        this._canvas.height = lt.pixi.renderer.height,
        this._canvas.style.width = lt.pixi.view.style.width,
        this._canvas.style.height = lt.pixi.view.style.height,
        this._context.scale(lt.scale, lt.scale))
    }
    ,
    g.prototype.doIt = function(t) {
        return this.world.IsLocked() ? (this._doIt.push(t),
        !1) : (t.call(),
        !0)
    }
    ,
    g.prototype.doItAll = function() {
        for (var t = this._doIt.length, e = 0; e < t; e++) {
            var i = this._doIt[e];
            i.call()
        }
        this.clearDoIt()
    }
    ,
    g.prototype.clearDoIt = function() {
        this._doIt = []
    }
    ,
    g.prototype._update = function() {
        this.world.Step(1 / 60, 10, 10),
        this.enabledDD && this.world.DrawDebugData(),
        this.world.ClearForces(),
        this._doIt.length > 0 && this.doItAll()
    }
    ,
    g.prototype._createGround = function() {
        var t = new it;
        t.density = 1,
        t.friction = .5,
        t.restitution = .2;
        var e = new tt;
        e.type = et.b2_staticBody,
        t.shape = new at,
        t.shape.SetAsBox((lt.gameWidth0 / 2 - 4) / lt.physScale, 10 / lt.physScale),
        e.position.Set(lt.gameWidth0 / 2 / lt.physScale, lt.gameHeight0 / lt.physScale),
        this.world.CreateBody(e).CreateFixture(t)
    }
    ,
    g.createCircleShape = function(t, e) {
        var i = new ot(t / lt.physScale);
        return e && i.SetLocalPosition(e),
        i
    }
    ,
    g.createPolygonShape = function(t, e, i, n, a) {
        i = i || 0,
        n = n || 0,
        a = a || 0;
        var o = new at;
        return 0 == i && 0 == n && 0 == a ? o.SetAsBox(t / 2 / lt.physScale, e / 2 / lt.physScale) : o.SetAsOrientedBox(t / 2 / lt.physScale, e / 2 / lt.physScale, new Q(i / lt.physScale,n / lt.physScale), a),
        o
    }
    ,
    g.createFixtureDef = function(t, e, i, n, a, o, s) {
        var r = new it;
        return a = a || null,
        o = o || !1,
        s = s || null,
        r.shape = t,
        r.friction = e,
        r.restitution = i,
        r.density = n,
        r.isSensor = o,
        r.userData = a,
        s && (r.filter = s),
        r
    }
    ,
    g.createBodyDef = function(t, e, i, n, a, o, s) {
        var r = new tt;
        return n = n || !1,
        a = a || !0,
        o = o || 0,
        s = s || !1,
        r.type = i,
        r.position.Set(t / lt.physScale, e / lt.physScale),
        r.angle = o,
        r.active = a,
        r.bullet = s,
        r.fixedRotation = n,
        r
    }
    ,
    g.createBody = function(t, e) {
        var i = lt.physWorld.CreateBody(t);
        if (e)
            for (var n = e.length, a = 0; a < n; a++)
                i.CreateFixture(e[a]);
        return i
    }
    ,
    g.hasContactPairOfProperties = function(t, e, i) {
        var n = t.GetFixtureA()
          , a = t.GetFixtureB();
        if (null == n || null == a)
            return !1;
        var o = n.GetUserData()
          , s = a.GetUserData();
        if (null == o || null == s)
            return !1;
        var r = o.hasOwnProperty(e) && s.hasOwnProperty(i)
          , h = o.hasOwnProperty(i) && s.hasOwnProperty(e);
        return r || h
    }
    ,
    g.getAnotherOfContact = function(t, e) {
        var i = t.GetFixtureA()
          , n = t.GetFixtureB();
        if (null == i && null == n)
            return null;
        var a = i ? i.GetUserData() : null
          , o = n ? n.GetUserData() : null;
        if (null == a && null == o)
            return null;
        var s = null != a ? a.item : null
          , r = null != o ? o.item : null;
        return null == s && null == r ? null : s == e ? r : r == e ? s : null
    }
    ,
    x.prototype = {
        rnd: function() {
            var t = 2091639 * this.s0 + 2.3283064365386963e-10 * this.c;
            return this.c = 0 | t,
            this.s0 = this.s1,
            this.s1 = this.s2,
            this.s2 = t - this.c,
            this.s2
        },
        sow: function(t) {
            "undefined" == typeof t && (t = []),
            this.s0 = this.hash(" "),
            this.s1 = this.hash(this.s0),
            this.s2 = this.hash(this.s1),
            this.c = 1;
            for (var e, i = 0; e = t[i++]; )
                this.s0 -= this.hash(e),
                this.s0 += ~~(this.s0 < 0),
                this.s1 -= this.hash(e),
                this.s1 += ~~(this.s1 < 0),
                this.s2 -= this.hash(e),
                this.s2 += ~~(this.s2 < 0)
        },
        hash: function(t) {
            var e, i, n;
            for (n = 4022871197,
            t = t.toString(),
            i = 0; i < t.length; i++)
                n += t.charCodeAt(i),
                e = .02519603282416938 * n,
                n = e >>> 0,
                e -= n,
                e *= n,
                n = e >>> 0,
                e -= n,
                n += 4294967296 * e;
            return 2.3283064365386963e-10 * (n >>> 0)
        },
        integer: function() {
            return 4294967296 * this.rnd.apply(this)
        },
        frac: function() {
            return this.rnd.apply(this) + 1.1102230246251565e-16 * (2097152 * this.rnd.apply(this) | 0)
        },
        real: function() {
            return this.integer() + this.frac()
        },
        integerInRange: function(t, e) {
            return Math.round(this.realInRange(t, e))
        },
        realInRange: function(t, e) {
            return this.frac() * (e - t) + t
        },
        normal: function() {
            return 1 - 2 * this.frac()
        },
        uuid: function() {
            var t = ""
              , e = "";
            for (e = t = ""; t++ < 36; e += ~t % 5 | 3 * t & 4 ? (15 ^ t ? 8 ^ this.frac() * (20 ^ t ? 16 : 4) : 4).toString(16) : "-")
                ;
            return e
        },
        pick: function(t) {
            return t[this.integerInRange(0, t.length - 1)]
        },
        weightedPick: function(t) {
            return t[~~(Math.pow(this.frac(), 2) * t.length)]
        },
        timestamp: function(t, e) {
            return this.realInRange(t || 9466848e5, e || 1577862e6)
        }
    },
    _.prototype = Object.create(PIXI.Container.prototype),
    _.prototype.constructor = _,
    _.prototype.show = function() {
        this.shown = !0,
        TweenMax.to(this, .5, {
            x: this.showX,
            y: this.showY,
            ease: Expo.easeOut
        })
    }
    ,
    _.prototype.hide = function() {
        this.shown = !1,
        TweenMax.to(this, .5, {
            x: this.hideX,
            y: this.hideY,
            ease: Expo.easeOut
        })
    }
    ,
    v.prototype = Object.create(PIXI.Container.prototype),
    v.prototype.constructor = v,
    v.prototype.show = function(t) {
        t = t || 0;
        var e = .4;
        this.visible = !0;
        var i = this;
        TweenMax.to(this, e, {
            delay: t,
            alpha: 1
        }),
        TweenMax.to(this._text.scale, 2 * e, {
            delay: t += .1,
            x: 1,
            y: 1,
            ease: Elastic.easeOut,
            onStart: function() {
                lt.soundOn && i.sndWin.play()
            }
        });
        var n = Quad.easeOut
          , a = this._btnMenu.xIn
          , o = this._btnMenu.yIn;
        TweenMax.to(this._btnMenu, e, {
            delay: t += .1,
            x: a,
            y: o,
            ease: n
        }),
        a = this._btnRestart.xIn,
        o = this._btnRestart.yIn,
        TweenMax.to(this._btnRestart, e, {
            delay: t += .05,
            x: a,
            y: o,
            ease: n
        }),
        this._btnNext.enable = lt.levelMng.currLevel != lt.levelMng.totalLevels,
        a = this._btnNext.xIn,
        o = this._btnNext.yIn,
        TweenMax.to(this._btnNext, e, {
            delay: t += .05,
            x: a,
            y: o,
            ease: n
        })
    }
    ,
    v.prototype.hide = function() {
        this.visible = !1,
        this.alpha = 0,
        this._btnRestart.x = this._btnRestart.xOut,
        this._btnRestart.y = this._btnRestart.yOut,
        this._btnMenu.x = this._btnMenu.xOut,
        this._btnMenu.y = this._btnMenu.yOut,
        this._btnNext.x = this._btnNext.xOut,
        this._btnNext.y = this._btnNext.yOut,
        this._text.scale.set(0, 0)
    }
    ,
    b.prototype = Object.create(PIXI.Container.prototype),
    b.prototype.constructor = b,
    b.prototype.show = function() {
        this.shown = !0,
        TweenMax.to(this, .5, {
            x: this.showX,
            y: this.showY,
            ease: Expo.easeOut
        })
    }
    ,
    b.prototype.hide = function() {
        this.shown = !1,
        TweenMax.to(this, .5, {
            x: this.hideX,
            y: this.hideY,
            ease: Expo.easeOut
        })
    }
    ,
    b.prototype._onClick = function(t) {
        this._buttonsHandler(t.target.num)
    }
    ,
    b.prototype.refresh = function() {
        for (var t = this._buttons.length, e = 0; e < t; e++) {
            var i = this._buttons[e];
            i.setLocked(e + 1 > lt.levelMng.lastOpened)
        }
    }
    ,
    w.prototype = Object.create(i.prototype),
    w.prototype.constructor = w,
    w.prototype.destroy = function() {
        i.prototype.destroy.call(this),
        w._balls.remove(this)
    }
    ,
    w.prototype.setVelocity = function(t) {
        var e = new Q(t.x / lt.physScale,t.y / lt.physScale);
        this._body.SetLinearVelocity(e),
        this._body.SetAngularVelocity(e.x / 10 + .4),
        this._body.SetAwake(!0)
    }
    ,
    w.prototype._update = function() {
        i.prototype._update.call(this),
        this.y > lt.gameHeight0 + 50 && this.destroy()
    }
    ,
    w._balls = new c("Balls"),
    w._maxBalls = 25,
    w.create = function(t, e, i) {
        if (w._balls.total() >= w._maxBalls) {
            var n = w._balls.first();
            n.destroy(),
            w._balls.remove(n)
        }
        var a = new w(t,e);
        return i.addChild(a),
        w._balls.add(a),
        a
    }
    ,
    P.prototype = Object.create(i.prototype),
    P.prototype.constructor = P,
    P.prototype.destroy = function() {
        i.prototype.destroy.call(this),
        lt.physics.contactListener.removeBeginContactListener(this._onBeginContact, this)
    }
    ,
    P.prototype._onBeginContact = function(t) {
        var e = g.getAnotherOfContact(t, this);
        e instanceof w && this._ballInTheNet()
    }
    ,
    P.prototype._ballInTheNet = function() {
        lt.playState.complete()
    }
    ,
    S.prototype = Object.create(i.prototype),
    S.prototype.constructor = S,
    S.prototype.destroy = function() {
        i.prototype.destroy.call(this),
        lt.physics.contactListener.removeBeginContactListener(this._onBeginContact, this),
        i.events.off(i.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this),
        this.sndStart && this.sndStart.stop(),
        this._rails.destroy(!0)
    }
    ,
    S.prototype._createRails = function() {
        this._rails = new PIXI.Container,
        this._rails.x = this.x,
        this._rails.y = this.y,
        this._rails.zOrder = U.zOrder.rail,
        lt.playState.gameLayer.addChild(this._rails),
        this._endX = this.x,
        this._endY = this.y;
        var t;
        "v" == this._orienation ? (this._endY = this._end,
        this._rails.y = this.y - 22) : (this._endX = this._end,
        this._rails.y = this.y - 22),
        t = q.distance1(this.x, this.y, this._endX, this._endY);
        var e = lt.assets.getSprite("rail", "atlasGame").width / 2
          , i = Math.ceil(t / e);
        console.log(i);
        for (var n = 0; n < i; n++) {
            var a = lt.assets.getSprite("rail", "atlasGame");
            a.scale.set(.5, .5),
            a.anchor.set(0, .5),
            a.x = (a.width - 1) * n,
            this._rails.addChild(a)
        }
        "v" == this._orienation ? (this._rails.rotation = q.toRadians(90),
        this.y > this._endY && (this._rails.y -= t)) : this.x > this._endX && (this._rails.x -= t)
    }
    ,
    S.prototype._onBeginContact = function(t) {
        var e = g.getAnotherOfContact(t, this);
        e instanceof w && this._ballInTheNet()
    }
    ,
    S.prototype._ballInTheNet = function() {
        lt.playState.complete()
    }
    ,
    S.prototype._onTriggerEvent = function(t) {
        var e = t.id;
        this.id == e && this._move()
    }
    ,
    S.prototype._move = function() {
        this._isMove || (this._isMove = !0,
        this._defDirection(),
        this._enableUpdate(),
        this.angleUpdate = !0,
        this.positionUpdate = !0,
        lt.soundOn && this.sndStart.play())
    }
    ,
    S.prototype._defDirection = function() {
        this._isUsed || (this._isUsed = !0,
        this._speed = 2,
        this._vel = new Q,
        this._stopVal = 0,
        "v" == this._orienation ? (this._vel.y = this._speed * (this.y > this._endY ? -1 : 1),
        this._stopVal = this._endY,
        this.y > this._endY && (this._rails.y -= length)) : (this._vel.x = this._speed * (this.x > this._endX ? -1 : 1),
        this._stopVal = this._endX),
        this._body.SetAwake(!0),
        this._body.GetLinearVelocity().Set(this._vel.x, this._vel.y))
    }
    ,
    S.prototype._update = function() {
        i.prototype._update.call(this),
        this._isMove && ("v" == this._orienation ? q.equal(this.y, this._stopVal, 3) && this._stop() : q.equal(this.x, this._stopVal, 3) && this._stop());
    }
    ,
    S.prototype._stop = function() {
        this._isMove = !1,
        this._body.GetLinearVelocity().SetZero(),
        lt.soundOn && (this.sndStart.stop(),
        this.sndStop.play())
    }
    ,
    I.prototype = Object.create(i.prototype),
    I.prototype.constructor = I,
    I.prototype.destroy = function() {
        i.prototype.destroy.call(this),
        lt.playState.bg.off("pointerdown", this._pointerDown, this),
        lt.playState.bg.off("pointerup", this._pointerUp, this)
    }
    ,
    I.prototype._shot = function(t) {
        this._cannon.playing || (this._shoted = !1,
        this._cannon.gotoAndStop(0),
        this._cannon.play(),
        lt.soundOn && this.sndShot.play())
    }
    ,
    I.prototype._pointerDown = function(t) {
        this._isAllowMove = !0,
        lt.playState.aim.visible = !0
    }
    ,
    I.prototype._pointerUp = function(t) {
        this._isAllowMove = !1,
        lt.playState.blinkBtnFire()
    }
    ,
    I.prototype._frameChanged = function(t) {
        if (t >= 8 && !this._shoted) {
            this._shoted = !0,
            this._cannon.toLocal(this._ballSpawnPoint, this, this._helperPoint),
            this._helperPoint.x *= -1;
            var e = 0
              , i = 0;
            if (lt.playState.aimControl)
                e = lt.playState.aim.position.x,
                i = lt.playState.aim.position.y;
            else {
                var n = lt.pixi.renderer.plugins.interaction
                  , a = n.pointer.global;
                e = a.x / lt.scale,
                i = a.y / lt.scale
            }
            var o = this._helperPoint.x + this.x
              , s = this._helperPoint.y + this.y
              , r = q.distance1(o, s, e, i) / this.shotScale;
            r > 1 && (r = 1);
            var h = r * (this.maxPower - this.minPower) + this.minPower
              , l = {
                x: this.x - o,
                y: this.y - s
            };
            l = q.pointNormalize(l, -h);
            var c = w.create(o, s, lt.playState.ballLayer);
            c.setVelocity(l)
        }
    }
    ,
    I.prototype._shotComplete = function(t) {
        this._cannon.gotoAndStop(0)
    }
    ,
    I.prototype._update = function(t) {
        if (this._isAllowMove) {
            var e = lt.pixi.renderer.plugins.interaction
              , i = e.pointer.global;
            i = {
                x: i.x / lt.scale,
                y: i.y / lt.scale
            },
            lt.playState.aimControl && (i.y -= 50,
            lt.playState.aim.position.set(i.x, i.y)),
            this._helperPoint.set(this.x, this.y);
            var n = q.angleDeg2(i, this._helperPoint) - 90;
            n = q.normAngleDeg(n, !0),
            n < this.lowerAngle ? n = this.lowerAngle : n > this.upperAngle && (n = this.upperAngle),
            this._cannon.rotation = q.toRadians(n)
        }
    }
    ,
    D.prototype = Object.create(i.prototype),
    D.prototype.constructor = D,
    C.prototype = Object.create(i.prototype),
    C.prototype.constructor = C,
    C.prototype.destroy = function() {
        i.prototype.destroy.call(this),
        i.events.off(i.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this)
    }
    ,
    C.prototype._onTriggerEvent = function(t) {
        var e = t.id;
        if (this.id == e && !this.opened) {
            this.opened = !0;
            var i = 2;
            "left" == this.direction ? (this._body.SetAwake(!0),
            this._body.SetAngularVelocity(i * (this.inversed ? -1 : 1))) : "right" == this.direction && (this._body.SetAwake(!0),
            this._body.SetAngularVelocity(-i * (this.inversed ? -1 : 1))),
            this._enableUpdate(),
            this.angleUpdate = !0,
            this.positionUpdate = !0,
            lt.soundOn && this.sndGate.play()
        }
    }
    ,
    C.prototype._stop = function() {
        this._body.SetAngularVelocity(0),
        this._disableUpdate(),
        this.angleUpdate = !1,
        this.positionUpdate = !1
    }
    ,
    C.prototype._update = function() {
        i.prototype._update.call(this),
        this.inversed ? ("left" == this.direction && this._body.GetAngle() <= this.openAngle || "right" == this.direction && this._body.GetAngle() >= -this.openAngle) && this._stop() : ("left" == this.direction && this._body.GetAngle() >= this.openAngle || "right" == this.direction && this._body.GetAngle() <= -this.openAngle) && this._stop()
    }
    ,
    T.prototype = Object.create(i.prototype),
    T.prototype.constructor = T,
    O.prototype = Object.create(i.prototype),
    O.prototype.constructor = O,
    O.prototype.destroy = function() {
        i.prototype.destroy.call(this),
        lt.physics.contactListener.removeBeginContactListener(this._onBeginContact, this)
    }
    ,
    O.prototype._onBeginContact = function(t) {
        var e = g.getAnotherOfContact(t, this);
        e instanceof w && this.unhook()
    }
    ,
    O.prototype._update = function() {
        i.prototype._update.call(this),
        this.y > lt.gameHeight0 + 50 && this.destroy()
    }
    ,
    O.prototype.unhook = function() {
        lt.physics.contactListener.removeBeginContactListener(this._onBeginContact, this),
        this._body.SetType(et.b2_dynamicBody),
        this._body.SetAwake(!0),
        this._enableUpdate(),
        this.angleUpdate = !0,
        this.positionUpdate = !0,
        lt.soundOn && this.sndPeg.play()
    }
    ,
    B.prototype = Object.create(i.prototype),
    B.prototype.constructor = B,
    E.prototype = Object.create(i.prototype),
    E.prototype.constructor = E,
    E.prototype.destroy = function() {
        i.prototype.destroy.call(this),
        lt.physics.contactListener.removeBeginContactListener(this._onBeginContact, this)
    }
    ,
    E.prototype._onBeginContact = function(t) {
        var e = g.getAnotherOfContact(t, this);
        (e instanceof w || e instanceof D || e instanceof T) && (this.btn.play(),
        i.events.emit(i.EVENT_TRIGGER_PRESSED, {
            id: this.id
        }))
    }
    ,
    k.prototype = Object.create(i.prototype),
    k.prototype.constructor = k,
    M.prototype = Object.create(i.prototype),
    M.prototype.constructor = M,
    A.prototype = Object.create(i.prototype),
    A.prototype.constructor = A,
    A.prototype.destroy = function() {
        i.prototype.destroy.call(this),
        lt.physics.contactListener.removeBeginContactListener(this._onBeginContact, this),
        lt.physics.contactListener.removeEndContactListener(this._onEndContact, this),
        i.events.off(i.EVENT_TELEPORTATION, this._teleportation, this)
    }
    ,
    A.prototype._onBeginContact = function(t) {
        if (!this._inUse) {
            var e = g.getAnotherOfContact(t, this);
            e instanceof w && i.events.emit(i.EVENT_TELEPORTATION, {
                sender: this,
                ball: e,
                id: this.id
            })
        }
    }
    ,
    A.prototype._onEndContact = function(t) {
        var e = g.getAnotherOfContact(t, this);
        e instanceof w && (_inUse = !1)
    }
    ,
    A.prototype._teleportation = function(t) {
        var e = t.sender
          , i = t.ball
          , n = t.id;
        if (e != this && n == this.id) {
            this._inUse = !0;
            var a = this;
            lt.physics.doIt(function() {
                i.setPosition(a.x, a.y)
            }),
            lt.soundOn && this.sndTeleport.play()
        }
    }
    ,
    L.prototype = Object.create(i.prototype),
    L.prototype.constructor = L,
    L.prototype.suck = function() {
        for (var t = this._body.GetContactList(); null != t; ) {
            var e = t.contact;
            if (e.IsEnabled() && e.IsTouching()) {
                var i = g.getAnotherOfContact(e, this);
                i instanceof w && this.suckIt(i._body)
            }
            t = t.next
        }
    }
    ,
    L.prototype.suckIt = function(t) {
        t.GetLinearVelocity().SetZero(),
        t.ApplyForce(this._force, t.GetPosition())
    }
    ,
    L.prototype._update = function() {
        i.prototype._update.call(this),
        this.suck()
    }
    ,
    R.prototype = Object.create(i.prototype),
    R.prototype.constructor = R,
    G.prototype = Object.create(i.prototype),
    G.prototype.constructor = G,
    G.prototype._update = function() {
        i.prototype._update.call(this),
        this.y > lt.gameHeight0 + 100 && this.destroy()
    }
    ,
    F.prototype = Object.create(PIXI.Container.prototype),
    F.prototype.constructor = F,
    F.prototype._onClick = function(t) {
        switch (t.target.name) {
        case "Play":
            this._levelsDialog.shown ? this._levelsDialog.hide() : this._levelsDialog.show();
            try {
                parent.cmgGameEvent("start")
            } catch (t) {}
            break;
        case "Credits":
            this._creditsDialog.shown ? this._creditsDialog.hide() : this._creditsDialog.show();
            break;
        case "Music":
            lt.setMusicEnable(t.isOn);
            break;
        case "Sound":
            lt.setSoundEnable(t.isOn)
        }
        lt.soundOn && this.sndButton.play()
    }
    ,
    F.prototype._onBtnsLevelClick = function(t) {
        lt.levelMng.currLevel = t,
        lt.shutter.run(function() {
            this.destroy({
                children: !0
            }),
            lt.menuState = null,
            new U
        }, this),
        lt.soundOn && this.sndButton.play();
        try {
            parent.cmgGameEvent("start", t)
        } catch (t) {}
    }
    ,
    U.prototype = Object.create(PIXI.Container.prototype),
    U.prototype.constructor = U,
    U.prototype.destroy = function(t) {
        PIXI.Container.prototype.destroy.call(this, t)
    }
    ,
    U.prototype._onStageClick = function(t) {
        this._isComplete || this.shotHandler.call(t)
    }
    ,
    U.prototype._onGameLayerChildAdded = function() {
        this.updateLayersOrder()
    }
    ,
    U.prototype.updateLayersOrder = function() {
        this.gameLayer.children.sort(function(t, e) {
            return t.zOrder = t.zOrder || 0,
            e.zOrder = e.zOrder || 0,
            t.zOrder != e.zOrder ? t.zOrder - e.zOrder : t.y - e.y
        })
    }
    ,
    U.prototype.complete = function() {
        this._isComplete || (this._isComplete = !0,
        this._levelComplete.show(.5),
        lt.levelMng.onLevelComplete())
    }
    ,
    U.zOrder = {
        defaultZ: 100,
        cannon: 100,
        ball: 50,
        basket: 100,
        platform: 150,
        pushButton: 40,
        teleport: 41,
        rail: 30
    },
    U.prototype._createUI = function() {
        var t = e.generateButton("btnMenuGame", "atlasUI", this._onBtnsClick, this);
        t.name = "Menu",
        t.scale.set(.5, .5),
        t.anchor.set(1, 1),
        t.x = lt.gameWidth0 - 5,
        t.y = lt.gameHeight0 - 5,
        this.uiLayer.addChild(t);
        var i = e.generateButton("btnRestartGame", "atlasUI", this._onBtnsClick, this);
        if (i.name = "Restart",
        i.scale.set(.5, .5),
        i.anchor.set(1, 1),
        i.x = t.x - t.width - 5,
        i.y = t.y,
        this.uiLayer.addChild(i),
        this.aimControl) {
            var n = e.generateButton("btnFire", "atlasUI", this._onBtnsClick, this);
            n.name = "Fire",
            n.scale.set(.5, .5),
            n.anchor.set(0, 1),
            n.x = 3.5,
            n.y = lt.gameHeight0 - 3.5,
            this.uiLayer.addChild(n),
            this._btnFireBlinked = !1,
            this._blinker = lt.assets.getSprite("btnFireBlink"),
            this._blinker.scale.set(.5, .5),
            this._blinker.anchor.set(0, 1),
            this._blinker.x = n.x - 3.5,
            this._blinker.y = n.y + 3.5,
            this._blinker.visible = !1,
            this.addChild(this._blinker)
        }
        var a = new PIXI.TextStyle({
            fontFamily: "Impact",
            fontSize: 48,
            fill: "black",
            stroke: "white",
            strokeThickness: 3
        });
        this._txtLevel = new PIXI.Text("Level: " + lt.levelMng.currLevel,a),
        this._txtLevel.x = 5,
        this._txtLevel.y = 5,
        this._txtLevel.scale.set(.5, .5),
        this.uiLayer.addChild(this._txtLevel)
    }
    ,
    U.prototype.blinkBtnFire = function() {
        this._btnFireBlinked || (this._btnFireBlinked = !0,
        this._blinker.visible = !0,
        this._blinker.alpha = 0,
        this._blinkTween = TweenMax.to(this._blinker, .5, {
            alpha: 1,
            repeat: -1,
            yoyo: !0
        }))
    }
    ,
    U.prototype.stopBlinkBtnFire = function() {
        this._blinkTween && (this._blinker.visible = !1,
        this._blinkTween.kill(),
        this._blinkTween = null)
    }
    ,
    U.prototype._onBtnsClick = function(t) {
        switch (t.target.name) {
        case "Menu":
            lt.shutter.run(function() {
                this.destroy({
                    children: !0
                }),
                lt.playState = null,
                new F
            }, this);
            break;
        case "Restart":
            lt.shutter.run(function() {
                try {
                    parent.cmgGameEvent("replay", lt.levelMng.currLevel)
                } catch (t) {}
                this.destroy({
                    children: !0
                }),
                lt.playState = null,
                new U
            }, this);
            break;
        case "Next":
            lt.shutter.run(function() {
                lt.levelMng.currLevel++;
                try {
                    parent.cmgGameEvent("start", lt.levelMng.currLevel)
                } catch (t) {}
                this.destroy({
                    children: !0
                }),
                lt.playState = null,
                new U
            }, this);
            break;
        case "Fire":
            if (this._isComplete)
                return;
            this.shotHandler.call(t),
            this.stopBlinkBtnFire()
        }
        lt.soundOn && this.sndButton.play()
    }
    ,
    X.prototype.constructor = X,
    X.prototype.create = function(t) {
        t = t || this.currLevel,
        t < 1 ? t = 1 : t > this.totalLevels && (t = this.totalLevels),
        this.currLevel = t,
        t--;
        for (var e = ht[t].items, i = e.length, n = 0; n < i; n++)
            this._createItem(e[n])
    }
    ,
    X.prototype.onLevelComplete = function() {
        this.currLevel == this.lastOpened && (this.lastOpened++,
        lt.storage.set(lt.SAVE_KEY_LAST_OPENED, this.lastOpened))
    }
    ,
    X.prototype._createItem = function(t) {
        if ("Cannon" == t.name) {
            var e = new I(t.x,t.y);
            e.lowerAngle = void 0 != t.lowerAngle ? t.lowerAngle : -45,
            e.upperAngle = void 0 != t.upperAngle ? t.upperAngle : 45,
            lt.playState.gameLayer.addChild(e)
        } else if ("Basket" == t.name) {
            var i = new P(t.x,t.y);
            lt.playState.gameLayer.addChild(i)
        } else if ("Ball" == t.name) {
            var n = new w(t.x,t.y);
            lt.playState.gameLayer.addChild(n)
        } else if ("Platform" == t.name) {
            var a = new B(t.x,t.y,t.width,t.angle);
            lt.playState.gameLayer.addChild(a)
        } else if ("Peg" == t.name) {
            var o = new O(t.x,t.y);
            lt.playState.gameLayer.addChild(o)
        } else if ("Hammer" == t.name) {
            var s = new T(t.x,t.y,t.angle,t.hmDensity);
            lt.playState.gameLayer.addChild(s)
        } else if ("WeightBall" == t.name) {
            var r = new G(t.x,t.y,t.wbDensity);
            lt.playState.gameLayer.addChild(r)
        } else if ("Stopper" == t.name) {
            var h = new k(t.x,t.y);
            lt.playState.gameLayer.addChild(h)
        } else if ("Swings" == t.name) {
            var l = new M(t.x,t.y,t.angle);
            lt.playState.gameLayer.addChild(l)
        } else if ("PushButton" == t.name) {
            var c = new E(t.x,t.y,t.btnID,t.angle);
            lt.playState.gameLayer.addChild(c)
        } else if ("Gate" == t.name) {
            var d = new C(t.x,t.y,t.direction,t.gateLeftID || t.gateRightID,t.openAngle,t.inversed || !1);
            lt.playState.gameLayer.addChild(d)
        } else if ("Teleport" == t.name) {
            var p = new A(t.x,t.y,t.teleportID,t.angle);
            lt.playState.gameLayer.addChild(p)
        } else if ("Domino" == t.name) {
            var u = new D(t.x,t.y);
            lt.playState.gameLayer.addChild(u)
        } else if ("Tube" == t.name) {
            var m = new L(t.x,t.y,t.angle,t.plusSensorFront,t.plusSensorBack);
            lt.playState.gameLayer.addChild(m)
        } else if ("BasketRail" == t.name) {
            var y = new S(t.x,t.y,t.orientation,t.end,t.basketID);
            lt.playState.gameLayer.addChild(y)
        }
    }
    ,
    X.prototype.unlockAllLevels = function() {
        this.lastOpened = this.totalLevels
    }
    ;
    var ht = [];
    ht[0] = {
        items: [{
            name: "Platform",
            x: 428,
            y: 255.5,
            width: 21.1,
            angle: -90
        }, {
            name: "Basket",
            x: 160,
            y: 304
        }, {
            name: "Cannon",
            x: 160,
            y: 320.75
        }, {
            name: "Platform",
            x: 600,
            y: 247,
            width: 54,
            angle: -90
        }, {
            name: "Platform",
            x: 639.05,
            y: 215.4,
            width: 92.3,
            angle: -15
        }, {
            name: "Platform",
            x: 678.1,
            y: 55.1,
            width: 311,
            angle: -90
        }, {
            name: "Platform",
            x: 160.05,
            y: 328.15,
            width: 60,
            angle: 0
        }, {
            name: "Platform",
            x: 567.45,
            y: 277.1,
            width: 78.5,
            angle: -15
        }, {
            name: "Platform",
            x: 447.45,
            y: 281.6,
            width: 60.6,
            angle: 45
        }]
    },
    ht[1] = {
        items: [{
            name: "Basket",
            x: 500,
            y: 345
        }, {
            name: "Ball",
            x: 455,
            y: 145
        }, {
            name: "Hammer",
            x: 500,
            y: 80,
            angle: -45
        }, {
            name: "Peg",
            x: 570,
            y: 92
        }, {
            name: "Cannon",
            x: 500,
            y: 403,
            lowerAngle: 0,
            upperAngle: 30
        }, {
            name: "Platform",
            x: 496.35,
            y: 410,
            width: 97.3,
            angle: 0
        }, {
            name: "Platform",
            x: 455,
            y: 280,
            width: 250,
            angle: -90
        }, {
            name: "Platform",
            x: 79.05,
            y: 193.05,
            width: 100,
            angle: 60
        }, {
            name: "Platform",
            x: 145.05,
            y: 259.95,
            width: 100,
            angle: 30
        }, {
            name: "Platform",
            x: 235.05,
            y: 293.95,
            width: 100,
            angle: 10
        }, {
            name: "Platform",
            x: 409.45,
            y: 189.85,
            width: 100,
            angle: -35
        }, {
            name: "Platform",
            x: 371.7,
            y: 244.35,
            width: 64,
            angle: -90
        }, {
            name: "Platform",
            x: 411.5,
            y: 268.85,
            width: 65,
            angle: 0
        }]
    },
    ht[2] = {
        items: [{
            name: "Basket",
            x: 140,
            y: 400
        }, {
            name: "WeightBall",
            x: 500,
            y: 165
        }, {
            name: "Platform",
            x: 580,
            y: 373.25,
            width: 286.9,
            angle: -90
        }, {
            name: "Platform",
            x: 500,
            y: 375.7,
            width: 286.1,
            angle: -90
        }, {
            name: "Platform",
            x: 500,
            y: 42.55,
            width: 133,
            angle: -90
        }, {
            name: "Cannon",
            x: 140,
            y: 400
        }, {
            name: "Platform",
            x: 140,
            y: 408,
            width: 60,
            angle: 0
        }, {
            name: "Peg",
            x: 475,
            y: 221.45
        }, {
            name: "Peg",
            x: 525,
            y: 221.45
        }, {
            name: "Platform",
            x: 560,
            y: 328.35,
            width: 50,
            angle: -45
        }, {
            name: "Platform",
            x: 140,
            y: 427,
            width: 23,
            angle: 90
        }, {
            name: "Platform",
            x: 520,
            y: 278.35,
            width: 50,
            angle: 45
        }, {
            name: "Platform",
            x: 623.6,
            y: 209.25,
            width: 109.2,
            angle: -30
        }, {
            name: "Platform",
            x: 667.25,
            y: 108.45,
            width: 160.8,
            angle: -90
        }]
    },
    ht[3] = {
        items: [{
            name: "Platform",
            x: 76.25,
            y: 114.75,
            width: 98.6,
            angle: -90
        }, {
            name: "Platform",
            x: 208.75,
            y: 121.65,
            width: 84.3,
            angle: -90
        }, {
            name: "Swings",
            x: 142.5,
            y: 130,
            angle: 10
        }, {
            name: "Gate",
            x: 600,
            y: 95,
            direction: "left",
            gateLeftID: 1,
            openAngle: 45
        }, {
            name: "Gate",
            x: 660,
            y: 95,
            direction: "right",
            gateRightID: 1,
            openAngle: 45
        }, {
            name: "Gate",
            x: 600,
            y: 130,
            direction: "left",
            gateLeftID: 2,
            openAngle: 45
        }, {
            name: "Gate",
            x: 660,
            y: 130,
            direction: "right",
            gateRightID: 2,
            openAngle: 45
        }, {
            name: "Gate",
            x: 600,
            y: 165,
            direction: "left",
            gateLeftID: 3,
            openAngle: 45
        }, {
            name: "Gate",
            x: 660,
            y: 165,
            direction: "right",
            gateRightID: 3,
            openAngle: 45
        }, {
            name: "Gate",
            x: 600,
            y: 200,
            direction: "left",
            gateLeftID: 4,
            openAngle: 45
        }, {
            name: "Gate",
            x: 660,
            y: 200,
            direction: "right",
            gateRightID: 4,
            openAngle: 45
        }, {
            name: "Basket",
            x: 450,
            y: 250
        }, {
            name: "PushButton",
            x: 241.85,
            y: 350.5,
            angle: 0,
            btnID: 4
        }, {
            name: "PushButton",
            x: 175.6,
            y: 350.5,
            angle: 0,
            btnID: 3
        }, {
            name: "PushButton",
            x: 109.35,
            y: 350.5,
            angle: 0,
            btnID: 2
        }, {
            name: "PushButton",
            x: 43.1,
            y: 350.5,
            angle: 0,
            btnID: 1
        }, {
            name: "Cannon",
            x: 450,
            y: 400
        }, {
            name: "Platform",
            x: 224.75,
            y: 76.95,
            width: 117.7,
            angle: -14
        }, {
            name: "Platform",
            x: 580,
            y: 180,
            width: 200,
            angle: -90
        }, {
            name: "Platform",
            x: 680,
            y: 180,
            width: 200,
            angle: -90
        }, {
            name: "Platform",
            x: 275,
            y: 210,
            width: 280,
            angle: -90
        }, {
            name: "Platform",
            x: 142.5,
            y: 357.5,
            width: 280,
            angle: 0
        }, {
            name: "Platform",
            x: 10,
            y: 210,
            width: 280,
            angle: -90
        }, {
            name: "Platform",
            x: 69.6,
            y: 62.5,
            width: 134.2,
            angle: 0
        }, {
            name: "Platform",
            x: 142.5,
            y: 250,
            width: 200,
            angle: -90
        }, {
            name: "Platform",
            x: 76.25,
            y: 300,
            width: 100,
            angle: -90
        }, {
            name: "Platform",
            x: 208.75,
            y: 300,
            width: 100,
            angle: -90
        }, {
            name: "Stopper",
            x: 127.5,
            y: 155
        }, {
            name: "Stopper",
            x: 157.5,
            y: 155
        }, {
            name: "Platform",
            x: 450,
            y: 408.15,
            width: 60,
            angle: 0
        }, {
            name: "Swings",
            x: 76,
            y: 232.5,
            angle: 10
        }, {
            name: "Stopper",
            x: 61,
            y: 258.5
        }, {
            name: "Stopper",
            x: 91,
            y: 258.5
        }, {
            name: "Swings",
            x: 209,
            y: 232.5,
            angle: 10
        }, {
            name: "Stopper",
            x: 194,
            y: 258.5
        }, {
            name: "Stopper",
            x: 224,
            y: 258.5
        }, {
            name: "Platform",
            x: 239.4,
            y: -112.25,
            width: 308.8,
            angle: -90
        }, {
            name: "Platform",
            x: 191.6,
            y: 48.35,
            width: 110.3,
            angle: -14
        }, {
            name: "Platform",
            x: 142.5,
            y: 67.15,
            width: 24.8,
            angle: -90
        }]
    },
    ht[4] = {
        items: [{
            name: "Cannon",
            x: 360.6,
            y: 411.85,
            lowerAngle: -45,
            upperAngle: 0
        }, {
            name: "Basket",
            x: 360.6,
            y: 360
        }, {
            name: "Gate",
            x: 450,
            y: 320,
            direction: "left",
            gateLeftID: 1,
            openAngle: 45
        }, {
            name: "Gate",
            x: 510,
            y: 320,
            direction: "right",
            gateRightID: 1,
            openAngle: 45
        }, {
            name: "PushButton",
            x: 259.25,
            y: 189.35,
            angle: 105,
            btnID: 1
        }, {
            name: "Teleport",
            x: 65,
            y: 370,
            angle: 0,
            teleportID: 1
        }, {
            name: "Platform",
            x: 122.65,
            y: 349.35,
            width: 45.1,
            angle: -15
        }, {
            name: "Platform",
            x: 168.7,
            y: 329.05,
            width: 64.5,
            angle: -30
        }, {
            name: "Platform",
            x: 216.35,
            y: 274.95,
            width: 99.4,
            angle: -60
        }, {
            name: "Platform",
            x: 252.45,
            y: 187.2,
            width: 99.4,
            angle: -75
        }, {
            name: "Platform",
            x: 410,
            y: 240,
            width: 420,
            angle: -90
        }, {
            name: "Platform",
            x: 580.7,
            y: 286.15,
            width: 110.1,
            angle: -30
        }, {
            name: "Platform",
            x: 651.45,
            y: 234.05,
            width: 76.8,
            angle: -45
        }, {
            name: "Teleport",
            x: 650,
            y: 180,
            angle: 180,
            teleportID: 1
        }, {
            name: "Platform",
            x: 360,
            y: 418.15,
            width: 60,
            angle: 0
        }]
    },
    ht[5] = {
        items: [{
            name: "PushButton",
            x: 198.05,
            y: 453,
            angle: 0,
            btnID: 1
        }, {
            name: "Cannon",
            x: 360.6,
            y: 351.85
        }, {
            name: "Basket",
            x: 360.6,
            y: 140
        }, {
            name: "Platform",
            x: 432.3,
            y: 460,
            width: 394.3,
            angle: 0
        }, {
            name: "Platform",
            x: 369.45,
            y: 359,
            width: 439.1,
            angle: 0
        }, {
            name: "Platform",
            x: 682,
            y: 360,
            width: 56,
            angle: 0
        }, {
            name: "Platform",
            x: 668.8,
            y: 418.35,
            width: 128.9,
            angle: -45
        }, {
            name: "Platform",
            x: 617.25,
            y: 377.65,
            width: 79.8,
            angle: 30
        }, {
            name: "Domino",
            x: 580,
            y: 425
        }, {
            name: "Domino",
            x: 550,
            y: 425
        }, {
            name: "Domino",
            x: 520,
            y: 425
        }, {
            name: "Domino",
            x: 490,
            y: 425
        }, {
            name: "Domino",
            x: 460,
            y: 425
        }, {
            name: "Domino",
            x: 430,
            y: 425
        }, {
            name: "Domino",
            x: 400,
            y: 425
        }, {
            name: "Domino",
            x: 370,
            y: 425
        }, {
            name: "Domino",
            x: 340,
            y: 425
        }, {
            name: "Domino",
            x: 310,
            y: 425
        }, {
            name: "Domino",
            x: 280,
            y: 425
        }, {
            name: "Domino",
            x: 250,
            y: 425
        }, {
            name: "Platform",
            x: 197.95,
            y: 460,
            width: 40.2,
            angle: 0
        }, {
            name: "Platform",
            x: 666.3,
            y: 42.55,
            width: 82.7,
            angle: 0
        }, {
            name: "Platform",
            x: 620,
            y: 141.05,
            width: 122,
            angle: -90
        }, {
            name: "Platform",
            x: 700,
            y: 95,
            width: 90,
            angle: -90
        }, {
            name: "Gate",
            x: 30,
            y: 330,
            direction: "left",
            gateLeftID: 1,
            openAngle: 90
        }, {
            name: "Gate",
            x: 90,
            y: 330,
            direction: "right",
            gateRightID: 1,
            openAngle: 45
        }, {
            name: "Platform",
            x: 29,
            y: 369.6,
            width: 27.2,
            angle: -90
        }, {
            name: "Platform",
            x: 66.75,
            y: 375.5,
            width: 60.5,
            angle: 0
        }, {
            name: "Platform",
            x: 160.15,
            y: 261.6,
            width: 178.5,
            angle: -45
        }, {
            name: "Platform",
            x: 181.75,
            y: 288.75,
            width: 253.4,
            angle: -45
        }, {
            name: "Tube",
            x: 500,
            y: 60,
            angle: 0
        }, {
            name: "Tube",
            x: 550,
            y: 60,
            angle: 0
        }, {
            name: "Tube",
            x: 600,
            y: 60,
            angle: 0,
            plusSensorBack: 30
        }, {
            name: "Tube",
            x: 450,
            y: 60,
            angle: 0
        }, {
            name: "Tube",
            x: 60,
            y: 300,
            angle: -90,
            plusSensorFront: 30
        }, {
            name: "Tube",
            x: 60,
            y: 250,
            angle: -90
        }, {
            name: "Tube",
            x: 60,
            y: 200,
            angle: -90
        }, {
            name: "Tube",
            x: 60,
            y: 150,
            angle: -90
        }, {
            name: "Tube",
            x: 60,
            y: 100,
            angle: -90,
            plusSensorBack: 30
        }, {
            name: "Tube",
            x: 100,
            y: 60,
            angle: 0,
            plusSensorFront: 30
        }, {
            name: "Tube",
            x: 150,
            y: 60,
            angle: 0
        }, {
            name: "Tube",
            x: 200,
            y: 60,
            angle: 0
        }, {
            name: "Tube",
            x: 250,
            y: 60,
            angle: 0
        }, {
            name: "Tube",
            x: 300,
            y: 60,
            angle: 0
        }, {
            name: "Tube",
            x: 350,
            y: 60,
            angle: 0
        }, {
            name: "Tube",
            x: 400,
            y: 60,
            angle: 0
        }]
    },
    ht[6] = {
        items: [{
            name: "PushButton",
            x: 668,
            y: 353.5,
            angle: 0,
            btnID: 2
        }, {
            name: "Platform",
            x: 577.5,
            y: 379.85,
            width: 86.9,
            angle: -75
        }, {
            name: "Platform",
            x: 393.65,
            y: 420,
            width: 212.6,
            angle: 0
        }, {
            name: "Cannon",
            x: 335.6,
            y: 332.85
        }, {
            name: "Basket",
            x: 335.6,
            y: 430
        }, {
            name: "Platform",
            x: 142.45,
            y: 267.5,
            width: 160,
            angle: -90
        }, {
            name: "Platform",
            x: 142.45,
            y: 104,
            width: 63.1,
            angle: -90
        }, {
            name: "Platform",
            x: 667.95,
            y: 360,
            width: 40.2,
            angle: 0
        }, {
            name: "Platform",
            x: 640.35,
            y: 210,
            width: 315,
            angle: -90
        }, {
            name: "Platform",
            x: 695.35,
            y: 210,
            width: 315,
            angle: -90
        }, {
            name: "Platform",
            x: 172.5,
            y: 420,
            width: 77.1,
            angle: 0
        }, {
            name: "Platform",
            x: 385.95,
            y: 340,
            width: 494,
            angle: 0
        }, {
            name: "Platform",
            x: 55.45,
            y: 207.2,
            width: 269.1,
            angle: -90
        }, {
            name: "Platform",
            x: 96.25,
            y: 380.7,
            width: 123.5,
            angle: -134
        }, {
            name: "Platform",
            x: 99.75,
            y: 65.45,
            width: 102.7,
            angle: 0
        }, {
            name: "Gate",
            x: 70,
            y: 200,
            direction: "left",
            gateLeftID: 1,
            openAngle: 90
        }, {
            name: "Gate",
            x: 130,
            y: 200,
            direction: "right",
            gateRightID: 1,
            openAngle: 90
        }, {
            name: "PushButton",
            x: 612.05,
            y: 333.5,
            angle: 0,
            btnID: 1
        }, {
            name: "Platform",
            x: 583.85,
            y: 192.55,
            width: 281,
            angle: -90
        }, {
            name: "Gate",
            x: 217.5,
            y: 417,
            direction: "left",
            gateLeftID: 2,
            openAngle: 90,
            inversed: !0
        }, {
            name: "Gate",
            x: 280,
            y: 417,
            direction: "right",
            gateRightID: 2,
            openAngle: 90,
            inversed: !0
        }, {
            name: "Peg",
            x: 143.5,
            y: 162.45
        }]
    },
    ht[7] = {
        items: [{
            name: "Platform",
            x: 411.05,
            y: 282.2,
            width: 66.4,
            angle: 0
        }, {
            name: "Platform",
            x: 654.1,
            y: 185.7,
            width: 82.4,
            angle: 0
        }, {
            name: "Platform",
            x: 588.35,
            y: 133.7,
            width: 81.8,
            angle: 0
        }, {
            name: "Platform",
            x: 568.95,
            y: 53.05,
            width: 223,
            angle: 0
        }, {
            name: "Platform",
            x: 120,
            y: 196.1,
            width: 270.9,
            angle: -90
        }, {
            name: "Cannon",
            x: 235.6,
            y: 329.85
        }, {
            name: "Tube",
            x: 480,
            y: 120,
            angle: -90,
            plusSensorBack: 30
        }, {
            name: "Tube",
            x: 520,
            y: 80,
            angle: 0,
            plusSensorFront: 30
        }, {
            name: "Tube",
            x: 570,
            y: 80,
            angle: 0
        }, {
            name: "Tube",
            x: 620,
            y: 80,
            angle: 0
        }, {
            name: "Tube",
            x: 660,
            y: 120,
            angle: 90,
            plusSensorFront: 30
        }, {
            name: "Tube",
            x: 480,
            y: 170,
            angle: -90
        }, {
            name: "Platform",
            x: 451.7,
            y: 167.6,
            width: 244.2,
            angle: -90
        }, {
            name: "Tube",
            x: 480,
            y: 220,
            angle: -90
        }, {
            name: "Tube",
            x: 480,
            y: 270,
            angle: -90,
            plusSensorFront: 30
        }, {
            name: "Tube",
            x: 440,
            y: 310,
            angle: 0
        }, {
            name: "Tube",
            x: 347,
            y: 270,
            angle: 90,
            plusSensorFront: 30
        }, {
            name: "Platform",
            x: 321.95,
            y: 281,
            width: 96.5,
            angle: -90
        }, {
            name: "Tube",
            x: 255,
            y: 36,
            angle: 180
        }, {
            name: "Tube",
            x: 305,
            y: 36,
            angle: 180,
            plusSensorFront: 30
        }, {
            name: "Tube",
            x: 347,
            y: 76,
            angle: -90,
            plusSensorFront: 30,
            plusSensorBack: 30
        }, {
            name: "Tube",
            x: 105,
            y: 36,
            angle: 180,
            plusSensorBack: 30
        }, {
            name: "Tube",
            x: 155,
            y: 36,
            angle: 180
        }, {
            name: "Tube",
            x: 205,
            y: 36,
            angle: 180
        }, {
            name: "Tube",
            x: 61,
            y: 76,
            angle: 90,
            plusSensorFront: 30
        }, {
            name: "Tube",
            x: 620,
            y: 160,
            angle: 180,
            plusSensorFront: 30
        }, {
            name: "Tube",
            x: 580,
            y: 200,
            angle: 90,
            plusSensorFront: 30
        }, {
            name: "Swings",
            x: 580,
            y: 395,
            angle: -20
        }, {
            name: "Stopper",
            x: 563,
            y: 415
        }, {
            name: "Stopper",
            x: 593,
            y: 415
        }, {
            name: "Platform",
            x: 304.45,
            y: 460,
            width: 451.1,
            angle: 0
        }, {
            name: "Domino",
            x: 450,
            y: 425
        }, {
            name: "Domino",
            x: 420,
            y: 425
        }, {
            name: "Domino",
            x: 390,
            y: 425
        }, {
            name: "Domino",
            x: 360,
            y: 425
        }, {
            name: "Domino",
            x: 330,
            y: 425
        }, {
            name: "Domino",
            x: 300,
            y: 425
        }, {
            name: "Domino",
            x: 270,
            y: 425
        }, {
            name: "Domino",
            x: 240,
            y: 425
        }, {
            name: "Domino",
            x: 210,
            y: 425
        }, {
            name: "Domino",
            x: 180,
            y: 425
        }, {
            name: "Domino",
            x: 150,
            y: 425
        }, {
            name: "Gate",
            x: 32.05,
            y: 113.05,
            direction: "left",
            gateLeftID: 1,
            openAngle: 90
        }, {
            name: "Gate",
            x: 92.05,
            y: 113.05,
            direction: "right",
            gateRightID: 1,
            openAngle: 90
        }, {
            name: "Basket",
            x: 235.6,
            y: 165.05
        }, {
            name: "PushButton",
            x: 102.45,
            y: 452.75,
            angle: 0,
            btnID: 2
        }, {
            name: "Platform",
            x: 639.95,
            y: 438.5,
            width: 40.2,
            angle: 0
        }, {
            name: "PushButton",
            x: 640,
            y: 431.25,
            angle: 0,
            btnID: 1
        }, {
            name: "Platform",
            x: 667.95,
            y: 319.85,
            width: 252.5,
            angle: -90
        }, {
            name: "Platform",
            x: 504.95,
            y: 213.75,
            width: 228.6,
            angle: -90
        }, {
            name: "Platform",
            x: 252.95,
            y: 335.65,
            width: 519.9,
            angle: 0
        }, {
            name: "Platform",
            x: 686.95,
            y: 112.2,
            width: 132.9,
            angle: -90
        }, {
            name: "Platform",
            x: 554.95,
            y: 195.65,
            width: 109,
            angle: -90
        }, {
            name: "Platform",
            x: 506.8,
            y: 424.55,
            width: 96,
            angle: -20
        }, {
            name: "Platform",
            x: 465.65,
            y: 446.75,
            width: 25,
            angle: -90
        }, {
            name: "Platform",
            x: 569.45,
            y: 106.95,
            width: 114.9,
            angle: 0
        }, {
            name: "Platform",
            x: 634.4,
            y: 120.65,
            width: 41.5,
            angle: -90
        }, {
            name: "Platform",
            x: 605.75,
            y: 215.45,
            width: 73.9,
            angle: -90
        }, {
            name: "Tube",
            x: 390,
            y: 310,
            angle: 0,
            plusSensorFront: 30
        }, {
            name: "Platform",
            x: 372.5,
            y: 215.75,
            width: 147.9,
            angle: -90
        }, {
            name: "Gate",
            x: 316.05,
            y: 111.05,
            direction: "left",
            gateLeftID: 2,
            openAngle: 90
        }, {
            name: "Gate",
            x: 376.05,
            y: 111.05,
            direction: "right",
            gateRightID: 2,
            openAngle: 90
        }, {
            name: "Platform",
            x: 372.5,
            y: 58.4,
            width: 84.8,
            angle: 90
        }, {
            name: "Platform",
            x: 36.5,
            y: 57.9,
            width: 85.8,
            angle: 90
        }, {
            name: "Platform",
            x: 204.9,
            y: 9.95,
            width: 351.8,
            angle: 0
        }]
    },
    ht[8] = {
        items: [{
            name: "Platform",
            x: 500,
            y: 266.45,
            width: 47,
            angle: -90
        }, {
            name: "Platform",
            x: 529.35,
            y: 244.25,
            width: 184.1,
            angle: 0
        }, {
            name: "Cannon",
            x: 208.6,
            y: 442.85,
            lowerAngle: -45,
            upperAngle: 10
        }, {
            name: "Basket",
            x: 208.6,
            y: 377
        }, {
            name: "Platform",
            x: 430,
            y: 201.4,
            width: 99,
            angle: -90
        }, {
            name: "Gate",
            x: 20,
            y: 330,
            direction: "left",
            gateLeftID: 2,
            openAngle: 90
        }, {
            name: "Gate",
            x: 80,
            y: 330,
            direction: "right",
            gateRightID: 2,
            openAngle: 90
        }, {
            name: "Platform",
            x: 99.95,
            y: 303.95,
            width: 302.1,
            angle: -90
        }, {
            name: "Gate",
            x: 20,
            y: 170,
            direction: "left",
            gateLeftID: 1,
            openAngle: 90
        }, {
            name: "Gate",
            x: 80,
            y: 170,
            direction: "right",
            gateRightID: 1,
            openAngle: 90
        }, {
            name: "Platform",
            x: 594.75,
            y: 438,
            width: 188.3,
            angle: 0
        }, {
            name: "PushButton",
            x: 668.5,
            y: 431,
            angle: 0,
            btnID: 2
        }, {
            name: "PushButton",
            x: 601,
            y: 237.5,
            angle: 0,
            btnID: 1
        }, {
            name: "Platform",
            x: 208,
            y: 449.15,
            width: 60,
            angle: 0
        }, {
            name: "Platform",
            x: 628.5,
            y: 210,
            width: 83,
            angle: -90
        }, {
            name: "Domino",
            x: 430,
            y: 126.9
        }, {
            name: "Peg",
            x: 340,
            y: 94.95
        }, {
            name: "Hammer",
            x: 411,
            y: 57.5,
            angle: -164
        }, {
            name: "Platform",
            x: 430,
            y: 22.45,
            width: 152.9,
            angle: -90
        }, {
            name: "Platform",
            x: 500,
            y: 395.4,
            width: 99,
            angle: -90
        }, {
            name: "Domino",
            x: 500,
            y: 320.9
        }, {
            name: "Platform",
            x: 696.5,
            y: 404,
            width: 83,
            angle: -90
        }, {
            name: "Peg",
            x: 370,
            y: 304.95
        }, {
            name: "Hammer",
            x: 441,
            y: 267.5,
            angle: -162
        }]
    },
    ht[9] = {
        items: [{
            name: "Cannon",
            x: 445.6,
            y: 343.85
        }, {
            name: "Basket",
            x: 445.6,
            y: 128
        }, {
            name: "Gate",
            x: 130,
            y: 80,
            direction: "left",
            gateLeftID: 1,
            openAngle: 90
        }, {
            name: "Gate",
            x: 190,
            y: 80,
            direction: "right",
            gateRightID: 1,
            openAngle: 90
        }, {
            name: "Platform",
            x: 72.45,
            y: 432.5,
            width: 40.2,
            angle: 0
        }, {
            name: "PushButton",
            x: 72.25,
            y: 426.5,
            angle: 0,
            btnID: 1
        }, {
            name: "Platform",
            x: 348.7,
            y: 350.15,
            width: 421.6,
            angle: 0
        }, {
            name: "Swings",
            x: 130,
            y: 395,
            angle: 20
        }, {
            name: "Stopper",
            x: 113,
            y: 415
        }, {
            name: "Stopper",
            x: 143,
            y: 415
        }, {
            name: "Platform",
            x: 363.95,
            y: 409.15,
            width: 404,
            angle: 0
        }, {
            name: "Teleport",
            x: 599,
            y: 420,
            angle: 0
        }, {
            name: "Teleport",
            x: 160,
            y: 50,
            angle: 180
        }, {
            name: "Platform",
            x: 566.95,
            y: 265.15,
            width: 185,
            angle: -90
        }, {
            name: "Platform",
            x: 630.95,
            y: 265.15,
            width: 185,
            angle: -90
        }, {
            name: "Platform",
            x: 204,
            y: 129.95,
            width: 87,
            angle: -90
        }, {
            name: "Platform",
            x: 105,
            y: 185,
            width: 344,
            angle: -90
        }, {
            name: "Platform",
            x: 695.2,
            y: 265.15,
            width: 185,
            angle: -90
        }, {
            name: "Gate",
            x: 570,
            y: 370,
            direction: "left",
            gateLeftID: 2,
            openAngle: 90
        }, {
            name: "Gate",
            x: 630,
            y: 370,
            direction: "right",
            gateRightID: 2,
            openAngle: 90
        }, {
            name: "Platform",
            x: 662.45,
            y: 412.5,
            width: 40.2,
            angle: 0
        }, {
            name: "PushButton",
            x: 662.25,
            y: 406.5,
            angle: 0,
            btnID: 2
        }, {
            name: "Platform",
            x: 585.6,
            y: 188.45,
            width: 35,
            angle: 30
        }, {
            name: "Platform",
            x: 585.6,
            y: 282.45,
            width: 35,
            angle: 30
        }, {
            name: "Platform",
            x: 612.1,
            y: 237.45,
            width: 35,
            angle: -30
        }, {
            name: "Platform",
            x: 612.1,
            y: 327.45,
            width: 35,
            angle: -30
        }, {
            name: "Platform",
            x: 650.1,
            y: 188.45,
            width: 35,
            angle: 30
        }, {
            name: "Platform",
            x: 650.1,
            y: 282.45,
            width: 35,
            angle: 30
        }, {
            name: "Platform",
            x: 676.6,
            y: 237.45,
            width: 35,
            angle: -30
        }, {
            name: "Platform",
            x: 676.6,
            y: 327.45,
            width: 35,
            angle: -30
        }]
    },
    ht[10] = {
        items: [{
            name: "Platform",
            x: 59.4,
            y: 411.35,
            width: 70.1,
            angle: 0
        }, {
            name: "Platform",
            x: 88.65,
            y: 361.7,
            width: 28.6,
            angle: -45
        }, {
            name: "Platform",
            x: 31.15,
            y: 361.7,
            width: 28.6,
            angle: 45
        }, {
            name: "Cannon",
            x: 285.6,
            y: 322.85
        }, {
            name: "Platform",
            x: 285,
            y: 329.15,
            width: 60,
            angle: 0
        }, {
            name: "Platform",
            x: 335,
            y: 377.95,
            width: 118.1,
            angle: -90
        }, {
            name: "Platform",
            x: 471.55,
            y: 311.4,
            width: 287.9,
            angle: 0
        }, {
            name: "Platform",
            x: 621,
            y: 200.05,
            width: 239.7,
            angle: -90
        }, {
            name: "BasketRail",
            x: 285.6,
            y: 356,
            orientation: 1,
            end: 680,
            basketID: 1
        }, {
            name: "Tube",
            x: 640,
            y: 60,
            angle: 0
        }, {
            name: "Tube",
            x: 680,
            y: 100,
            angle: 90,
            plusSensorFront: 30
        }, {
            name: "Tube",
            x: 540,
            y: 60,
            angle: 0,
            plusSensorFront: 30
        }, {
            name: "Tube",
            x: 590,
            y: 60,
            angle: 0
        }, {
            name: "Tube",
            x: 500,
            y: 100,
            angle: -90,
            plusSensorFront: 30
        }, {
            name: "WeightBall",
            x: 60,
            y: 121.05,
            wbDensity: 1
        }, {
            name: "PushButton",
            x: 60,
            y: 404.25,
            angle: 0,
            btnID: 1
        }, {
            name: "Platform",
            x: 99,
            y: 288.9,
            width: 259.9,
            angle: -90
        }, {
            name: "Platform",
            x: 621,
            y: 20.85,
            width: 40.2,
            angle: -90
        }, {
            name: "Platform",
            x: 495.7,
            y: 42.8,
            width: 38.7,
            angle: 0
        }, {
            name: "Platform",
            x: 483.8,
            y: 62.6,
            width: 24.8,
            angle: 90
        }, {
            name: "Platform",
            x: 685.2,
            y: 42.8,
            width: 38.7,
            angle: 0
        }, {
            name: "Platform",
            x: 697.05,
            y: 62.6,
            width: 24.8,
            angle: 90
        }, {
            name: "Peg",
            x: 175.5,
            y: 61.45
        }, {
            name: "Teleport",
            x: 59,
            y: 176.75,
            angle: 0,
            teleportID: 1
        }, {
            name: "Teleport",
            x: 59,
            y: 263.15,
            angle: 180,
            teleportID: 1
        }, {
            name: "Platform",
            x: 20,
            y: 288.9,
            width: 259.9,
            angle: -90
        }, {
            name: "Hammer",
            x: 99.75,
            y: 67.45,
            angle: -51,
            hmDensity: 3
        }]
    },
    ht[11] = {
        items: [{
            name: "Cannon",
            x: 155.6,
            y: 412.85
        }, {
            name: "Platform",
            x: 155,
            y: 419.15,
            width: 60,
            angle: 0
        }, {
            name: "Platform",
            x: 368.05,
            y: 166.4,
            width: 231,
            angle: 0
        }, {
            name: "Platform",
            x: 558.15,
            y: 265.1,
            width: 256.5,
            angle: 51
        }, {
            name: "WeightBall",
            x: 255,
            y: 49.55,
            wbDensity: 3
        }, {
            name: "PushButton",
            x: 672,
            y: 415,
            angle: 0,
            btnID: 1
        }, {
            name: "Platform",
            x: 636.5,
            y: 387.55,
            width: 55.2,
            angle: -90
        }, {
            name: "Platform",
            x: 705.55,
            y: 238.6,
            width: 369.9,
            angle: -90
        }, {
            name: "Platform",
            x: 671.35,
            y: 422.15,
            width: 83.6,
            angle: 0
        }, {
            name: "Platform",
            x: 77.6,
            y: 151.1,
            width: 251.1,
            angle: -90
        }, {
            name: "Platform",
            x: 42.55,
            y: 18.05,
            width: 85.1,
            angle: 0
        }, {
            name: "BasketRail",
            x: 35,
            y: 45,
            orientation: 0,
            end: 340,
            basketID: 1
        }, {
            name: "Platform",
            x: 92.3,
            y: 314.5,
            width: 60,
            angle: -30
        }, {
            name: "Platform",
            x: 253.7,
            y: 131.95,
            width: 84,
            angle: -90
        }, {
            name: "Domino",
            x: 478,
            y: 133
        }, {
            name: "Domino",
            x: 440.5,
            y: 133
        }, {
            name: "Domino",
            x: 403,
            y: 133
        }, {
            name: "Domino",
            x: 365.5,
            y: 133
        }, {
            name: "Domino",
            x: 328,
            y: 133
        }, {
            name: "Platform",
            x: 253.75,
            y: -184.6,
            width: 380.8,
            angle: -90
        }]
    },
    ht[12] = {
        items: [{
            name: "Cannon",
            x: 185.6,
            y: 422.85,
            lowerAngle: -45,
            upperAngle: 0
        }, {
            name: "Platform",
            x: 185,
            y: 429.15,
            width: 60,
            angle: 0
        }, {
            name: "BasketRail",
            x: 650,
            y: 326,
            orientation: 1,
            end: 450,
            basketID: 1
        }, {
            name: "Teleport",
            x: 579,
            y: 110,
            angle: 0,
            teleportID: 1
        }, {
            name: "Teleport",
            x: 450,
            y: 140,
            angle: 180,
            teleportID: 1
        }, {
            name: "Platform",
            x: 254.75,
            y: 319.05,
            width: 297,
            angle: -90
        }, {
            name: "PushButton",
            x: 320.6,
            y: 102.85,
            angle: -90,
            btnID: 2
        }, {
            name: "Platform",
            x: 327.5,
            y: 104.25,
            width: 57.1,
            angle: -90
        }, {
            name: "Hammer",
            x: 240,
            y: 80,
            angle: -139
        }, {
            name: "Peg",
            x: 165,
            y: 90
        }, {
            name: "PushButton",
            x: 52,
            y: 422.25,
            angle: 0,
            btnID: 1
        }, {
            name: "Platform",
            x: 50.6,
            y: 429,
            width: 57.1,
            angle: 0
        }, {
            name: "Gate",
            x: 550,
            y: 66,
            direction: "left",
            gateLeftID: 2,
            openAngle: 45
        }, {
            name: "Gate",
            x: 610,
            y: 66,
            direction: "right",
            gateRightID: 2,
            openAngle: 45
        }, {
            name: "Ball",
            x: 580,
            y: 55
        }]
    },
    ht[13] = {
        items: [{
            name: "Cannon",
            x: 355.6,
            y: 362.85,
            lowerAngle: -15,
            upperAngle: 15
        }, {
            name: "Platform",
            x: 355,
            y: 369.15,
            width: 60,
            angle: 0
        }, {
            name: "Tube",
            x: 80,
            y: 360,
            angle: -90,
            plusSensorFront: 30
        }, {
            name: "Tube",
            x: 120,
            y: 400,
            angle: 180,
            plusSensorFront: 30
        }, {
            name: "Tube",
            x: 80,
            y: 310,
            angle: -90
        }, {
            name: "Tube",
            x: 80,
            y: 260,
            angle: -90
        }, {
            name: "Tube",
            x: 80,
            y: 160,
            angle: -90,
            plusSensorFront: 50
        }, {
            name: "Tube",
            x: 80,
            y: 110,
            angle: -90
        }, {
            name: "Tube",
            x: 619.2,
            y: 70,
            angle: 0
        }, {
            name: "Tube",
            x: 569.2,
            y: 70,
            angle: 0
        }, {
            name: "Tube",
            x: 519.2,
            y: 70,
            angle: 0
        }, {
            name: "Tube",
            x: 469.2,
            y: 70,
            angle: 0
        }, {
            name: "Tube",
            x: 419.2,
            y: 70,
            angle: 0
        }, {
            name: "Tube",
            x: 369.2,
            y: 70,
            angle: 0
        }, {
            name: "Tube",
            x: 319.2,
            y: 70,
            angle: 0
        }, {
            name: "Tube",
            x: 269.2,
            y: 70,
            angle: 0
        }, {
            name: "Tube",
            x: 219.2,
            y: 70,
            angle: 0
        }, {
            name: "Tube",
            x: 169.2,
            y: 70,
            angle: 0
        }, {
            name: "Tube",
            x: 119.2,
            y: 70,
            angle: 0,
            plusSensorFront: 30
        }, {
            name: "Tube",
            x: 660,
            y: 110,
            angle: 90,
            plusSensorFront: 30
        }, {
            name: "Platform",
            x: 191.1,
            y: 405.7,
            width: 83.9,
            angle: -15
        }, {
            name: "Platform",
            x: 273.1,
            y: 339.1,
            width: 148.8,
            angle: -54
        }, {
            name: "Platform",
            x: 277.2,
            y: 201.4,
            width: 83.9,
            angle: -52
        }, {
            name: "PushButton",
            x: 162,
            y: 295.25,
            angle: 0,
            btnID: 1
        }, {
            name: "Platform",
            x: 160.6,
            y: 302.15,
            width: 57.1,
            angle: 0
        }, {
            name: "Swings",
            x: 220,
            y: 275,
            angle: -20
        }, {
            name: "Stopper",
            x: 203,
            y: 295
        }, {
            name: "Stopper",
            x: 233,
            y: 295
        }, {
            name: "Platform",
            x: 124.55,
            y: 290,
            width: 38,
            angle: -90
        }, {
            name: "Platform",
            x: 294.8,
            y: 250,
            width: 86.1,
            angle: -120
        }, {
            name: "Platform",
            x: 201.75,
            y: 160.6,
            width: 148.1,
            angle: -90
        }, {
            name: "BasketRail",
            x: 585,
            y: 133,
            orientation: 0,
            end: 433,
            basketID: 2
        }, {
            name: "PushButton",
            x: 667,
            y: 295.25,
            angle: 0,
            btnID: 2
        }, {
            name: "Platform",
            x: 670.6,
            y: 302.15,
            width: 57.1,
            angle: 0
        }, {
            name: "Platform",
            x: 541.75,
            y: 220.6,
            width: 268.1,
            angle: -90
        }, {
            name: "Platform",
            x: 526.7,
            y: 394,
            width: 50.7,
            angle: 37
        }, {
            name: "Platform",
            x: 495.7,
            y: 362.1,
            width: 52.7,
            angle: 52
        }, {
            name: "Platform",
            x: 448.05,
            y: 265.05,
            width: 168.5,
            angle: 67
        }, {
            name: "Platform",
            x: 526.45,
            y: 335.1,
            width: 52.7,
            angle: 52
        }, {
            name: "Platform",
            x: 478.8,
            y: 238.05,
            width: 168.5,
            angle: 67
        }, {
            name: "Platform",
            x: 404.2,
            y: 185.1,
            width: 30.5,
            angle: 22
        }, {
            name: "Platform",
            x: 448.25,
            y: 149.95,
            width: 30.5,
            angle: -83
        }, {
            name: "Platform",
            x: 634.25,
            y: 199.15,
            width: 221.1,
            angle: -90
        }, {
            name: "Gate",
            x: 50,
            y: 206,
            direction: "left",
            gateLeftID: 1,
            openAngle: 90
        }, {
            name: "Gate",
            x: 110,
            y: 206,
            direction: "right",
            gateRightID: 1,
            openAngle: 90
        }, {
            name: "Platform",
            x: 74.95,
            y: 52.8,
            width: 38.7,
            angle: 0
        }, {
            name: "Platform",
            x: 63.05,
            y: 72.6,
            width: 24.8,
            angle: 90
        }, {
            name: "Platform",
            x: 74.95,
            y: 417.05,
            width: 38.7,
            angle: 0
        }, {
            name: "Platform",
            x: 63.05,
            y: 396.85,
            width: 24.8,
            angle: 90
        }, {
            name: "Platform",
            x: 664.7,
            y: 52.8,
            width: 38.7,
            angle: 0
        }, {
            name: "Platform",
            x: 676.3,
            y: 72.6,
            width: 24.8,
            angle: 90
        }, {
            name: "Platform",
            x: 645.45,
            y: 396.7,
            width: 69.7,
            angle: -45
        }, {
            name: "Platform",
            x: 648,
            y: 340.35,
            width: 73.4,
            angle: 67
        }]
    },
    ht[14] = {
        items: [{
            name: "Cannon",
            x: 125.6,
            y: 352.85,
            lowerAngle: -45,
            upperAngle: 60
        }, {
            name: "Platform",
            x: 674.1,
            y: 283.2,
            width: 90,
            angle: 0
        }, {
            name: "Platform",
            x: 560.2,
            y: 365.45,
            width: 320,
            angle: 2
        }, {
            name: "Gate",
            x: 330,
            y: 356,
            direction: "left",
            gateLeftID: 1,
            openAngle: 45
        }, {
            name: "Gate",
            x: 390,
            y: 356,
            direction: "right",
            gateRightID: 1,
            openAngle: 45
        }, {
            name: "Platform",
            x: 508.5,
            y: 177,
            width: 281.9,
            angle: 2
        }, {
            name: "PushButton",
            x: 683.25,
            y: 276.25,
            angle: 0,
            btnID: 2
        }, {
            name: "Platform",
            x: 543.35,
            y: 278.2,
            width: 176.9,
            angle: 3
        }, {
            name: "Platform",
            x: 711.5,
            y: 235.5,
            width: 90,
            angle: -90
        }, {
            name: "Platform",
            x: 312.5,
            y: 333.5,
            width: 38,
            angle: -90
        }, {
            name: "PushButton",
            x: 124.7,
            y: 23.45,
            angle: 180,
            btnID: 1
        }, {
            name: "Platform",
            x: 125,
            y: 16.95,
            width: 85.1,
            angle: 0
        }, {
            name: "WeightBall",
            x: 312.5,
            y: 274.55
        }, {
            name: "Platform",
            x: 356.45,
            y: 200.4,
            width: 71.5,
            angle: -61
        }, {
            name: "Platform",
            x: 461.5,
            y: 227,
            width: 99,
            angle: -90
        }, {
            name: "Platform",
            x: 461.5,
            y: -102.95,
            width: 447.2,
            angle: -90
        }, {
            name: "BasketRail",
            x: 45,
            y: 421,
            orientation: 1,
            end: 645,
            basketID: 2
        }, {
            name: "Platform",
            x: 157.6,
            y: 361,
            width: 324.9,
            angle: 0
        }]
    },
    N.prototype = Object.create(PIXI.Container.prototype),
    N.prototype.constructor = N,
    N.prototype.run = function(t, e) {
        t && this.once("onMiddle", t, e || this);
        var i = this;
        this.show(function() {
            TweenMax.delayedCall(.1, function() {
                i.emit("onMiddle"),
                TweenMax.delayedCall(.1, this.hide, null, this);
            }, null, this)
        }, this)
    }
    ,
    N.prototype.show = function(t, e) {
        t && this.once("showComplete", t, e || this);
        var i = this;
        TweenMax.to(this, .4, {
            alpha: 1,
            onComplete: function() {
                i.emit("showComplete")
            }
        })
    }
    ,
    N.prototype.hide = function(t, e) {
        t && this.once("hideComplete", t, e || this);
        var i = this;
        TweenMax.to(this, .4, {
            alpha: 0,
            onComplete: function() {
                i.emit("hideComplete")
            }
        })
    }
    ;
    var lt = {
        pixi: null,
        physics: null,
        physWorld: null,
        physScale: 30,
        soundMng: null,
        assets: null,
        inited: !1,
        audioEnabled: !1,
        musicOn: !0,
        soundOn: !0,
        levelMng: null,
        menuState: null,
        playState: null,
        shutter: null,
        tutorial: null,
        SAVE_KEY_LAST_OPENED: "lastOpened",
        SAVE_KEY_MUSIC: "saveMusic",
        SAVE_KEY_SOUND: "saveSound",
        storage: null,
        browserEvents: null,
        gameWidth0: 720,
        gameHeight0: 500,
        gameMaxWidth0: 720,
        gameMaxHeight0: 500,
        gameWidth1: null,
        gameHeight1: null,
        gameMaxWidth1: null,
        gameMaxHeight1: null,
        border: null,
        canvasWidth: null,
        canvasHeight: null,
        scale: 1,
        imgRotate: null,
        rnd: null,
        device: null,
        fps: null,
        sponsorURL: ""
    };
    t.App = lt,
    t.trace = console.log,
    H(),
    lt.mainTheme = null,
    lt._checkAudio = function() {
        lt.audioEnabled ? (void 0 != lt.storage.get(lt.SAVE_KEY_MUSIC) && (lt.musicOn = "true" == lt.storage.get(lt.SAVE_KEY_MUSIC)),
        void 0 != lt.storage.get(lt.SAVE_KEY_SOUND) && (lt.soundOn = "true" == lt.storage.get(lt.SAVE_KEY_SOUND)),
        lt.mainTheme = lt.assets.getSound("sndTheme"),
        lt.mainTheme.loop = !0,
        lt.mainTheme.volume = .9,
        lt.musicOn && lt.mainTheme.play(),
        lt.browserEvents.on("onPageShow", function(t) {
            PIXI.sound.resumeAll()
        }),
        lt.browserEvents.on("onPageHide", function(t) {
            PIXI.sound.pauseAll()
        }),
        lt.browserEvents.on("onFocusGet", function(t) {
            PIXI.sound.resumeAll()
        }),
        lt.browserEvents.on("onFocusLost", function(t) {
            PIXI.sound.pauseAll()
        })) : (lt.musicOn = !1,
        lt.soundOn = !1)
    }
    ,
    lt.setMusicEnable = function(t) {
        lt.audioEnabled !== !1 && (lt.musicOn = t,
        lt.musicOn ? lt.mainTheme.isPlaying || (lt.mainTheme.resume(),
        lt.mainTheme.isPlaying || lt.mainTheme.play()) : lt.mainTheme.isPlaying && lt.mainTheme.pause(),
        lt.storage.set(lt.SAVE_KEY_MUSIC, lt.musicOn))
    }
    ,
    lt.switchMusicEnable = function() {
        lt.setMusicEnable(!lt.musicOn)
    }
    ,
    lt.setSoundEnable = function(t) {
        lt.audioEnabled !== !1 && (lt.soundOn = t,
        lt.storage.set(lt.SAVE_KEY_SOUND, lt.soundOn))
    }
    ,
    lt.switchSoundEnable = function() {
        lt.setSoundEnable(!lt.soundOn)
    }
    ,
    t.unlockAllLevels = function() {
        lt.levelMng && lt.levelMng.unlockAllLevels(),
        lt.menuState && lt.menuState._levelsDialog.refresh()
    }
    ,
    parent.unlockAllLevels = t.unlockAllLevels
}(window);

//unlockAllLevels();
