transDict_monsterDesc = { //몬스터 설명 reg
}

{ // 몬스터 설명 reg
	var a = [];
	var b = [];
	transDict_monsterDesc_regex = [a,b];
	//It -> 그것
	//He -> 그
	//She -> 그녀
	a.push(/^(.+) looks harmless/);
	b.push('$1은(는) 별다른 위협이 되어 보이지 않는다');

	a.push(/^(.+) looks easy/);
	b.push('$1은(는) 어렵지 않은 상대이다');

	a.push(/^(.+) looks dangerous/);
	b.push('$1은(는) 만만치 않은 상대이다');

	a.push(/^(.+) looks extremely dangerous/);
	b.push('$1은(는) 극히 위험한 상대이다');

	a.push(/^(.+) is tiny/);
	b.push('$1은(는) 매우매우 작다');

	a.push(/^(.+) is very small/);
	b.push('$1은(는) 매우 작다');

	a.push(/^(.+) is small/);
	b.push('$1은(는) 작다');

	a.push(/^(.+) is large/);
	b.push('$1은(는) 크다');

	a.push(/^(.+) is very large/);
	b.push('$1은(는) 매우 크다');

	a.push(/^(.+) is giant/);
	b.push('$1은(는) 매우 거대하다');

	a.push(/^(.+) is extremely slowly/);
	b.push('$1은(는) 극도로 느리다');

	a.push(/^(.+) is very slowly/);
	b.push('$1은(는) 매우 느리다');

	a.push(/^(.+) is slowly/);
	b.push('$1은(는) 느리다');

	a.push(/^(.+) is quickly/);
	b.push('$1은(는) 빠르다');

	a.push(/^(.+) is very quickly/);
	b.push('$1은(는) 매우 빠르다');

	a.push(/^(.+) is extremely quickly/);
	b.push('$1은(는) 극도로 빠르다');

	a.push(/^(.+) can fly/);
	b.push('$1은(는) 날 수 있다');

	a.push(/^(.+) is intelligent/);
	b.push('$1은(는) 지성이 있다');

	a.push(/^(.+) cannot regenerate/);
	b.push('$1은(는) 재생할 수 없다');

	a.push(/^(.+) is vulnerable to silver and hated by Zin/);
	b.push('$1은(는) 은에 약하며, 진에게 미움을 받는다');

	a.push(/^(.+) is mindless/);
	b.push('$1은(는) 감성이 없다');

	a.push(/^(.+) is slow/);
	b.push('$1은(는) 느리다');

	a.push(/^(.+) can see invisible/);
	b.push('$1은(는) 보이지 않는 물체를 감지할 수 있다');

	a.push(/^(.+) regenerates quickly/);
	b.push('$1은(는) 빠르게 재생한다');

	a.push(/^It is susceptible to (.*)\./);
	b.push('$1은(는) 몇몇 공격에 대해 민감하다. ($1)');

	a.push(/^(.+) may attack to deal extra acid damage/);
	b.push("$1은(는) 추가적인 산성 데미지를 입힌다");

	a.push(/^(.+) may attack to blink self/);
	b.push("$1은(는) may attack to blink self");

	a.push(/^(.+) may attack to deal extra cold damage/);
	b.push("$1은(는) 추가적인 냉기 데미지를 준다");

	a.push(/^(.+) may attack to cause confusion/);
	b.push("$1의 공격은 혼란을 유발시킨다");

	a.push(/^(.+) may attack to drain strength/);
	b.push("$1은(는) 공격은 힘을 흡수한다");

	a.push(/^(.+) may attack to drain intelligence/);
	b.push("$1의 공격은 지능을 흡수한다");

	a.push(/^(.+) may attack to drain dexterity/);
	b.push("$1은(는) 의 공격은 민첩성을 흡수한다");

	a.push(/^(.+) may attack to drain strength, intelligence or dexterity/);
	b.push("$1의 공격은 힘, 지능, 민첩성을 흡수한다");

	a.push(/^(.+) may attack to drain skills/);
	b.push("$1은(는) may attack to drain skills");

	a.push(/^(.+) may attack to cause electrocution/);
	b.push("$1의 공격은 감전을 유발한다");

	a.push(/^(.+) may attack to deal extra fire damage/);
	b.push("$1은(는) 화염 데미지를 추가로 준다");

	a.push(/^(.+) may attack to cause hungering/);
	b.push("$1의 공격은 배고픔을 유발한다");

	a.push(/^(.+) may attack to cause mutations/);
	b.push("$1의 공격은 돌연변이들을 유발한다");

	a.push(/^(.+) may attack to cause paralysis/);
	b.push("$1의 공격은 마비를 유발한다");

	a.push(/^(.+) may attack to cause poisoning/);
	b.push("$1의 공격은 중독을 유발한다");

	a.push(/^(.+) may attack to cause strong poisoning through resistance/);
	b.push("$1의 공격은 저항을 뚫고 강력한 중독을 유발한다");

	a.push(/^(.+) may attack to cause rotting/);
	b.push("$1의 공격은 부패(rotting)를 유발한다");

	a.push(/^(.+) may attack to drain health/);
	b.push("$1의 공격은 체력을 흡수한다");

	a.push(/^(.+) may attack to cause random powerful effects/);
	b.push("$1의 공격은 무작위적은 강력한 효과들을 유발한다");

	a.push(/^(.+) may attack to cause wild translocation effects/);
	b.push("$1의 공격은 사나운(wild) 전이 효과들을 유발한다");

	a.push(/^(.+) may attack to cause berserking/);
	b.push("$1의 공격은 광폭화를 유발한다");

	a.push(/^(.+) may attack to apply sticky flame/);
	b.push("$1의 공격은 may attack to apply sticky flame");

	a.push(/^(.+) may attack to cause unpredictable effects/);
	b.push("$1의 공격은 예측 불가능한 효과를 유발한다");

	a.push(/^(.+) may attack to steal items/);
	b.push("$1의 공격은 물건들을 훔친다");

	a.push(/^(.+) may attack to constrict/);
	b.push("$1은(는) 조이기 공격을 한다");

	a.push(/^(.+) may attack to deal damage from a distance/);
	b.push("$1의 공격은 may attack to deal damage from a distance");

	a.push(/^(.+) may attack to deal extra damage to undead and demons/);
	b.push("$1은(는) 언데드와 악마에게 추가적인 데미지를 입힌다");

	a.push(/^(.+) may attack to drain magic/);
	b.push("$1의 공격은 당신의 마법을 흡수한다");

	a.push(/^(.+) may attack to cause pain to the living/);
	b.push("$1의 공격은 살아있는 것에 고통(pain)을 유발한다");

	a.push(/^(.+) may attack to ensnare with webbing/);
	b.push("$1의 공격은 may attack to ensnare with webbing");

	a.push(/^(.+) may attack to engulf with water/);
	b.push("$1의 공격은 물에 질식하게 만든다");

	a.push(/^(.+) may attack to deal pure fire damage/);
	b.push("$1의 공격은 순수한 불 데미지를 준다");

	a.push(/^(.+) may attack to drain speed/);
	b.push("$1의 공격은 may attack to drain speed");

	a.push(/^(.+) may attack to reduce resistance to hostile enchantments/);
	b.push("$1의 공격은 적대적인 마법에대한 저항력을 줄인다");

	a.push(/^(.+) may attack to cause poisoning and weakness/);
	b.push("$1의 공격은 중독과 약화를 유발한다");

	a.push(/^(.+) may attack to deal extra damage from the shadows/);
	b.push("$1의 공격은 may attack to deal extra damage from the shadows");

	a.push(/^(.+) may attack to deal drowning damage/);
	b.push("$1의 공격은 may attack to deal drowning damage");

	a.push(/^(.+) may attack to deal extra fire damage and surround the defender with flames/);
	b.push("$1의 공격은 추가적은 불 피해를 주고 주변을 불길로 감싼다");

	a.push(/^(.+) may attack to cause corrosion/);
	b.push("$1의 공격은 부식을 유발한다");

	a.push(/^(.+) may attack to drain speed and drain health/);
	b.push("$1의 공격은 may attack to drain speed and drain health");

	a.push(/^(.+) may attack to knock back the defender/);
	b.push("$1의 공격은 방어자를 물러서게 만든다");

	a.push(/^(.+) is outlined in light/);
	b.push('$1은(는) 밝은 광채를 발하고 있다');

	a.push(/It cannot move/);
	b.push('그것은 움직일 수 없다');

	a.push(/^(.+) is incapable of using stairs/);
	b.push('$1은(는) 계단을 이용할 수 없다');
}

{
	transDict_word = {"electricity" : '전기',
	"poison" : '독',
	"fire" : '화염',
	"steam" : '증기',
	"cold" : '냉기',
	"acid" : '산(성)',
	"rotting" : 'rotting',
	"negative energy" : '음에너지',
	'blinding' : '실명',
	'extremely' : '극도로',
	'particularly' : '특히',
	'mutation' : '돌연변이',
	'corrosion' : '부식',
	'missiles' : '투사체',//순서지키기
	'missile' : '투사체',

	//몬스터 설명 It, He, She
	'He' : '그',
	'She' : '그녀', 
	'It' : '그것',
	//몬스터 설명 한글 자연스럽게
	'그은(는)' : '그는',
	'그녀은(는)' : '그녀는',
	'그것은(는)' : '그것은',

	' and ' : ' , ' //이건 무조건 마지막
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

	a.push(/It makes you extremely vulnerable to ([a-zA-Z ]*)/);
	b.push('이것은 당신을 $1에 극히 취약하게 만든다');

	a.push(/It makes you very vulnerable to ([a-zA-Z ]*)/);
	b.push('이것은 당신을 $1에 매우 취약하게 만든다');

	a.push(/It makes you vulnerable to ([a-zA-Z ]*)/);
	b.push('이것은 당신을 $1에 취약하게 만든다');

	a.push(/It protects you from ([a-zA-Z ]*)/);
	b.push('이것은 당신을 $1(으)로부터 보호한다');

	a.push(/It greatly protects you from ([a-zA-Z ]*)/);
	b.push('이것은 당신을 $1(으)로부터 강하게 보호한다');

	a.push(/It renders you almost immune to([a-zA-Z ]*)/);
	b.push('이것은 당신을 $1에 거의 면역이 되게 한다');

	a.push(/It can be evoked to extend its reach/);
	b.push('이 무기는 발동을 통해 사거리를 늘려 공격하는 것이 가능하다');

	a.push(/It can hit multiple enemies in an arc around the wielder/);
	b.push('이것은 착용자 주변의 다수의 적들을 한 번에 공격할 수 있다');

	a.push(/It is (extremely|particularly) good for stabbing unaware enemies/);
	b.push("이것은 당신을 눈치채지 못한 적을 암살하는데 $1 적합하다");

	a.push(/It inflicts extra damage upon your enemies/);
	b.push('이것은 적에게 추가 타격을 입한다.');
//안된부분
// switch (spec_ench)
// {
// case SPWPN_FLAMING:
//     if (is_range_weapon(item))
//         description += "It causes projectiles fired from it to burn those they strike,";
//     else
//         description += "It has been specially enchanted to burn those struck by it,";
//     description += " causing extra injury to most foes and up to half again as much damage against particularly susceptible opponents.";
//     if (!is_range_weapon(item) &&
//         (damtype == DVORP_SLICING || damtype == DVORP_CHOPPING))
//     {
//         description += " Big, fiery blades are also staple armaments of hydra-hunters.";
//     }
//     break;
// case SPWPN_FREEZING:
//     if (is_range_weapon(item))
//     {
//         description += "It causes projectiles fired from it to freeze those they strike,";
//     }
//     else
//     {
//         description += "It has been specially enchanted to freeze those struck by it,";
//     }
//     description += " causing extra injury to most foes and up to half again as much damage against particularly susceptible opponents.";
//     if (is_range_weapon(item))
//         description += " They";
//     else
//         description += " It";
//     description += " can also slow down cold-blooded creatures.";
//     break;
// case SPWPN_HOLY_WRATH:
//     description += "It has been blessed by the Shining One";
//     if (is_range_weapon(item))
//     {
//         description += ", and any ";
//         description += ammo_name(item);
//         description += " fired from it will";
//     }
//     else
//         description += " to";
//     description += " cause great damage to the undead and demons.";
//     break;


	a.push(/It charges the ammunition it shoots with electricity; occasionally upon a hit, such missiles may discharge and cause terrible harm/);
	b.push("이 무기는 발사체에 전기를 충전하며, 적에게 명중했을 때 이따금씩 전기를 방출하여 치명적인 피해를 입힐 수 있다");

	a.push(/Occasionally, upon striking a foe, it will discharge some electrical energy and cause terrible harm/);
	b.push("적에게 명중했을 때 이따금씩 전기 에너지를 방출하여 치명적인 피해를 입힐 수 있다");

	a.push(/It poisons the ammo it fires/);
	b.push("발사되는 화살이나 다트 등에 독을 부여한다");

	a.push(/It poisons the flesh of those it strikes/);
	b.push("이 무기는 공격당한 상대를 독에 걸리게 한다");

	a.push(/It protects the one who wields it against injury \(\+5 to AC\)/);
	b.push("무기의 사용자를 피해로부터 보호한다 (+5 to AC)");

	a.push(/It affects your evasion \(\+5 to EV\)/);
	b.push("무기 사용자의 회피력을 상승시킨다 (+5 to EV)");

	a.push(/A truly terrible weapon, it drains the life of those it strikes/);
	b.push("적의 생명력을 흡수하는, 실로 무시무시한 무기다");

    a.push(/Attacks with this weapon are significantly faster/);
    b.push('이 무기로 공격하면, 공격이 살짝 빨라진다');

	a.push(/Any (.*) fired from it inflicts extra damage/);
	b.push("발사된 $1는 추가 타격을 입히게 된다");

	a.push(/It inflicts extra damage upon your enemies/);
	b.push("적에게 추가 타격을 입한다");

	a.push(/Each time it fires, it turns the launched projectile into a different, random type of bolt/);
	b.push("매 발사시마다, 발사되는 화살이나 다트 등을 무작위 속성의 효과로 감싼다");

	a.push(/Each time it hits an enemy it has a different, random effect/);
	b.push("적을 공격할 때마다, 적에게 무작위적인 효과를 낸다");

	a.push(/It inflicts no extra harm, but heals its wielder somewhat when it strikes a living foe/);
	b.push("추가 타격을 입히지는 않지만, 살아있는 상대에게 피해를 입힐 경우, 사용자의 체력을 약간 회복시킨다")

	a.push(/In the hands of one skilled in necromantic magic, it inflicts extra damage on living creatures/);
	b.push("강령술 마법에 숙련된 자가 사용하면, 살아있는 적에게 추가 데미지를 입힐 수 있다");

	a.push(/It warps and distorts space around it. Unwielding it can cause banishment or high damage/);
	b.push("주위 공간을 비틀고 왜곡시킨다. 이 무기를 손에서 놓으면 추방당하거나 높은 타격을 입을 수 있다");

	a.push(/Ammo fired by it will pass through the targets it hits, potentially hitting all targets in its path until it reaches maximum range/);
	b.push('이 무기에서 발사되는 발사체들은 적들을 관통하게 된다. 최선의 상황에서는 발사체의 이동 경로에 있는 모든 적들을 한 번에 공격할 수도 있다');

	a.push(/If a monster killed with it leaves a corpse in good enough shape, the corpse will be animated as a zombie friendly to the killer/);
	b.push('이 무기에 의해 죽은 몬스터의 시체가 온전하다면, 시체는 좀비로 부활하여 사용자를 따를 것이다');

	a.push(/It disrupts the flow of magical energy around spellcasters and certain magical creatures \(including the wielder\)/);
	b.push('이 무기는 마법 사용자나 혹은 마법에 의한 창조물들의 마력의 흐름을 방해한다(무기 사용자도 포함)');

// case SPWPN_NORMAL:
//     ASSERT(enchanted);
//     description += "It has no special brand (it is not flaming, freezing, etc), but is still enchanted in some way - positive or negative.";
//     break;

	a.push(/This weapon may have some hidden properties/);
	b.push('이 무기는 숨겨진 능력이 있을 것 같다');

	a.push(/It is too large for you to wield/);
	b.push('이 무기는 장비하기에 너무 커 보인다');

	a.push(/It cannot be enchanted further/);
	b.push('이것은 더 이상 강화할 수 없다');

	a.push(/It can be maximally enchanted to \+([0-9]*)/);
	b.push('이것은 최대 +$1까지 강화가 가능하다');

	a.push(/Base accuracy: (.*)  Base damage: (.*)  Base attack delay: (.*)/);
	b.push('명중: $1  기본 데미지: $2  기본 공속: $3');

	a.push(/It allows its wearer to slither at a great speed/);
	b.push("이것은 착용자가 빠른 속도로 기어갈 수 있게 해준다");

	a.push(/It allows its wearer to run at a great speed/);
	b.push("이것은 착용자를 빠른 속도로 달릴 수 있게 해준다");

	a.push(/It protects its wearer from heat/);
	b.push("이것은 착용자를 불과 열기로부터 보호한다");

	a.push(/It protects its wearer from cold/);
	b.push("이것은 착용자를 냉기로부터 보호한다");

	a.push(/It protects its wearer from poison/);
	b.push("이것은 착용자를 독으로부터 보호한다");

	a.push(/It allows its wearer to see invisible things/);
	b.push("이것은 착용자가 투명한 것들을 볼 수 있게 해준다");

	a.push(/When activated it hides its wearer from the sight of others, but also increases their metabolic rate by a large amount/);
	b.push("이것은 발동시 이것은 착용자를 주위 시선으로부터 숨기지만, 동시에 신진대사의 속도도 큰 폭으로 증가하게 된다.");

	a.push(/It increases the physical power of its wearer \(\+3 to strength\)/);
	b.push("이것은 착용자의 물리적 힘을 증가시킨다 (힘 +3)");

	a.push(/It increases the dexterity of its wearer \(\+3 to dexterity\)/);
	b.push("이것은 착용자의 민첩성을 증가시킨다 (민첩성 +3)");

	a.push(/It makes you more clever \(\+3 to intelligence\)/);
	b.push("이것은 착용자를 더욱 똑똑하게 만들어준다 (지능 +3)");

	a.push(/It is very cumbersome, thus slowing your movement/);
	b.push("이것은 움직임에 매우 방해가 되어, 이동속도를 감소시킨다");

	a.push(/It can be activated to allow its wearer to fly indefinitely/);
	b.push("이것은 발동시켜 착용자를 공중으로 떠오르게 할 수 있다");

	a.push(/It increases its wearer's resistance to enchantments/);
	b.push("이것은 착용자의 마법에 대한 저항력을 강화시킨다");

	a.push(/It protects its wearer from harm \(\+3 to AC\)/);
	b.push("이것은 착용자를 물리적 피해로부터 보호한다 (AC +3)");

	a.push(/It enhances the stealth of its wearer/);
	b.push("이것은 착용자가 더 은밀하게 움직일 수 있도록 해준다");

	a.push(/It protects its wearer from the effects of both cold and heat/);
	b.push("이것은 착용자를 냉기와 불로부터 보호한다");

	a.push(/It protects its wearer from the effects of negative energy/);
	b.push("이것은 착용자를 음에너지로부터 보호한다");

	a.push(/It increases the power of its wearer's magical spells/);
	b.push("이것은 착용자가 시전하는 주문의 위력을 강화시킨다");

	a.push(/It does nothing special/);
	b.push("이것은 It does nothing special");

	a.push(/It reflects blocked things back in the direction they came from/);
	b.push("이것은 (투사체같은) 막은 것들을 그것들이 온 방향으로 되돌려보낸다");

	a.push(/It shields its wearer from harm at the cost of magical power/);
	b.push("이것은 마나를 소모하여 착용자를 피해로부터 보호한다");

	a.push(/It improves your effectiveness with ranged weaponry \(Slay\+4\)/);
	b.push("이것은 It improves your effectiveness with ranged weaponry (Slay+4)");

	a.push(/This armour may have some hidden properties/);
	b.push("이것은 이 방어구는 왠지 숨겨진 능력이 있을 것 같다");

	a.push(/Enchanting it will turn it into a suit of magical armour/);
	b.push("이것을 강화하면 이것은 마법 방어구로 변할 것이다");

	a.push(/It cannot be enchanted further/);
	b.push("이것은 더 이상 강화할 수 없다");

	a.push(/Base armour rating: (.*)  Encumbrance rating: (.*)/);
	b.push("기본 AC: $1                방해 수치:$2");

	a.push(/Wearing mundane armour of this type will give the following: (.*)/);
	b.push('이 유형의 평범한 갑옷을 착용할시 $1 를 준다.');

}
