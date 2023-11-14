import Table from 'cli-table';

let timezones: Map<string, string[]> = new Map<string, string[]>();

timezones.set('ACDT', ['Australia/Adelaide', 'Australia/Broken_Hill', 'Australia/South', 'Australia/Yancowinna']);
timezones.set('ACST', ['Australia/Darwin', 'Australia/North']);
timezones.set('ACT', ['America/Eirunepe', 'America/Porto_Acre', 'America/Rio_Branco', 'Brazil/Acre']);
timezones.set('ACWST', ['Australia/Eucla']);
timezones.set('AEDT', ['Antarctica/Macquarie', 'Australia/ACT', 'Australia/Canberra', 'Australia/Currie', 'Australia/Hobart', 'Australia/Melbourne', 'Australia/NSW', 'Australia/Sydney', 'Australia/Tasmania', 'Australia/Victoria']);
timezones.set('AEST', ['Australia/Brisbane', 'Australia/Lindeman', 'Australia/Queensland']);
timezones.set('AFT', ['Asia/Kabul']);
timezones.set('AKST', ['America/Anchorage', 'America/Juneau', 'America/Metlakatla', 'America/Nome', 'America/Sitka', 'America/Yakutat', 'US/Alaska']);
timezones.set('ALMT', ['Asia/Almaty']);
timezones.set('AMT', ['America/Boa_Vista', 'America/Campo_Grande', 'America/Cuiaba', 'America/Manaus', 'America/Porto_Velho', 'Asia/Yerevan', 'Brazil/West']);
timezones.set('ANAT', ['Asia/Anadyr']);
timezones.set('AQTT', ['Asia/Aqtau', 'Asia/Aqtobe', 'Asia/Atyrau']);
timezones.set('ART', ['America/Argentina/Buenos_Aires', 'America/Argentina/Catamarca', 'America/Argentina/Cordoba', 'America/Argentina/Jujuy', 'America/Argentina/La_Rioja', 'America/Argentina/Mendoza', 'America/Argentina/Rio_Gallegos', 'America/Argentina/Salta', 'America/Argentina/San_Juan', 'America/Argentina/San_Luis', 'America/Argentina/Tucuman', 'America/Argentina/Ushuaia', 'America/Buenos_Aires', 'America/Catamarca', 'America/Cordoba', 'America/Jujuy']);
timezones.set('AST', ['America/Anguilla', 'America/Antigua', 'America/Aruba', 'America/Barbados', 'America/Blanc-Sablon', 'America/Curacao', 'America/Dominica', 'America/Glace_Bay', 'America/Goose_Bay', 'America/Grenada', 'America/Guadeloupe', 'America/Halifax', 'America/Kralendijk']);
timezones.set('AWST', ['Australia/Perth', 'Australia/West']);
timezones.set('AZOT', ['Atlantic/Azores']);
timezones.set('AZT', ['Asia/Baku']);
timezones.set('BDT', ['Asia/Dacca', 'Asia/Dhaka']);
timezones.set('BNT', ['Asia/Brunei']);
timezones.set('BOT', ['America/La_Paz']);
timezones.set('BRT', ['America/Araguaina', 'America/Bahia', 'America/Belem', 'America/Fortaleza', 'America/Maceio', 'America/Recife', 'America/Santarem', 'America/Sao_Paulo', 'Brazil/East']);
timezones.set('BST', ['Pacific/Bougainville']);
timezones.set('BTT', ['Asia/Thimbu', 'Asia/Thimphu']);
timezones.set('CCT', ['Indian/Cocos']);
timezones.set('CET', ['Africa/Algiers', 'Arctic/Longyearbyen', 'Atlantic/Jan_Mayen', 'CET', 'Europe/Amsterdam', 'Europe/Andorra', 'Europe/Belgrade', 'Europe/Berlin', 'Europe/Bratislava', 'Europe/Brussels', 'Europe/Budapest', 'Europe/Busingen', 'Europe/Copenhagen', 'Europe/Gibraltar', 'Europe/Ljubljana', 'Europe/Luxembourg', 'Europe/Madrid', 'Europe/Malta', 'Europe/Monaco', 'Europe/Oslo', 'Europe/Paris', 'Europe/Podgorica', 'Europe/Prague', 'Europe/Rome', 'Europe/San_Marino', 'Europe/Sarajevo', 'Europe/Skopje', 'Europe/Stockholm', 'Europe/Tirane', 'Europe/Vaduz', 'Europe/Vatican', 'Europe/Vienna', 'Europe/Warsaw', 'Europe/Zagreb', 'Europe/Zurich', 'MET', 'Poland']);
timezones.set('CHADT', ['NZ-CHAT', 'Pacific/Chatham']);
timezones.set('CHOT', ['Asia/Choibalsan']);
timezones.set('ChST', ['Pacific/Guam', 'Pacific/Saipan']);
timezones.set('CHUT', ['Pacific/Chuuk', 'Pacific/Truk', 'Pacific/Yap']);
timezones.set('CKT', ['Pacific/Rarotonga']);
timezones.set('CLST', ['America/Punta_Arenas', 'America/Santiago', 'Antarctica/Palmer', 'Chile/Continental']);
timezones.set('COT', ['America/Bogota']);
timezones.set('COT', ['America/Bogota']);
timezones.set('CST', ['America/Bahia_Banderas', 'America/Belize', 'America/Chicago', 'America/Costa_Rica', 'America/El_Salvador', 'America/Guatemala', 'America/Havana', 'America/Indiana/Knox', 'America/Indiana/Tell_City', 'America/Knox_IN', 'America/Managua', 'America/Matamoros', 'America/Menominee', 'America/Merida', 'America/Mexico_City', 'America/Monterrey', 'America/North_Dakota/Beulah', 'America/North_Dakota/Center', 'America/North_Dakota/New_Salem', 'America/Rainy_River', 'America/Rankin_Inlet', 'America/Regina', 'America/Resolute', 'America/Swift_Current', 'America/Tegucigalpa', 'America/Winnipeg', 'Asia/Chongqing', 'Asia/Chungking', 'Asia/Harbin', 'Asia/Kashgar', 'Asia/Macao', 'Asia/Macau', 'Asia/Shanghai', 'Asia/Taipei', 'Asia/Urumqi', 'Canada/Central', 'Canada/Saskatchewan', 'CST6CDT', 'Cuba', 'Mexico/General', 'PRC', 'ROC', 'US/Central', 'US/Indiana-Starke']);
timezones.set('CST', ['America/Bahia_Banderas', 'America/Belize', 'America/Chicago', 'America/Costa_Rica', 'America/El_Salvador', 'America/Guatemala', 'America/Havana', 'America/Indiana/Knox', 'America/Indiana/Tell_City', 'America/Knox_IN']);
timezones.set('CVT', ['Atlantic/Cape_Verde']);
timezones.set('CXT', ['Indian/Christmas']);
timezones.set('DAVT', ['Antarctica/Davis']);
timezones.set('DDUT', ['Antarctica/DumontDUrville']);
timezones.set('EASST', ['Chile/EasterIsland', 'Pacific/Easter']);
timezones.set('EAT', ['Africa/Addis_Ababa', 'Africa/Asmara', 'Africa/Asmera', 'Indian/Antananarivo', 'Indian/Comoro', 'Indian/Mayotte']);
timezones.set('ECT', ['America/Guayaquil']);
timezones.set('ECT', ['America/Guayaquil']);
timezones.set('EET', ['Asia/Amman', 'Asia/Beirut', 'Asia/Damascus', 'Asia/Famagusta', 'Asia/Gaza', 'Asia/Hebron', 'Asia/Nicosia', 'EET', 'Egypt', 'Europe/Athens', 'Europe/Bucharest', 'Europe/Chisinau', 'Europe/Kaliningrad', 'Europe/Kiev', 'Europe/Mariehamn', 'Europe/Nicosia', 'Europe/Riga', 'Europe/Sofia', 'Europe/Tallinn', 'Europe/Tiraspol', 'Europe/Uzhgorod', 'Europe/Vilnius', 'Europe/Zaporozhye', 'Libya']);
timezones.set('EGT', ['America/Scoresbysund']);
timezones.set('EST', ['America/Atikokan', 'America/Cancun', 'America/Cayman', 'America/Coral_Harbour', 'America/Detroit', 'America/Fort_Wayne', 'America/Grand_Turk', 'America/Indiana/Indianapolis', 'America/Indiana/Marengo', 'America/Indiana/Petersburg', 'America/Indiana/Vevay', 'America/Indiana/Vincennes', 'America/Indiana/Winamac', 'America/Indianapolis', 'America/Iqaluit', 'America/Jamaica', 'America/Kentucky/Louisville', 'America/Kentucky/Monticello', 'America/Louisville', 'America/Montreal', 'America/Nassau', 'America/New_York', 'America/Nipigon', 'America/Panama', 'America/Pangnirtung', 'America/Port-au-Prince', 'America/Thunder_Bay', 'America/Toronto', 'Canada/Eastern', 'EST', 'EST5EDT', 'Jamaica', 'US/East-Indiana', 'US/Eastern', 'US/Michigan']);
timezones.set('EST', ['America/Atikokan', 'America/Cancun', 'America/Cayman', 'America/Coral_Harbour', 'America/Detroit', 'America/Fort_Wayne', 'America/Grand_Turk', 'America/Indiana/Indianapolis', 'America/Indiana/Marengo', 'America/Indiana/Petersburg', 'America/Indiana/Vevay', 'America/Indiana/Vincennes', 'America/Indiana/Winamac', 'America/Indianapolis', 'America/Iqaluit', 'America/Jamaica', 'America/Kentucky/Louisville', 'America/Kentucky/Monticello']);
timezones.set('FJT', ['Pacific/Fiji']);
timezones.set('FKST', ['Atlantic/Stanley']);
timezones.set('FNT', ['America/Noronha', 'Brazil/DeNoronha']);
timezones.set('GALT', ['Pacific/Galapagos']);
timezones.set('GAMT', ['Pacific/Gambier']);
timezones.set('GET', ['Asia/Tbilisi']);
timezones.set('GFT', ['America/Cayenne']);
timezones.set('GFT', ['America/Cayenne']);
timezones.set('GILT', ['Pacific/Tarawa']);
timezones.set('GMT', ['Africa/Abidjan', 'Africa/Accra', 'Africa/Bamako', 'America/Danmarkshavn', 'Atlantic/Reykjavik', 'Atlantic/St_Helena', 'Eire', 'GMT', 'Etc/Greenwich', 'Europe/Belfast', 'Europe/Dublin', 'Europe/Guernsey', 'Europe/Isle_of_Man', 'Europe/Jersey', 'Europe/London', 'GB', 'GB-Eire', 'Iceland'])
timezones.set('GMT-1', ['Etc/GMT+1']);
timezones.set('GMT-2', ['Etc/GMT+2']);
timezones.set('GMT-3', ['Etc/GMT+3']);
timezones.set('GMT-4', ['Etc/GMT+4']);
timezones.set('GMT-5', ['Etc/GMT+5']);
timezones.set('GMT-6', ['Etc/GMT+6']);
timezones.set('GMT-7', ['Etc/GMT+7']);
timezones.set('GMT-8', ['Etc/GMT+8']);
timezones.set('GMT-9', ['Etc/GMT+9']);
timezones.set('GMT-10', ['Etc/GMT+10']);
timezones.set('GMT-11', ['Etc/GMT+11']);
timezones.set('GMT-12', ['Etc/GMT+12']);
timezones.set('GMT+1', ['Etc/GMT-1']);
timezones.set('GMT+2', ['Etc/GMT-2']);
timezones.set('GMT+3', ['Etc/GMT-3']);
timezones.set('GMT+3', ['Europe/Kirov']);
timezones.set('GMT+4', ['Etc/GMT-4']);
timezones.set('GMT+4', ['Europe/Astrakhan']);
timezones.set('GMT+4', ['Europe/Saratov']);
timezones.set('GMT+4', ['Europe/Ulyanovsk']);
timezones.set('GMT+5', ['Etc/GMT-5']);
timezones.set('GMT+6', ['Etc/GMT-6']);
timezones.set('GMT+7', ['Asia/Barnaul']);
timezones.set('GMT+7', ['Asia/Tomsk']);
timezones.set('GMT+7', ['Etc/GMT-7']);
timezones.set('GMT+8', ['Etc/GMT-8']);
timezones.set('GMT+9', ['Etc/GMT-9']);
timezones.set('GMT+10', ['Etc/GMT-10']);
timezones.set('GMT+11', ['Etc/GMT-11']);
timezones.set('GMT+12', ['Etc/GMT-12']);
timezones.set('GMT+13', ['Etc/GMT-13']);
timezones.set('GMT+14', ['Etc/GMT-14']);
timezones.set('GST', ['Asia/Dubai', 'Asia/Muscat', 'Atlantic/South_Georgia']);
timezones.set('GYT', ['America/Guyana']);
timezones.set('GYT', ['America/Guyana']);
timezones.set('HKT', ['Asia/Hong_Kong', 'Hongkong']);
timezones.set('HOVT', ['Asia/Hovd']);
timezones.set('HST', ['America/Adak', 'America/Atka', 'HST', 'Pacific/Honolulu', 'Pacific/Johnston', 'US/Aleutian', 'US/Hawaii']);
timezones.set('HST', ['America/Adak', 'America/Atka']);
timezones.set('ICT', ['Asia/Bangkok', 'Asia/Ho_Chi_Minh', 'Asia/Phnom_Penh', 'Asia/Saigon', 'Asia/Vientiane']);
timezones.set('IOT', ['Indian/Chagos']);
timezones.set('IRKT', ['Asia/Irkutsk', 'Asia/Tehran', 'Iran']);
timezones.set('IST', ['Asia/Calcutta', 'Asia/Colombo', 'Asia/Jerusalem', 'Asia/Kolkata', 'Asia/Tel_Aviv', 'Israel']);
timezones.set('JST', ['Asia/Tokyo', 'Japan']);
timezones.set('KGT', ['Asia/Bishkek']);
timezones.set('KOST', ['Pacific/Kosrae']);
timezones.set('KRAT', ['Asia/Krasnoyarsk', 'Asia/Novokuznetsk']);
timezones.set('KST', ['Asia/Pyongyang', 'Asia/Seoul', 'ROK']);
timezones.set('LHST', ['Australia/LHI', 'Australia/Lord_Howe']);
timezones.set('LINT', ['Pacific/Kiritimati']);
timezones.set('MAGT', ['Asia/Magadan']);
timezones.set('MART', ['Pacific/Marquesas']);
timezones.set('MAWT', ['Antarctica/Mawson']);
timezones.set('MHT', ['Kwajalein', 'Pacific/Kwajalein', 'Pacific/Majuro']);
timezones.set('MMT', ['Asia/Rangoon', 'Asia/Yangon']);
timezones.set('MSK', ['Europe/Minsk', 'Europe/Moscow', 'Europe/Simferopol', 'W-SU']);
timezones.set('MST', ['America/Boise', 'America/Cambridge_Bay', 'America/Chihuahua', 'America/Creston', 'America/Dawson', 'America/Dawson_Creek', 'America/Denver', 'America/Edmonton', 'America/Fort_Nelson', 'America/Hermosillo', 'America/Inuvik', 'America/Mazatlan', 'America/Ojinaga', 'America/Phoenix', 'America/Shiprock', 'America/Whitehorse', 'America/Yellowknife', 'Canada/Mountain', 'Canada/Yukon', 'Mexico/BajaSur', 'MST', 'MST7MDT', 'Navajo', 'US/Arizona', 'US/Mountain']);
timezones.set('MUT', ['Indian/Mauritius']);
timezones.set('MVT', ['Indian/Maldives']);
timezones.set('MYT', ['Asia/Kuala_Lumpur', 'Asia/Kuching']);
timezones.set('NCT', ['Pacific/Noumea']);
timezones.set('NFT', ['Pacific/Norfolk']);
timezones.set('NOVT', ['Asia/Novosibirsk']);
timezones.set('NPT', ['Asia/Kathmandu', 'Asia/Katmandu']);
timezones.set('NRT', ['Pacific/Nauru']);
timezones.set('NST', ['America/St_Johns', 'Canada/Newfoundland']);
timezones.set('NUT', ['Pacific/Niue']);
timezones.set('NZDT', ['Antarctica/McMurdo', 'Antarctica/South_Pole', 'NZ', 'Pacific/Auckland']);
timezones.set('OMST', ['Asia/Omsk']);
timezones.set('ORAT', ['Asia/Oral']);
timezones.set('PET', ['America/Lima']);
timezones.set('PETT', ['Asia/Kamchatka']);
timezones.set('PGT', ['Pacific/Port_Moresby']);
timezones.set('PHOT', ['Pacific/Enderbury']);
timezones.set('PHT', ['Asia/Manila']);
timezones.set('PKT', ['Asia/Karachi']);
timezones.set('PMST', ['America/Miquelon']);
timezones.set('PONT', ['Pacific/Pohnpei', 'Pacific/Ponape']);
timezones.set('PST', ['America/Los_Angeles', 'America/Ensenada', 'America/Santa_Isabel', 'America/Tijuana', 'America/Vancouver', 'Canada/Pacific', 'Mexico/BajaNorte', 'Pacific/Pitcairn', 'PST8PDT', 'US/Pacific', 'US/Pacific-New']);
timezones.set('PWT', ['Pacific/Palau']);
timezones.set('PYT', ['America/Asuncion']);
timezones.set('PYT', ['America/Asuncion']);
timezones.set('QYZT', ['Asia/Qostanay', 'Asia/Qyzylorda']);
timezones.set('RET', ['Indian/Reunion']);
timezones.set('ROTT', ['Antarctica/Rothera']);
timezones.set('SAKT', ['Asia/Sakhalin']);
timezones.set('SAMT', ['Europe/Samara']);
timezones.set('SBT', ['Pacific/Guadalcanal']);
timezones.set('SCT', ['Indian/Mahe']);
timezones.set('SGT', ['Asia/Singapore']);
timezones.set('SRET', ['Asia/Srednekolymsk']);
timezones.set('SRT', ['America/Paramaribo']);
timezones.set('SST', ['Pacific/Midway', 'Pacific/Pago_Pago', 'Pacific/Samoa', 'US/Samoa']);
timezones.set('SYOT', ['Antarctica/Syowa']);
timezones.set('TAHT', ['Pacific/Tahiti']);
timezones.set('TFT', ['Indian/Kerguelen']);
timezones.set('TJT', ['Asia/Dushanbe']);
timezones.set('TKT', ['Pacific/Fakaofo']);
timezones.set('TLT', ['Asia/Dili']);
timezones.set('TMT', ['Asia/Ashgabat', 'Asia/Ashkhabad']);
timezones.set('TOT', ['Pacific/Tongatapu']);
timezones.set('TRT', ['Asia/Istanbul', 'Europe/Istanbul', 'Turkey']);
timezones.set('TVT', ['Pacific/Funafuti']);
timezones.set('ULAT', ['Asia/Ulaanbaatar', 'Asia/Ulan_Bator']);
timezones.set('UTC', ['Antarctica/Troll', 'Etc/UCT', 'Etc/Universal', 'Etc/UTC', 'Etc/Zulu', 'UCT', 'Universal', 'UTC', 'Zulu']);
timezones.set('UYT', ['America/Montevideo']);
timezones.set('UZT', ['Asia/Samarkand', 'Asia/Tashkent']);
timezones.set('VET', ['America/Caracas']);
timezones.set('VET', ['America/Caracas']);
timezones.set('VLAT', ['Asia/Ust-Nera', 'Asia/Vladivostok']);
timezones.set('VOLT', ['Europe/Volgograd']);
timezones.set('VOST', ['Antarctica/Vostok']);
timezones.set('VUT', ['Pacific/Efate']);
timezones.set('WAKT', ['Pacific/Wake']);
timezones.set('WAT', ['Africa/Bangui']);
timezones.set('WET', ['Atlantic/Canary', 'Atlantic/Faeroe', 'Atlantic/Faroe', 'Atlantic/Madeira', 'Europe/Lisbon', 'Portugal', 'WET']);
timezones.set('WFT', ['Pacific/Wallis']);
timezones.set('WGT', ['America/Godthab']);
timezones.set('WIB', ['Asia/Jakarta', 'Asia/Pontianak']);
timezones.set('WIT', ['Asia/Jayapura']);
timezones.set('WITA', ['Asia/Makassar', 'Asia/Ujung_Pandang']);
timezones.set('WST', ['Antarctica/Casey', 'Pacific/Apia']);
timezones.set('YAKT', ['Asia/Chita', 'Asia/Khandyga', 'Asia/Yakutsk']);
timezones.set('YEKT', ['Asia/Yekaterinburg']);

function showTimezones(){
    const table = new Table({
            head: ['Abbreviation', 'Timezones'],
            colWidths: [25, 75]
    });

    table.push(...Array.from(timezones.entries()).map(([timezone, abbreviations]) => [timezone, abbreviations.join(', ')]));

    console.log(table.toString());
}

function showConvertedTime(originTimezone: string, originDateTime: string, targetTimezone: string, convertedDateTime: string){
    const table = new Table({
        head: ["From", "To"],
        colWidths: [25, 25]
    });

    table.push(
        [originTimezone, targetTimezone],
        [originDateTime, convertedDateTime]
    );

    console.log(table.toString());
}

export {
    timezones,
    showTimezones,
    showConvertedTime
}
