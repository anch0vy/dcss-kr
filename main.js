function getRightColumWidth(){
	return rightColumWidth = $("#minimap").width() - 20;
}

function getMenuWidth(){
	return 640 - 20;
}

function monster(monsterName){
	try{
		monsterName = /^[A|An] (.*)\.$/.exec(monsterName)[1];
	}
	catch(err){;}
	var text = $($('ol'),$('#menu_contents_inner'));
	var style = 'width:600px;white-space:normal;';
	var descs = mondic[monsterName];

	if(descs){ // 일반몹
		flag = 1;
		for (var i = 0; i < descs.length; i++)
			text.append(`<li class = "level2" style="${style}"><span class="">${descs[i]}</span></li>`);
		text.append('<a href="https://namu.wiki/w/%EB%8D%98%EC%A0%84%20%ED%81%AC%EB%A1%A4/%EB%AA%AC%EC%8A%A4%ED%84%B0">일반 몹 링크</a><br>');
		return;
	}

	for(key in namedmondic){ //네임드몹
		if(monsterName.indexOf(key) > -1){
			for (var i = 0; i < namedmondic[key].length; i++)
				text.append(`<li class = "level2" style="${style}"><span class="">${namedmondic[key][i]}</span></li>`);
			text.append('<a href="https://namu.wiki/w/%EB%8D%98%EC%A0%84%20%ED%81%AC%EB%A1%A4/%EB%84%A4%EC%9E%84%EB%93%9C">네임드 몹 링크</a><br>');
			return;
		}
	}
	//못찾은경우
	var str = '나무위키에 해당 항목이 없거나, 영문표기가 잘못되어있습니다.<br>만약 최신버전을 플레이중인데 이 메세지가 보인다면 나무위키에 해당항목을 추가하거나 고쳐주세요<br>';
	str += '<a href="https://namu.wiki/w/%EB%8D%98%EC%A0%84%20%ED%81%AC%EB%A1%A4/%EB%84%A4%EC%9E%84%EB%93%9C">네임드 몹 링크</a><br>';
	str += '<a href="https://namu.wiki/w/%EB%8D%98%EC%A0%84%20%ED%81%AC%EB%A1%A4/%EB%AA%AC%EC%8A%A4%ED%84%B0">일반 몹 링크</a><br>';
	text.append(str);
	return;
}

function mutationDesc(explain){
	explain = explain[0];
	var regExp = /A: (.*).:/i;
	var mutations = regExp.exec(explain)[1].split(',')
	$("ol",$("#menu_contents_inner")).append('<div id="mutationdesc" style="font-size:80% ; overflow-y: scroll;height:300px"></div>');
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

function trans(dom, normal, regs){
	dom.map(function(_,desc){
		var tt = normal[desc.innerText];
		if(tt)
			desc.innerText = tt;
		else{
			var as = regs[0];
			var bs = regs[1];
			for (var i = as.length - 1; i >= 0; i--) {
				var a = as[i];
				var b = bs[i];
				if(a.test(desc.innerText)){
					desc.innerText = desc.innerText.replace(a,b);
					return;
				}
			}
		}
	})
}

function findMonsteResistant(dom){
	type1 = ['immune' , 'resistant'];
	type2 = transDict_word; //속성 -> 한글
	dom.map(function(key,desc){
		txt = desc.innerText;
		if(txt.indexOf('immune') > -1 || txt.indexOf('resistant') > -1 || txt.indexOf(';') > -1){
			if(txt.indexOf('.') > -1){
				;
			}
			else{
				desc2 = dom[key+1];
				txt = txt +' ' + desc2.innerText;
				$(desc2).remove();
			}
			txt = txt.replace(/^(He|It) is/g,' ');
			txt = txt.replace(/ to /g,' ');
			txt = txt.replace(/ and /g,' ');
			txt = txt.replace(/,/g,' ');
			txt = txt.replace(/\./g,' ');
			txt = txt.replace(/  /g,' ');
			txt = txt.replace(/  /g,' ');
			txt = txt.replace(/  /g,' ');
			txt = txt.replace(/^ /g,'');
			txt = txt.replace(/; /g,';');
			txt = txt.replace(/ $/g,';');
			str = '';
			for(var key in type2)
				txt = txt.replace(key,type2[key]);
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

function _getMenu(){
	var menu = $("#menu_contents_inner");
	var ph_len = $(".placeholder",menu).length;
	var li_len = $("li",menu).length;
	if(ph_len == 0 && menu.length > 0 && li_len)
	{
		var explains = menu[0].innerText.split("\n");
		if($('.menu_resists').length > 0)
			mutationDesc(explains);
		else if($('.menu_inventory').length > 0){} // 인벤토리 선택ㄱ창
		else if(explains[0].indexOf('Innate Abilities, Weirdness') > -1){} // 능력
		else if(explains[0].indexOf('Dungeon Overview and Level AnnotationsBranches') > -1){}
		else if(explains[0].indexOf('Inventory') > -1){}
		else if($('.menu_pickup').length > 0){} //ctrl + x
		else if($('.menu_stash').length > 0){}
		else if($('.menu_ability').length > 0){}
		else if($('.menu_spell').length > 0){}//I 눌렀을때
		else if($('.menu_').length > 0){ // monster desc
			monster(explains[0]);
			var dom = $('li',$("#menu_contents_inner"));
			var normal = transDict_monsterDesc;
			var reg = transDict_monsterDesc_regex;
			trans(dom, normal, reg);
			findMonsteResistant(dom);
		}
	}
	else if($('.menu_describe_item').length > 0){//아이템설명
		var dom = $('span',$(".menu_describe_item"));
		var normal = transDict_itemDesc;
		var reg = transDict_itemDesc_regex;
		try{
			if(dom[dom.length - 1].className == 'fg3 bg0')
				trans(dom, normal, reg);			
		}
		catch(err){
			;
		}

	}
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
		if(skillTrain==' ' && skillLevel <= 1 ) //스킬의 실패율이 0,1일떄
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




$('#menu').unbind();
$('#menu').bind("DOMSubtreeModified", getMenu);

$('#messages').unbind();
$('#skillLevelDesc').remove();
$('#messages').bind("DOMSubtreeModified",getMessage);

console.log("적용완료");