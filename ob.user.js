// ==UserScript==
// @name                Omerta Beyond
// @id                  Omerta Beyond
// @version             2.0
// @date                09-05-2013
// @description         Omerta Beyond 2.0 (We're back to reclaim the throne ;))
// @homepageURL         http://www.omertabeyond.com/
// @namespace           v4.omertabeyond.com
// @updateURL           https://raw.github.com/OmertaBeyond/OBv2/master/beyond.meta.js
// @supportURL          https://github.com/OmertaBeyond/OBv2/issues
// @icon                https://raw.github.com/OmertaBeyond/OBv2/master/images/logo.small.png
// @screenshot          https://raw.github.com/OmertaBeyond/OBv2/master/images/logo.small.png
// @author              OBDev Team <info@omertabeyond.com>
// @author              vBm <vbm@omertabeyond.com>
// @author              Dopedog <dopedog@omertabeyond.com>
// @author              Rix <rix@omertabeyond.com>
// @author              MrWhite <mrwhite@omertabeyond.com>
// @license             GNU General Public License v3
// @contributionURL     https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=sbanks%40omertabeyond%2ecom&lc=GB&item_name=Omerta%20Beyond&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted
// @contributionAmount  €3.00
// @encoding            UTF-8
// @priority            1
// @require             https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @resource	css		https://raw.github.com/OmertaBeyond/OBv2/master/scripts/beyond.css
// @resource    favicon https://raw.github.com/OmertaBeyond/OBv2/master/images/favicon.png
// @resource    logo    https://raw.github.com/OmertaBeyond/OBv2/master/images/logo.png
// @resource    prev    https://raw.github.com/OmertaBeyond/OBv2/master/images/prev.png
// @resource    next    https://raw.github.com/OmertaBeyond/OBv2/master/images/next.png
// @resource    reply   https://raw.github.com/OmertaBeyond/OBv2/master/images/reply.png
// @resource    delete  https://raw.github.com/OmertaBeyond/OBv2/master/images/delete.png
// @resource    log		https://raw.github.com/OmertaBeyond/OBv2/master/images/changelog.png
// @include             http://*.omerta3.com/*
// @include             http://omerta3.com/*
// @include             http://*.barafranca.com/*
// @include             http://barafranca.com/*
// @include             http://*.barafranca.us/*
// @include             http://barafranca.us/*
// ==/UserScript==

// Prevent Omerta's jQuery to conflict with our
this.$ = this.jQuery = jQuery.noConflict(true);

/*
* Define constants for our website
*/

const OB_WEBSITE = 'http://www.omertabeyond.com';
const OB_API_WEBSITE = 'http://gm.omertabeyond.com';
const OB_NEWS_WEBSITE = 'http://news.omertabeyond.com';
const OB_STATS_WEBSITE = 'http://stats.omertabeyond.com';
const OB_RIX_WEBSITE = 'http://rix.omertabeyond.com';
const v = 'com';
const cur_v = '4.01';
const RAID_SPOTS_CORDS = {
	'Detroit': {
		'Car Lot (Thunderbolt)': 'F3',
		'Car Lot (Avus)': 'G10',
		'Car Lot (Spyder)': 'J6',
		'Whiskey Stills': 'G6',
		'Farm (Marijuana)': 'F1',
		'Farm (Beer)': 'G1',
		'Docks (Heroin)': 'H8',
		'Docks (Cognac)': '?',
		'Factory': 'E4',
		'Scrapyard': 'I2',
		'Bar': 'G7',
		'Restaurant': 'H7',
		'Army Surplus Store': 'F10',
		'Lawyers Office': 'H6'
	},
	'Chicago': {
		'Car Lot (Thunderbolt)': 'D5',
		'Car Lot (Avus)': 'J7',
		'Car Lot (Spyder)': 'H5',
		'Whiskey Stills': 'F6',
		'Farm (Marijuana)': 'L9',
		'Farm (Beer)': 'M7',
		'Docks (Heroin)': 'F7',
		'Docks (Cognac)': '?',
		'Factory': 'M10',
		'Scrapyard': 'L7',
		'Bar': 'H6',
		'Restaurant': 'H8',
		'Army Surplus Store': 'C4',
		'Lawyers Office': 'E5'
	},
	'Las Vegas': {
		'Car Lot (Spyder)': 'J7',
		'Scrapyard': 'F6',
		'Bar': 'H7',
		'Restaurant': 'I6',
		'Army Surplus Store': 'E5'
	},
	'Corleone': {
		'Farm (Marijuana)': 'I7',
		'Scrapyard': 'G6',
		'Restaurant': 'H6',
		'Army Surplus Store': 'F5'
	},
	'Palermo': {
		'Car Lot (Thunderbolt)': 'E5',
		'Car Lot (Spyder)': 'J8',
		'Farm (Marijuana)': 'H4',
		'Factory': 'G6',
		'Scrapyard': 'J7',
		'Bar': 'H5',
		'Restaurant': 'I6',
		'Army Surplus Store': 'G4',
		'Lawyers Office': 'H6'
	},
	'New York': {
		'Car Lot (Thunderbolt)': 'D4',
		'Car Lot (Avus)': 'K6',
		'Car Lot (Spyder)': 'F8',
		'Whiskey Stills': 'H5',
		'Farm (Marijuana)': 'B6',
		'Farm (Beer)': 'M9',
		'Docks (Heroin)': 'G8',
		'Docks (Cognac)': 'I8',
		'Factory': 'G4',
		'Scrapyard': 'K5',
		'Bar': 'I5',
		'Restaurant': 'F6',
		'Army Surplus Store': 'N7',
		'Lawyers Office': 'J6'
	},
	'Philadelphia': {
		'Car Lot (Thunderbolt)': 'E5',
		'Car Lot (Spyder)': 'J3',
		'Whiskey Stills': 'H5',
		'Farm (Marijuana)': 'B3',
		'Docks (Heroin)': 'G9',
		'Docks (Cognac)': 'L6',
		'Scrapyard': 'L2',
		'Bar': 'I4',
		'Lawyers Office': 'G6'
	},
	'Baltimore': {
		'Car Lot (Thunderbolt)': 'D6',
		'Car Lot (Spyder)': 'G2',
		'Farm (Marijuana)': 'M3',
		'Factory': 'K7',
		'Scrapyard': 'G10',
		'Bar': 'F5',
		'Restaurant': 'G6',
		'Army Surplus Store': 'B10',
		'Lawyers Office': 'F6'
	}
};

var cities = ['Detroit', 'Chicago', 'Palermo', 'New York', 'Las Vegas', 'Philadelphia', 'Baltimore', 'Corleone'];
var boozenames = ['NO BOOZE', 'Wine', 'Beer', 'Rum', 'Cognac', 'Whiskey', 'Amaretto', 'Port'];
var narcnames = ['NO NARCS', 'Morphine', 'Marijuana', 'Glue', 'Heroin', 'Opium', 'Cocaine', 'Tabacco'];

/*
* Helper functions
*/

Array.prototype.sum = function () {
	for (i = 0, sum = 0; i < this.length; sum += this[i++]);
	return sum;
};
Array.prototype.max = function () {
	return Math.max.apply({}, this);
};
Array.prototype.min = function () {
	return Math.min.apply({}, this);
};
function on_page(str) {
	if (window.location.hash.indexOf(str) != -1) {
		return true;
	} else {
		return false;
	}
}
function getV(name, standard) {
    return localStorage[name+'_'+v] || standard;
}
function setV(name, value) {
    return localStorage[name+'_'+v] = value;
}
function time() {
	return Math.floor(parseInt(new Date().getTime(), 10) / 1000);
}
$.urlParam = function(name){
    var results = new RegExp('[\\?&amp;]' + name + '=([^&amp;#]*)').exec(window.location.href);
    return results[1] || 0;
};
$.fn.isVisible = function(){
    
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
};
function voteNow(save) {
	$('a[name="forticket"]').each(function() {
		window.open(this);
	});
	if (save) {//store last voting time
		setV('lastvote', time());
	}
}
function delMsg(what, name) {
	$('tr[class*="color"]').each(function() {
		var tr = $(this);
		var title = tr.find('td:eq(1)').text().replace(/\s/g, '').replace(/(\[\d+\])/g, '');
		var thismsgid = tr.find('td:eq(1)').find('a').attr('href').split('iMsgId=')[1];
		name = name.replace(/\s/g, '').replace(/(\[\d+\])/g, '');
		if(what == 'id'){
			if(name == thismsgid) {
				$.get('http://'+document.location.hostname+'/BeO/webroot/index.php?module=Mail&action=delMsg&iId='+thismsgid+'&iParty=2', function(data) {
					$('font[color="red"]').text('Message deleted.');
				});
				tr.hide();
				tr.next().hide();
			}
		} else if (what == 'name') {
			if(name == title) {
				$.get('http://'+document.location.hostname+'/BeO/webroot/index.php?module=Mail&action=delMsg&iId='+thismsgid+'&iParty=2', function(data) {
					$('font[color="red"]').text('Message deleted.');
				});
				tr.hide();
				tr.next().hide();
			}
		}
	});
}
function commafy(num) {
	var str = (num + '').split('.'),
		dec = str[1] || '',
		num = str[0].replace(/(\d)(?=(\d{3})+\b)/g, '$1,');
	return (dec) ? num + '.' + dec : num;
}
function getPow(name, i, def) {
	var info = getV(name, '' + def);
	if (name == 'bninfo') {
		var w = 2; //set width of buckets
	} else if (name == 'prefs') {
		var w = 1;
	}
	return (1 * info.substr((i * w), w)); //return int version of bucket
}
function setPow(name, i, value) {
	var info = getV(name, '0');
	if (name == 'bninfo') {
		var w = 2; //set width of buckets
	} else if (name == 'prefs') {
		var w = 1;
	}
	i = i * w; //set string index
	value += ''; //toString
	while (value.length < w) {
		value = '0' + value; //pad with zeros
	}
	if (i > 0 && (i + w) < info.length) {
		info = info.substring(0, i) + value + info.substring(i + w); //value goes in middle
	} else if (i === 0) {
		info = value + info.substring(w); //value goes at beginning
	} else if ((i + w) >= info.length) {
		info = info.substring(0, i) + value; //value goes at end
	} else {
		return;
	}
	setV(name, info); //store string
}
function bnUpdate(current){
	var xpath = current ? '#game_container' : '#str2dom';//use current page OR xhr str2dom

	var nick = $(xpath+' > table > tbody > tr > td:eq(0) > table > tbody > tr:eq(2) > td:eq(1) > a').text();
	var rank = $(xpath+' > table > tbody > tr > td:eq(0) > table > tbody > tr:eq(7) > td:eq(1)').text();
	var type = $(xpath+' > table > tbody > tr > td:eq(0) > table > tbody > tr:eq(9) > td:eq(1) > a').text();
	var city = $(xpath+' > table > tbody > tr > td:eq(0) > table > tbody > tr:eq(10) > td:eq(1) > a').text();
	var health = 100 - parseInt($(xpath+' > table > tbody > tr > td:eq(2) > table > tbody > tr:eq(3) > td:eq(1) > a > table > tbody > tr > td').attr('width'));
	var ride = $(xpath+' > table > tbody > tr > td:eq(2) > table:eq(1) > tbody > tr:eq(2) > td:eq(1)').text();

	setV('bloodType', type);
	setV('nick', nick);

	//define max b/n judging by rank
	var ranks = ['Empty-suit', 'Delivery Boy', 'Delivery Boy', 'Picciotto', 'Shoplifter', 'Pickpocket', 'Thief', 'Associate', 'Mobster', 'Soldier', 'Swindler', 'Assassin', 'Local Chief', 'Chief', 'Bruglione', 'Capodecina', 'Godfather', 'First Lady'];
	var maxBooze = [1, 2, 2, 5, 7, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 70, 70];
	var maxNarcs = [0, 0, 0, 1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 20, 20, 20];
	for(booze=0,narc=0, i=0;i<=17;i++){
		if(ranks[i]==rank){
			booze = maxBooze[i]; narc = maxNarcs[i];
			break;
		}
	}
	setPow('bninfo', 0, narc);
	setPow('bninfo', 1, booze);

	//parse city to ID
	for(var cityCode=0, i=0;i<8;i++){
		if(city == cities[i]){
			cityCode = i+4;
			break;
		}
	}
	setPow('bninfo', 2, cityCode);//save

	//parse plane to ID
	var rides = ['none', 'geen', 'Fokker DR-1' ,'Havilland DH 82A' ,'Fleet 7', 'Douglas DC-3'];
	for(plane=0, i=0;i<=5;i++){
		if(rides[i] == ride){
			plane = [0, 0, 1, 2, 3, 4][i];
			break;
		}
	}
	setPow('bninfo', 3, plane);//save
}

/*
* Main game listener
*/


if (document.getElementById('game_container') !== null) {
	document.getElementById('game_container').addEventListener('DOMNodeInserted', function(event) {
		if (event.target.nodeType != 1) {
			return false;
		}
		if ($(event.target).attr('data-beyond-fired') !== undefined) {
			return false;
		}

		$(event.target).attr('data-beyond-fired', 'true');

		var wlh = window.location.hash;
		var nn  = event.target.tagName.toLowerCase();
		var nid  = event.target.getAttribute('id');

		if (on_page('family.php') && nn == 'center') {

			// add HR, Deaths and Worth
			var famid = wlh.split('=')[1];
			var famIdFromImg = $('img[src*="family_image.php"]').attr('src').match(/\d+/g)[0];
			var famname = $('td.profilerow').text().split(' ')[0].trim().toLowerCase();
			var url = (famid === famIdFromImg) ? 'id='+famid : 'ing='+famname;
			var ownfam = getV('family', '');

			$.getJSON(OB_API_WEBSITE + '/?p=stats&w=fampage&v='+v+'&' + url, function(data) {

				/*
				 * Family position and worth
				 */
				$('td.subtableheader').first().closest('tr').after(
					$('<tr>').append(
						$('<td>').addClass('subtableheader').text('Position:'),
						$('<td>').addClass('profilerow').text('#'+data['pos']+' - Worth: '+data['worth']+'')
					)
				);

				// Count rows
				tr = $('table.thinline:eq(0) > tbody > tr').length;

				// add HQ space to members
				var hq = $('table.thinline:eq(0) > tbody > tr:eq('+(tr-3)+') > td:last').text()
				var members = $('table.thinline:eq(0) > tbody > tr:eq('+(tr-5)+') > td:last').text()
				$('table.thinline:eq(0) > tbody > tr:eq('+(tr-5)+') > td:last').text(members+'/'+hq);

				// add color to HQ space
				var hqperc = ((members/hq)*100);
				$('table.thinline:eq(0) > tbody > tr:eq('+(tr-5)+') > td:last').css({'background-image': '-moz-linear-gradient(left, #CCCCCC '+hqperc+'%, #F0F0F0 '+hqperc+'%)'})

				// add color to donating %
				var doperc = $('table.thinline:eq(0) > tbody > tr:eq('+(tr-4)+') > td:last').text().split(' (')[0];
				$('table.thinline:eq(0) > tbody > tr:eq('+(tr-4)+') > td:last').css({'background-image': '-moz-linear-gradient(left, #CCCCCC '+doperc+', #F0F0F0 '+doperc+')'})

				// add color to rankprogress
				if(famname == ownfam.toLowerCase()) {
					var rankperc = $('table.thinline:eq(0) > tbody > tr:last > td:last').text().split(' (')[1].replace(')', '');
					$('table.thinline:eq(0) > tbody > tr:last > td:last').css({'background-image': '-moz-linear-gradient(left, #CCCCCC '+rankperc+', #F0F0F0 '+rankperc+')'})
				}

				// add HR
				$('table.thinline').first().find('tbody').append(
					$('<tr>').append(
						$('<td>').addClass('subtableheader').text('Ranks:'),
						$('<td>').addClass('profilerow').append(
							$('<table>').attr('width', '100%').append(
								$('<tr>').append($('<td>').text('Godfather/First Lady:'), $('<td>').addClass('bold').text(data['hr']['gf'])),
								$('<tr>').append($('<td>').text('Capodecina:'), $('<td>').addClass('bold').text(data['hr']['cd'])),
								$('<tr>').append($('<td>').text('Bruglione:'), $('<td>').addClass('bold').text(data['hr']['brug'])),
								$('<tr>').append($('<td>').text('Chief:'), $('<td>').addClass('bold').text(data['hr']['chief'])),
								$('<tr>').append($('<td>').text('Local Chief:'), $('<td>').addClass('bold').text(data['hr']['lc'])),
								$('<tr>').append($('<td>').text('Assassin:'), $('<td>').addClass('bold').text(data['hr']['assa'])),
								$('<tr>').append($('<td>').text('Swindler:'), $('<td>').addClass('bold').text(data['hr']['swin'])),
								$('<tr>').append($('<td>').attr('colspan', '2').append($('<hr />'))),
								$('<tr>').append($('<td>').text('Total points:'), $('<td>').addClass('bold').text(data['hr']['pts']))
							)
						)
					)
				);

				/*
				 * Family deaths
				 */
				setTimeout(function () {
					$('table.thinline:eq(1)').closest('td').append(
						$('<br />'),
						$('<table>').addClass('thinline').css('width', '100%').attr('cellspacing', '0').attr('cellpadding', '2').attr('rules', 'none').append(
							$('<tr>').append(
								$('<td>').addClass('tableheader').attr('colspan', '100%').text('Last family deaths').append(
									$('<div>').css({'float': 'right', 'margin-right': '5px', 'margin-top': '3px'}).append(
										$('<a>').attr('href', OB_NEWS_WEBSITE + '/deathslog/'+cur_v+'/' + famid).attr('target', '_blank').append(
											$('<img>').addClass('brcImg').attr({src: GM_getResourceURL('log'), title: 'View full deathslog'})
										)
									)
								)
							),
							$('<tr>').append(
								$('<td>').attr('colspan', '100%').attr('bgcolor', 'black').attr('height', '1')
							),
							$('<tr>').append(
								$('<td>').addClass('bold').css('width', '28%').attr('align', 'left').text('Name'),
								$('<td>').addClass('bold').attr('align', 'center').text('Rank'),
								$('<td>').addClass('bold').attr('align', 'center').text('Date'),
								$('<td>').addClass('bold').css('text-align', 'right').text('Ago')
							)
						)
					);

					var deaths_body = $('table.thinline:eq(2)').find('tbody');
					if (data['deaths']) {
						$.each(data['deaths'], function(k, v) {
							var extra = (v['Akill'] == 1)?'(<b>A</b>) ':(v['BF'] == 1)?'(<b>BF</b>) ':'';
							deaths_body.append(
								$('<tr>').append(
									$('<td>').html(extra).append(
										$('<a>').attr('href', 'user.php?name=' + v['Name']).text(v['Name'])
									),
									$('<td>').attr('align', 'center').append(
										$('<a>').attr('href', OB_STATS_WEBSITE + '/history.php?v=com&name=' + v['Name']).text(v['Rank'])
									),
									$('<td>').attr('align', 'center').text(v['Date']),
									$('<td>').css('text-align', 'right').text(v['Agod'] + 'd ' + v['Agoh'] + 'h ' + v['Agom'] + 'm')
								)
							);
						});
					} else {
						deaths_body.append(
							$('<tr>').append(
								$('<td>').addClass('red').css('text-align', 'center').attr('colspan', '4').text('There are no deaths yet!')
							)
						);
					}

					// add Famlog
					$('table.thinline:eq(1)').closest('td').append(
						$('<br />'),
						$('<table>').addClass('thinline').css('width', '100%').attr('cellspacing', '0').attr('cellpadding', '2').attr('rules', 'none').append(
							$('<tr>').append(
								$('<td>').addClass('tableheader').attr('colspan', '100%').text('Last family changes').append(
									$('<div>').css({'float': 'right', 'margin-right': '5px', 'margin-top': '3px'}).append(
										$('<a>').attr('href', OB_NEWS_WEBSITE + '/famlog/'+cur_v+'/' + famid).attr('target', '_blank').append(
											$('<img>').addClass('brcImg').attr({src: GM_getResourceURL('log'), title: 'View full changelog'})
										)
									)
								)
							),
							$('<tr>').append(
								$('<td>').attr('colspan', '100%').attr('bgcolor', 'black').attr('height', '1')
							),
							$('<tr>').append(
								$('<td>').addClass('bold').css('width', '28%').attr('align', 'left').text('Date'),
								$('<td>').addClass('bold').attr('align', 'left').text('Change')
							)
						)
					);

					var changes_body = $('table.thinline:eq(3)').find('tbody');
					if (data['changes']) {
						$.each(data['changes'], function(k, v) {
							changes_body.append(
								$('<tr>').append(
									$('<td>').css('width', '28%').attr('align', 'left').attr('valign', 'top').text(v['date']),
									$('<td>').attr('align', 'left').text(v['text'])
								)
							);
						});
					} else {
						changes_body.append(
							$('<tr>').append(
								$('<td>').addClass('red').css('text-align', 'center').attr('colspan', '2').text('There are no changes yet!')
							)
						);
					}
				}, 0);
			});
		} // end of family page

		/*
		 *
		 * RAIDPAGE
		 *
		 */
		if (on_page('index.php?module=Spots') && nn == 'div' && nid == 'map') {
			var spot_table = $('<table>').addClass('thinline').css({'color': '#000', 'width': '630px', 'background-color': '#F0F0F0', 'border': '1px solid black', 'font-family': 'Tahoma, Verdana'}).attr('cellpadding', '0').append(
				$('<tr>').addClass('tableheader').append(
					$('<td>').html('&nbsp;'),
					$('<td>').text('Type'),
					$('<td>').text('Owner'),
					$('<td>').text('Profit left'),
					$('<td>').text('Protection'),
					$('<td>').text('Next raid'),
					$('<td>').text('Invite')
				),
				$('<tr>').append(
					$('<td>').attr('height', '2').attr('bgcolor', 'black').attr('colspan', '7')
				)
			);

			var secs = [];
			var user = getV('nick', '');
			var ownerid = null;
			var city = $('b[data-beyond-fired="true"]').text();
			$('div[id*="spot_"]').not('div[id*="spot_d"]').not('div[id*="spot_e"]').each(function() {
				id = parseInt($(this).attr('id').replace('spot_', ''), 10);
				spot_default = $('#spot_default_' + id);
				type = spot_default.find('b').first().text();
				owner = spot_default.find('td:eq(1)').text();
				rpfam = (owner.split(' ')[1]?owner.split(' ')[1]:'');
				profit = spot_default.find('tr:eq(2)').find('td:eq(1)').html();
				protnum = $('#jsprogbar_div_protection_' + id).text();
				prot = $('#jsprogbar_protection_' + id).clone();

				prot.find('div[id*="jsprogbar_div_protection_"]').attr('style', '').css({'text-align': 'center', 'position': 'absolute', 'width': '100px'}).empty().append(
					$('<font>').attr('color', '#000').text(protnum + '%')
				);

				spot_time = '';
				// Not sure if this is the best / cleanest selector
				// original code:
				// if ($X('//*[@id="spot_default_'+id+'"]/table/tbody/tr[2]/td[2]') !== undefined) {
				if (spot_default.find('table > tbody > tr:eq(1) > td:eq(1)').length) {
					spot_time = spot_default.find('table > tbody > tr:eq(1) > td:eq(1)').html();
				}
				if (spot_time === '<b>now</b>') {
					spot_time = 'Now!';
					secs.push(0);
				} else {
					spot_time = '';
					var seconds = spot_default.find('table > tbody > tr:eq(1) > td:eq(1) > span').attr('data-timeleft');
					spot_time = spot_default.find('table > tbody > tr:eq(1) > td:eq(1) > span').text().replace(' minutes', 'M ').replace(' seconds', 'S');// should replace for a countdown
					secs.push(seconds);
				}

				show_form = true;

				owner_string = (owner!='Local Mob'?('<a href="/user.php?nick='+owner.split(' ')[0]+'">'+owner.split(' ')[0]+'</a> '+ (owner.split(' ')[1]?owner.split(' ')[1]:'')):owner);
				if (!getV('family', '').search(rpfam)) {
					show_form = false;
				}
				spot_table.append(
					$('<tr>').css('height', '22px').append(
						$('<td>').css('padding-left', '5px').text(RAID_SPOTS_CORDS[city][type]),
						$('<td>').text(type),
						$('<td>').html(owner_string),
						$('<td>').css({'text-align': 'right', 'padding-right': '10px'}).text(profit),
						$('<td>').append(
							$('<table>').css({'border': '1px solid #000', 'margin': '0', 'padding': '0', 'width': '102px', 'border-radius': '3px'}).attr('cellpadding', '0').attr('cellspacing', '0').append(
								$('<tr>').append(
									$('<td>').append(prot)
								)
							)
						),
						$('<td>').css('text-align', 'center').append(
							$('<div>').attr('id', 'timer_' + id).text(spot_time)
						),
						$('<td>').css('text-align', 'center').append(
							$('<input>').attr({'type': 'button', 'data-spot-id': id}).val('Go!').css({'display': 'none', 'border-radius': '5px'}).click(function() {
								$('input[name="type"]').val($(this).attr('data-spot-id'));
								unsafeWindow.$('#raid_form').trigger('submit');
							})
						)
					)
				);

				if (show_form) {
					spot_table.find('input[data-spot-id="' + id + '"]').show();
				}

				if (owner.split(' ')[0] == user) {
					ownerid = id;
				}
			});

			form_table = $('<form>').attr({'id': 'raid_form', 'method': 'post', 'action': '/BeO/webroot/index.php?module=Spots&action=start_raid'}).append(
				$('<input>').attr({'name': 'type', 'type': 'hidden'}),
				$('<table>').addClass('thinline').css({'color': '#000', 'width': '630px', 'background-color': '#F0F0F0', 'border': '1px solid black'}).append(
					$('<tr>').append(
						$('<td>').addClass('tableheader').attr('colspan', '2').text('Information')
					),
					$('<tr>').append(
						$('<td>').attr({'colspan': '2', 'height': '1', 'bgcolor': 'black'})
					),
					$('<tr>').css('background-color', '#F0F0F0')
				)
			);

			if (ownerid !== null && $('#spot_extra_' + ownerid).length) {
				form_table.find('tr').last().append(
					$('<td>').html($('#spot_extra_' + ownerid).html())
				);
			} else {
				form_table.find('tr').last().append(
					$('<td>').css('text-align', 'right').text('Bullets'),
					$('<td>').css('padding-left', '40px').append(
						$('<input />').attr({'id': 'raidpagebullets', 'name': 'bullets', 'type': 'text', 'size': '3', 'value': '200'}).css({'border-radius': '5px', 'padding-left': '4px'})
					)
				);
				form_table.find('tbody').append(
					$('<tr>').css('background-color', '#F0F0F0').append(
						$('<td>').css('text-align', 'right').text('Driver'),
						$('<td>').css('padding-left', '40px').append(
							$('<input />').attr({'id': 'raidpagedriver', 'name': 'driver', 'type': 'text'}).css({'border-radius': '5px', 'padding-left': '4px'})
						)
					)
				);
			}

			$('#game_container').empty().append(
				$('<center>').append(
					$('<br />'),
					form_table,
					$('<br />'),
					spot_table
				)
			);

			$('#raidpagedriver').focus();
		} // end of raidpage

//---------------- My account ----------------
		if (on_page('/information.php') && nn == 'table') {
			bnUpdate(1);
		}

//---------------- 1-click voter ----------------
		if (on_page('/vfo.php') && nn == 'center') {
			$('a[href*="votelot.php"]').attr('name', 'forticket');

			$('td.tableheader:first').html(
				$('<span>').addClass('orange').css({'cursor': 'pointer', 'color': 'orange'}).attr({'id': 'votelink', 'title': ''}).text($('td.tableheader:first').text())
			).click(function () {
					voteNow(false);
			});
			var lastVote = getV('lastvote', 0); //get last voting time
			if (lastVote === 0) {
				if (confirm('You haven\'t used the 1-click voter yet!\nDo you want to use it now?')) {
					voteNow(true);
				}
			} else { //not first run
				var till = (parseInt(lastVote, 10) + 86400) - time(); // time till next vote
				var msg = '';
				if (till <= 0) { // user can vote again so ask
					var ago = time() - lastVote; // time since last vote
					msg += 'You haven\'t used the 1-click voter today!' + '\n' + 'Since you last used the 1-click voter, it\'s been:\n';
					msg += Math.floor(ago / 86400) + ' days, '; // days
					msg += Math.floor((ago % 86400) / 3600) + ' hours, '; // hours
					msg += Math.floor((ago % 3600) / 60) + ' minutes and '; // minutes
					msg += Math.floor(ago % 60) + ' seconds.'; // seconds
					msg += '\n' + 'Do you want to use the 1-click voter now?';
				} else { // can't vote yet
					msg += 'You can\'t vote again yet!\nPlease wait another:\n';
					msg += Math.floor(till / 3600) + ' hours, '; // hours
					msg += Math.floor((till % 3600) / 60) + ' minutes and '; // minutes
					msg += Math.floor(till % 60) + ' seconds.'; // seconds
					msg += '\n' + 'Do you still want to vote?';
				}
				if (confirm(msg)) {
					voteNow(true);
				}
			}
		}
//---------------- Group Crimes ----------------
		// GroupCrime general accept focus
		if (on_page('module=GroupCrimes') && nn == 'center') {
			//focus on accept
			$('a').filter(function(){
				return (/Accept/i).test($(this).text());
			}).focus();
			//focus on transfer
			$('a').filter(function(){
				return (/Make Transfer/i).test($(this).text());
			}).focus();
		}
		//Heist LE autoform
		if (on_page('module=Heist') && nn == 'center') {
			$('input[name="bullets"]').val('50');
			$('select[name="gun"]').val('real');
			$('input[name="driver"]').focus();
		}
		//OC accept focus
		if (on_page('/orgcrime2.php') && nn == 'br') {
			//focus on accept
			$('a').filter(function(){
				return (/Yes/i).test($(this).text());
			}).focus();
		}
		//OC Participants autoform
		if (on_page('?takepart=yes') && nn == 'form') {
			//WE
			$('input[name="bulletz"]').val('100');
			$('select[name="guns"]').val('2');
			//EE
			$('input:radio[name="exploz"]').prop('checked', true);
			//ALL
			$('input[type="submit"]').focus();
		}
		//MOC Participants autoform
		if (on_page('module=MegaOC') && nn == 'form') {
			//WE
			$('input[type="text"]').val('500');
			//EE
			$('input:radio:eq(2)').prop('checked', true);
			//ALL
			$('input[type="submit"]').focus();
		}
//---------------- Mail ----------------
		//Inbox
		if (on_page('action=inbox') && nn == 'center'){
			//save unread msg and msg ids
			var msg = $('td[style="cursor:pointer;cursor:hand"]').length;
			var unreadmsg = $('tr.color2').length;
			var id = [];
			for(var i=0;i<msg;i++){ //find first open spot
				id[i] = $('a[href*="showMsg"]:eq('+i+')').attr('href').split('?')[1].match(/\d+/g);
				setV('msgids', id.join(',')); //join and save values
			}
			var unreadid = [];
			for(var a=0;a<unreadmsg;a++){ //find first open spot
				unreadid[a] = $('tr.color2 > td:eq(1) > a').attr('href').split('?')[1].match(/\d+/g);
				setV('unread', unreadid.join(',')); //join and save values
			}
			//delete and reply icons
			var num = 1;
			setTimeout(function () {
				$('tr[class*="color"]').each(function() {
					var id = $(this).children('td:eq(1)').children('a').attr('href').split('?')[1].match(/\d+/g)[0];
					$(this).children('td:eq(0)').append(
						$('<img />').addClass('inboxImg').attr({src: GM_getResourceURL('delete'), title: 'Delete'}).click(function() {
							delMsg('id', id)
						})
					);
					if ($(this).children('td:eq(2)').children('a').length) { //add reply icon
						$(this).children('td:eq(0)').append(
							$('<a>').attr('href', 'BeO/webroot/index.php?module=Mail&action=sendMsg&iReply='+id).html(
								$('<img />').addClass('inboxImg').attr({src: GM_getResourceURL('reply'), title: 'Reply'})
							)
						);
					}
					if (num < 11) { //add msg hotkeys
						var title = $(this).children('td:eq(1)').children();
						title.html('['+(num == 10 ? 0 : num)+'] '+title.html());
						title.attr('accesskey', (num == 10 ? 0 : num));
						num++;
					}
				});
			}, 0);
			//hotkeys for system delete
			var keys = ['-', '=', '[', ']', ';', '\''];
			var selectors = $('td[align="right"][colspan="100%"] > a');
			for (i = -1; ++i < selectors.length;) {
				$('td[align="right"][colspan="100%"] > a:eq('+i+')').attr({accesskey: keys[i], title: 'Hotkey: '+keys[i]});
			}
			//select all button
			$('td[align="right"][colspan="100%"]').prepend(
				$('<span>').css('float', 'left').append(
					$('<input />').attr({type: 'button', value: '(Un)Select All'}).click(function() {
						$('[name="selective[]"]').each(function() {
							$(this).prop('checked', !$(this).prop('checked'));
						});
					})
				)
			);
			//add custom system delete
			$('td[align="right"][colspan="100%"] > a:eq(0)').before($('<br />'));
			$('td[align="right"][colspan="100%"]').append(
				$('<br />'),
				$('<span>').text('Delete System: '),
				$('<span>').css('cursor', 'pointer').text('Super Lottery').click(function() {
					delMsg('name', 'Omerta Super Lottery');
				}),
				$('<span>').text(' | '),
				$('<span>').css('cursor', 'pointer').text('Target not found').click(function() {
					delMsg('name', 'Target not found');
				}),
				$('<span>').text(' | '),
				$('<span>').css('cursor', 'pointer').text('Target found').click(function() {
					delMsg('name', 'Target found');
				}),
				$('<span>').text(' | '),
				$('<span>').css('cursor', 'pointer').text('Promoted').click(function() {
					delMsg('name', 'Promoted');
				})
			);
		}

		//Outbox
		if (on_page('action=outbox') && nn == 'center'){
			setTimeout(function () {
				$('a[href*="showSentMsg"]').each(function() {
					var id = $(this).attr('href').split('?')[1].match(/\d+/g)[0];
					$(this).parent().prepend(
						$('<a>').attr('href', 'BeO/webroot/index.php?module=Mail&action=delMsg&iId='+id+'&iParty=1').html(
							$('<img />').addClass('inboxImg').attr({src: GM_getResourceURL('delete'), title: 'Delete'})
						)
					);
				});
			}, 0);
		}

		//Show message
		if (on_page('action=showMsg') && nn == 'center') {
			var id = wlh.split('iMsgId=')[1].match(/\d+/g)[0];
			var ids = getV('msgids', '').split(',');
			for(var i = 0;i<ids.length;i++){
				if (ids[i] == id) {
					var next = ids[i-1];
					var prev = ids[i+1];
				}
			}
			//check unread msg and grab obay bullets
			var unread = getV('unread', '').split(',');
			for (var x = 0; x < unread.length; ++x) {
				if (unread[x] !== '' && unread[x] == id) { //msg is unread
					var msgTyp = $('tr.tableitem').text().split('Type:')[1].split('Sent:')[0];
					var arr = $('table.thinline > tbody > tr:eq(7) > td').html().split(' ');
					var bulletmsg = new RegExp('Obay bid succesful');
					if (bulletmsg.test(msgTyp)) { //grab obay bullets from message
						setV('obaybul', (getV('obaybul', 0) + parseInt(arr[2], 10)));
					}
					// resave unread msg's, without our msg
					var str = '';
					for (var y = 0; y < unread.length; ++y) {
						if (unread[y] !== '' && unread[y] != id) {
							str += ','+unread[y];
						}
					}
					setV('unread', str.substr(1));
					x = unread.length; // not needed to continue because we found our id
				}
			}
			//add previous and next arrows
			setTimeout(function () {
				$('table.thinline > tbody > tr > td.tableheader:eq(1)').append(
					$('<span>').css({'float': 'right', 'padding-top': '2px'}).append(
						$('<a>').attr({id: 'prev', href: '/BeO/webroot/index.php?module=Mail&action=showMsg&iMsgId='+prev}).append(
							$('<img>').addClass('inboxImg').attr({title: 'Previous', src: GM_getResourceURL('prev')})
						)
					).append(
						$('<a>').attr({id: 'next', href: '/BeO/webroot/index.php?module=Mail&action=showMsg&iMsgId='+next}).append(
							$('<img>').addClass('inboxImg').attr({title: 'Next', src: GM_getResourceURL('next')})
						)
					)
				);
				for(var j = 0;j<ids.length;j++){
					if (ids[j] == id) {
						if(j===0) {
							$('a#next').css('visibility', 'hidden');
						}
						if (j==ids.length-1) {
							$('a#prev').css('visibility', 'hidden');
						}
					}
				}
			}, 0);
			//replace reply and delete links
			var linkz = $('table.thinline > tbody > tr:eq(9) > td > a');
			if (linkz.length == 1) {
				setTimeout(function () {
					$('table.thinline > tbody > tr:eq(9) > td > a').html(
						$('<img />').addClass('inboxImg').attr({src: GM_getResourceURL('delete'), title: 'Delete ([)'})
					).attr('accesskey', '[');
				}, 0);
			} else {
				setTimeout(function () {
					$('table.thinline > tbody > tr:eq(9) > td > a:first').html(
						$('<img />').addClass('inboxImg').attr({src: GM_getResourceURL('delete'), title: 'Delete ([)'})
					).attr('accesskey', '[');
					$('table.thinline > tbody > tr:eq(9) > td > a:last').html(
						$('<img />').addClass('inboxImg').attr({src: GM_getResourceURL('reply'), title: 'Reply (])'})
					).attr('accesskey', ']');
				}, 0);
			}
			// Add arrow hotkeys
			// Disabled until found a good way to bind it to showmsg only
//			$(window).keydown(function(event){
//				var key = event.which;
//				if(key==39){ //right, reply
//					window.location.href = 'http://'+document.location.hostname+'/game.php#http://'+document.location.hostname+'/BeO/webroot/index.php?module=Mail&action=sendMsg&iReply='+id;
//				}
//				if(key==38 && id != ids[0]) { //up, select previous
//					window.location.href = 'http://'+document.location.hostname+'/game.php#http://'+document.location.hostname+'/BeO/webroot/index.php?module=Mail&action=showMsg&iMsgId='+next;
//				}
//				if(key==40 && id != ids[ids.length-1]) { //down, select next
//					window.location.href = 'http://'+document.location.hostname+'/game.php#http://'+document.location.hostname+'/BeO/webroot/index.php?module=Mail&action=showMsg&iMsgId='+prev;
//				}
//				if(key==37) { //left, delete
//					window.location.href = 'http://'+document.location.hostname+'/game.php#http://'+document.location.hostname+'/BeO/webroot/index.php?module=Mail&action=delMsg&iId='+id+'&iParty=2';
//				}
//			});
		}
		//focus on text area
		if (on_page('iReply=') && nn == 'center') {
			$('textarea').focus();
		}
		//redirect on send message
		if (on_page('action=sendMsg') && nn == 'b') {//needs testing
			if ($('font:eq(0)').text().indexOf('Message sent to') != -1) {
				setTimeout(function () {
					$('a')[0].click();
				}, 1000);
			}
		}

		//look its me
		if ((on_page('users_online') && nn == 'center') || (on_page('allusers.php') && nn == 'div') || (on_page('global_stats')) && nn == 'center') {
			var nick = getV('nick', '');
			if (nick !== '') {
				$('a[class!="link"]').each(function() {
					if ($(this).text() == nick || $(this).text() == nick + '+') {
						$(this).html('<span style="color:green;font-weight:bold;">' + $(this).html() + '</span>');
					}
				});
			}
		}
//---------------- Bank ----------------
		if (on_page('/bank.php') && nn == 'center') {
			//auto reload after transfer
			if ($('center').html().search('<table') == -1) {
				setTimeout(function () {
					window.location.reload();
				}, 1000);
			}
			// Add amount of interest next to %
			if($('table.thinline:eq(1) > tbody > tr:eq(1) > td:eq(1)').length) { // check for banked money
				var money = $('table.thinline:eq(1) > tbody > tr:eq(1) > td:eq(1)').text();
				var rx = $('table.thinline:eq(1) > tbody > tr:eq(3) > td:eq(1)').text(); // get recieved amount
				var tmp = 1 * rx.replace(/\D/g, '') - 1 * money.replace(/\D/g, ''); // calculate interest
				$('table.thinline:eq(1) > tbody > tr:eq(2) > td:eq(1)').html($('table.thinline:eq(1) > tbody > tr:eq(2) > td:eq(1)').text()+' &rarr; ($'+commafy(tmp)+')');
				setTimeout(function() {
					setV('interest', tmp);
				}, 0);

				// Interest reminder
				var seconds = 0;
				seconds = (seconds + (parseInt($('span:eq(14)').html().split(' hours')[0], 10) * 3600));
				seconds = (seconds + (parseInt($('span:eq(14)').html().split(' hours')[1].split(' minutes')[0], 10) * 60));
				seconds = (seconds + parseInt($('span:eq(14)').html().split(' minutes')[1].split(' seconds')[0], 10));
				setTimeout(function() {
					setV('banktleft', (time() + seconds));
				}, 0);
			}
			// Calculators
			if($('td[width="33%"]:eq(2)').length) {
				$('td[width="33%"]:eq(2)').append(
					$('<br />'),
					$('<table>').addClass('thinline').attr({width: '100%', align: 'center', rules: 'none'}).append(
						$('<tr>').append(
							$('<td>').addClass('tableheader').attr('colspan', '4').text('Calculators')
						), $('<tr>').append(
							$('<td>').attr({'align': 'left', 'width': '20%'}).text('You send:'),
							$('<td>').attr({'align': 'left', 'width': '25%'}).append(
								$('<input>').attr({'name': 'amount', 'type': 'text', 'value': '', 'maxlength': '11', 'size': '13'}).keyup(function() {
									var amt = $(this).val().replace(/\D+/g, '');
									$('#get').text('$'+commafy(Math.round(amt*0.9)));
								})
							),
							$('<td>').attr({'align': 'left', 'width': '23%'}).text('User gets:'),
							$('<td>').attr({'align': 'left', 'id': 'get'}).text('$0')
						), $('<tr>').append(
							$('<td>').attr({'align': 'left', 'width': '20%'}).text('You want:'),
							$('<td>').attr({'align': 'left', 'width': '25%'}).append(
								$('<input>').attr({'name': 'amount', 'type': 'text', 'value': '', 'maxlength': '11', 'size': '13'}).keyup(function() {
									var amt = $(this).val().replace(/\D+/g, '');
									$('#give').text('$'+commafy(Math.round(amt/0.9)));
								})
							),
							$('<td>').attr({'align': 'left', 'width': '23%'}).text('User sends:'),
							$('<td>').attr({'align': 'left', 'id': 'give'}).text('$0')
						), $('<tr>').append(
							$('<td>').attr({'align': 'left', 'width': '20%'}).text('Deposit:'),
							$('<td>').attr({'align': 'left', 'width': '25%'}).append(
								$('<input>').attr({'name': 'amount', 'type': 'text', 'value': '', 'maxlength': '11', 'size': '13'}).keyup(function() {
									var amt = $(this).val().replace(/\D+/g, '');
									$('#int').text('$'+commafy(Math.round(amt* (amt >= 1000000 ? (amt >= 3000000 ? (amt >= 6000000 ? (amt >= 10000000 ? (amt >= 15000000 ? (amt >= 21000000 ? (amt >= 27000000 ? (amt >= 35000000 ? 1.01 : 1.015) : 1.02) : 1.025 ) : 1.03) : 1.035) : 1.04) : 1.045) : 1.05 ))));
								})
							),
							$('<td>').attr({'align': 'left', 'width': '23%'}).text('Receive:'),
							$('<td>').attr({'align': 'left', 'id': 'int'}).text('$0')
						)
					)
				)
			}
			// m/k usage
			var inputs = $('input[name="amount"], input#amount');
			inputs.each(function() {
				$(this).keydown(function(event) {
					var symcode = event.which;
					if(symcode == 75){
						$(this).val($(this).val() + '000');
					}
					if(symcode == 77){
						$(this).val($(this).val() + '000000');
					}
					$(this).val($(this).val().replace(/k|m/g, ''));
					return (symcode == 75 || symcode == 77)?false:true;
				});
			});
		}
//---------------- All users ----------------
		if (on_page('/allusers.php') && nn == 'div') {
			//add pagenumber
			var page = $.urlParam('start');
			page = (page/15)+1;
			$('a[href*="/allusers.php"]:eq(2)').before($('<p>').text('Page: '+page));

			//edit show/hide dead link
			var dead = $.urlParam('dead');
			if(dead !== null) {
				var url = wlh.replace('#', '');
				var hs = (dead == 'HIDE') ? 'SHOW' : 'HIDE';
				$('a[href*="/allusers.php?dead="]').attr('href', url.replace(dead, hs));
			}
		}
//---------------- TOP 3 ----------------
		//Control Panel
		if (on_page('module=Family') && nn == 'div') {
			//linkify CP log
			if(nid == 'jsprogbar_fam_rank_progress') {
				$('table.color2:eq(0) > tbody > tr > td').not(':first').not(':last').each(function( ) {
					if ($(this).text() !== '') {
						var len = $(this).html().trim().split(' ').length - 1;
						var who = $(this).html().trim().split(' ');
						if (who[0].match(/[A-Z]/g)) {
							who[0] = '<a href="/user.php?nick=' + who[0] + '"><b>' + who[0] + '</b></a>';
						}
						if (who[len].match(/[A-Z]/g)) {
							if(who[len] != 'Capo(s)') {
								if(who[len] != 'Object(s)') {
									if(who[len] != 'Unlocked') {
										who[len] = '<a href="/user.php?nick=' + who[len].match(/\D+/g)[0].replace('.', '') + '"><b>' + who[len] + '</b></a>';
									}
								}
							}
						}
						$(this).html(who.join(' '));
					}
				});
			}
			// Add promo calculation for CD/GF/FL.
			var brugP = parseInt($('table.color2:eq(1) > tbody > tr:eq(8) > td > table > tbody > tr:eq(6) > td:eq(1)').text().replace(/\D/g, ''), 10);
			var perc = (brugP != '0') ? $('input[name="ppercentage"]').val() : 0;
			var cdP = parseInt((((brugP/100)*perc)+brugP), 10);
			var gfP = parseInt((((cdP/100)*perc)+parseInt(cdP, 10)), 10);
			$('table.color2:eq(1) > tbody > tr:eq(8) > td > table > tbody > tr:eq(6) > td:eq(1)').removeAttr('colspan');
			$('table.color2:eq(1) > tbody > tr:eq(8) > td > table > tbody > tr:eq(6)').append(
				$('<td>').text('Capodecina'),
				$('<td>').text('$ '+commafy(cdP))
			);
			$('table.color2:eq(1) > tbody > tr:eq(8) > td > table > tbody').append(
				$('<tr>').append(
					$('<td>').text('GF / FL'),
					$('<td>').text('$ '+commafy(gfP))
				)
			);
		}
		//linkify opened CP log
		if (on_page('/familylog.php') && nn == 'table') {
			$('table.color2 > tbody > tr > td').not(':first').each(function( ) {
				if ($(this).text() !== '') {
					var len = $(this).html().trim().split(' ').length - 1;
					var who = $(this).html().trim().split(' ');
					if (who[0].match(/[A-Z]/g)) {
						who[0] = '<a href="/user.php?nick=' + who[0] + '"><b>' + who[0] + '</b></a>';
					}
					if (who[len].match(/[A-Z]/g)) {
						if(who[len] != 'Capo(s)') {
							if(who[len] != 'Object(s)') {
								if(who[len] != 'Unlocked') {
									who[len] = '<a href="/user.php?nick=' + who[len].match(/\D+/g)[0].replace('.', '') + '"><b>' + who[len] + '</b></a>';
								}
							}
						}
					}
					$(this).html(who.join(' '));
				}
			});
		}
		//Family bank
		if (on_page('/cpbank.php') && nn == 'center') {
			$('table.thinline:eq(0)').after($('<br />'), $('<table>').addClass('thinline').attr({width: '600', align: 'center', rules: 'none'}).append(
				$('<tr>').append(
					$('<td>').addClass('tableheader').attr('colspan', '4').text('Calculators')
				), $('<tr>').append(
					$('<td>').attr({'align': 'right', 'width': '25%'}).text('You send:'),
					$('<td>').attr({'align': 'center', 'width': '25%'}).append(
						$('<input>').attr({'name': 'amount', 'type': 'text', 'value': '', 'maxlength': '11', 'size': '15'}).keyup(function() {
							var amt = $(this).val().replace(/\D+/g, '');
							$('#get').text('$'+commafy(Math.round(amt*0.85)));
						})
					),
					$('<td>').attr({'align': 'right', 'width': '25%'}).text('User gets:'),
					$('<td>').attr({'align': 'center', 'width': '25%', 'id': 'get'}).text('$0')
				), $('<tr>').append(
					$('<td>').attr({'align': 'right', 'width': '25%'}).text('You want:'),
					$('<td>').attr({'align': 'center', 'width': '25%'}).append(
						$('<input>').attr({'name': 'amount', 'type': 'text', 'value': '', 'maxlength': '11', 'size': '15'}).keyup(function() {
							var amt = $(this).val().replace(/\D+/g, '');
							$('#give').text('$'+commafy(Math.round(amt/0.85)));
						})
					),
					$('<td>').attr({'align': 'right', 'width': '25%'}).text('User sends:'),
					$('<td>').attr({'align': 'center', 'width': '25%', 'id': 'give'}).text('$0')
				)
			));

			// m/k usage
			var inputs = $('input[name="amount"]');
			inputs.each(function() {
				$(this).keydown(function(event) {
					var symcode = event.which;
					if(symcode == 75){
						$(this).val($(this).val() + '000');
					}
					if(symcode == 77){
						$(this).val($(this).val() + '000000');
					}
					$(this).val($(this).val().replace(/k|m/g, ''));
					return (symcode == 75 || symcode == 77)?false:true;
				});
			});
		}
//---------------- Scratchtracker ----------------
		if (on_page('/scratch.php') && (nn == 'center' || nn == 'b' || nn == 'form')) {
			var unopened, monin, mils, bullets, scratches;
			unopened = getV('unopened', 0);
			monin = parseInt(getV('monin', 0), 10);
			mils = parseInt(getV('mils', 0), 10);
			bullets = parseInt(getV('bullets', 0), 10);
			scratches = parseInt(getV('scratches', 0), 10);

			if ($('b:last').text() == 'Congratulations!') { //grab winning event
				if ($('#game_container:contains(They have been added to your account!)').length) { //bullets
					var rex = new RegExp('won (\\d+) bullets');
					var r = $('#game_container').text().match(rex);
					bullets += parseInt(r[1]);
					setV('bullets', bullets);
				}
				if ($('#game_container:contains(It has been added to your account!)').length) { //money
					var rex = new RegExp('You have won \\$ (\\d+)');
					var str = $('#game_container').text().replace(/,/g, '');
					var r = str.match(rex);
					monin += parseInt(r[1]);
					setV('monin', monin);
					if (parseInt(r[1]) == 1000000) {
						mils += 1;
						setV('mils', mils);
					}
					$('input[name="scratch"]').focus()
				}
			}
			if ($('#game_container:contains(Start scratching)').length) { //grab scratching event
				scratches += 1;
				setV('scratches', scratches);
				if($('input[name="Check"]').length) {
					$('input[name="Check"]').focus();
				} else {
					$('input[type="submit"]').focus();
				}
			} else {
				if ($('input[name="codescratch"]').length) {//focus on unclaimed prices
					$('input[type="submit"]:eq(1)').focus()
				} else { //focus on scratch
					$('input[name="scratch"]').focus()
				}
			}

			var monout = (scratches * 5000);
			if ((monin - monout) < 0) {
				var profit = '-$'+commafy(monout - monin);
			} else {
				var profit = '$'+commafy(monin - monout);
			}
			var ppk = Math.round((((monout - monin) / bullets) * 100000) / 100000);
			if (isNaN(ppk) || bullets == 0) {
				ppk = 0;
			}

			$('#game_container').append(
				$('<div>').addClass('NRinfo').attr('id', 'info').append(
					$('<center>').text('ScratchTracker').css('font-weight', 'bold'),
					$('<hr>').css({'color': 'gray'}),
					$('<div>').attr('id', 'statsscratcher').html('Scratched:<font style="float:right;"><b>'+commafy(scratches)+'</b></font><br />Money spent:<font style="float:right;"><b>$'+commafy(monout)+'</b></font><br />Money won:<font style="float:right;"><b>$'+commafy(monin)+'</b></font><br />Profit:<font style="float:right;"><b>'+profit+'</b></font><br />Millions:<font style="float:right;"><b>'+commafy(mils)+'</b></font><br />Bullets won:<font style="float:right;"><b>'+commafy(bullets)+'</b></font><br />Price per bullet:<font style="float:right;"><b>$'+commafy(ppk)+'</b></font>'),
					$('<hr>').css({'color': 'gray'}),
					$('<center>').append(
						$('<div>').attr('id', 'resetscratcher').css({'padding': '2px', 'border-radius': '7px', 'border': '2px solid grey'}).text('Reset stats').click(function() {
							$(this).text('Stats have been reset!');
							$('#statsscratcher').html('Scratched:<font style="float:right;"><b>0</b></font><br />Money spent:<font style="float:right;"><b>$0</b></font><br />Money won: <font style="float:right;"><b>$0</b></font><br />Profit:<font style="float:right;"><b>$0</b></font><br />Millions:<font style="float:right;"><b>0</b></font><br />Bullets won:<font style="float:right;"><b>0</b></font><br />Price per bullet:<font style="float:right;"><b>$0</b></font>');
							setV('monin', 0);
							setV('mils', 0);
							setV('bullets', 0);
							setV('scratches', 0);
						}).hover(function() {
							$(this).css({'padding': '2px', 'border-radius': '7px', 'border': '2px solid #960011', 'cursor': 'pointer'});
						}, function () {
							$(this).css({'padding': '2px', 'border-radius': '7px', 'border': '2px solid grey'});
						})
					)
				)
			);
		}
//---------------- BulletTracker ----------------
		if (on_page('/bullets2.php') && nn == 'center') {
			var d = new Date();
			var btdate = getV('btdate', 0);
			if(d.getDate()>btdate){ setV('bttoday', 0); }
			var obaybul = parseInt(getV('obaybul', 0), 10);
			var btbullets = parseInt(getV('btbullets', 0), 10);
			var bttoday = parseInt(getV('bttoday', 0), 10);
			var btmoney = parseInt(getV('btmoney', 0), 10);
			var btmode = parseInt(getV('btmode', 1), 10);
			if ($('#game_container:contains(Success, you bought)').length) {
				var rex = new RegExp('Success you bought (\\d+) bullets for \\$ (\\d+)');
				var str = $('#game_container').text().split('Bulletfactory')[0].replace(/,/g, '');;
				var r = str.match(rex);
				btbullets += parseInt(r[1], 10);
				bttoday += parseInt(r[1], 10);
				btmoney += parseInt(r[2], 10);
				setV('btbullets', btbullets);
				setV('bttoday', bttoday);
				setV('btmoney', btmoney);
				setV('btdate', d.getDate());
			}
			if (btbullets == 0) {
				var btdolpbul = 0;
			} else {
				var btdolpbul = Math.round((btmoney / btbullets) * 100) / 100;
			}
			if($('#game_container > div').attr('id') != 'btinfo') {
				$('#game_container').append(
					$('<div>').addClass('NRinfo').attr({id: 'btinfo', mode: btmode}).append(
						$('<center>').text('BulletTracker').css('font-weight', 'bold').click(function() {
							div = $('#btinfo');
							if (div.attr('mode') == 1) { //mode 1 - visible
								div.attr('mode', 0); //mode 0 - moving
								div.animate({ bottom:"-155px" }, 500, function() {
									div.attr('mode', -1);
									setV('brcDiv', -1);
								});
							}
							if (div.attr('mode') == -1) { //mode 1 - visible
								div.attr('mode', 0); //mode 0 - moving
								div.animate( { bottom:"10px" }, 500, function() {
									div.attr('mode', 1);
									setV('brcDiv', 1);
								});
							}
						}),
						$('<hr>').css({'color': 'gray'}),
						$('<div>').attr('id', 'btracker').html('Bullets bought:<font style="float:right;"><b>'+commafy(btbullets)+'</b></font><br />Bought today:<font style="float:right;"><b>'+commafy(bttoday)+'</b></font><br />Money spent:<font style="float:right;">$<b>'+commafy(btmoney)+'</b></font><br />Price per bullet:<font style="float:right;">$<b>'+commafy(btdolpbul)+'</b></font><br />Bought on Obay:*<font style="float:right;"><b>'+commafy(obaybul)+'</b></font><br /><font size="1">*not included in total or price per bullet</font>'),
						$('<hr>').css({'color': 'gray'}),
						$('<center>').append(
							$('<div>').attr('id', 'resetbt').css({'padding': '2px', 'border-radius': '7px', 'border': '2px solid grey'}).text('Reset stats').click(function() {
								$(this).text('Stats have been reset!');
								$('#btracker > font:not(:last-child) > b').text('0'); //temporary fix
								setV('btbullets', 0);
								setV('btmoney', 0);
								setV('bttoday', 0);
								setV('btdate', 0);
								setV('obaybul', 0);
							}).hover(function() {
								$(this).css({'padding': '2px', 'border-radius': '7px', 'border': '2px solid #960011', 'cursor': 'pointer'});
							}, function () {
								$(this).css({'padding': '2px', 'border-radius': '7px', 'border': '2px solid grey'});
							})
						)
					)
				);
			}
		}
//---------------- User Profile ----------------
		if (on_page('user.php') && nn == 'center') {

			var status = $('span#status').text();
			var inFam = ($('span#family > a').length?$('span#family > a').text():$('span#family').text());
			var alive = (status.search('Dead'));
			var unick = $('span#username').text();

			// DEAD or AKILLED ?
			if (!alive) {
				var rankings = '<a href="http://www.barafranca.com/BeO/webroot/index.php?module=Rankings&nick='+unick+'">View Rankings</a>';
				if($('img[src*="/userbadges/rip.gif"]').parent().get(0).tagName != 'A'){
					var akill = '<span style="color:red; font-weight:bold;"> (Akill) </span>';
					status += akill;
				}
				$.getJSON(OB_API_WEBSITE + '/?p=stats&w=deaths&v='+v+'&ing='+unick, function(data) {
					if (data["DiedAt"] === null) {
						$('span#status').text(status + ' | Death date is not known');
					} else {
						$('span#status').html(status + ' | '+rankings+' | Died at '+data['Date']+' OT ('+data['Agod']+'d '+data['Agoh']+'h '+data['Agom']+'m ago)');
					}
				});
			}
			if(status === 'Alive') {
				$.getJSON(OB_API_WEBSITE + '/?p=stats&w=laston&v='+v+'&ing='+unick, function(data) {
					if (data['LastOn'] === 0) { // 1970, thus not seen by logger
						$('span#status').text(status+' | This user has not been seen online by our logger yet');
					} else {
						$('span#status').html(status+' | Last on: '+data['Date']+' OT ('+data['Agod']+'d '+data['Agoh']+'h '+data['Agom']+'m ago)');
					}
				});
			}

			// Wealth
			var tr, x, y, z, xpath;
			tr = 10;
			x = $('#game_container').html().search('Marital status:');
			y = $('#game_container').html().search('SMS Status');
			z = $('#game_container').html().search('Family Buster of');

			if (x == -1) { tr--; }
			if (y == -1) { tr--; }
			if (z == -1) { tr--; }

			var wlth = $('#wealth').attr('value')

			var kind = [' ($0 - $50.000)', ' ($50.001 - $100.000)', ' ($100.001 - $500.000)', ' ($1.000.001 - $5.000.000)', ' ($5.000.001 - $15.000.000)', ' ( > $15.000.001)', ' ($500.001 - $1.000.000)'], i=1;
			var wealth = ['Straydog', 'Poor', 'Nouveau Riche', 'Very rich', 'Too rich to be true', 'Richer than God', 'Rich'];
			var a = wealth.indexOf(wlth);
			$('#wealth').text(wlth+kind[a])

			// Raceform
			var rf = $('#raceform').attr('value')
			var driver = ['Rookie', 'Co-Driver', 'Driver', 'Advanced Driver', 'Master Driver', 'Chauffeur', 'Advanced Chauffeur', 'Master Chauffeur', 'Racing Driver', 'Race Supremo', 'Champion'];
			var a = driver.indexOf(rf);
			$('#raceform').text((a+1)+' - '+rf)

			// Bust ranks
			var bustrank = $('table.thinline > tbody > tr:eq('+(tr+2)+') > td:eq(1) > span').attr('value') // until span id is changed
			var amount = [' (0-500)', ' (501-1.000)', ' (1.001-2.500)', ' (2.501-5.000)', ' (5.001-10.000)', ' (10.001-15.000)', ' (15.001-20.000)', ' (20.001-25.000)', ' (25.001-27.500)', ' (27.501+)'], i=1;
			var brank = ['Rookie', 'Novice', 'Initiate', 'Decent', 'Apprentice', 'Intermediate', 'Professional', 'Expert', 'Ultimate', 'Extreme Expert'];
			var a = brank.indexOf(bustrank);
			$('table.thinline > tbody > tr:eq('+(tr+2)+') > td:eq(1)').text(bustrank+amount[a]) // until span id is changed

//			Rookie (0-500)
//			Novice (501-1.000)
//			Initiate (1.001-2.500)
//			Decent (2.501-5.000)
//			Apprentice (5.001-10.000)
//			Intermediate (10.001-15.000)
//			Professional (15.001-20.000)
//			Expert (20.001-25.000)
//			Ultimate (25.001-27.500)
//			Extreme Expert (27.501+)

			// Actions
			var self = ($('table.thinline > tbody > tr:eq(2) > td:eq(1) > a > span').text() == getV('nick', ''));
			$('td.tableheader').parent().after(
				$('<tr>').append(
					$('<td>').addClass('profilerow').attr({'id': 'actions', 'colspan': '2', 'align': 'center'}).css('display', 'none').html('<a href="BeO/webroot/index.php?module=Heist&action=&who='+unick+'">Heist</a> | <a href="BeO/webroot/index.php?module=Spots&action=&driver='+unick+'">Raid</a> | <a href="kill.php?search='+unick+'">Hire Detectives</a>')
				)
			)
			if(!self && alive) {
				$('td.tableheader').append(
					$('<span>').text(' | '),
					$('<span>').text('View History').css('cursor', 'pointer').click(function() {
						$.get(OB_STATS_WEBSITE + '/history.php?v='+v+'&name='+unick, function(data) {
							$('#game_container').empty();
							$('#game_container').html(data);
						});
					}),
					$('<span>').text(' | '),
					$('<span>').text('Actions').css('cursor', 'pointer').click(function() {
						$('#actions').toggle()
					})
				)
			} else {
				$('td.tableheader').append(
					$('<span>').text(' | '),
					$('<span>').text('View History').css('cursor', 'pointer').click(function() {
						$.get(OB_STATS_WEBSITE + '/history.php?v='+v+'&name='+unick, function(data) {
							$('#game_container').empty();
							$('#game_container').html(data);
						});
					})
				)
			}
			if (parseInt(getPow('bninfo',4,-1),10) === 3 && inFam === 'None') {
				$('#actions').html($('#actions').html()+' | <a href="/BeO/webroot/index.php?module=Family&who='+unick+'">Invite to Family</a>');
			}
		}
//---------------- Linkify ----------------
		// Messages
		if (on_page('action=showMsg') && nn == 'center') {
			var msgType = $('.tableheader:eq(1) > b > strong').text();
			var msgType2 = $('.tableheader:eq(1) > b').text();
			var msgTxt = '.thinline:eq(1) > tbody > tr:eq(4) > td';
			var arr = $(msgTxt).html().split(' ');
			var linkify = ['Route 66 heist', 'Organised Crime', 'Mega Organized Crime', 'Target not found', 'Carrace invite', 'Target found', 'Kill success', 'Witness statement', 'Condolences', 'found', 'Ticket update', 'Crashed Message', 'Invitation', 'Raid Notification', 'Married', 'Wedding Gift', 'Wedding', 'Wedding Invitation', 'shot!'];

			function setArr(num) {
				return arr[num] = '<a href="/user.php?nick=' + arr[num].match(/\w+/g)[0] + '"><b>' + arr[num].match(/\w+/g)[0] + '</b></a>';
			}

			var WitnessMsg = new RegExp(linkify[7]); // Witness statement
			if (WitnessMsg.test(msgType)) {
				setArr(3);
				setArr(5);
				$(msgTxt).html(arr.join(' '));
			}
			var TnFMsg = new RegExp(linkify[3]); // Target not found
			if (TnFMsg.test(msgType)) {
				setArr(5);
				$(msgTxt).html(arr.join(' '));
			}
			var HeistMsg = new RegExp(linkify[0]); // Route 66 heist
			if (HeistMsg.test(msgType)) {
				if(arr[2] == 'inviting') {
					setArr(0);
					setArr(13);
					$(msgTxt).html(arr.join(' '));
				} else {
					$(msgTxt).html($(msgTxt).html());
				}
			}
			var RaceMsg = new RegExp(linkify[4]); // Car Race invite
			if (RaceMsg.test(msgType)) {
				setArr(9);
				arr[arr.length - 15] = '<a href="/races.php"><strong>' + arr[arr.length - 15];
				arr[arr.length - 14] = arr[arr.length - 14] + '</strong></a>';
				$(msgTxt).html(arr.join(' '));
			}
			var RaidMsg = new RegExp(linkify[13]); // Raid Notification
			if (RaidMsg.test(msgType)) {
				setArr(9);
				arr[arr.length - 8] = arr[arr.length - 8].split('<br>')[0]+'<br /><br /><a href="/BeO/webroot/index.php?module=Spots"><strong>' + arr[arr.length - 8].split('<br>')[2] + '</strong></a>';
				$(msgTxt).html(arr.join(' '));
			}
			var OCMsg = new RegExp(linkify[1]); // Organised Crime
			if (OCMsg.test(msgType)) {
				if(arr[2] == 'inviting') {
					setArr(0);
					setArr(arr.length - 8);
					$(msgTxt).html(arr.join(' '));
				} else {
					$(msgTxt).html($(msgTxt).html());
				}
			}
			var MOCMsg = new RegExp(linkify[2]); // Mega Organized Crime
			if (MOCMsg.test(msgType2)) {
				if(arr[2] == 'invited') {
					setArr(0);
					arr[arr.length - 8] = '<a href="/BeO/webroot/index.php?module=MegaOC"><strong>' + arr[arr.length - 8];
					arr[arr.length - 7] = arr[arr.length - 7] + '</strong></a>';
					$(msgTxt).html(arr.join(' '));
				} else {
					$(msgTxt).html($(msgTxt).html());
				}
			}
		}
//---------------- Lackeys ----------------
		if (on_page('module=Lackeys') && nn == 'div') {
			//General
			var logpath = 'table[data-info="log"] > tbody > tr';
			var credits = $('td[data-info="credits"]').text();
			var money = $('td[data-info="money"]').text().replace(/,/g, '');
			// Sluggs
			if (on_page('type=6') && nn == 'div') {
				var sluggsHideLaughing = getV('sluggsHideLaughing', 'true');
				var price = $('input#setting_bullets_max_price_price_6').val();

				// commafy and alert money
				var needed = (credits/5)*(price*1000);
				var short = money.substr(1)-needed;
				var enough = (short<0)?'<p style="color:red;">'+commafy(money)+' ($'+commafy(short)+')</p>':'<p style="color:green;">'+commafy(money)+'</p>';
				$('td[data-info="money"]').html(enough);

				// Price per bullet
				var x = 0;
				$(logpath).each(function() {
					// show price per bullet when Sluggs bought
					if ($(logpath+':eq('+x+') > td:eq(1)').html().replace(/,/g, '').match(/Sluggs bought (\d+) bullets for \$(\d+)/) && x != logpath.length) {
						var r = $(logpath+':eq('+x+') > td:eq(1)').html().replace(/,/g, '').match(/Sluggs bought (\d+) bullets for \$(\d+)/);
						var ppb = Math.round(r[2]/r[1]);
						$(logpath+':eq('+x+') > td:eq(1)').html($(logpath+':eq('+x+') > td:eq(1)').html()+' ($'+ppb+'/bullet)')
					}
					++x;
				});
				// Hide useless entries
				function hideLaughing(hide) {
					setV('sluggsHideLaughing', hide);
					sluggsHideLaughing = hide;
					x = 0;
					$(logpath).each(function() {
						if($(logpath+':eq('+x+') > td:eq(1)').html().match(/Sluggs is laughing at your measly limit/) && x != logpath.length) {
							if (hide) {
								$(this).hide();
							} else {
								$(this).show();
							}
						}
						++x;
					});
				}
				$('div.oheader:last').append(
					$('<span>').append(
						$('<input>').attr({id: 'cb', type: 'checkbox'}).click(function() {
							if (sluggsHideLaughing === true) {
								hideLaughing(false);
							} else {
								hideLaughing(true);
							}
						}),
						$('<label />').attr('for', 'cb').text('Hide "Sluggs is laughing" entries')
					)
				)
				if (sluggsHideLaughing === 'true') {
					$('#cb').prop('checked', true);
					hideLaughing(true);
				}
			}
		}
//---------------- BRC ----------------
		if ((on_page('prices.php') && nn == 'center') || (on_page('smuggling.php') && nn == 'center')) {
			var carry_n, carry_b;
			bninfo = getV('bninfo', -1);
			if (bninfo != '' && bninfo != -1) { //extra checker for undefined crap
				if (bninfo.search(/[^0-9]/) != -1) {
					setV('bninfo', -1);
				}
			}
			//grab Lex
			if ($('span#lexhelpsyou').length) {
				lex = parseInt($('span#lexhelpsyou').html().replace(/[^0-9]/g,''), 10);
				setV('lex', lex);
				d = new Date();
				lexDay = d.getDay();
				lexHour = d.getHours();
				setV('lexHour', lexHour);
				setV('lexDay', lexDay);
			} else {
				lex = getV('lex', 0);
				lexDay = getV('lexDay', -1);
				lexHour = getV('lexHour', -1);
			}

			function fillBRC(n, b, mode) { //actually filling the forms
				values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //set defaults
				// booze    - narcs    == maximum user can buy
				// carry_b  - carry_n  == total user is carrying
				// b_amount - n_amount == amount per item user is carrying
				// b        - n        == item we want
				if (n > -1 && !lnarcs && mode != 3) { //do we want narcs?
					if (carry_n == 0) { //nothing in pocket, fill it all
						values[7+n] = narcs;
						$('input[name="typedrugs"]:eq(1)').prop('checked', true); //buy
					} else { //something in pocket
						if (carry_n < narcs) { // we got space for more
							if (n_amount[n] < narcs) { //not full of wanted
								if (n_amount[n] != carry_n) { //there is unwanted stuff
									for (i=0; i<=6; i++) {
										if (i != n || mode == 1) { //only sell what we don't want
											values[i+7] = n_amount[i];
										}
									}
									$('input[name="typedrugs"]:eq(0)').prop('checked', true); //sell
								} else { //only carrying wanted narcs
									values[7+n] = narcs - carry_n; //if any, fill missing amount
									$('input[name="typedrugs"]:eq(1)').prop('checked', true); //buy
								}
							} else { //full of wanted
								if (mode > 0) { //CD/RP mode, sell all
									values[7+n] = n_amount[n];
									$('input[name="typedrugs"]:eq(0)').prop('checked', true); //sell
								}
							}
						} else { // we go too much, guess it was a good heist
							for(i=0;i<=6;i++) { //check what we carry
								if(mode==0 && i == n) {
									values[i+7] = 0;
								} else {
									values[i+7] = n_amount[i];
									$('input[name="typedrugs"]:eq(0)').prop('checked', true); //sell
								}
							}
						}
					}
				}
				if(n == -1 && mode == 4 && !lnarcs) {
					for (i=0; i<=6; i++) {
						values[i+7] = n_amount[i];
						$('input[name="typedrugs"]:eq(0)').prop('checked', true); //sell
					}
				}

				//check for scenario: failed selling narcs in high
				selling_n = 0;
				for (i=0; i<=6; i++) {
					selling_n += values[i+7];
				}
				fail_n = (carry_b == 0 && carry_n == narcs && mode == 0 && selling_n > 0) ? 1 : 0;

				if (b > -1 && !fail_n && !lbooze && mode != 3) { //do we want booze? Or are we still selling narcs in high?
					if (carry_b == 0) {
						values[b] = booze; //nothing in pocket, fill it all
						$('input[name="typebooze"]:eq(1)').prop('checked', true); //buy
					} else {
						if (carry_b < booze) { // we got space for more
							if (b_amount[b] < booze) { //not full of wanted
								if (b_amount[b] != carry_b) { //there is unwanted stuff
									for (i=0; i<=6; i++) {
										if ( (i != b || true) || mode == 1) { //only sell what we don't want or in CD mode
											values[i] = b_amount[i];
										}
									}
									$('input[name="typebooze"]:eq(0)').prop('checked', true); //sell
								} else { //only carrying wanted narcs
									if(mode = 2) {
										values[b] = carry_b; //if any, fill missing amount
										$('input[name="typebooze"]:eq(0)').prop('checked', true); //sell
									} else {
										values[b] = booze - carry_b; //if any, fill missing amount
										$('input[name="typebooze"]:eq(1)').prop('checked', true); //buy
									}
								}
							} else { //full of wanted
								if (mode > 0) { //CD/RP mode, sell all
									values[b] = b_amount[b];
									$('input[name="typebooze"]:eq(0)').prop('checked', true); //sell
								}
							}
						} else { // we go too much, guess it was a good heist
							for(i=0;i<=6;i++) { //check what we carry
								if(mode==0 && i == b) {
									values[i] = 0;
								} else {
									values[i] = b_amount[i];
									$('input[name="typebooze"]:eq(0)').prop('checked', true); //sell
								}
							}
						}
					}
				}
				if(b == -1 && mode == 4 && !lbooze) {
					for (i=0; i<=6; i++) {
						values[i] = b_amount[i];
						$('input[name="typebooze"]:eq(0)').prop('checked', true); //sell
					}
				}

				//fill in the fields with the calculated values
				var sorts = ['wine', 'cognac', 'whiskey', 'amaretto', 'beer', 'port', 'rum', 'morphine', 'heroin', 'opium', 'cocaine', 'marihuana', 'tabacco', 'glue'];
				var start = (lbooze)?7:0;
				var end = (lnarcs)?6:13;
				for (i=start; i<=end; i++) {
					var box = $('input[name="'+sorts[i]+'"]');
					box.val(values[i]);
				}

				//focus
				$('input#ver').focus();
			}

			function appBRC(BN) {
				if(!lboth) {
					var getInfo = $('div#info:eq(0)').text();
					getInfo = getInfo.split('*');
					narc = getInfo[0];
					booze = getInfo[1];
					city = getInfo[2];
					plane = getInfo[3];
					fam = getInfo[4];
					lex = parseInt(getInfo[8]);
					lexHour = parseInt(getInfo[9]);
					lexDay = parseInt(getInfo[10]);

					// extra city checker
					if (on_page('smuggling.php') && nn == 'center') {
						smugCity = $('h3').text();
						for (i = 0; i < 8; i++) {
							if (smugCity.search(cities[i]) != -1) {
								city = i + 4;
								setPow('bninfo', 2, city);
							}
						}
					}
					// calc profits per item per city
					lex = 1 + 0.01*lex;
					for (nCityprofit = [], bCityprofit = [], i = 0; i <= 7; i++) { // get profit per single unit of b/n
						for (nCityprofit[i] = [], bCityprofit[i] = [], j = 0; j <= 6; j++) { // price there - price here
							nCityprofit[i].push(Math.round(BN[0][j][(i + 2)]*lex) - BN[0][j][(city - 4 + 2)]); //-4 correction for city ID,
							bCityprofit[i].push(Math.round(BN[1][j][(i + 2)]*lex) - BN[1][j][(city - 4 + 2)]); //+2 correction for min/max @ [0]+[1] in BN array
						}
						nCityprofit[i].unshift(nCityprofit[i].max()); //most profit per unit in this city
						bCityprofit[i].unshift(bCityprofit[i].max());
					}
					// create BRC table
					var table = $('<table>').addClass('thinline').attr('id', 'brc').css('width', '500').append(
						$('<tr>').append(
							$('<td>').addClass('tableheader').attr('colspan', '5').text('Best Run Calculator')
						),
						$('<tr>').append(
							$('<td>').attr({colspan: '5', height: '1'}).css('background-color', '#000')
						),
						$('<tr>').css({'border-bottom': '1px solid #000', 'background-color': '#F0F0F0'}).append(
							$('<td>').html('&nbsp; City'),
							$('<td>').html('&nbsp; Booze'),
							$('<td>').html('&nbsp; Narc'),
							$('<td>').html('&nbsp; Profit'),
							$('<td>').html('&nbsp;')
						)
					)
					// add city rows with individual profits
					for (allProfits = [], bestBN = [], i = 0; i <= 7; i++) {
						var tr  = $('<tr>').attr('id', '2row'+(i+2));
						tr.hover(function(event) {
							$(this).css('backgroundColor', '#888');
						}, function(event) {
							$(this).css('backgroundColor', '#F0F0F0');
						})

						var td = $('<td>').attr('colspan', '5').css({'border-bottom': '1px solid #000', 'heigth': '19px'});

						//--Calc profits
						if (i == city - 4) { // This is the current city
							td.css('text-align', 'center');
							td.html('<i>You are in '+cities[i]+'</i>')
							tr.append(td);
							allProfits.push(0);
							bestBN.push([0, 0]);
						} else if (plane == 0 && (((city == 6 || city == 11) && (i + 4) != 6 && (i + 4) != 11) || ((city != 6 && city != 11) && ((i + 4) == 6 || (i + 4) == 11)))) { // No plane to travel there
							td.css('text-align', 'center');
							td.html('<i>You can\'t fly to '+cities[i]+'</i>')
							tr.append(td);
							allProfits.push(0);
							bestBN.push([0, 0]);
						} else { //Nothing wrong, clear to go
							bestNarc = nCityprofit[i][0] < 0 ? 0 : nCityprofit[i].lastIndexOf(nCityprofit[i][0]); //best, if any, narc?
							profitNarc = (bestNarc == 0) ? 0 : nCityprofit[i][bestNarc]; //profit per unit
							profitNarc = profitNarc * narc;

							bestBooze = bCityprofit[i][0] < 0 ? 0 : bCityprofit[i].lastIndexOf(bCityprofit[i][0]); //best, if any, booze?
							profitBooze = (bestBooze == 0) ? 0 : bCityprofit[i][bestBooze]; //profit per unit
							profitBooze = profitBooze * booze;

							//calc travelcost
							travelPrices = [ //travelcosts from A to B
								[    0,   600, 10350, 1575,  3600, 1350,  1050, 10800], //det
								[  600,     0, 11025, 2025,  3000, 1725,  1425, 11400], //chi
								[10350, 11025,     0, 9075, 14025, 9450,  9750,  1875], //pal
								[ 1575,  2025,  9075,    0,  5025,  375,   675,  9375], //ny
								[ 3600,  3000, 14025, 5025,     0, 4650,  4350, 14400], //lv
								[ 1350,  1725,  9450,  375,  4650,    0,   300,  9750], //phi
								[ 1050,  1425,  9750,  675,  4350,  300,     0, 10050], //bal
								[10800, 11400,  1875, 9375, 14400, 9750, 10050,     0]  //cor
							];  //det   chi    pal    ny    lv     phi   bal    cor
							travelCost = travelPrices[i][(city - 4)];
							if (plane == 0) { //no plane => half travelcost
								travelCost /= 2;
							}

							//Our total profit in this city
							totalProfit = (profitNarc + profitBooze) - Math.round(travelCost);

							//save all profits in array for later
							if (totalProfit < 0) {
								bestBN.push([0, 0]); //push dummy to complete array
							}
							bestBN.push([bestNarc, bestBooze]);
							var wnarc = (bestNarc == 0)?0:bestNarc-1;
							var wbooze = (bestBooze == 0)?0:bestBooze-1;
							var narcsell = (BN[0][wnarc][0] * narc) * lex;
							var boozesell = (BN[1][wbooze][0] * booze) * lex;
							var pay = (Math.round(narcsell * [0, 0.11, 0.11, 0, 0.1][fam])+Math.round(boozesell * [0, 0.11, 0.11, 0, 0.1][fam])); // famless, member no capo, capo, top3, member with capo
							totalProfit = totalProfit - pay;
							allProfits.push(totalProfit);

							//What's the result
							if (totalProfit < 0) { //no profit :(
								td.css('text-align', 'center');
								td.html('<i>You won\'t make any profit in '+cities[i]+'</i>');
								tr.append(td);
							} else { //profit \o/
								td.html('&nbsp;'+cities[i])
								td.attr('colspan', '1');
								tr.append(td);
								tr.append(
									$('<td>').css({'border-left': '1px solid #000','border-bottom': '1px solid #000'}).html('&nbsp; '+boozenames[bestBooze]),
									$('<td>').css({'border-left': '1px solid #000','border-bottom': '1px solid #000'}).html('&nbsp; '+narcnames[bestNarc]),
									$('<td>').css({'border-left': '1px solid #000','border-bottom': '1px solid #000'}).html('&nbsp; $'+commafy(totalProfit))
								)

								if (on_page('smuggling.php') && nn == 'center') { //we need JS links @ smuggling and don't want to waste clicks
									key = [0, 4, 6, 1, 2, 3, 5]; //convert b/n - botprices order to smuggling order
									n1 = key[bestNarc-1];
									b1 = key[bestBooze-1];

									tr.append(
										$('<td>').css({'border-left': '1px solid #000','border-bottom': '1px solid #000'}).html('&nbsp;').append(
											$('<span>').attr({id: 'go'+i, n: n1, b: b1}).css({'font-weight': 'inherit', 'text-align': 'center', 'cursor': 'pointer'}).text('Go!').click(function () {
												fillBRC(parseInt($(this).attr('n'), 10), parseInt($(this).attr('b'), 10), 0)
											})
										)
									)
								} else { //we need to GET to smuggling too
									tr.append(
										$('<td>').css({'border-left': '1px solid #000','border-bottom': '1px solid #000'}).html('&nbsp;').append(
											$('<a>').attr({id: 'go'+i, href: 'http://www.barafranca.com/smuggling.php?n=' + (bestNarc - 1) + '&b=' + (bestBooze - 1)}).css({'font-weight': 'inherit', 'text-align': 'center', 'cursor': 'pointer'}).text('Go!')
										)
									)
								}
							}
						}
						table.append(tr);
					}
					// add lex row
					if(lex>1) {
						d = new Date();
						table.append(
							$('<tr>').append(
								$('<td>').attr('colspan', '5').css({'text-align': 'center', 'font-size': '10px'}).text('Lex Level: ' + parseInt((lex-1)*100) + ' - Seen ' + ((d.getDay() != lexDay)?'1 Day ago':d.getHours() - lexHour + ' Hours ago'))
							)
						)
					}
					// add table to page
					if (on_page('prices.php') && nn == 'center') {
						if($('#brc').length == 0) {
							$('#game_container').append(
								$('<br />'),
								table
							)
						}
					} else {
						if($('#brc').length == 0) {
							$('#game_container').append(
								$('<br />'),
								table
							)
						}
					}
					// bold-ify Best Run
					bestRun = allProfits.lastIndexOf(allProfits.max());
					$('#brc > tbody > tr:eq(' + (3 + bestRun) + ')').css('font-weight', 'bold');

					if (on_page('smuggling.php') && nn == 'center') {
						function AF(sel,Xn,Xb) {
							n = -1;
							b = -1;
							//assemble info for AF
							inputs = $('input');
							bn_xp = 'form > table > tbody > tr:eq(0) > td';
							bn_text = $(bn_xp).html().split('|');

							cash = parseInt(bn_text[0].replace(/[^0-9.]/g, ''));
							booze = parseInt(bn_text[1].replace(/[^0-9.]/g, '')); //max amount user can carry
							narcs = parseInt(bn_text[2].replace(/[^0-9.]/g, ''));

							b_amount = [0, 0, 0, 0, 0, 0, 0];
							n_amount = [0, 0, 0, 0, 0, 0, 0]; //what is user carrying
							var xpb = 'table.thinline > tbody > tr:eq(';
							var xpn = 'table.thinline:eq(1) > tbody > tr:eq(';
							for (i = 0; i <= 13; i++) { //define how much of this item is being carried
								if (i < 7 && !lbooze) {
									b_amount[i] = parseInt($(xpb + (i + 3) + ') > td:eq(2)').text());
								}
								if (i > 6 && !lnarcs) {
									n_amount[(i - 7)] = parseInt($(xpn + (i - 4) + ') > td:eq(2)').text());
								}
							}
							carry_n = n_amount.sum();
							carry_b = b_amount.sum(); //how much is the user carrying already
							//which item do we want?
							key = [0, 4, 6, 1, 2, 3, 5];
							if (sel == 0) { //Calc for Best Run
								n = key[(bestBN[bestRun][0] - 1)]; //this trick works, even I'm amazed
								b = key[(bestBN[bestRun][1] - 1)];
							}
							if (sel == 1) { //CD Run
								for (i = 0; i <= 6; i++) {
									nItem = parseInt(BN[0][i][(city - 4 + 2)]);
									highNarc = ((i == 0) ? nItem : ((highNarc > nItem) ? highNarc : nItem));
									if (highNarc == nItem) {
										n = i;
									}
									bItem = parseInt(BN[1][i][(city - 4 + 2)]);
									highBooze = ((i == 0) ? bItem : ((highBooze > bItem) ? highBooze : bItem));
									if (highBooze == bItem) {
										b = i;
									}
								}
								n = key[n];
								b = key[b];
							}
							if (sel == 2) { //RP Run
								for (i = 0; i <= 6; i++) {
									nItem = parseInt(BN[0][i][(city - 4 + 2)]);
									lowNarc = ((i == 0) ? nItem : ((lowNarc < nItem) ? lowNarc : nItem));
									if (lowNarc == nItem) {
										n = i;
									}
									bItem = parseInt(BN[1][i][(city - 4 + 2)]);
									lowBooze = ((i == 0) ? bItem : ((lowBooze < bItem) ? lowBooze : bItem));
									if (lowBooze == bItem) {
										b = i;
									}
								}

								n = key[n];
								b = key[b];

								//don't fill in if we can't earn RP and AF would want to buy
								if(!lbooze) {
									if (!$('form > table > tbody > tr:eq(1) > td[align="center"]:eq(0)').text().match('NOW') && $('input[name="typebooze"]:eq(1)').prop('checked') === true) {
										b = -1;
									}
								}
								if(!lnarcs) {
									if (!$('form > table > tbody > tr:eq(1) > td[align="center"]:eq(1)').text().match('NOW') && $('input[name="typedrugs"]:eq(1)').prop('checked') === true) {
										n = -1;
									}
								}
							}
							if (sel == 3) { //None
								n = b = -1;
							}
							if (document.location.search != '') { //user manual override using external Go! link
								n = key[($.urlParam('n'))];
								b = key[($.urlParam('b'))];
							}

							//overrule with hotkeys [ ] =
							if(Xn) { var n = -1; }
							if(Xb) { var b = -1; }

							//we know our n and b => fill it in!
							fillBRC(n, b, sel);
						}
						AF(getInfo[5]);

						if(!$('#AF').length) {
							var top = (getInfo[6] == -1) ? '-95px' : '10px';
							$('#game_container').append(
								$('<div>').addClass('BRCinfo').attr({id: 'AF', mode: getInfo[6]}).css('top', top).append(
									$('<span>').append(
										$('<input>').attr({id: 'brc0', type: 'radio', name: 'brc'}).click(function() {
											AF(0);
											try {
												setV('brcAF', 0);
											} catch (e) {}
										}),
										$('<a>').attr({id: 'a1', acceskey: '8', title: 'Fill in the most profitable b/n (Hotkey: 8 )'}).text('Best: (8)')
									),
									$('<span>').append(
										$('<br />'),
										$('<input>').attr({id: 'brc1', type: 'radio', name: 'brc'}).click(function() {
											AF(1);
											try {
												setV('brcAF', 1);
											} catch (e) {}
										}),
										$('<a>').attr({id: 'a2', acceskey: '9', title: 'Fill in the most expensive b/n (Hotkey: 9 )'}).text('CD: (9)')
									),
									$('<span>').append(
										$('<br />'),
										$('<input>').attr({id: 'brc2', type: 'radio', name: 'brc'}).click(function() {
											AF(2);
											try {
												setV('brcAF', 2);
											} catch (e) {}
										}),
										$('<a>').attr({id: 'a3', acceskey: '0', title: 'Fill in the cheapest b/n (Hotkey: 0 )'}).text('RP: (0)')
									),
									$('<span>').append(
										$('<br />'),
										$('<input>').attr({id: 'brc3', type: 'radio', name: 'brc'}).click(function() {
											AF(3);
											try {
												setV('brcAF', 3);
											} catch (e) {}
										}),
										$('<a>').attr({id: 'a4', acceskey: '-', title: 'Don\'t fill anything (Hotkey: - )'}).text('None: (-)')
									),
									$('<hr />'),
									$('<span>').attr('title', 'Hide this!').css({'text-decoration': 'underline', 'cursor': 'pointer'}).text('Auto-Fill').click(function() {
										div = $('#AF');
										if (div.attr('mode') == 1) { //mode 1 - visible
											div.attr('mode', 0); //mode 0 - moving
											div.animate({ top:"-95px" }, 500, function() {
												div.attr('mode', -1);
												setV('brcDiv', -1);
											});
										}
										if (div.attr('mode') == -1) { //mode 1 - visible
											div.attr('mode', 0); //mode 0 - moving
											div.animate( { top:"10px" }, 500, function() {
												div.attr('mode', 1);
												setV('brcDiv', 1);
											});
										}
									})
								)
							)
						}

						$('a#a1').attr('href', 'javascript:document.getElementById("brc0").click();');
						$('a#a2').attr('href', 'javascript:document.getElementById("brc1").click();');
						$('a#a3').attr('href', 'javascript:document.getElementById("brc2").click();');
						$('a#a4').attr('href', 'javascript:document.getElementById("brc3").click();');

						var getInfo = $('div#info:eq(0)').text();
						getInfo = getInfo.split('*');
						var mode = getInfo[5];

						var xp = 'form > table > tbody > tr:eq(0) > td > center';
						if($('#do_n').length == 0) {
							$(xp).append(
								$('<span>').attr({id: 'do_n', title: 'AutoFill just narcs according to selected BRC mode (Hotkey: [ )', acceskey: '['}).css('cursor', 'pointer').text('Narcs'),
								$('<span>').text(' | '),
								$('<span>').attr({id: 'do_b', title: 'AutoFill just booze according to selected BRC mode (Hotkey: ] )', acceskey: ']'}).css('cursor', 'pointer').text('Booze'),
								$('<span>').text(' | '),
								$('<span>').attr({id: 'do_sell', title: 'Sell all you have (Hotkey: = )', acceskey: '='}).css('cursor', 'pointer').text('Sell All'),
								$('<br />')
							)
						}
						$('#do_n').click(function(){ AF(getV('brcAF', 0),0,1); });
						$('#do_b').click(function(){ AF(getV('brcAF', 0),1,0); });
						$('#do_sell').click(function(){ AF(4,1,1); });

						$('input#brc'+getInfo[5]).prop('checked', true);
					}
				}
			}
			if (getV('bninfo', -1) > 0) { //do we have info data?

//				if (getV('brcAF', 0) == 1 && prefs[18]) { //remove blue calculation texts
//					if (db.innerHTML.search('<font color="blue">') != -1) {
//						$del('//font[@color="blue"]');
//					}
//				}

				//create 'unsafeDiv' to transfer data to XHR function
				narc = getPow('bninfo', 0, -1);
				booze = getPow('bninfo', 1, -1);
				city = getPow('bninfo', 2, -1);
				plane = getPow('bninfo', 3, -1);
				fam = getPow('bninfo', 4, -1);

				$('#wrapper').append(
					$('<div>').attr('id', 'info').css('display', 'none').text(narc + '*' + booze + '*' + city + '*' + plane + '*' + fam + '*' + getV('brcAF', 0) + '*' + getV('brcDiv', 1) + '*https://raw.github.com/OmertaBeyond/OBv2/master/images/delete.png*' + lex + '*' + lexHour + '*' + lexDay)
				)

				//get all prices
				if (on_page('prices.php') && nn == 'center') { //prices are on the page
					for (BN = [], i = 0; i <= 1; i++) { //B/N
						for (BN[i] = [], j = 0; j <= 6; j++) { //type
							for (BN[i][j] = [], k = 0; k <= 7; k++) { //city
								BN[i][j].push(parseInt($('center:eq('+i+') > table > tbody > tr:eq('+(3+k)+') > td:eq('+(1+j)+')').text().replace(/[^0-9]/g, '')));
							}
							BN[i][j].unshift(BN[i][j].min()); //get min
							BN[i][j].unshift(BN[i][j].max()); //get max
						}
					}
					appBRC(BN);
				} else {
					function parsePrices(resp, url) {
						parser = new DOMParser();
						dom = parser.parseFromString(resp, 'application/xml');

						for (BN = [], i = 0; i <= 1; i++) { //B/N
							for (BN[i] = [], j = 0; j <= 6; j++) { //type
								for (BN[i][j] = [], k = 0; k <= 7; k++) {
									BN[i][j].push(parseInt(dom.getElementsByTagName((i == 0 ? (narcnames[(j + 1)]).replace('abacco', 'obacco') : boozenames[(j + 1)]).toLowerCase())[k].textContent)); //city
								}
								BN[i][j].unshift(BN[i][j].min()); //get min
								BN[i][j].unshift(BN[i][j].max()); //get max
							}
						}
						appBRC(BN); //send prices to BRC function
					}
					function grabHTML(url, func) {
						var r = 0;
						if (window.XMLHttpRequest) {
							r = new XMLHttpRequest();
						}
						r.onreadystatechange = function () {
							if (r.readyState == 4) {
								if (r.status == 200) {
									func(r.responseText, url);
								}
							}
						};
						r.open('GET', url, true);
						r.send(null);
					}
					grabHTML('http://' + document.location.hostname + '/BeO/webroot/index.php?module=API&action=smuggling_prices', parsePrices);
				}
			}

			if (on_page('prices.php') && nn == 'center') {
				noBRC = false; //asume working BRC table
				if (typeof BN == 'undefined') { //see if prices are grabbed already
					noBRC = true; //no BRC mean no need to try and HL 'em
					for (BN = [], i = 0; i <= 1; i++) { // B/N
						for (BN[i] = [], j = 0; j <= 6; j++) { // type
							for (BN[i][j] = [], k = 0; k <= 7; k++) { // city
								BN[i][j].push(parseInt($('center:eq('+i+') > table > tbody > tr:eq('+(3+k)+') > td:eq('+(1+j)+')').text().replace(/[^0-9]/g, '')));
							}
							BN[i][j].unshift(BN[i][j].min()); //get min
							BN[i][j].unshift(BN[i][j].max()); //get max
						}
					}
				}
				for (i = 0; i <= 1; i++) {
					for (j = 0; j <= 6; j++) {
						for (k = 2; k <= 9; k++) {
							if (j == 0) { //add mouseover effects
								row = $('center:eq('+i+') > table > tbody > tr:eq('+(k+1)+')');
								row.attr('id', i+'row'+k);
								row.css('borderTop', '1px solid #000');
								row.hover(function(event) {
									$(this).css('backgroundColor', '#888');
									$('#'+(i ? 0 : 1)+'row'+k).css('backgroundColor', '#888');
								}, function(event) {
									$(this).css('backgroundColor', '#F0F0F0');
									$('#'+(i ? 0 : 1)+'row'+k).css('backgroundColor', '#F0F0F0');
								})
							}

							item = $('center:eq('+i+') > table > tbody > tr:eq('+(k+1)+') > td:eq('+(j+1)+')');
							item.css({'borderTop': '1px solid #000', 'text-align': 'center', 'width': '12%'});
							if (!(j % 2)) { //add colors to rows
								item.css('backgroundColor', '#B0B0B0');
							}
							if (BN[i][j][k] == BN[i][j][0]) { //HL max
								item.css('fontWeight', 'bold');
								item.css('color', '#FF0000');
							}
							if (BN[i][j][k] == BN[i][j][1]) { //HL min
								item.css('fontWeight', 'bold');
								item.css('color', '#16E54A');
							}
							if (j == 5 && i == 0) { //bold-ify cocaine
								item.css('fontWeight', 'bold');
							}
						}
					}
				}
			}
		}
//---------------- Smuggling ----------------
		if (on_page('smuggling.php') && nn == 'center') {
			var lbooze = 0, lnarcs = 0, lboth = 0, lex = 0;

			//check if lackeys on
			if ($('#game_container').html().match('/orourke.jpg') != null && $('#game_container').html().match('/freekowski.jpg') != null) {
				lboth = 1;
			}
			else if ($('#game_container').html().match('/orourke.jpg') != null) {
				lbooze = 1;
			}
			else if ($('#game_container').html().match('/freekowski.jpg') != null) {
				lnarcs = 1;
			}

			//get input fields
			inputs = $('input');
			bn_xp = 'form > table > tbody > tr:eq(0) > td';
			bn_text = $(bn_xp).html().split('<br>');
		
			var cash = parseInt(bn_text[3].replace(/[^0-9.]/g, ''), 10);
			var booze = parseInt(bn_text[4].match(/\d+/), 10); //max amount user can carry
			var narcs = parseInt(bn_text[5].match(/\d+/), 10);
			if(bn_text[6]) {
				lex = parseInt(bn_text[6].match(/\d+/), 10);
			}
		
			b_amount = [0, 0, 0, 0, 0, 0]; //what is user carrying
			n_amount = [0, 0, 0, 0, 0, 0];
		
			var xpb = 'table.thinline > tbody > tr:eq(';
			var xpn = 'table.thinline:eq(1) > tbody > tr:eq(';
		
			if(!lboth) {
				for (var i = 0; i <= 13; i++) { //add click to fill stuff and hotkeys
					if (i < 7 && !lbooze) { //booze
						var x = i + 3;
						var bname = $(xpb + x + ') > td:eq(0)').text()
						b_amount[i] = parseInt($(xpb + x + ') > td:eq(2)').html(), 10); //define how much of this item is being carried
						$(xpb + x + ') > td:eq(0)').empty()
						$(xpb + x + ') > td:eq(0)').append(
							$('<span>').attr({id: 'bh'+i, index: i, acceskey: (i + 1), title: 'Fill in this booze (Hotkey: '+(i+1)+')'}).css('cursor', 'pointer').text((i + 1)+' '+bname).click(function() {
								var i = parseInt($(this).attr('index'));
								var inpt = $('input[type="text"]')
								for(var j=0;j<=6;j++) {//reset form
									if (j!=i) {
										inpt[j].value = 0;
									}
								}
								var total = b_amount.sum();
								var missing = booze - b_amount[i];
								var value = inpt[i].value;
								if (b_amount[i] == 0 && total < booze) {
									if (value == 0) {
										inpt[i].value = booze;
										$('input[type="radio"]:eq(1)').prop('checked', true)
									} else {
										inpt[i].value = 0;
									}
								} else if (b_amount[i] == booze) {
									if (value == 0) {
										inpt[i].value = booze;
										$('input[type="radio"]:eq(0)').prop('checked', true)
									} else {
										inpt[i].value = 0;
									}
								} else if (b_amount[i] < booze && total < booze) {
									if (value == 0) {
										inpt[i].value = missing;
										$('input[type="radio"]:eq(1)').prop('checked', true)
									} else if (value == missing) {
										inpt[i].value = b_amount[i];
										$('input[type="radio"]:eq(0)').prop('checked', true)
									} else {
										inpt[i].value = 0;
									}
								} else if (n_amount[i-9] > booze) {
									if (value == 0) {
										inpt[i].value = b_amount[i];
										$('input[type="radio"]:eq(0)').prop('checked', true)
									} else {
										inpt[i].value = 0;
									}
								} else if (b_amount[i] < booze && total > booze){
									if (value == 0) {
										inpt[i].value = b_amount[i];
										$('input[type="radio"]:eq(0)').prop('checked', true)
									} else {
										inpt[i].value = 0;
									}
								}
								$('input#ver').focus();
							})
						)
					}
					if (i > 6 && !lnarcs) { //narcs
						var x = i - 4;
						var nname = $(xpn + x + ') > td:eq(0)').text()
						n_amount[(i - 7)] = parseInt($(xpn + x + ') > td:eq(2)').html(), 10); //define how much of this item is being carried
						$(xpn + x + ') > td:eq(0)').empty()
						$(xpn + x + ') > td:eq(0)').append(
							$('<span>').attr({id: 'nh'+i, index: i, title: 'Fill in this narc'}).css('cursor', 'pointer').text(nname).click(function() {
								var i = parseInt($(this).attr('index'));
								var inpt = $('input[type="text"]')
								for(var j=0;j<=6;j++) {//reset form
									if (j!=i-7) {
										if(lbooze) {
											inpt[j].value = 0;
										} else {
											inpt[j+7].value = 0;
										}
									}
								}
								var total = n_amount.sum();
								var missing = narcs - n_amount[i-7];
								if(lbooze) {
									var value = parseInt(inpt[i-7].value);
								} else {
									var value = parseInt(inpt[i].value);
								}
								if (n_amount[i-7] == 0 && total < narcs) {
									if (value == 0) {
										if(lbooze) {
											inpt[i-7].value = narcs;
											$('input[type="radio"]:eq(1)').prop('checked', true)
										} else {
											inpt[i].value = narcs;
											$('input[type="radio"]:eq(3)').prop('checked', true)
										}
									} else {
										inpt[i].value = 0;
									}
								} else if (n_amount[i-7] == narcs) {
									if (value == 0) {
										if(lbooze) {
											inpt[i-7].value = narcs;
											$('input[type="radio"]:eq(0)').prop('checked', true)
										} else {
											inpt[i].value = narcs;
											$('input[type="radio"]:eq(2)').prop('checked', true)
										}
									} else {
										inpt[i].value = 0;
									}
								} else if (n_amount[i-7] < narcs && total < narcs) {
									if (value == 0) {
										if(lbooze) {
											inpt[i-7].value = missing;
											$('input[type="radio"]:eq(1)').prop('checked', true)
										} else {
											inpt[i].value = missing;
											$('input[type="radio"]:eq(3)').prop('checked', true)
										}
									} else if (value == missing) {
										if(lbooze) {
											inpt[i-7].value = n_amount[i-7];
											$('input[type="radio"]:eq(0)').prop('checked', true)
										} else {
											inpt[i].value = n_amount[i-7];
											$('input[type="radio"]:eq(3)').prop('checked', true)
										}
									} else {
										inpt[i].value = 0;
									}
								} else if (n_amount[i-7] > narcs) {
									if (value == 0) {
										if(lbooze) {
											inpt[i-7].value = n_amount[i-7];
											$('input[type="radio"]:eq(0)').prop('checked', true)
										} else {
											inpt[i].value = n_amount[i-7];
											$('input[type="radio"]:eq(3)').prop('checked', true)
										}
									} else {
										inpt[i].value = 0;
									}
								} else if (b_amount[i] < narcs && total > narcs){
									if (value == 0) {
										if(lbooze) {
											inpt[i-7].value = n_amount[i-7];
											$('input[type="radio"]:eq(0)').prop('checked', true)
										} else {
											inpt[i].value = n_amount[i-7];
											$('input[type="radio"]:eq(2)').prop('checked', true)
										}
									} else {
										inpt[i].value = 0;
									}
								}
								$('input#ver').focus();
							})
						)
					}
				}
			}

			var inp = $('input[name="typebooze"], input[name="typedrugs"]');
			inp.each(function(){
				$(this).click(function() {
					if ($('input#ver').length) {
						$('input#ver').focus();
					}
				});
			});
		
			//visual fix
			if(lnarcs) {
				$('form > table > tbody > tr:eq(1) > td:eq(1)').prepend(
					$('<br />'),
					$('<br />')
				)
				$('table.thinline:eq(1)').append(
					$('<br />')
				)
			}
			if(lbooze) {
				$('form > table > tbody > tr:eq(1) > td:eq(0)').prepend(
					$('<br />'),
					$('<br />')
				)
				$('table.thinline:eq(0)').append(
					$('<br />')
				)
			}
		
			//create more efficient info text
			var str = $('<center>').append(
				$('<table>').append(
					$('<tr>').append(
						$('<td>').text('Pocket: $ '+commafy(cash)+' |'),
						$('<td>').text('Booze: '+booze+' |'),
						$('<td>').text('Narcs: '+narcs+' |'),
						$('<td>').text('Lex: '+lex)
					)
				)
			);
			$(bn_xp).html(str).append(
				$('<a>').attr({href: 'prices.php', target: 'main'}).text('Current Booze/Narcotics Prices')
			)
			if(!lboth) {
				$('input#ver').focus(); //focus captcha field
			}
		}
//---------------- Crimes ----------------
		if (on_page('module=Crimes') && nn == 'br') {
			setTimeout(function () {
				$('input.option:last').prop('checked', true);
			},100);
		}
//---------------- Obay ----------------
		if (on_page('obay.php') && !on_page('specific') && nn == 'center') {
			$('table.thinline:eq(2) > thead > tr').each(function() {
				if($(this).attr('class') != 'tableitem') { //this row does not have an object, but needs adjusted colspan
					var sorting = (on_page('type=all'))?1:0; //are we sorting at all?
					$(this).html($(this).html().replace('colspan="'+(sorting?5:6)+'"','colspan="'+(sorting?6:7)+'"'));
				} else { //this row needs another collumn alltogether
					var bet = $('<td>');
					bet.html('Bet');
					$(this).append(bet);
				}
			});
			$('table.thinline:eq(2) > tbody > tr').each(function() {
				if(['one','two','three'].indexOf($(this).attr('class')) > -1) { //this row has an object
					var sort_b = (on_page('type=11'))?1:0; //are we sorting on bullets?
					$(this).attr('onclick', '');
					//add price per bullets
					if($(this).text().indexOf('bullets') != -1) {
						var bullets = parseInt($(this).find('td:eq('+(2-sort_b)+')').text().replace(/[^0-9.]/g, ''), 10);
						var money = parseInt($(this).find('td:eq('+(3-sort_b)+')').text().replace(/[^0-9.]/g, ''), 10);
						var ppb = parseInt(money/bullets, 10);
						$(this).find('td:eq('+(2-sort_b)+')').text($(this).find('td:eq('+(2-sort_b)+')').text()+' ($'+commafy(ppb)+')')
					}
					//add fast bid link
					var id = $(this).find('a').attr('href').split('=')[1];
					var bettd = $('<td>');
					bettd.css('cursor', 'pointer');
					bettd.html('<form id="form'+id+'" method="post" style="display:none;" action="obay.php"><input type="hidden" value="" name="k"><input type="hidden" value="'+id+'" name="specific" /><input type="hidden" value="" name="bid" id="bid'+id+'" /><input type="hidden" value="0" name="anon" /></form>Bid');
					bettd.click(function() {
						$.get('/obay.php?specific='+id, function(data) {
							$('#wrapper').append(
								$('<div>').css('display', 'none').attr('id', 'xhr').html(data)
							)
							if($('div#xhr')) {
								var minbid = $('div#xhr > center > form > input[name="bid"]').attr('value');
								$('#bid'+id).attr('value', minbid);
								$('#form'+id).submit();
							}
						});
					});
					$(this).append(bettd);
				} else if($(this).attr('class') != 'tableitem') { //this row does not have an object, but needs adjusted colspan
					var sorting = (on_page('type=all'))?1:0; //are we sorting at all?
					$(this).html($(this).html().replace('colspan="'+(sorting?5:6)+'"','colspan="'+(sorting?6:7)+'"'));
				}
			})
		}
		if (on_page('obay.php?specific=') && nn == 'center') {
			$('input#anon:first').prop('checked', 'checked');
			$('input[type="submit"]').focus()
		}

//---------------- Garage ----------------
		if (on_page('garage.php') && nn == 'h2') {
			var rows = $('table.thinline > tbody > tr').length;
			var totVal = 0;
			var types = [['h', 8, 9, 13, 15, 16, 17, 18, 19, 21, 22, 27, 32, 34, 35, 40, 43], ['oc', 23, 25, 26, 28, 29, 30, 31, 33, 39, 41, 42], ['moc', 45, 47, 48], ['tr', 23, 47, 54]];
			$('tr.thinline').each(function() { //loop rows
				var carType = '';
				var carid = $(this).find('td:eq(0)').text();
				var car = $(this).find('td:eq(1)').find('a').attr('href').match(/\d*$/);
				var carVal = parseInt($(this).find('td:eq(3)').html().replace(',', '').replace('$', '')); //get value
				totVal += carVal;
				$(this).click(function() {
					var check = $(this).find('input[value="'+carid+'"]');
					if(check.prop('checked') === false) {
						check.prop('checked', true)
					} else {
						check.prop('checked', false)
					}
				})
				$(this).find('input[value="'+carid+'"]').click(function() {
					if($(this).prop('checked') === false) {
						$(this).prop('checked', true)
					} else {
						$(this).prop('checked', false)
					}
				})
			})
			//add amount of bullets
			var head = $('h2');
			var cars = head.text().match(/\d+/g)[2];
			if(cars>0){
				head.append(
					$('<span>').text(' | Potential Bullets: '+cars*12)
				)
			}
			//add amount of money
			if(totVal>0){
				head.append(
					$('<span>').text(' | Total car value of this page: $'+commafy(totVal))
				)
			}
			// show footerdiv only when last tr is not visible
			$('#game_container').scroll(function() {
				if($('#game_container').find('tr:eq('+(rows-1)+')').isVisible()) {
					$('#footer').css('display', 'none');
				} else {
					$('#footer').css('display', 'block');
				}
			});
			// add footerdiv only window is bigger then 1024px
			if(window.innerWidth>1024) {
				$('center').append(
					$('<div>').attr({id: 'footer'}).css({'position': 'fixed', 'bottom': '0px', 'background': '#F0F0F0', 'border': '1px solid black', 'width': '70%', 'color': '#000'}).html($('tr:has(input[name="shipcity"])').html())
				)
			}
		}
	}, true);
}

/*
* Menu listener
*/

$('#game_menu').one('DOMNodeInserted', function() {
	//change all users link
	$('a[href*="/allusers.php"]').attr('href', '/allusers.php?start=0&order=lastrank&sort=DESC&dead=HIDE');

	//add beyond menu
	var a = $('<a>').addClass('link').attr({'href': '#', 'data-box': 'true'}).append(
		$('<span>').addClass('title').css('background', 'url("https://raw.github.com/OmertaBeyond/OBv2/master/images/favicon.png") no-repeat scroll left center transparent').text('Beyond'),
		$('<span>').addClass('menu_open')
	);
	var div = $('<div>').addClass('menu').append(
		$('<span>').css({'color': 'rgb(255, 255, 255)', 'display': 'block', 'font-size': '11px', 'margin': '0px', 'padding': '3px 15px', 'text-decoration': 'none', 'cursor': 'pointer'}).text('Preferences').click(function() {
			$('#game_container').empty();
			$('#game_container').append(prefs_page);
		}),
		$('<span>').css({'color': 'rgb(255, 255, 255)', 'display': 'block', 'font-size': '11px', 'margin': '0px', 'padding': '3px 15px', 'text-decoration': 'none', 'cursor': 'pointer'}).text('Live Famstats').click(function() {
			window.open(OB_RIX_WEBSITE + '/stats.php?v=com&d=n');
		})
	);

	$('a.link:eq(2)').before(a)
	$('a.link:eq(3)').before(div)

	var prefs_page = $('<span>').text('This will be the preferences page'); //here we can build prefs page
});

/*
* Info grabber
*/

var d = new Date();//check once every hour for new info
if(getV('nick', '') == '' || getV('bninfo', -1) == -1 || getV('brcDate', -1) != d.getHours()) {
	$.get('/information.php', function(data) {
		var a = data.split('<tbody');
		if(a[2]){ // fails on clicklimit or other error
			$('#wrapper').append(
				$('<div>').css('display', 'none').attr('id', 'str2dom').html(data)
			)
			bnUpdate(0);//call update fucntion
			$.get('/user.php?nick='+getV('nick', ''), function(data) {
				var a = data.split('<script');
				$('#wrapper').append(
					$('<div>').css('display', 'none').attr('id', 'xhr').html(a[0])
				)
				if($('#xhr').length) {
					var role = 1;//default is in a family
					var pos = $('span#position').attr('value');
					var fam = ($('span#family > a').length?$('span#family > a').text():$('span#family').text());
					var hascapo = ($('span#capo').length)?1:0;
					if(/None|Geen/.test(fam)){
						role = 0;
					} else {
						if(/Capo (of|van):/.test(pos)){
							role = 2;
						}
						if(/(Sottocapo|Consiglieri|Don) (of|van):/.test(pos)){
							role = 3;
						}
						if(hascapo) {
							role = 4;
						}
					}
					setV('family',fam);
					setPow('bninfo',4,role);//save
				}
				var d = new Date();//set check date
				setV('brcDate', d.getHours());
			});
		}
	});
}

// Add focus on front page
$('input[name="email"]').focus();

// Replace Omerta's favicon
$('<link rel="shortcut icon" type="image/x-icon"/>').appendTo('head').attr('href', GM_getResourceURL('favicon'));

// Replace Omerta's logo
$('#game_header_left').children('img').attr('src', GM_getResourceURL('logo'));

GM_addStyle(GM_getResourceText('css'));