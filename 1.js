(function() { var c2x = NEJ.P,
        H2x = c2x("nej.ut"),
        D2x = c2x("nm.w"),
        M2x = c2x("nej.p"),
        b2x, K2x;
    D2x.wO1x = NEJ.C();
    b2x = D2x.wO1x.O2x(H2x.mO7H);
    K2x = D2x.wO1x.cg3x;
    b2x.bk2x = function(e2x) { e2x.onbeforelistload = e2x.onbeforelistload || function(d2x) { d2x.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>' };
        e2x.onemptylist = e2x.onemptylist || function(d2x) { d2x.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>暂无数据！</h3></div>' }; var cutTitle = function(eI4M, bp2x) { var bUM3x = M2x.cS3x.browser; var LA5F = M2x.cS3x.version; if (bUM3x == "ie" && LA5F == "6.0" && eI4M.length > bp2x) { return eI4M.substring(0, bp2x) } else { return eI4M } }; if (!!e2x.item && typeof e2x.item == "object") { e2x.item.cutTitle = cutTitle } else { var bUr3x = e2x.item;
            e2x.item = { klass: bUr3x, cutTitle: cutTitle } } e2x.delta = e2x.delta || 200;
        e2x.sbody = e2x.sbody || window;
        this.bl2x(e2x) } })();
(function() { var c2x = NEJ.P,
        p2x = c2x("nm.d"),
        b2x, K2x;
    p2x.eO4S({ "discover-rec": { url: "/api/discover-rec", type: "GET", url: ["banners", "playlists", "topPlayLists", "djPlayLists", "albums", "songs"], format: function(zm2x, bTN3x, bTL3x, bTz3x, bTr3x, im5r, e2x) { return { banners: zm2x, playLists: bTN3x, topPlayLists: bTL3x, djPlayLists: bTz3x, albums: bTr3x, songs: im5r } }, onload: "onDiscoverRecLoad" }, banners: { url: "/api/banner/get", type: "GET", format: function(m2x, e2x) { m2x.banners = m2x.banners || []; return m2x.banners } }, playlists: { url: "/api/playlist/list", type: "GET", format: function(m2x, e2x) { m2x.playlists = m2x.playlists || []; return m2x.playlists }, onload: "onPlayListsLoad" }, topPlayLists: { url: "/api/discovery/topPlaylist", type: "GET", format: function(m2x, e2x) { m2x.playlists = m2x.playlists || []; return m2x.playlists } }, djPlayLists: { url: "/api/djprogram/list", type: "GET", format: function(m2x, e2x) { m2x.result = m2x.result || [];
                m2x.total = m2x.total > 1e3 ? 1e3 : m2x.total; return { total: m2x.total, list: m2x.result } }, onload: "onDjPlayListsLoad" }, albums: { url: "/api/discovery/newAlbum", type: "GET", format: function(m2x, e2x) { m2x.albums = m2x.albums || [];
                m2x.total = m2x.total > 1e3 ? 1e3 : m2x.total; return { total: m2x.total, list: m2x.albums } }, onload: "onAlbumsLoad" }, songs: { url: "/api/discovery/recommendedSong", type: "GET", format: function(m2x, e2x) { m2x.songs = m2x.songs || []; return m2x.songs }, onload: "onSongsLoad" }, "discplaylist-list": { url: "/api/playlist/list", format: function(m2x, e2x) { m2x.playlists = m2x.playlists || [];
                m2x.total = m2x.total > 3500 ? 3500 : m2x.total; return { total: m2x.total, list: m2x.playlists } } }, "djPlayList-list": { url: "/api/djprogram/list", format: function(m2x, e2x) { m2x.result = m2x.result || [];
                m2x.total = m2x.total > 2e3 ? 2e3 : m2x.total; return { list: m2x.result, total: m2x.total } } }, "topuser-list": { url: "/api/discovery/topUserList", format: function(m2x, e2x) { return m2x.users } }, "topdj-list": { url: "/api/discovery/topStarList", format: function(m2x, e2x) { return m2x.users } }, "artist-list": { url: "/api/artist/list", format: function(m2x) { return m2x.artists } }, "topArtist-list": { url: "/api/artist/top", format: function(m2x) { return m2x.artists } }, "hotAlbum-list": { url: "/api/discovery/newAlbum", format: function(m2x, e2x) { m2x.albums = m2x.albums || []; return m2x.albums } }, "newAlbum-list": { url: "/api/album/new", format: function(m2x, e2x) { m2x.albums = m2x.albums || [];
                m2x.total = m2x.total > 1e3 ? 1e3 : m2x.total; return { list: m2x.albums, total: m2x.total } } } });
    p2x.VA8s = NEJ.C();
    b2x = p2x.VA8s.O2x(p2x.hc5h);
    b2x.cxy0x = function(e2x) { e2x.onload = this.z2x.g2x(this, "onDiscoverRecLoad");
        e2x.data = { banners: { limit: 8 }, playlists: { limit: 12 }, topPlayLists: { limit: 6 }, djPlayLists: { limit: 6 }, albums: { limit: 7 }, songs: { limit: 7 } };
        this.ck3x(p2x.x2x("discover-rec"), e2x) } })();
(function() { var c2x = NEJ.P,
        Y2x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        H2x = c2x("nej.ut"),
        F2x = c2x("nm.m"),
        v2x = c2x("nej.j"),
        p2x = c2x("nm.d"),
        L2x = c2x("nm.m.disc"),
        D2x = c2x("nm.w"),
        l2x = c2x("nm.x"),
        b2x, K2x;
    L2x.zh2x = NEJ.C();
    b2x = L2x.zh2x.O2x(F2x.cK3x);
    b2x.bJ3x = function(e2x) { this.bM3x();
        a1x.cF3x("template-box");
        this.hK5P = { limit: 60, count: 4, parent: "m-artist-box", item: { klass: "m-artist-item", firstAlia: l2x.Ib4f }, cache: { klass: p2x.VA8s } };
        this.bkP3x() };
    b2x.bkP3x = function(e2x) { var R2x = this.hK5P.cache,
            ip5u = Y2x;
        ip5u.categoryCode = 5001;
        R2x.lkey = "artist-" + ip5u.categoryCode;
        R2x.data = ip5u; if (!!this.dr3x) this.dr3x.S2x();
        this.dr3x = D2x.wO1x.B2x(this.hK5P) };
    new L2x.zh2x })()