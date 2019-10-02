var randomstring = require('randomstring');
var randomMobile = require('random-mobile');
var randomFullName = require('random-fullName');


module.exports = class tools {

    constructor() {}

    genCatchall(domain, number) {
        var newemails = [];
        var dom;

        if (domain.includes("@")) {
            dom = domain.split("@")[1];
        } else {
            dom = domain;
        }

        for (var i = 0; i < number; i++) {
            var randstr = randomstring.generate({
                length: 11,
                charset: 'alphanumeric'
            });
            var email = `${randstr}@${dom}`;
            newemails.push(email);
        }
        //return newemails;
        return newemails.join('\n');
    }

    genGmailDots(domain, number) {
        //THE DOT TRICK ONLY WORKS WITH GMAILS
        var jiggedm = [];
        var dom;
        // Get two properties

        if (domain.includes("@")) {
            dom = domain.split("@")[0];
        } else {
            dom = domain;
        }

        var mail = (dom);
        var num = (number);

        var leng = mail.length;

        for (var i = 1; i < num; i++) {
            if (!(i >= leng)) {
                if (mail.charAt(i - 1) != ' ' && mail.charAt(i) != ' ') {
                    var start = mail.substr(0, i);
                    var end = mail.substr(i);
                    var new_str = start + "." + end;
                    for (var j = i + 2; j < num + 2; j += 2) {
                        if (!(j + 1 >= leng * 2)) {
                            if (new_str.charAt(j - 1) != ' ' && new_str.charAt(j) != ' ') {
                                start = new_str.substr(0, j);
                                end = new_str.substr(j);
                                new_str = start + "." + end;
                                if (jiggedm.length != num) {
                                    var username = new_str.replace(/\.+$/g, '');
                                    jiggedm.push(username + '@gmail.com');
                                } else {
                                    break;
                                }
                            }
                        }
                    }

                }
            }
        }
        return jiggedm.join('\n');
    }

    prefix(addyl1, num) {
        var prefx = [];

        for (var i = 0; i < num; i++) {
            var randstr = randomstring.generate({
                length: 4,
                charset: 'alphabetic'
            });
            var pre = `${randstr} ${addyl1}`;
            prefx.push(pre);
        }

        return prefx.join('\n');
    }

    suffix(addy1, num) {
        var sufx = ["Alley", "Ally", "Aly", "Anex", "Annex", "Annx", "Anx", "Arc", "Arcade", "Av", "Ave", "Aven", "Avenu", "Avenue", "Avn", "Avnue", "Bayoo", "Bayou", "Bch", "Beach", "Bend", "Bnd", "Blf", "Bluf", "Bluff", "Bluffs", "Bot", "Btm", "Bottm", "Bottom", "Blvd", "Boul", "Boulevard", "Boulv", "Br", "Brnch", "Branch", "Brdge", "Brg", "Bridge", "Brk", "Brook", "Brooks", "Burg", "Burgs", "Byp", "Bypa", "Bypas", "Bypass", "Byps", "Camp", "Cp", "Cmp", "Canyn", "Canyon", "Cnyn", "Cape", "Cpe", "Causeway", "Causwa", "Cswy", "Cen", "Cent", "Center", "Centr", "Centre", "Cnter", "Cntr", "Ctr", "Centers", "Cir", "Circ", "Circl", "Circle", "Crcl", "Crcle", "Circles", "Clf", "Cliff", "Clfs", "Cliffs", "Clb", "Club", "Common", "Commons", "Cor", "Corner", "Corners", "Cors", "Course", "Crse", "Court", "Ct", "Courts", "Cts", "Cove", "Cv", "Coves", "Creek", "Crk", "Crescent", "Cres", "Crsent", "Crsnt", "Crest", "Crossing", "Crssng", "Xing", "Crossroad", "Crossroads", "Curve", "Dale", "Dl", "Dam", "Dm", "Div", "Divide", "Dv", "Dvd", "Dr", "Driv", "Drive", "Drv", "Drives", "Est", "Estate", "Estates", "Ests", "Exp", "Expr", "Express", "Expressway", "Expw", "Expy", "Ext", "Extension", "Extn", "Extnsn", "Exts", "Fall", "Falls", "Fls", "Ferry", "Frry", "Fry", "Field", "Fld", "Fields", "Flds", "Flat", "Flt", "Flats", "Flts", "Ford", "Frd", "Fords", "Forest", "Forests", "Frst", "Forg", "Forge", "Frg", "Forges", "Fork", "Frk", "Forks", "Frks", "Fort", "Frt", "Ft", "Freeway", "Freewy", "Frway", "Frwy", "Fwy", "Garden", "Gardn", "Grden", "Grdn", "Gardens", "Gdns", "Grdns", "Gateway", "Gatewy", "Gatway", "Gtway", "Gtwy", "Glen", "Gln", "Glens", "Green", "Grn", "Greens", "Grov", "Grove", "Grv", "Groves", "Harb", "Harbor", "Harbr", "Hbr", "Hrbor", "Harbors", "Haven", "Hvn", "Ht", "Hts", "Highway", "Highwy", "Hiway", "Hiwy", "Hway", "Hwy", "Hill", "Hl", "Hills", "Hls", "Hllw", "Hollow", "Hollows", "Holw", "Holws", "Inlt", "Is", "Island", "Islnd", "Islands", "Islnds", "Iss", "Isle", "Isles", "Jct", "Jction", "Jctn", "Junction", "Junctn", "Juncton", "Jctns", "Jcts", "Junctions", "Key", "Ky", "Keys", "Kys", "Knl", "Knol", "Knoll", "Knls", "Knolls", "Lk", "Lake", "Lks", "Lakes", "Land", "Landing", "Lndg", "Lndng", "Lane", "Ln", "Lgt", "Light", "Lights", "Lf", "Loaf", "Lck", "Lock", "Lcks", "Locks", "Ldg", "Ldge", "Lodg", "Lodge", "Loop", "Loops", "Mall", "Mnr", "Manor", "Manors", "Mnrs", "Meadow", "Mdw", "Mdws", "Meadows", "Medows", "Mews", "Mill", "Mills", "Missn", "Mssn", "Motorway", "Mnt", "Mt", "Mount", "Mntain", "Mntn", "Mountain", "Mountin", "Mtin", "Mtn", "Mntns", "Mountains", "Nck", "Neck", "Orch", "Orchard", "Orchrd", "Oval", "Ovl", "Overpass", "Park", "Prk", "Parks", "Parkway", "Parkwy", "Pkway", "Pkwy", "Pky", "Parkways", "Pkwys", "Pass", "Passage", "Path", "Paths", "Pike", "Pikes", "Pine", "Pines", "Pnes", "Pl", "Plain", "Pln", "Plains", "Plns", "Plaza", "Plz", "Plza", "Point", "Pt", "Points", "Pts", "Port", "Prt", "Ports", "Prts", "Pr", "Prairie", "Prr", "Rad", "Radial", "Radiel", "Radl", "Ramp", "Ranch", "Ranches", "Rnch", "Rnchs", "Rapid", "Rpd", "Rapids", "Rpds", "Rest", "Rst", "Rdg", "Rdge", "Ridge", "Rdgs", "Ridges", "Riv", "River", "Rvr", "Rivr", "Rd", "Road", "Roads", "Rds", "Route", "Row", "Rue", "Run", "Shl", "Shoal", "Shls", "Shoals", "Shoar", "Shore", "Shr", "Shoars", "Shores", "Shrs", "Skyway", "Spg", "Spng", "Spring", "Sprng", "Spgs", "Spngs", "Springs", "Sprngs", "Spur", "Spurs", "Sq", "Sqr", "Sqre", "Squ", "Square", "Sqrs", "Squares", "Sta", "Station", "Statn", "Stn", "Stra", "Strav", "Straven", "Stravenue", "Stravn", "Strvn", "Strvnue", "Stream", "Streme", "Strm", "Street", "Strt", "St", "Str", "Streets", "Smt", "Sumit", "Sumitt", "Summit", "Ter", "Terr", "Terrace", "Throughway", "Trace", "Traces", "Trce", "Track", "Tracks", "Trak", "Trk", "Trks", "Trafficway", "Trail", "Trails", "Trl", "Trls", "Trailer", "Trlr", "Trlrs", "Tunel", "Tunl", "Tunls", "Tunnel", "Tunnels", "Tunnl", "Trnpk", "Turnpike", "Turnpk", "Underpass", "Un", "Union", "Unions", "Valley", "Vally", "Vlly", "Vly", "Valleys", "Vlys", "Vdct", "Via", "Viadct", "Viaduct", "View", "Vw", "Views", "Vws", "Vill", "Villag", "Village", "Villg", "Villiage", "Vlg", "Villages", "Vlgs", "Ville", "Vl", "Vis", "Vist", "Vista", "Vst", "Vsta", "Walk", "Walks", "Wall", "Wy", "Way", "Ways", "Well", "Wells", "Wls"];
        var adi1 = [];
        addy1 = addy1.replace(/\s*$/, '');
        var lastIndex = addy1.lastIndexOf(" ");
        var addy1s = addy1.substring(0, lastIndex);

        if (num > 501) {
            num = 501;
        }

        for (let i = 0; i < num; i++) {
            //chops off first element and puts it into temp var
            var tem = sufx.shift();
            // gets random suffix's and imports them onto the end of the address
            let l1s = `${addy1s} ${tem}`;
            adi1.push(l1s)
        }
        return adi1.join('\n');
    }

    prefixsuffix(addy1, num) {
        var sufx = ["Alley", "Ally", "Aly", "Anex", "Annex", "Annx", "Anx", "Arc", "Arcade", "Av", "Ave", "Aven", "Avenu", "Avenue", "Avn", "Avnue", "Bayoo", "Bayou", "Bch", "Beach", "Bend", "Bnd", "Blf", "Bluf", "Bluff", "Bluffs", "Bot", "Btm", "Bottm", "Bottom", "Blvd", "Boul", "Boulevard", "Boulv", "Br", "Brnch", "Branch", "Brdge", "Brg", "Bridge", "Brk", "Brook", "Brooks", "Burg", "Burgs", "Byp", "Bypa", "Bypas", "Bypass", "Byps", "Camp", "Cp", "Cmp", "Canyn", "Canyon", "Cnyn", "Cape", "Cpe", "Causeway", "Causwa", "Cswy", "Cen", "Cent", "Center", "Centr", "Centre", "Cnter", "Cntr", "Ctr", "Centers", "Cir", "Circ", "Circl", "Circle", "Crcl", "Crcle", "Circles", "Clf", "Cliff", "Clfs", "Cliffs", "Clb", "Club", "Common", "Commons", "Cor", "Corner", "Corners", "Cors", "Course", "Crse", "Court", "Ct", "Courts", "Cts", "Cove", "Cv", "Coves", "Creek", "Crk", "Crescent", "Cres", "Crsent", "Crsnt", "Crest", "Crossing", "Crssng", "Xing", "Crossroad", "Crossroads", "Curve", "Dale", "Dl", "Dam", "Dm", "Div", "Divide", "Dv", "Dvd", "Dr", "Driv", "Drive", "Drv", "Drives", "Est", "Estate", "Estates", "Ests", "Exp", "Expr", "Express", "Expressway", "Expw", "Expy", "Ext", "Extension", "Extn", "Extnsn", "Exts", "Fall", "Falls", "Fls", "Ferry", "Frry", "Fry", "Field", "Fld", "Fields", "Flds", "Flat", "Flt", "Flats", "Flts", "Ford", "Frd", "Fords", "Forest", "Forests", "Frst", "Forg", "Forge", "Frg", "Forges", "Fork", "Frk", "Forks", "Frks", "Fort", "Frt", "Ft", "Freeway", "Freewy", "Frway", "Frwy", "Fwy", "Garden", "Gardn", "Grden", "Grdn", "Gardens", "Gdns", "Grdns", "Gateway", "Gatewy", "Gatway", "Gtway", "Gtwy", "Glen", "Gln", "Glens", "Green", "Grn", "Greens", "Grov", "Grove", "Grv", "Groves", "Harb", "Harbor", "Harbr", "Hbr", "Hrbor", "Harbors", "Haven", "Hvn", "Ht", "Hts", "Highway", "Highwy", "Hiway", "Hiwy", "Hway", "Hwy", "Hill", "Hl", "Hills", "Hls", "Hllw", "Hollow", "Hollows", "Holw", "Holws", "Inlt", "Is", "Island", "Islnd", "Islands", "Islnds", "Iss", "Isle", "Isles", "Jct", "Jction", "Jctn", "Junction", "Junctn", "Juncton", "Jctns", "Jcts", "Junctions", "Key", "Ky", "Keys", "Kys", "Knl", "Knol", "Knoll", "Knls", "Knolls", "Lk", "Lake", "Lks", "Lakes", "Land", "Landing", "Lndg", "Lndng", "Lane", "Ln", "Lgt", "Light", "Lights", "Lf", "Loaf", "Lck", "Lock", "Lcks", "Locks", "Ldg", "Ldge", "Lodg", "Lodge", "Loop", "Loops", "Mall", "Mnr", "Manor", "Manors", "Mnrs", "Meadow", "Mdw", "Mdws", "Meadows", "Medows", "Mews", "Mill", "Mills", "Missn", "Mssn", "Motorway", "Mnt", "Mt", "Mount", "Mntain", "Mntn", "Mountain", "Mountin", "Mtin", "Mtn", "Mntns", "Mountains", "Nck", "Neck", "Orch", "Orchard", "Orchrd", "Oval", "Ovl", "Overpass", "Park", "Prk", "Parks", "Parkway", "Parkwy", "Pkway", "Pkwy", "Pky", "Parkways", "Pkwys", "Pass", "Passage", "Path", "Paths", "Pike", "Pikes", "Pine", "Pines", "Pnes", "Pl", "Plain", "Pln", "Plains", "Plns", "Plaza", "Plz", "Plza", "Point", "Pt", "Points", "Pts", "Port", "Prt", "Ports", "Prts", "Pr", "Prairie", "Prr", "Rad", "Radial", "Radiel", "Radl", "Ramp", "Ranch", "Ranches", "Rnch", "Rnchs", "Rapid", "Rpd", "Rapids", "Rpds", "Rest", "Rst", "Rdg", "Rdge", "Ridge", "Rdgs", "Ridges", "Riv", "River", "Rvr", "Rivr", "Rd", "Road", "Roads", "Rds", "Route", "Row", "Rue", "Run", "Shl", "Shoal", "Shls", "Shoals", "Shoar", "Shore", "Shr", "Shoars", "Shores", "Shrs", "Skyway", "Spg", "Spng", "Spring", "Sprng", "Spgs", "Spngs", "Springs", "Sprngs", "Spur", "Spurs", "Sq", "Sqr", "Sqre", "Squ", "Square", "Sqrs", "Squares", "Sta", "Station", "Statn", "Stn", "Stra", "Strav", "Straven", "Stravenue", "Stravn", "Strvn", "Strvnue", "Stream", "Streme", "Strm", "Street", "Strt", "St", "Str", "Streets", "Smt", "Sumit", "Sumitt", "Summit", "Ter", "Terr", "Terrace", "Throughway", "Trace", "Traces", "Trce", "Track", "Tracks", "Trak", "Trk", "Trks", "Trafficway", "Trail", "Trails", "Trl", "Trls", "Trailer", "Trlr", "Trlrs", "Tunel", "Tunl", "Tunls", "Tunnel", "Tunnels", "Tunnl", "Trnpk", "Turnpike", "Turnpk", "Underpass", "Un", "Union", "Unions", "Valley", "Vally", "Vlly", "Vly", "Valleys", "Vlys", "Vdct", "Via", "Viadct", "Viaduct", "View", "Vw", "Views", "Vws", "Vill", "Villag", "Village", "Villg", "Villiage", "Vlg", "Villages", "Vlgs", "Ville", "Vl", "Vis", "Vist", "Vista", "Vst", "Vsta", "Walk", "Walks", "Wall", "Wy", "Way", "Ways", "Well", "Wells", "Wls"];
        var prefx = [];

        var l1f = addy1.trim();
        var lastIndex = l1f.lastIndexOf(" ");
        var l1ss = l1f.substring(0, lastIndex);


        if (num > 501) {
            num = 501;
        }

        for (var i = 0; i < num; i++) {
            // makes random 11 digit string
            var randstr = randomstring.generate({
                length: 4,
                charset: 'alphabetic'
            });
            var tem = sufx.shift();

            var pre = `${randstr} ${l1ss} ${tem}`;

            prefx.push(pre);
        }


        return prefx.join('\n');
    }

    l2(num) {
        var l2s = [];
        // Log the results.

        for (var i = 0; i < num; i++) {
            // picks number between numbers 1-5
            var temp = (Math.random() * 100) + 1;
            var randstr = randomstring.generate({
                length: 3,
                charset: 'numeric'
            });
            var randA = randomstring.generate({
                length: 1,
                charset: 'alphabetic'
            });
            var randN = randomstring.generate({
                length: 1,
                charset: 'numeric'
            });
            var addys;
            if (temp < 20) {
                addys = `Room ${randstr}`;
                l2s.push(addys);
            } else if (temp < 40) {
                addys = `Apt ${randstr}`;
                l2s.push(addys);
            } else if (temp < 50) {
                addys = `Suite ${randstr}`;
                l2s.push(addys);
            } else if (temp < 60) {
                addys = `Ste ${randstr}`;
                l2s.push(addys);
            } else if (temp < 80) {
                addys = `Unit ${randA}`;
                l2s.push(addys);
            } else {
                addys = `Floor ${randN}`;
                l2s.push(addys);
            }

        }

        return l2s.join('\n');
    }

    genNum(num) {
        var ranNum = [];

        for (var i = 0; i < num; i++) {
            var randnum = randomMobile();
            ranNum.push(randnum);
        }
        return ranNum.join('\n');
    }
    
    genName(num) {
        var ranName = [];
    
        for (var i = 0; i < num; i++) {
            var randomName = randomFullName();
            ranName.push(randomName);
        }
        return ranName.join('\n');
    }

}