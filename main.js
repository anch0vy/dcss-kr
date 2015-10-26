//...............................................
//...............................................
//...............................................
//...............................................
//................dcss-kr helper.................
//...............author : anch0vy................
//.............script verion : 0.1...............
//..........target dcss version : 0.17...........
//...............................................
//...............................................
//...............................................
//...............................................
//...............................................



function getRightColumWidth(){
	return rightColumWidth = $("#minimap").width() - 20;
}

function getMenuWidth(){
	return 640 - 20;
}

function monster(monsterName){
	monsterLink = '<a href="https://namu.wiki/w/%EB%8D%98%EC%A0%84%20%ED%81%AC%EB%A1%A4/%EB%AA%AC%EC%8A%A4%ED%84%B0">일반 몹 링크</a><br>';
	namedLink = '<a href="https://namu.wiki/w/%EB%8D%98%EC%A0%84%20%ED%81%AC%EB%A1%A4/%EB%84%A4%EC%9E%84%EB%93%9C">네임드 몹 링크</a><br>';
	try{
		monsterName = /^[A|An] (.*)\.$/.exec(monsterName)[1];
	}
	catch(err){return;}
	var text = $($('ol'),$('#menu_contents_inner'));
	var style = 'width:600px;white-space:normal;';
	var descs = mondic[monsterName];

	if(descs){ //일반몹
		flag = 1;
		for (var i = 0; i < descs.length; i++)
			text.append(`<li class = "level2" style="${style}"><span class="">${descs[i]}</span></li>`);
		text.append();
		return;
	}

	for(key in namedmondic){ //네임드몹
		if(monsterName.indexOf(key) > -1){
			for (var i = 0; i < namedmondic[key].length; i++)
				text.append(`<li class = "level2" style="${style}"><span class="">${namedmondic[key][i]}</span></li>`);
			text.append(namedLink);
			return;
		}
	}
	//못찾은경우
	var str = '나무위키에 해당 항목이 없거나, 영문표기가 잘못되어있습니다.<br>만약 최신버전을 플레이중인데 이 메세지가 보인다면 나무위키에 해당항목을 추가하거나 고쳐주세요<br>';
	str += namedLink
	str += monsterLink
	text.append(str);
}

function mutationDesc(explain){
	if(option_mutation_namuwiki == 0)
		return;
	explain = explain[0];
	var regExp = /A: (.*).:/i;
	var mutations = regExp.exec(explain)[1].split(',')
	$('#menu_contents_inner > ol').append('<div id="mutationdesc" style="font-size:80% ; overflow-y: scroll;height:300px"></div>');
	var text = $("#mutationdesc");
	for(var key in mutations){
		var mutationRaw = mutations[key];
		mutationFindKey = mutationRaw.replace(/[0-9 ]/g,'');
		descs = mutationdic[mutationFindKey];
		if(descs){
			text.append(`<li class = "level2" style="width:600px;white-space:normal;"><span class="">${mutationRaw}</span></li>`);			
			for(var key in descs)
				text.append(`<li class = "level2" style="width:600px;white-space:normal;"><span class="">${descs[key]}</span></li>`);
		}
		else
			text.append(`<li class = "level2"><span>${mutationRaw}항목이 나무위키에 존재하지 않습니다.</span></li>`)
		text.append('<li class="level2"><span>======</span></li')
	}
	text.append('<a href="https://namu.wiki/w/던전 크롤/돌연변이">돌연변이 링크</a><br>');
}

function trans(dom, regs){
	dom.map(function(_,desc){
		var as = regs[0];
		var bs = regs[1];
		for (var i = as.length - 1; i >= 0; i--) {
			var a = as[i];
			var b = bs[i];
			var txt = desc.innerText;
			if(a.test(txt)){
				txt = txt.replace(a,b);
				txt = transShortWord(txt)
				try{
					$('span' , desc)[0].innerText = txt;
				}
				catch(err){
					desc.innerText = txt;
				}
				return;
			}
		}
	})
}

function transShortWord(txt){
	for(var key in transDict_word)
		txt = txt.replace(key,transDict_word[key]);
	//2번하는 이유는 문자열 교정때문에... 귀찮아서 걍 이렇게함
	for(var key in transDict_word)
		txt = txt.replace(key,transDict_word[key]);
	return txt;
}

function findMonsteResistant(dom){
	dom.map(function(key,desc){
		txt = desc.innerText;
		if(txt.indexOf('immune') > -1 || txt.indexOf('resistant') > -1 || txt.indexOf(';') > -1){
			if(txt.indexOf('.') == -1){
				desc2 = dom[key+1];
				txt = txt +' ' + desc2.innerText;
				$(desc2).remove();
			}
			txt = txt.replace(/^(She|He|It) is/g,' ');
			txt = txt.replace(/ (to|and) /g,' ');
			txt = txt.replace(/,/g,' ');
			txt = txt.replace(/\./g,' ');
			txt = txt.replace(/  /g,' ');
			txt = txt.replace(/  /g,' ');
			txt = txt.replace(/  /g,' ');
			txt = txt.replace(/^ /g,'');
			txt = txt.replace(/; /g,';');
			txt = txt.replace(/ $/g,';');
			str = '';
			txt = transShortWord(txt);
			txts = txt.split(';');
			for(var key2 in txts){
				value2 = txts[key2];
				var tmp = value2.split(' ').slice(1).join();
				if(value2.indexOf('immune') > -1)
					txts[key2] = `그것은 ${tmp}에 대해 면역이다.`;
				else if(value2.indexOf('very resistant') > -1)
					txts[key2] = `그것은 ${tmp.replace('resistant,','')}에 대해 큰 저항력이 있다.`;
				else if(value2.indexOf('resistant') > -1)
					txts[key2] = `그것은 ${tmp}에 대해 저항력이 있다.`;
				str = str + `<li class="level2 fg7">${txts[key2]}</li>`;
			}
			desc.outerHTML = str;
		}
	})
}


function monsterDesc(explains){
	var dom = $('#menu_contents_inner li');
	if(option_monster_namuwiki)
		monster(explains[0]);
	if(option_monster_trans){
		trans(dom, transDict_monsterDesc_regex);
		findMonsteResistant(dom);
	}
}

function itemDesc(){
	if(option_item_trans == 0)
		return;
	var dom = $('.menu_describe_item span');
	try{
		if(dom[dom.length - 1].innerText.indexOf('You found') > -1
		|| dom[dom.length - 1].innerText.indexOf('You took') > -1
		|| dom[dom.length - 1].innerText.indexOf('...') > -1
		|| dom[dom.length - 1].innerText.indexOf('category') > -1
		|| dom[dom.length - 1].innerText.indexOf('maximally') > -1
		|| dom[dom.length - 1].innerText.indexOf('artefact') > -1
		) //아이템이 어느정도 출력됬을떄
			trans(dom, transDict_itemDesc_regex);
	}
	catch(err){
		;
	}
}

function _getMenu(){
	var menu = $("#menu_contents_inner");
	var ph_len = $(".placeholder",menu).length;
	var li_len = $("li",menu).length;
	if(ph_len == 0 && menu.length > 0 && li_len)
	{
		var explains = menu[0].innerText.split("\n");
		if(0){}
		else if($('.menu_pickup').length > 0)					{}							//ctrl + x , G
		else if($('.menu_stash').length > 0)					{}							//ctrl + f
		else if($('.menu_ability').length > 0)					{}							//a
		else if($('.menu_spell').length > 0)					{}							//I , M
		else if($('.menu_resists').length > 0)					{mutationDesc(explains);}	//%
		else if($('.menu_inventory').length > 0)				{}							//i
		else if($('.menu_describe_god').length > 0)				{}							//^
		else if(explains[0].indexOf('Innate Abilities') > -1)	{}							//A
		else if(explains[0].indexOf('Dungeon Overview') > -1)	{}							//ctrl o
		else if($('.menu_').length > 0)							{monsterDesc(explains);}	//몬스터 설명??
	}
	else if($('.menu_describe_item').length > 0)				{itemDesc();}				//아이템설명
}


function getMenu(){
	$('#menu').unbind();
	try{
		_getMenu();
	}
	finally{
		$('#menu').bind("DOMSubtreeModified", getMenu);
	}
}


function getMessage_skillLevelMeter(message){
	$("#skillLevelDesc").remove();
	$('#monster_list').after('<div id="skillLevelDesc"></div>');
	var table = $("#skillLevelDesc");
	$(message.parentElement).remove();
	skills = message.innerText.split('::').slice(1,-1);
	var fail1spells = [];
	for(var key in skills){
		var skill = skills[key].split(':');
		var skillName = skill[0];
		var skillLevel = parseFloat(skill[1]);
		var skillTrain = parseInt(skill[2]);
		if(skillTrain == 0) skillTrain=' ';
		if(skillTrain == 1) skillTrain='+';
		if(skillTrain == 2) skillTrain='*';
		if(skillTrain==' ' && skillLevel <= 1) //스킬의 실패율이 0,1일떄
			fail1spells.push(skillName);
		else
		{
			str = `<tr class="group"><td>${skillTrain}</td><td>${skillName}</td><td>&nbsp;&nbsp;${skillLevel}</td></tr>`
			table.append(str);
		}
	}
	str = `<span style="width:${getRightColumWidth()}px;display: block;">${fail1spells.join()}</span>`
	table.append(str);
}

function _getMessage(){
	var messages = $('.game_message');
	var message = messages[messages.length - 1];
	message = $('.fg7',message)[0];
	var messageInnerText = message.innerText
	if(messageInnerText.startsWith('::') && messageInnerText.endsWith('::'))
		getMessage_skillLevelMeter(message);
}

function getMessage(){
	try{
		_getMessage();
	}
	catch(err){
		// console.trace(err);
	}
}




optionHTML = 
`
<div id="script_option_screen" class="floating_dialog" style="display:none;">
	<span style="float:right;font-size:20px;color:#729fcfd">anch0vy</span>
	<img alt="" width="30px" style="float:right" src="data:image/png;base64,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"/>
	<input type="checkbox" id="option_monster_trans" onclick="options('monster_trans')">몬스터 설명 번역</input><br>
	<input type="checkbox" id="option_item_trans" onclick="options('item_trans')">아이템 설명 번역</input><br>
	<input type="checkbox" id="option_monster_namuwiki" onclick="options('monster_namuwiki')">몬스터 추가설명(데이터:나무위키)</input><br>
	<input type="checkbox" id="option_mutation_namuwiki" onclick="options('mutation_namuwiki')">돌연변이 설명(%키 눌렀을때 뜨는창, 데이터:나무위키)</input><br>
	<button style="margin:1px;"onclick="saveOption();">설정저장</botton>
</div>
`
//위에 img 태그에 긴건 고양이 아이콘 이미지

function showOption(flag){
	//flag == 1:키는거
	//flag == 0:끄는거
	if(flag == 1)
		$('#script_option_screen')[0].style.display = '';
	else
		$('#script_option_screen')[0].style.display = 'none';
}

function options(input){
	if(0){}
	else if (input == 'monster_trans')		option_monster_trans 		= $('#option_monster_trans').is(":checked");
	else if (input == 'item_trans')			option_item_trans 			= $('#option_item_trans').is(":checked");
	else if (input == 'monster_namuwiki')	option_monster_namuwiki 	= $('#option_monster_namuwiki').is(":checked");
	else if (input == 'mutation_namuwiki')	option_mutation_namuwiki 	= $('#option_mutation_namuwiki').is(":checked");
}

function loadOption(){
	option_monster_trans		= localStorage.getItem('option_monster_trans') === 'true';
	option_item_trans			= localStorage.getItem('option_item_trans') === 'true';
	option_monster_namuwiki		= localStorage.getItem('option_monster_namuwiki') === 'true';
	option_mutation_namuwiki	= localStorage.getItem('option_mutation_namuwiki') === 'true';
	if(option_monster_trans)
		$('#option_monster_trans').prop("checked",true);
	if(option_item_trans)
		$('#option_item_trans').prop("checked",true);
	if(option_monster_namuwiki)
		$('#option_monster_namuwiki').prop("checked",true);
	if(option_mutation_namuwiki)
		$('#option_mutation_namuwiki').prop("checked",true);
}

function saveOption(){
	localStorage.setItem('option_monster_trans'		,Boolean(option_monster_trans)		);
	localStorage.setItem('option_item_trans'		,Boolean(option_item_trans)			);
	localStorage.setItem('option_monster_namuwiki'	,Boolean(option_monster_namuwiki)	);
	localStorage.setItem('option_mutation_namuwiki'	,Boolean(option_mutation_namuwiki)	);
	showOption(0);
}

$('#menu').unbind();
$('#menu').bind("DOMSubtreeModified", getMenu);

$('#messages').unbind();
$('#skillLevelDesc').remove();
$('#messages').bind("DOMSubtreeModified",getMessage);

$('#script_option').remove();
$('#stats').prepend('<div id="script_option" style="float:right;color:white" onclick="showOption(1)">헬퍼옵션</div>');

$('#script_option_screen').remove();
$('body').append(optionHTML);

option_monster_trans = Boolean(0);
option_item_trans = Boolean(0);
option_monster_namuwiki = Boolean(0);
option_mutation_namuwiki = Boolean(0);
loadOption();
console.log("적용완료");
