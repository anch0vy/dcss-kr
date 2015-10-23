transDict_monsterDesc = { //몬스터 설명 reg
}

{ // 몬스터 설명 reg
	var a = [];
	var b = [];
	transDict_monsterDesc_regex = [a,b];

	a.push(/.+ looks harmless/);
	b.push('그것은 별다른 위협이 되어 보이지 않는다');

	a.push(/.+ looks easy/);
	b.push('그것은 어렵지 않은 상대이다');

	a.push(/.+ looks dangerous/);
	b.push('그것은 만만치 않은 상대이다');

	a.push(/.+ looks extremely dangerous/);
	b.push('그것은 극히 위험한 상대이다');

	a.push(/.+ is tiny/);
	b.push('그것은 매우매우 작다');

	a.push(/.+ is very small/);
	b.push('그것은 매우 작다');

	a.push(/.+ is small/);
	b.push('그것은 작다');

	a.push(/.+ is large/);
	b.push('그것은 크다');

	a.push(/.+ is very large/);
	b.push('그것은 매우 크다');

	a.push(/.+ is giant/);
	b.push('그것은 매우 거대하다');

	a.push(/.+ is extremely slowly/);
	b.push('그것은 극도로 느리다');

	a.push(/.+ is very slowly/);
	b.push('그것은 매우 느리다');

	a.push(/.+ is slowly/);
	b.push('그것은 느리다');

	a.push(/.+ is quickly/);
	b.push('그것은 빠르다');

	a.push(/.+ is very quickly/);
	b.push('그것은 매우 빠르다');

	a.push(/.+ is extremely quickly/);
	b.push('그것은 극도로 빠르다');

	a.push(/.+ can fly/);
	b.push('그것은 날 수 있다');

	a.push(/.+ is intelligent/);
	b.push('그것은 지성이 있다');

	a.push(/.+ cannot regenerate/);
	b.push('그것은 재생할 수 없다');

	a.push(/.+ is vulnerable to silver and hated by Zin/);
	b.push('그것은 은에 약하며, 진에게 미움을 받는다');

	a.push(/.+ is mindless/);
	b.push('그것은 감성이 없다');

	a.push(/.+ is slow/);
	b.push('그것은 느리다');

	a.push(/.+ can see invisible/);
	b.push('그것은 보이지 않는 물체를 감지할 수 있다');

	a.push(/.+ regenerates quickly/);
	b.push('그것은 빠르게 재생한다');

	a.push(/^It is susceptible to (.*)\./);
	b.push('그것은 몇몇 공격에 대해 민감하다. ($1)');

	a.push(/^(.*) may attack to deal extra acid damage/);
	b.push("그것은 추가적인 산성 데미지를 입힌다");

	a.push(/^(.*) may attack to blink self/);
	b.push("그것은 may attack to blink self");

	a.push(/^(.*) may attack to deal extra cold damage/);
	b.push("그것은 추가적인 냉기 데미지를 준다");

	a.push(/^(.*) may attack to cause confusion/);
	b.push("그것의 공격은 혼란을 유발시킨다");

	a.push(/^(.*) may attack to drain strength/);
	b.push("그것은 공격은 힘을 흡수한다");

	a.push(/^(.*) may attack to drain intelligence/);
	b.push("그것의 공격은 지능을 흡수한다");

	a.push(/^(.*) may attack to drain dexterity/);
	b.push("그것은 의 공격은 민첩성을 흡수한다");

	a.push(/^(.*) may attack to drain strength, intelligence or dexterity/);
	b.push("그것의 공격은 힘, 지능, 민첩성을 흡수한다");

	a.push(/^(.*) may attack to drain skills/);
	b.push("그것은 may attack to drain skills");

	a.push(/^(.*) may attack to cause electrocution/);
	b.push("그것의 공격은 감전을 유발한다");

	a.push(/^(.*) may attack to deal extra fire damage/);
	b.push("그것은 화염 데미지를 추가로 준다");

	a.push(/^(.*) may attack to cause hungering/);
	b.push("그것의 공격은 배고픔을 유발한다");

	a.push(/^(.*) may attack to cause mutations/);
	b.push("그것의 공격은 돌연변이들을 유발한다");

	a.push(/^(.*) may attack to cause paralysis/);
	b.push("그것의 공격은 마비를 유발한다");

	a.push(/^(.*) may attack to cause poisoning/);
	b.push("그것의 공격은 중독을 유발한다");

	a.push(/^(.*) may attack to cause strong poisoning through resistance/);
	b.push("그것의 공격은 저항을 뚫고 강력한 중독을 유발한다");

	a.push(/^(.*) may attack to cause rotting/);
	b.push("그것의 공격은 부패(rotting)를 유발한다");

	a.push(/^(.*) may attack to drain health/);
	b.push("그것의 공격은 체력을 흡수한다");

	a.push(/^(.*) may attack to cause random powerful effects/);
	b.push("그것의 공격은 무작위적은 강력한 효과들을 유발한다");

	a.push(/^(.*) may attack to cause wild translocation effects/);
	b.push("그것의 공격은 사나운(wild) 전이 효과들을 유발한다");

	a.push(/^(.*) may attack to cause berserking/);
	b.push("그것의 공격은 광폭화를 유발한다");

	a.push(/^(.*) may attack to apply sticky flame/);
	b.push("그것의 공격은 may attack to apply sticky flame");

	a.push(/^(.*) may attack to cause unpredictable effects/);
	b.push("그것의 공격은 예측 불가능한 효과를 유발한다");

	a.push(/^(.*) may attack to steal items/);
	b.push("그것의 공격은 물건들을 훔친다");

	a.push(/^(.*) may attack to constrict/);
	b.push("그것은 조이기 공격을 한다");

	a.push(/^(.*) may attack to deal damage from a distance/);
	b.push("그것의 공격은 may attack to deal damage from a distance");

	a.push(/^(.*) may attack to deal extra damage to undead and demons/);
	b.push("그것은 언데드와 악마에게 추가적인 데미지를 입힌다");

	a.push(/^(.*) may attack to drain magic/);
	b.push("그것의 공격은 may attack to drain magic");

	a.push(/^(.*) may attack to cause pain to the living/);
	b.push("그것의 공격은 살아있는 것에 고통(pain)을 유발한다");

	a.push(/^(.*) may attack to ensnare with webbing/);
	b.push("그것의 공격은 may attack to ensnare with webbing");

	a.push(/^(.*) may attack to engulf with water/);
	b.push("그것의 공격은 물에 질식하게 만든다");

	a.push(/^(.*) may attack to deal pure fire damage/);
	b.push("그것의 공격은 순수한 불 데미지를 준다");

	a.push(/^(.*) may attack to drain speed/);
	b.push("그것의 공격은 may attack to drain speed");

	a.push(/^(.*) may attack to reduce resistance to hostile enchantments/);
	b.push("그것의 공격은 적대적인 마법에대한 저항력을 줄인다");

	a.push(/^(.*) may attack to cause poisoning and weakness/);
	b.push("그것의 공격은 중독과 약화를 유발한다");

	a.push(/^(.*) may attack to deal extra damage from the shadows/);
	b.push("그것의 공격은 may attack to deal extra damage from the shadows");

	a.push(/^(.*) may attack to deal drowning damage/);
	b.push("그것의 공격은 may attack to deal drowning damage");

	a.push(/^(.*) may attack to deal extra fire damage and surround the defender with flames/);
	b.push("그것의 공격은 추가적은 불 피해를 주고 주변을 불길로 감싼다");

	a.push(/^(.*) may attack to cause corrosion/);
	b.push("그것의 공격은 부식을 유발한다");

	a.push(/^(.*) may attack to drain speed and drain health/);
	b.push("그것의 공격은 may attack to drain speed and drain health");

	a.push(/^(.*) may attack to knock back the defender/);
	b.push("그것의 공격은 방어자를 물러서게 만든다");

	a.push(/^(.*) is outlined in light/);
	b.push('그것은 밝은 광채를 발하고 있다');
}

{
	transDict_word = {"electricity" : '전기',
	"poison" : '독',
	"fire" : '화염',
	"steam" : '증기',
	"cold" : '냉기',
	"acid" : '산성',
	"rotting" : 'rotting',
	"negative energy" : '음에너지',
	'blinding' : '실명',
	}
}


transDict_itemDesc = {
	
}

{ //아이템 설명 reg transDict_itemDesc_regex
	var a = [];
	var b = [];
	transDict_itemDesc_regex = [a,b];
	a.push(/^It affects your AC \((.*)\)\./);
	b.push("이것은 당신의 방어력에 영향을 준다 ($1).");

	a.push(/^It affects your evasion \((.*)\)\./);
	b.push("이것은 당신의 회피력에 영향을 준다 ($1).");

	a.push(/^It affects your strength \((.*)\)\./);
	b.push("이것은 당신의 힘에 영향을 준다 ($1).");

	a.push(/^It affects your intelligence \((.*)\)\./);
	b.push("이것은 당신의 지능에 영향을 준다 ($1).");

	a.push(/^It affects your dexterity \((.*)\)\./);
	b.push("이것은 당신의 민첩에 영향을 준다 ($1).");

	a.push(/It affects your accuracy and damage with ranged weapons and melee attacks \((.*)\)/)
	b.push("이것은 당신의 원거리 무기와 근접 공격의 정확도와 데미지에 영향을 준다 ($1)")

	a.push(/^It insulates you from electricity\./);
	b.push("이것은 당신을 전기 쇼크로부터 보호한다.");

	a.push(/It sustains your strength, intelligence and dexterity/);
	b.push("이것은 당신의 힘, 지능, 민첩을 유지시켜준다");

	a.push(/^It affects your resistance to hostile enchantments\./);
	b.push("이것은 당신을 적대적인 마법으로부터 보호한다.");

	a.push(/^It affects your health \((.*)\)\./);
	b.push("이것은 당신의 생명력에 영향을 준다 ($1).");

	a.push(/^It affects your magic capacity \((.*)\)\./);
	b.push("이것은 당신의 마력에 영향을 준다 ($1).");

	a.push(/(.*) lets you see invisible/);
	b.push('이것은 당신이 투명한 것을 볼 수 있게 해준다');

	a.push(/^It lets you turn invisible\./);
	b.push("이것은 당신이 투명화를 할 수 있게 해준다.");

	a.push(/^It lets you fly\./);
	b.push("이것은 당신이 비행을 할 수 있게 해준다.");

	a.push(/^It lets you blink\./);
	b.push("이것은 당신이 짧은거리를 순간이동을 할 수 있게 해준다.");

	a.push(/^It lets you go berserk\./);
	b.push("이것은 당신이 광폭화를 할 수 있게 해준다.");

	a.push(/It may make noises in combat/);
	b.push('이것은 싸울때 소음을 낸다');

	a.push(/^It prevents spellcasting\./);
	b.push("이것은 당신의 주문시전을 방해한다.");

	a.push(/It may teleport you to nearby monsters/);
	b.push('It may teleport you to nearby monsters');

	a.push(/^It prevents most forms of teleportation\./);
	b.push("이것은 대부분의 공간이동을 방해한다.");

	a.push(/It may make you go berserk in combat/);
	b.push('이것은 전투중에 당신을 광폭화시킬 수 있다');

	a.push(/It may re-curse itself when equipped/);
	b.push('이것은 착용시 저주에 걸린다');

	a.push(/^It protects you against confusion\./);
	b.push("이것은 당신을 혼란으로부터 보호한다.");

	a.push(/^It causes magical contamination when unequipped\./);
	b.push("이것을 해제할 경우, 마력 오염을 일으킬 것이다.");

	a.push(/^It protects you from missiles\./);
	b.push("이것은 당신을 발사체로부터 보호한다.");

	a.push(/^It can be evoked to emit clouds of fog\./);
	b.push("이것을 발동하여 안개 구름을 내뿜을 수 있다.");

	a.push(/^It increases your rate of regeneration\./);
	b.push("이것은 당신의 재생력을 향상시킨다.");

	a.push(/It protects you from acid and corrosion/);
	b.push('이것은 당신을 산과 부식으로부터 보호한다');

	a.push(/It protects you from mutation/);
	b.push('이것은 당신을 돌연변이로부터 보호한다');

	a.push(/It may corrode your equipment when you take damage/);
	b.push('It may corrode your equipment when you take damage');

	a.push(/It causes draining when unequipped/);
	b.push('It causes draining when unequipped');

	a.push(/It may confuse you when you take damage/);
	b.push('이것은 당신이 피해를 입었을때 혼란상태에 빠지게 할 수 있다');

	a.push(/^It makes you much more stealthy/);
	b.push("이것은 당신의 움직임을 매우 조용하게 한다");

	a.push(/^It makes you more stealthy/);
	b.push("이것은 당신의 움직임을 조용하게 한다");

	a.push(/^It makes you less stealthy/);
	b.push("이것은 당신의 은밀한 움직임을 방해한다");

	a.push(/^It makes you much less stealthy/);
	b.push("이것은 당신의 은밀한 움직임을 크게 방해한다");


	//장신구
	// a.push(/^It sustains your strength, intelligence and dexterity/);
	// b.push('It sustains your strength, intelligence and dexterity');

	a.push(/^It improves your spell success rate/);
	b.push('이것은 당신의 주문 성공률을 높여준다');

	a.push(/^It enhances your fire magic, and weakens your ice magic/);
	b.push('이것은 당신의 불 마법을 강화하고 얼음 마법을 약화시킨다');

	a.push(/^It enhances your ice magic, and weakens your fire magic/);
	b.push('이것은 당신의 얼음 마법을 강화시키고, 불 마법을 약화시킨다');

	a.push(/^It may teleport you to nearby monsters, and can be evoked to randomly teleport/);
	b.push('It may teleport you to nearby monsters, and can be evoked to randomly teleport');

	a.push(/^It can be evoked for teleport control/);
	b.push('이것은 컨트롤 텔레포트를 발동할 수 있다');

	a.push(/^It provides mental clarity/);
	b.push('이것은 정신을 맑게 한다');

	a.push(/^It may prevent the melee attacks of summoned creatures/);
	b.push('이것은 소환된 생물의 근접 공격을 예방한다');

	// a.push(/^It protects you from acid and corrosion/);
	// b.push('It protects you from acid and corrosion');

	a.push(/^It allows you to eat raw meat even when not hungry/);
	b.push('이것은 당신이 배고프지 않더라도 날고기를 먹을 수 있게 한다');

	a.push(/^It protects your inventory from destruction/);
	b.push('이것은 당신의 물품을 파괴로부터 보호한다');

	// a.push(/^It protects you from mutation/);
	// b.push('It protects you from mutation');

	a.push(/^It causes incoming damage to be split between your health and magic/);
	b.push('이것은 피해를 체력과 마나로 나눠받게 한다');

	a.push(/^It allows you to gain divine favour quickly/);
	b.push('이것은 신앙도를 빠르게 얻을수 있게 한다');

	a.push(/^It prevents you from being teleported, slowed, hasted or paralysed/);
	b.push('이것은 순간이동과 느려짐과 가속 혹은 마비로부터 당신을 보호한다');

	a.push(/^It reduces the accuracy of all your attacks/);
	b.push('이것은 전반적인 공격의 정확도를 낮춘다');
}
