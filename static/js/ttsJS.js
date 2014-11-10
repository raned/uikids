
var languages		= new Array(30);
var langPreview		= new Array(30);
var voicesCounter	= 200;
var voices			= new Array(voicesCounter);
var mf				= new Array();
var vp				= new Array();

for (i=1; i<=voicesCounter; i++){
	voices[i]=new Array();
}

languages[0]=new Option("English","1");
languages[1]=new Option("Arabic","27");
languages[2]=new Option("Basque","22");
languages[3]=new Option("Catalan","5");
languages[4]=new Option("Chinese","10");
languages[5]=new Option("Czech","18");
languages[6]=new Option("Danish","19");
languages[7]=new Option("Dutch","11");
languages[8]=new Option("Esperanto","31");
languages[9]=new Option("Finnish","23");
languages[10]=new Option("French","4");
languages[11]=new Option("Galician","15");
languages[12]=new Option("German","3");
languages[13]=new Option("Greek","8");
languages[14]=new Option("Hindi","24");
languages[15]=new Option("Hungarian","29");
languages[16]=new Option("Icelandic","25");
languages[17]=new Option("Indonesian","28");
languages[18]=new Option("Italian","7");
languages[19]=new Option("Japanese","12");
languages[20]=new Option("Korean","13");
languages[21]=new Option("Norwegian","20");
languages[22]=new Option("Polish","14");
languages[23]=new Option("Portuguese","6");
languages[24]=new Option("Russian","21");
languages[25]=new Option("Romanian","30");
languages[26]=new Option("Spanish","2");
languages[27]=new Option("Swedish","9");
languages[28]=new Option("Thai","26");
languages[29]=new Option("Turkish","16");

voices[1][0]=new Option("Alan (Australian)","201009");
voices[1][1]=new Option("Allison (US)","201007");
voices[1][2]=new Option("Catherine (UK)","201006");
voices[1][3]=new Option("Dave (US)","201002");
voices[1][4]=new Option("Elizabeth (UK)","201004");
voices[1][5]=new Option("Grace (Australian)","201010");
voices[1][6]=new Option("Simon (UK)","201005");
voices[1][7]=new Option("Steven (US)","201008");
voices[1][8]=new Option("Susan (US)","201001");
voices[1][9]=new Option("Veena (Indian)","201011");
voices[1][10]=new Option("Bridget (UK)","301004");
voices[1][11]=new Option("Julie (US)","301003");
voices[1][12]=new Option("Kate (US)","301001");
voices[1][13]=new Option("Paul (US)","301002");
voices[1][14]=new Option("Daniel (UK)","401005");
voices[1][15]=new Option("Emily (UK)","401006");
voices[1][16]=new Option("Fiona (Scottish)","401012");
voices[1][17]=new Option("Jennifer (US)","401001");
voices[1][18]=new Option("Jill (US)","401002");
voices[1][19]=new Option("Karen (Australian)","401004");
voices[1][20]=new Option("Lee (Australian)","401010");
voices[1][21]=new Option("Moira (Irish)","401008");
voices[1][22]=new Option("Samantha (US)","401011");
voices[1][23]=new Option("Sangeeta (Indian)","401009");
voices[1][24]=new Option("Serena (UK)","401007");
voices[1][25]=new Option("Tessa (South African)","401013");
voices[1][26]=new Option("Tom (US)","401003");
voices[27][0]=new Option("Laila","227002");
voices[27][1]=new Option("Tarik","227001");
voices[27][2]=new Option("Maged","427001");
voices[22][0]=new Option("Arantxa","422001");
voices[5][0]=new Option("Empar (Valencian)","205003");
voices[5][1]=new Option("Jordi","205002");
voices[5][2]=new Option("Montserrat","205001");
voices[5][3]=new Option("Nuria","405001");
voices[10][0]=new Option("Linlin (Mandarin)","210001");
voices[10][1]=new Option("Lisheng (Mandarin)","210002");
voices[10][2]=new Option("Hui (Mandarin)","310003");
voices[10][3]=new Option("Liang (Mandarin)","310004");
voices[10][4]=new Option("Lily (Mandarin)","310001");
voices[10][5]=new Option("Mei-Ling (Mandarin)","410003");
voices[10][6]=new Option("Sin-Ji (Cantonese)","410001");
voices[10][7]=new Option("Ting-Ting (Mandrine)","410004");
voices[10][8]=new Option("Ya-Ling (Taiwanese)","410002");
voices[18][0]=new Option("Zuzana","418001");
voices[19][0]=new Option("Frida","219001");
voices[19][1]=new Option("Magnus","219002");
voices[19][2]=new Option("Ida","419001");
voices[19][3]=new Option("Nanna","419002");
voices[11][0]=new Option("Saskia","211002");
voices[11][1]=new Option("Willem","211001");
voices[11][2]=new Option("Claire (Netherland)","411002");
voices[11][3]=new Option("Ellen (Belgian)","411001");
voices[11][4]=new Option("Laura (Netherland)","411003");
voices[11][5]=new Option("Xander (Netherland)","411004");
voices[31][0]=new Option("Ludoviko","231001");
voices[23][0]=new Option("Marko","223002");
voices[23][1]=new Option("Milla","223001");
voices[23][2]=new Option("Mikko","423001");
voices[4][0]=new Option("Bernard","204002");
voices[4][1]=new Option("Charlotte","204005");
voices[4][2]=new Option("Florence","204004");
voices[4][3]=new Option("Jolie","204003");
voices[4][4]=new Option("Olivier","204006");
voices[4][5]=new Option("Felix (Canadian)","404001");
voices[4][6]=new Option("Julie (Canadian)","404002");
voices[4][7]=new Option("Sebastien","404003");
voices[4][8]=new Option("Thomas","404005");
voices[4][9]=new Option("Virginie","404004");
voices[15][0]=new Option("Carmela","215001");
voices[3][0]=new Option("Katrin","203003");
voices[3][1]=new Option("Stefan","203002");
voices[3][2]=new Option("Anna","403003");
voices[3][3]=new Option("Steffi","403001");
voices[3][4]=new Option("Yannick","403002");
voices[8][0]=new Option("Afroditi","208001");
voices[8][1]=new Option("Nikos","208003");
voices[8][2]=new Option("Alexandros","408001");
voices[24][0]=new Option("Lekha","424001");
voices[29][0]=new Option("Eszter","429001");
voices[25][0]=new Option("Ragga","425001");
voices[28][0]=new Option("Damayanti","428001");
voices[7][0]=new Option("Federica","207010");
voices[7][1]=new Option("Giulia","207009");
voices[7][2]=new Option("Luca","207005");
voices[7][3]=new Option("Marcello","207006");
voices[7][4]=new Option("Matteo","207008");
voices[7][5]=new Option("Paola","207001");
voices[7][6]=new Option("Roberto","207007");
voices[7][7]=new Option("Silvana","207002");
voices[7][8]=new Option("Valentina","207003");
voices[7][9]=new Option("Paolo","407001");
voices[7][10]=new Option("Silvia","407002");
voices[12][0]=new Option("Misaki","312003");
voices[12][1]=new Option("Show","312002");
voices[12][2]=new Option("Kyoko","412001");
voices[13][0]=new Option("Junwoo","313002");
voices[13][1]=new Option("Yumi","313001");
voices[13][2]=new Option("Narae","413001");
voices[20][0]=new Option("Henrik","220002");
voices[20][1]=new Option("Vilde","220001");
voices[20][2]=new Option("Nora","420001");
voices[20][3]=new Option("Stine","420002");
voices[14][0]=new Option("Krzysztof","214002");
voices[14][1]=new Option("Zosia","214001");
voices[14][2]=new Option("Agata","414001");
voices[6][0]=new Option("Amalia (European)","206002");
voices[6][1]=new Option("Eusebio (European)","206003");
voices[6][2]=new Option("Felipe (Brazilian)","206005");
voices[6][3]=new Option("Fernanda (Brazilian)","206004");
voices[6][4]=new Option("Gabriela (Brazilian)","206001");
voices[6][5]=new Option("Joana (European)","406003");
voices[6][6]=new Option("Madalena (European)","406001");
voices[6][7]=new Option("Raquel (Brazilian)","406002");
voices[21][0]=new Option("Dmitri","221002");
voices[21][1]=new Option("Olga","221001");
voices[21][2]=new Option("Katerina","421001");
voices[21][3]=new Option("Milena","421002");
voices[30][0]=new Option("Ioana","230001");
voices[30][1]=new Option("Simona","430001");
voices[2][0]=new Option("Carlos (American)","202007");
voices[2][1]=new Option("Carmen (Castilian)","202001");
voices[2][2]=new Option("Diego (Argentine)","202004");
voices[2][3]=new Option("Esperanza (Mexican)","202005");
voices[2][4]=new Option("Francisca (Chilean)","202003");
voices[2][5]=new Option("Jorge (Castilian)","202006");
voices[2][6]=new Option("Juan (Castilian)","202002");
voices[2][7]=new Option("Leonor (Castilian)","202009");
voices[2][8]=new Option("Soledad (American)","202008");
voices[2][9]=new Option("Ximena","202010");
voices[2][10]=new Option("Violeta","302001");
voices[2][11]=new Option("Duardo","402001");
voices[2][12]=new Option("Isabel","402002");
voices[2][13]=new Option("Javier (Mexican)","402005");
voices[2][14]=new Option("Monica","402003");
voices[2][15]=new Option("Paulina (Mexican)","402004");
voices[9][0]=new Option("Annika","209001");
voices[9][1]=new Option("Sven","209002");
voices[9][2]=new Option("Alva","409001");
voices[9][3]=new Option("Ingrid","409002");
voices[9][4]=new Option("Oskar","409003");
voices[26][0]=new Option("Narisa","426001");
voices[16][0]=new Option("Kerem","216001");
voices[16][1]=new Option("Selin","216003");
voices[16][2]=new Option("Zeynep","216002");
voices[16][3]=new Option("Aylin","416001");

langPreview[1]="The rain in Spain stays mainly in the plain";
langPreview[27]="يمكن للمرأة أن تخفي حبها لمدة أربعين عاما، ولكن غضبها حتى يوم واحد.";
langPreview[22]="Aberats izatea baino, izen ona hobe";
langPreview[5]="Jove xef, porti whisky amb quinze glaçons d'hidrogen, coi!";
langPreview[10]="我国治肿瘤获重大突破";
langPreview[18]="Jablko nepadá daleko od stromu.";
langPreview[19]="Den der ler sidst ler bedst.";
langPreview[11]="Lex bederft Uw quiz met typisch vakjargon";
langPreview[31]="Bonan nokton, bonan dormon!";
langPreview[23]="Minä osaan suomea";
langPreview[4]="Portez ce whisky au vieux juge blond qui fume";
langPreview[15]="Meu dito meu feito";
langPreview[3]="Franz jagt im komplett verwahrlosten Taxi quer durch Bayern";
langPreview[8]="Κάλλιο αργά, παρά ποτέ";
langPreview[24]="बच्चों को चलाने और पार्क में हँसते हैं";
langPreview[29]="nincs kolbászból fonva a kerítés";
langPreview[25]="Jón Jónsson hélt tónleika í Kaupmannahöfn um síðustu helgi en þeir voru hluti af Músíkpartíi Iceland Express.";
langPreview[28]="ada udang di balik batu";
langPreview[7]="Quel vituperabile xenofobo zelante assaggia il whisky ed esclama: alleluja!";
langPreview[12]="花瓶にさした赤い花をテーブルの上に置きます。";
langPreview[13]="저 들판에 깔린 콩깍지는 깐 콩깍지인가 안 깐 콩깍지인가?";
langPreview[20]="Borte bra, hjemme best.";
langPreview[14]="Gdzie drwa rąbią, tam wióry lecą";
langPreview[6]="Gazeta publica hoje no jornal uma breve nota de faxina na quermesse";
langPreview[21]="В гостях хорошо, а дома лучше";
langPreview[30]="sunteți alergic la vreun medicament?";
langPreview[2]="El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja.";
langPreview[9]="Flygande bäckasiner söka hwila på mjuka tuvor";
langPreview[26]="คิดก่อนเจรจา";
langPreview[16]="Ağacı kurt, insanı dert yer.";

vp[201009]="english_alan";
vp[201007]="english_allison";
vp[201006]="english_catherine";
vp[201002]="english_dave";
vp[201004]="english_elizabeth";
vp[201010]="english_grace";
vp[201005]="english_simon";
vp[201008]="english_steven";
vp[201001]="english_susan";
vp[201011]="english_veena";
vp[301004]="english_bridget";
vp[301003]="english_julie";
vp[301001]="english_kate";
vp[301002]="english_paul";
vp[401005]="english_daniel";
vp[401006]="english_emily";
vp[401012]="english_fiona";
vp[401001]="english_jennifer";
vp[401002]="english_jill";
vp[401004]="english_karen";
vp[401010]="english_lee";
vp[401008]="english_moira";
vp[401011]="english_samantha";
vp[401009]="english_sangeeta";
vp[401007]="english_serena";
vp[401013]="english_tessa";
vp[401003]="english_tom";
vp[227002]="arabic_laila";
vp[227001]="arabic_tarik";
vp[427001]="arabic_maged";
vp[422001]="basque_arantxa";
vp[205003]="catalan_empar";
vp[205002]="catalan_jordi";
vp[205001]="catalan_montserrat";
vp[405001]="catalan_nuria";
vp[210001]="chinese_linlin";
vp[210002]="chinese_lisheng";
vp[310003]="chinese_hui";
vp[310004]="chinese_liang";
vp[310001]="chinese_lily";
vp[410003]="chinese_mei-ling";
vp[410001]="chinese_sin-ji";
vp[410004]="chinese_ting-ting";
vp[410002]="chinese_ya-ling";
vp[418001]="czech_zuzana";
vp[219001]="danish_frida";
vp[219002]="danish_magnus";
vp[419001]="danish_ida";
vp[419002]="danish_nanna";
vp[211002]="dutch_saskia";
vp[211001]="dutch_willem";
vp[411002]="dutch_claire";
vp[411001]="dutch_ellen";
vp[411003]="dutch_laura";
vp[411004]="dutch_xander";
vp[231001]="esperanto_ludoviko";
vp[223002]="finnish_marko";
vp[223001]="finnish_milla";
vp[423001]="finnish_mikko";
vp[204002]="french_bernard";
vp[204005]="french_charlotte";
vp[204004]="french_florence";
vp[204003]="french_jolie";
vp[204006]="french_olivier";
vp[404001]="french_felix";
vp[404002]="french_julie";
vp[404003]="french_sebastien";
vp[404005]="french_thomas";
vp[404004]="french_virginie";
vp[215001]="galician_carmela";
vp[203003]="german_katrin";
vp[203002]="german_stefan";
vp[403003]="german_anna";
vp[403001]="german_steffi";
vp[403002]="german_yannick";
vp[208001]="greek_afroditi";
vp[208003]="greek_nikos";
vp[408001]="greek_alexandros";
vp[424001]="hindi_lekha";
vp[429001]="hungarian_eszter";
vp[425001]="icelandic_ragga";
vp[428001]="indonesian_damayanti";
vp[207010]="italian_federica";
vp[207009]="italian_giulia";
vp[207005]="italian_luca";
vp[207006]="italian_marcello";
vp[207008]="italian_matteo";
vp[207001]="italian_paola";
vp[207007]="italian_roberto";
vp[207002]="italian_silvana";
vp[207003]="italian_valentina";
vp[407001]="italian_paolo";
vp[407002]="italian_silvia";
vp[312003]="japanese_misaki";
vp[312002]="japanese_show";
vp[412001]="japanese_kyoko";
vp[313002]="korean_junwoo";
vp[313001]="korean_yumi";
vp[413001]="korean_narae";
vp[220002]="norwegian_henrik";
vp[220001]="norwegian_vilde";
vp[420001]="norwegian_nora";
vp[420002]="norwegian_stine";
vp[214002]="polish_krzysztof";
vp[214001]="polish_zosia";
vp[414001]="polish_agata";
vp[206002]="portuguese_amalia";
vp[206003]="portuguese_eusebio";
vp[206005]="portuguese_felipe";
vp[206004]="portuguese_fernanda";
vp[206001]="portuguese_gabriela";
vp[406003]="portuguese_joana";
vp[406001]="portuguese_madalena";
vp[406002]="portuguese_raquel";
vp[221002]="russian_dmitri";
vp[221001]="russian_olga";
vp[421001]="russian_katerina";
vp[421002]="russian_milena";
vp[230001]="romanian_ioana";
vp[430001]="romanian_simona";
vp[202007]="spanish_carlos";
vp[202001]="spanish_carmen";
vp[202004]="spanish_diego";
vp[202005]="spanish_esperanza";
vp[202003]="spanish_francisca";
vp[202006]="spanish_jorge";
vp[202002]="spanish_juan";
vp[202009]="spanish_leonor";
vp[202008]="spanish_soledad";
vp[202010]="spanish_ximena";
vp[302001]="spanish_violeta";
vp[402001]="spanish_duardo";
vp[402002]="spanish_isabel";
vp[402005]="spanish_javier";
vp[402003]="spanish_monica";
vp[402004]="spanish_paulina";
vp[209001]="swedish_annika";
vp[209002]="swedish_sven";
vp[409001]="swedish_alva";
vp[409002]="swedish_ingrid";
vp[409003]="swedish_oskar";
vp[426001]="thai_narisa";
vp[216001]="turkish_kerem";
vp[216003]="turkish_selin";
vp[216002]="turkish_zeynep";
vp[416001]="turkish_aylin";

mf[201009]='M';
mf[201007]='F';
mf[201006]='F';
mf[201002]='M';
mf[201004]='F';
mf[201010]='F';
mf[201005]='M';
mf[201008]='M';
mf[201001]='F';
mf[201011]='F';
mf[301004]='F';
mf[301003]='F';
mf[301001]='F';
mf[301002]='M';
mf[401005]='M';
mf[401006]='F';
mf[401012]='F';
mf[401001]='F';
mf[401002]='F';
mf[401004]='F';
mf[401010]='M';
mf[401008]='F';
mf[401011]='F';
mf[401009]='F';
mf[401007]='F';
mf[401013]='F';
mf[401003]='M';
mf[227002]='F';
mf[227001]='M';
mf[427001]='M';
mf[422001]='F';
mf[205003]='F';
mf[205002]='M';
mf[205001]='F';
mf[405001]='F';
mf[210001]='F';
mf[210002]='F';
mf[310003]='F';
mf[310004]='M';
mf[310001]='F';
mf[410003]='F';
mf[410001]='F';
mf[410004]='F';
mf[410002]='F';
mf[418001]='F';
mf[219001]='F';
mf[219002]='M';
mf[419001]='F';
mf[419002]='F';
mf[211002]='F';
mf[211001]='M';
mf[411002]='F';
mf[411001]='F';
mf[411003]='F';
mf[411004]='M';
mf[231001]='M';
mf[223002]='M';
mf[223001]='F';
mf[423001]='M';
mf[204002]='M';
mf[204005]='F';
mf[204004]='F';
mf[204003]='F';
mf[204006]='M';
mf[404001]='M';
mf[404002]='F';
mf[404003]='M';
mf[404005]='M';
mf[404004]='F';
mf[215001]='F';
mf[203003]='F';
mf[203002]='M';
mf[403003]='F';
mf[403001]='F';
mf[403002]='M';
mf[208001]='F';
mf[208003]='M';
mf[408001]='M';
mf[424001]='F';
mf[429001]='F';
mf[425001]='F';
mf[428001]='F';
mf[207010]='F';
mf[207009]='F';
mf[207005]='M';
mf[207006]='M';
mf[207008]='M';
mf[207001]='F';
mf[207007]='M';
mf[207002]='F';
mf[207003]='F';
mf[407001]='M';
mf[407002]='F';
mf[312003]='F';
mf[312002]='M';
mf[412001]='F';
mf[313002]='M';
mf[313001]='F';
mf[413001]='F';
mf[220002]='M';
mf[220001]='F';
mf[420001]='F';
mf[420002]='F';
mf[214002]='M';
mf[214001]='F';
mf[414001]='F';
mf[206002]='F';
mf[206003]='M';
mf[206005]='M';
mf[206004]='F';
mf[206001]='F';
mf[406003]='F';
mf[406001]='F';
mf[406002]='F';
mf[221002]='M';
mf[221001]='F';
mf[421001]='F';
mf[421002]='F';
mf[230001]='F';
mf[430001]='F';
mf[202007]='M';
mf[202001]='F';
mf[202004]='M';
mf[202005]='F';
mf[202003]='F';
mf[202006]='M';
mf[202002]='M';
mf[202009]='F';
mf[202008]='F';
mf[202010]='F';
mf[302001]='F';
mf[402001]='M';
mf[402002]='F';
mf[402005]='M';
mf[402003]='F';
mf[402004]='F';
mf[209001]='F';
mf[209002]='M';
mf[409001]='M';
mf[409002]='F';
mf[409003]='M';
mf[426001]='F';
mf[216001]='M';
mf[216003]='F';
mf[216002]='F';
mf[416001]='F';

function setVoices(selectedId){
//	langIndex = document.newaudio.lang.options.selectedIndex;
	langIndex = document.newaudio.lang.options[document.newaudio.lang.options.selectedIndex].value;
	tempVoice=document.newaudio.voice;
	index = 0;
	
	for (m=tempVoice.options.length-1;m>0;m--){
		tempVoice.options[m] = null;
	}
	
	for (i=0;i<voices[langIndex].length;i++){
		tempVoice.options[i] = new Option(voices[langIndex][i].text,voices[langIndex][i].value);
		if(voices[langIndex][i].value==selectedId)		index = i;
	}
	
	tempVoice.options[index].selected = true;
	checkMaleFemale();
}

function setLanguages(selectedId){
	tempLanguage=document.newaudio.lang;
	index = 0;
	
	for (m=tempLanguage.options.length-1;m>0;m--){
		tempLanguage.options[m] = null;
	}
	
	for (i=0;i<languages.length;i++){
		tempLanguage.options[i] = new Option(languages[i].text,languages[i].value);
		if(languages[i].value==selectedId)	index = i;
	}
	
	tempLanguage.options[index].selected = true;	
}


function setTTSForm(langOptId, longVoiceId){
	setLanguages(langOptId);
	setVoices(longVoiceId);
}

var previewIsReady = false;

function setLevels(){
	var levelSelect = $("#level");
	switch($("#effect option:selected").text())
	{
		case 'none':
			levelSelect.html("");
			levelSelect.attr("disabled", "disabled");
			break;
		case 'Pitch':
			levelSelect.html('<option value="3">Highest</option><option value="2">Higher</option><option value="1">High</option><option value="-1">Low</option><option value="-2">Lower</option><option value="-3">Lowest</option>');
			levelSelect.removeAttr("disabled");
			break;
		case 'Speed':
			levelSelect.html('<option value="3">Fastest</option><option value="2">Faster</option><option value="1">Fast</option><option value="-1">Slow</option><option value="-2">Slower</option><option value="-3">Slowest</option>');
			levelSelect.removeAttr("disabled");
			break;
		case 'Duration':
			levelSelect.html('<option value="3">Longest</option><option value="2">Longer</option><option value="1">Long</option><option value="-1">Short</option><option value="-2">Shorter</option><option value="-3">Shortest</option>');
			levelSelect.removeAttr("disabled");
			break;
		case 'Echo':
			levelSelect.html('<option value="1">On</option>');
			levelSelect.attr("disabled", "disabled");
			break;
		case 'Reverb':
			levelSelect.html('<option value="2">On</option>');
			levelSelect.attr("disabled", "disabled");
			break;
		case 'Flanger':
			levelSelect.html('<option value="3">On</option>');
			levelSelect.attr("disabled", "disabled");
			break;
		case 'Phase':
			levelSelect.html('<option value="4">On</option>');
			levelSelect.attr("disabled", "disabled");
			break;
		case 'Bullhorn':
			levelSelect.html('<option value="3">On</option>');
			levelSelect.attr("disabled", "disabled");
			break;
		case 'Whisper':
			levelSelect.html('<option value="3">Low</option><option value="2">Lower</option><option value="1">Lowest</option>');
			levelSelect.removeAttr("disabled");
			break;	
	}
}


if (typeof jQuery != 'undefined') {
	$(document).ready(function(){
		setLevels();
		$("#effect").change(function(){setLevels();});
	}
)};
	
function previewTTSVoice(txt){
	if(!previewIsReady){
		alert('It is not ready yet');
		return;
	}
	
	bigVoiceId = document.newaudio.voice.value;
	
	if(!txt){
		txt = langPreview[document.newaudio.lang.value];
	}
	
	if (typeof jQuery == 'undefined') {
		engine = parseInt(bigVoiceId/100000);
		voice = parseInt(bigVoiceId%100);
		sayText(txt,voice,document.newaudio.lang.value,engine);
	}else {
		engine = parseInt(bigVoiceId/100000);
		voice = parseInt(bigVoiceId%100);
		var effect = $("#effect").val();
		var level = $("#level").val();
		if (effect == "none" || level==null){
			sayText(txt,voice,document.newaudio.lang.value,engine);
		}else{
			sayText(txt,voice,document.newaudio.lang.value,engine,effect,level);
		}
	}
}

function checkMaleFemale(){
	setTimeout('void(0)',500);	// to alllow the scene to load in case you need to change it / this doesn't seem to work the first time though
	maleFemaleFlag = (mf[document.newaudio.voice.value]=='F') ? 1: 2
	gotoScene(maleFemaleFlag);
}

function vh_sceneLoaded(){
	previewIsReady = true;
	setStatus(1,0);
}

