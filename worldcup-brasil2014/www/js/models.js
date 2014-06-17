var Worldcup = {};

(function() {
    
    /**
     * Stadium constructor.
     */
    function Stadium(id, name, location, state, image, info) {
        this._id = id;
        this._name = name;
        this._location = location;
        this._state = state;
        this._image = image;
        this._info = info;
    };
    
    Object.defineProperty(Stadium.prototype, 'id', {
        get: function() { return this._id; },
        set: function(id) { this._id = id; }
    });
    
    Object.defineProperty(Stadium.prototype, 'name', {
        get: function() { return this._name; },
        set: function(name) { this._name = name; }
    });
    
    Object.defineProperty(Stadium.prototype, 'state', {
        get: function() { return this._state; },
        set: function(state) { this._id = state; }
    });
    
    Object.defineProperty(Stadium.prototype, 'image', {
        get: function() { return this._image; },
        set: function(image) { this._image = image; }
    });
    
    Object.defineProperty(Stadium.prototype, 'info', {
        get: function() { return this._info; },
        set: function(info) { this._info = info; }
    });
    
    Stadium.prototype.lat = function() {
        return this._location.lat;
    };
    
    Stadium.prototype.lng = function() {
        return this._location.lng;
    };
    
    /**
     * Stadiums constructor.
     */
    function Stadiums() {
        this._stadiums = [];
    };
    
    Stadiums.prototype.add = function(stadium) {
        this._stadiums.push(stadium);
    };
    
    Stadiums.prototype.getById = function(id) {
        var item = null;
        
        this._stadiums.some(function(stadium, index) {
            if(id === stadium.id) {
                item = stadium;
                return true;
            } else {
                return false;
            }
        });
        
        return item;
    };
    
    Stadiums.prototype.get = function(index) {
        return this._stadiums[index];
    };
    
    Stadiums.prototype.size = function() {
        return this._stadiums.length;
    };
    
    // initialize
    
    var stadiums = new Stadiums();
    stadiums.add(new Stadium(1, 'Maracanã', { lat: -22.912109, lng: -43.230156 }, 'Rio de Janeiro', 'assets/img/maracana.png', 
                             'Group F – Argentina vs Bosnia-Herzegovina\n' +
                              'Group B – Spain vs Chile\n' +
                              'Group H – Belgium vs Russia\n' +
                              'Group E – Ecuador vs France\n' +
                              'Round of 16 – 1C v 2D\n' +
                              'Quarter-final – W53 v W54\n' +
                              'Final – W61 v W62'));
    
    stadiums.add(new Stadium(2, 'Arena de São Paulo', { lat: -23.545296, lng: -46.474023 }, 'São Paulo', 'assets/img/arena_sao_paulo.png', 'Group A – Brazil v Croatia (opening match)\n' +
                             'Group D – Uruguay vs England\n' +
                            'Group B – Netherlands vs Chile\n' +
                            'Group H – Korea Republic vs Belgium\n' +
                            'Round of 16 – 1F v 2E\n' +
                            'Semi-final – W59 v W60'));
    
    stadiums.add(new Stadium(3, 'Arena da Amazônia', { lat: -3.083142, lng: -60.028108 }, 'Manaus', 'assets/img/arena_amazonia.png',
                             'Group D – England vs Italy\n' +
                              'Group A – Cameroon vs Croatia\n' +
                              'Group G – USA vs Portugal\n' +
                              'Group E – Honduras vs Switzerland'));
    
    stadiums.add(new Stadium(4, 'Mineirão ', { lat: -19.865981, lng: -43.971047 }, 'Belo Horizonte'));
    stadiums.add(new Stadium(5, 'Estádio Nacional de Brasilia', { lat: -15.783619, lng: -47.899050 }, 'Brasilia')); 
    stadiums.add(new Stadium(6, 'Arena Castelão', { lat: -3.807379, lng: -38.522511 }, 'Fortaleza'));
    stadiums.add(new Stadium(7, 'Arena Fonte Nova', { lat: -12.978830, lng: -38.504371 }, 'Salvador'));
    stadiums.add(new Stadium(8, 'Estádio Beira-Rio', { lat: -30.065590, lng: -51.235818 }, 'Porto Alegre'));
    stadiums.add(new Stadium(9, 'Arena Pernambuco', { lat: -8.040650, lng: -35.008205 }, 'Recife'));
    stadiums.add(new Stadium(10, 'Arena Pantanal', { lat: -15.604017, lng: -56.121633 }, 'Cuiabá'));
    stadiums.add(new Stadium(11, 'Arena das Dunas', { lat: -5.826827, lng: -35.212430 }, 'Natal'));
    stadiums.add(new Stadium(12, 'Arena da Baixada', { lat: -25.448207, lng: -49.276984 }, 'Curitiba'));
    
    Worldcup.stadiums = stadiums;    
})();
























