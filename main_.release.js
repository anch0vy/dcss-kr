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
	b.push("그것의 공격은 당신의 마법을 흡수한다");

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


mondic = {
	"river rat": [
		"강가 쥐 ",
		"독특한 초록색을 지닌 설치류, 자신의 수많은 동료들과 물결치듯 등장한다.",
		"고기에 독이 있다. 보통 짐승 소굴에서 무더기로 나온다. 하나 하나는 별로 위험하지 않지만 개활지에서 떼거지로 나오는 탓에 초반이라 스펙이 딸리거나 광역기가 없을 경우 위험할 수도 있다. 0.16 이후 초록색 쥐(Green Rat)에서 이름이 바뀌엇다"
	],
	"deep elf master archer": [
		"딥 엘프 마스터 아처 ",
		"마스터 아처들은 그들의 인생 대부분을 궁술에 쏟아부은 자들이다. 다른 딥엘프들에게 있어 마법은 밀접하지만, 이들에게는 그저 하찮은 눈속임에 지나지 않다.",
		"멀리서 쏴되는 화살들에게 쓰러진 유저들의 비명소리가 들리는듯 하다. Repel Missiles/Deflect Missiles의 마법이 절실하게 필요할 타이밍이 바로 이타이밍이 아닐까 싶을 정도로 데미지가 상당한 화살들을 쁑쁑 발사해대는데 이게 여간 버틸만한게 아니다. 마법사들은 일단 방어력이 약하기에 거의 데미지를 문자 그대로 받기 때문에 주의하자. 블레이드 마스터와 마찬가지로 투명 감지와 독저항이 없는것이 가장 큰 약점. 투명 감지 or 독 저항 아이템을 주어서 사용하고 있는게 아니라면 투명화, 맵틱, 쿠라레 등으로 상대 하자. 공포의 스크롤이 먹히기는 하는데 너무 이것만 믿고 다니진 말자. 더 안전한 수단을 하나더 준비하고 시작하자."
	],
	"skeleton": [
		"해골",
		"||||",
		"||||",
		"||||",
		"언데드가 되는 것을 강령술의 수련으로 강요받은 해골이다.",
		"그냥 해골. 좀비와 비슷하나 생전에 입던 장비를 간혹 들고 있다. 스켈레톤이 유용한 이유. 간혹 독검이라도 들면.... 더 이상 자세한 설명은 생략한다. 몸빵은 좀비보다 살짝 못하다. "
	],
	"thrashing horror": [
		"몸부림 괴수 ",
		"박쥐의 강화판으로, 속도가 박쥐보다 살짝 느린 정도로 매우 빠른 데 더해 플레이어를 1칸 뒤로 밀치는 공격을 하고 부상을 입으면 스스로에게 힘 강화를 건다. 중반 이후만 되어도 경험치 덩어리지만, 어쩌다 저레벨에 어비스에 들어간 캐릭터에게는 치명적일 수 있다."
	],
	"deep elf high priest": [
		"딥 엘프 고위사제 ",
		"자신의 몸과 마음을 모조리 그들의 고대신에게 받친 광신도들. 지옥의 끔찍한 에너지를 적에게 내던져버린다.",
		"사제가 출세하면서 헬파이어와 악마소환을 배웟다. 게다가 이 사제놈은 유저와 가까이 있어도 헬파이어를 쓴다! 자신이 죽든말든 신경을 안쓰고!. 사제들은 코너링이 생명이아니다. 최대한 빨리 붙어서 죽어버리자. 많은수의 고위사제들은 활을 들고있기에 붙어서 죽이는것은 안전할것이다."
	],
	"eye of devastation": [
		"황폐의 눈알 ",
		"백열빛으로 작열하는 강대한 에너지로 온몸을 피복한것마냥 둘러쌓은채, 공중을 부양하는 눈알.",
		"저항을 씹고 들어가는 에너지볼트를 뽕뽕 발사한다. 그나마 위의 두개의 눈알녀석들보단 나을것이라고 생각하다간 오산이다. 강대한 전사캐릭터도 몇방 맞다보면 걸레짝이 되는데 하물며 마법사는...  만일 'grinding sound'이 들린다는 메세지가 뜬다면 이놈들이 등장한것이니 만나기 싫으면 조심해서 다니자!",
		"뱀굴(Snake Pit)에서 플레이어를 반겨주는 나가패밀리들이다. 하나같이 느리지만 묵직묵직하게 공격하고, 또한 나가들은 시체가 하나같이 다 독이 함유되어있기에 독저항이 없다면 식량수급에 애로사항이 필수도 있다. 아니, 공략 자체가 힘들어진다. 공략할때에는 조금 더 강해져서오거나 만발의 준비를 하고 가자."
	],
	"quicksilver dragon": [
		"수은 용",
		"저항이 불가능하고 버프를 풀어버리는 3d20 데미지 브레스를 쏜다. 게다가 속도가 다른 용보다 50%나 빠르다. 플레이어 입장에서는 아주 다행스럽게도 보물창고 5층 아니면 변이괴물이 변신할 때만 주로 등장한다. 최선의 방어는 최선의 공격이라는 말이 있듯, 수은 용이 쏴되는 수은 브레스는 피하거나 막을수 있기에 Repel/Deflect Missiles스펠은 생존률을 올려주는데 도움에 될것이다. ",
		"다시한번 말하지만 버프를 풀어버리는 데미지 브레스를 쓰기에 전투도중 Haste스펠이라던지 Flight마법이 덜컥 풀릴수 있기 때문에 이는 치명적으로 다가올수있다. 빠르게 죽여버리자. 독 저항이 없기 때문에 보물창고 끝까지 가는 동안 아직도 쿠라레 바늘을 꿍쳐두고 있었다면 이 녀석에게 쓰면 된다. 0.16에서 수은 용 가죽 갑옷이 추가되었다. 판금 갑옷과 성능이 똑같고 마법 저항이 붙는대신 인챈트 불가능."
	],
	"orange demon": [
		"오렌지색 악마 ",
		"2칸에서 독공격을 한다. 0.13에서는 피격시 일정 확률로 플레이어를 약함(* Weakness. 근접 데미지를 1/4감소시킨다)상태에 걸리게 하는 능력이 추가되었다.",
		"0.14버전 이후 삭제."
	],
	"human": [
		"인간",
		"지표면에 거주하는 건방진 털없는 유인원이다. 드워프들은 그들을 연약한 존재라고 생각하고 엘프들은 그들을 멍청한 존재라고 생각하며 괴물들은 그들을 맛있는 존재라고 생각한다.",
		"말 그대로 인남캐.  몹으로 출현하는 일은 드물며 이들이 보인다는 것은 특별한 랜덤 인카운터나 네임드가 근처에 있다는 뜻이다. 보통은 중립 혹은 평화적인 상태로 등장하며 적대적으로 만나더라도 다굴을 치지만 않으면 그저 좋은 식량 제공원이다.",
		"대부분의 초중반 네임드와 위자드,네크로맨서와 보물창고 수호병 시리즈 등과 시체를 공유한다. 은근히 생긴게 왈도닮았다(..)"
	],
	"sky beast": [
		"하늘 짐승 ",
		"구름으로 이루어져있는 이상한 비행생물체. 고통스러울것같은 불똥과 전류가 흐른다. 그리고 종종 이들은 시야에서 사라질때가 있다",
		",,그녀의 어머니는 남은 생애를 보이지 않는 전류가 온 집안을 휩쓸지 않을까 하는 무서운 망상에 빠져 살았습니다.,,",
		",,James Thurber, _My Life and Hard Times_. 1934.,,",
		"가끔 자기가 밟고있는 칸을 얕은 물로 만든다. 전기 공격에다 투명화까지 할 수 있어 은근히 짜증난다. 투명화 상태의 적을 공격할때는 명중률이 고자가 되기 때문에 초중반에 만났는데 투명화 걸고 쫓아오면 그냥 얌전히 달아나자. 시체를 해체하면 돌연변이 고기가 나온다."
	],
	"kobold": [
		"코볼트 ",
		"코볼트는 작고, 회색빛이며 개를 닮은 종족이다. 아무도 이 종족의 기원을 모르지만 고대의 악신이나, 사악한 악령이나, 혹은 창조적인 마법사가 만들어냈다는 이야기가 있다.",
		"기본적으로 잡몹 수준. 드물게 속성 무기를 들고 나오므로 빛나는 무기를 들고 있으면 조심하자. 전격이나 드레인 속성일 경우 잘못하면 한방에 훅 가버린다. 다트를 자주 들고 나오기 때문에(* 단일 개체가 가지고 나오는 다트는 많아야 5개 정도지만 워낙 자주 나오다보니 잡다보면 굉장히 많이 모인다.) 다트를 즐겨 사용할 경우 다트 보급에 좋다. 폭발성 다트, 블로우건과 독침, 심지어 쿠라레를 들고 나오는 경우도 있으므로 주의. 물론 독침에 죽지만 않는다면 역으로 언급한 아이템들의 좋은 공급원이 된다. 고기에 독이 들어있어서 독극물 추출-증산 주문이 삭제되기 전에는 독이 든 몬스터 중 가장 자주 등장하고 가장 약한 코볼트가 좋은 독 포션 공급원이었다."
	],
	"cacodemon": [
		"카코데몬 ",
		"소름 끼치게 추하며 격렬한 분노와 전설적인 힘을 가지고 있는 악마다. 이들은 적들을 조각내기 전에 적들의 몸을 망가뜨린다.",
		"과거에 1급 악마였다가 강등당했다. 혼자서는 아주 가끔씩 돌연변이를 걸고 공격 마법을 쓰는 것을 제외하면 2급 중에서도 약체이다. 다만 굴착 마법이 있어서 일직선 통로를 넓히기 때문에 다수의 적과 함께 있을 때 대비해야 한다. 그리고 만일 돌연변이 저항이 없다면 네퀘젝보다 몸빵이 좋은 탓에 더욱 무서운 존재가 될 수도 있다."
	],
	"gelid demonspawn": [
		"얼어붙은 데몬스폰 ",
		"Icemail스펠 때문에 10AC의 추가 방어력이 있고 냉기저항이 2단계"
	],
	"jackal": [
		"자칼 ",
		"작고 시체를 먹는 개과의 동물이다. 이들의 무리는 게걸스레 해치울 썩은 고기를 찾아 지하세계를 해맨다.",
		"단일 개체 하나하나는 그리 강하다고 보기 힘들지만 대체로 네마리 가량이 동시에 스폰된다. 네마리한테 일제히 다굴당할 경우에는 의외로 위협적인 화력이 나오고, 초반 법사의 경우 주문 쓰다가 마나가 동날 확률이 매우 높으므로 좁은 통로로 한마리씩 끌어내어 잡거나 하나하나 일격사시키는 것이 좋다."
	],
	"giant": [
		"거인 ",
		"중반부 난적들. 이래저래 맵에 따라 높은 층에서도 간혹 튀어나온다. 그냥 거인은 없고 종류별로 에틴,사이클롭스,타이탄,냉기 거인,화염 거인,산악 거인,바위 거인이 있다. 기본적으로 체력이나 능력치가 굉장히 높으며 대형 무기류(* 속성 거인은 대검류, 그외엔 둔기류)를 들고 나온다. 전사같은 경우 장비가 좀 갖춰진 상태에서도 주의를 해야 하고, 장비가 제대로 갖춰지지 않았다면 광전사 외엔 잡으려다 잡히는 경우가 많다. 그나마도 맞다이의 얘기고 마법사의 경우는 원거리에서 어떻게든 저지해야 한다. ",
		"만일 붙는다면 즉각 탈출기를 쓰지 않는한 다음장 확정. 커다란 주제에 이동속도도 평균 수준이라 튀기가 힘들다. 그나마 속성류 거인의 경우 반대 속성에 큰 데미지를 입고 관련 맵에서 나오는지라 어느정도 대비가 되지만 바위,산악 류의 거인들은 딱히 약점 속성도 없고 해서 순수 화력으로 때려잡아야 한다. 다만 공통적으로 오우거처럼 독 저항은 없는 탓에 쿠라레 바늘에 쥐약. 속도만 된다면 그냥 독침으로 게릴라를 해도 된다."
	],
	"fire dragon": [
		"화염 용",
		"평범한 화룡이다. 불꽃 브레스를 쏜다. 갑옷을 만들어서 입으면 판금 갑옷 수준의 방어력에 불저항 2단계를 제공하고 얼음 저항이 1단계 깎인다."
	],
	"water nymph": [
		"물의 요정 ",
		" 질식형태(asphyxiation) (* 특이한 계산을 하는 데미지로써 갑작스레 숨을 쉴수 없는 상황이 됬을때 받는 데미지다. 위에서 설명한 머포크 물마법사의 태고의 파도 역시 이 형태의 데미지를 준다. 만일 당신의 캐릭터의 종족이 물과 친근하거나(머포크,옥토퍼스, 혹은 마법중 얼음형상(Ice form)상태)  숨을 쉬지 않아도 되는 종족(회색 드라코니언, 가고일, 미라, 뱀파이어, 구울, 리치폼상태, 석상폼 상태.)라면 이 데미지에 저항할수있다. )의 데미지를 만일 플레이어가 물위에 있다면 선사한다. 그렇기에 물을 조심하면서 상대하자!"
	],
	"unseen horror": [
		"보이지 않는 공포 ",
		"소수의 사람들에게만 보이는 존재. 목격자들에 의하면 여태껏 한번도 보지못한 모습을 하고 있다고 한다.",
		"당황스러움이 가득한 보고서에 따르면, 박쥐처럼 행동하는 작은 원소덩어리처럼 보인다 한다.",
		",,끔찍하고도 보이지 않는 힘이 흐릅니다, 우리들중에 말이죠.,,",
		",,Percy Bysshe Shelley, “Hymn to Intellectual Beauty”, I, 1-2. 1816.,,",
		"초중반 의문사의 주범. 속도가 박쥐와 동급으로 빠른데 이놈은 항시 투명화상태인데다가 공격력도 12로 매우 강하다. 초반 개활지에서 만나면 중갑전사라도 체력을 갉아먹히다가 죽기 십상. 일자통로가 없으면 그냥 그 층을 통째로 스킵하는 것도 좋은 방법이다(...)."
	],
	"acid blob": [
		"산성 방울 ",
		"끈적거리고 치명적인 산성물질을 뚝뚝 떨어트리며 슬라임 소굴의 침입자들을 기다린다.",
		"슬라임 굴의 마지막 난적. 그냥 산성 공격만 해도 짜증이 나는데, 얘는 그걸 원거리로 날린다. 그것도 잘맞는다??? 하.. 부식은 계속 무한히 중첩된다. 그나마 투사체 저지 마법들이 있다면 그나마 좀 괜찮아진다.  물론 중갑전사는 그냥 맞으면서 버티는거고.... 마법사는 한번 찔리면 그날로 반피가 다는 상황.",
		"이동속도가 비교적 빠르고 냉혈동물이라서 잘 언다."
	],
	"water moccasin": [
		"물뱀 ",
		"갈색의 꽤나 큰 뱀이다. 물가에 살며 헤엄을 칠 줄 안다.",
		"뱀보다 더 강하고 속도도 빠르다. 독 저항이 없다면 의외로 난적. 뱀과 다르게 고기에 독이 있다."
	],
	"centaur warrior": [
		"켄타우로스 전사 ",
		"초반 난적인 켄타우로스가 한 단계 업그레이드 된 형태(...). 당연하지만 화살 공격은 더 세져 법사는 한방만 맞아도 체력의 반이 깎이는 불상사가 나온다. 켄타우로스 공격이 슬슬 버틸만할때가 되면 등장하므로 체력이 낮은 법사나 암살자 계열은 최대한 유인해서 처리해야 한다. 중반쯤 가면 켄타우로스 전사와 켄타우로스가 함께 나온다."
	],
	"deep troll": [
		"딮 트롤 ",
		"동굴에 거주하는 어두운 피부를 가진 구부정한 트롤이다. 이들은 주로 떼를 지어 돌아다닌다.",
		"당신은 위장 깊은속에서 구역감을 느꼈다.",
		"트롤의 강화형태. 아래의 파생형들을 주의하자."
	],
	"green death": [
		"초록의 섬멸자",
		"스며 나오는 고통과 내뿜어지는 치명적인 독의 구름으로 덮혀있는 팽창된 형태이다.",
		"독 구름을 뿌려대고 근접 공격시 독 데미지를 가한다. 독 저항이 있으면 카코데몬 수준으로 약하다."
	],
	"infernal demonspawn": [
		"지옥불 데몬스폰 ",
		"화염속성의 근접공격을 하고, 열기저항이 2단계나 되는 잡몹. 마법사들은 그냥 글레시에이트 훅 하고 불어주거나 전사는 그냥 때려죽이자."
	],
	"smoke demon": [
		"연기의 악마 ",
		"점착 화염을 사용해서 보존 옵션이 없으면 스크롤을 다 태워먹는 주범이었지만 이제 아이템 파괴는 삭제되었다. 스마이트가 은근히 아프다. 가끔 연기를 내뿜어서 시야를 막기도 하는데 별 의미는 없다."
	],
	"naga mage": [
		"나가 마법사 ",
		"여러가지 치명적인 독마법을 구사하는 독마법의 대가. 나가 마법사는 종종 다른 나가들과 함께 등장하기에 곤란한 상황에 빠질때가 많을것이다. "
	],
	"two-headed ogre": [
		"쌍두 오우거",
		"부풀은 몸 위에 두개의 머리가 붙어있는 거대한 오우거다. 거대한 양손에 무기를 들기 용이하다.",
		"통상형 오우거에 비해 소리지를 확률이 높아진다. 또한 에틴과 마찬가지로 쌍검 체제다."
	],
	"draconian caller": [
		"드라코니언 소환사",
		"드레이크를 무더기로 소환한다. 척살 우선순위가 높다."
	],
	"necromancer": [
		"강령술사",
		"죽음의 마법을 수련하고, 불경한 에너지를 다루고, 시체들을 생전의 삶으로 이끄는데 헌신하는 사악한 마법사다.",
		"후반부의 발암을 책임지는 놈.  척살 0순위.''' 기본적으로 그 이름에 걸맞게 시체를 되살리는데, 이렇게 강령술에 의한 언데드는 '''반영구적이어서 하나하나 죽여야 한다.''' 게다가 어떤 놈은 '''지옥의 고통도 쓴다.''' 주로 납골당에서 나온다만, 가끔 '''얼음동굴에 나와서 충공깽을 초반에 선사한다."
	],
	"porcupine": [
		"고슴도치 ",
		"날카로운 가시로 뒤덮힌 사나운 설치류",
		" ,,햄릿:(칼을 휘두르며) 이건 무엇인가! 쥐새끼인가? 죽어도 싸다! 죽어라!,,",
		",,(휘장을 뚫고 칼을 찔러 넣는다),,",
		"초반 몹 중에서는 기본적인 전투력도 높은 편이고, 근접 공격으로 공격하면 데몬스폰의 가시 등뼈 돌연변이처럼 가시로 반격한다. 최근에, 데몬스폰의 가시 등뼈 돌연변이가 강화가 되었는데, 반대로 말하면 이와 비슷한 타입인 고슴도치와 가시 개구리 역시 상향이 됬다는말 (...) 어중간한 경갑캐릭은 공격시 반격 피해가 상당함으로, 평타는 그래도 반사 피해가 너무 세므로 주의. 중갑은 반사피해가 그리 크게 오진 않는다. 페다스 마다쉬의 제단 주위로 거대한 숲이 형성되는 랜덤 인카운터의 내용물로 고슴도치 또한 포함되어있어 초반에 뜬 페다스의 정원 인카운터에 동반되어 나타나기도 한다."
	],
	"deep elf blademaster": [
		"딥 엘프 블레이드 마스터 ",
		"딥엘프들의 영웅 그자체이며, 마법에만 능통한 자들과는 달리 무술 역시 능숙하다. 블레이드 마스터들은 두가지 무기를 쥐고있는데, 하나는 '놀랄만한 민첩성 그자체'이며 또하나는 '속도'이다",
		"공포. 그자체.''' 딥엘프 블마가 다가온다? 자신이 없으면 일단 도망치자. 투명 감지가 없는게 제일 큰 약점. 투명 감지가 있는 다른 딥 엘프가 없을 경우엔 투명화를 쓰고 암살하거나 다른 무리와 같이 있다면 꼬여내서 투명화 쓰고 잡자. 독저항도 없어서 쿠라레나 맵틱 클라우드를 사용해 잡을 수도 있다. 단 주의할건 얘가 주변의 투명 감지나 독저항 아이템을 주어서 사용할 가능성이 있다. 그 경우엔 도망치는게 답이다. 마법사는 지능포션을 빨고 최고의 공격을 쏘면서 도망치고 전사는 완드질하면서 도망치자. 이놈은 돌 거인보다는 약한 데미지를 주지만 '''빠른 공격속도와 인첸트된 무기로 한턴에 여러번 푹찍을 할수있기 때문에 체감상 엇비슷하거나 뛰어넘는다. 일단 소환물을 소환 가능한 발동류 아이템을 사용해서 같이 죽이는것이 권장된다. 다행히도 회피율이 낮기 때문에 선풍의 일격, 화염구, 연쇄 번개같은 스펠을 쓴다면 높은 데미지를 안겨줄수있다."
	],
	"deep troll earth mage": [
		"딮 트롤 대지법사",
		"특별히 영리한 딥 트롤로, 이들의 마법은 땅을 뚫어 통로를 만들고 일족이 적들을 덮치게 하는 데 사용된다.",
		"당신은 위장 깊은속에서 구역감을 느꼇다.",
		"가고일 킬러. 전사의 원수. 중반 아니 후반이 가도 쌍욕을 쓰게 만드는 녀석. 굴착마법과 리의 빠른 헤체술을 사용한다. 일자통로를 방해하고 가고일을 끔살시키니 보이는 족족 척살하자."
	],
	"ironheart preserver": [
		"강철심장 수호자 ",
		"대단히 뛰어난, 근육질의 모습을 가진 이들은 동맹들이 받은 상처를 대신 받음으로서 그들을 보호한다.",
		"몹들이 받는 데미지를 대신 받아주거나 몹이 받는 데미지를 깎아주고 자힐도 하는 서포터+힐러 포지션. 역할이 역할인만큼 혼자서는 잉여지만 혼자 나오는 일 자체가 드물다."
	],
	"ancient zyme": [
		"케케묵은 부패물 ",
		"힘과 민첩을 깎는 근접 공격을 한다. 체력과 공격력은 별 볼일 없다."
	],
	"shadow fiend": [
		"그림자 핀드",
		"  비틀린 그림자의 거대한 덩어리에서 나타나는 끔찍한 존재다. 가끔 구멍 뚫린 거대한 두개골을 드러내며,  많은 지옥들에서 가장 끔찍한 존재 중 하나이다",
		"지옥의 고통을 사용하고, 언데드 플레이어에게 언데드 말살(3d27)을, 살아있는 플레이어에게는 얼음 화살(3d27)과 음에너지 볼트(3d25)를 사용한다. 특히 언데드 말살은 회피가 불가능하기 때문에 리치폼을 쓰고 있는 시전자는 리치폼을 푸는 것이 좋다.  타르타로스에서 지겹게 볼 수 있다."
	],
	"hungry ghost": [
		"배고픈 귀신 ",
		"기아로 인해 죽은 슬픈 망자. 이 망령은 조우한 모험가들에게 자신의 배고픈 고통을 나눠주어 같은 슬픔과 운명을 나눠주려 한다.",
		"공격시 HP 피해 대신 만복도를 하락시킨다. 언데드 타입이라 여러가지 편리한 속성에 저항을 가진데다 만복도를 상당히 빠른 속도로, 한번에 4분의 1 가량 깎아대기 때문에 귀신을 순살할 자신이 있거나 원거리 공격을 할 수 있는 상황이 아니면 만복도 기반으로 능력을 구사하는 마법 특화 캐릭터나 특정 신의 신도는 조심할 필요가 있다. 냄새를 맡기라도 하는 것인지 은근히 추적 능력이 세서 플레이어가 투명화 상태라도 얼마든지 찾을 수 있으며, 문도 열고다닌다. 배고픈 귀신이라는 이름과 맞지않게 음식은 먹지않고 대신 시체를 주워먹는다. 다만 음식 상점이 근처에 있을 경우 털어버린다(...). 타일 버전에서는 고스트 버스터즈의 먹깨비를 닮은 그래픽을 가지고있다."
	],
	"quasit": [
		"쿼시트 ",
		"회피율이 높고 피격시 덱스를 낮출 수 있어서 의외로 성가시다."
	],
	"hellion": [
		"헬리온 ",
		"울부짖는 지옥의 불길로 덮여있는 끔찍한 악마다.",
		"3급에 네퀘젝이 있다면 2급에는 이놈이 있다.",
		"시야 내의 적에게 3*3 범위의 헬파이어를 발사한다. 헬파이어는 불저항, ac등으로 막을 수 없으며(오직 딥드워프의 데미지 경감 종특과 지니의 화염 면역 종특으로만 방어가능), 데미지가 3d15나 되므로, 만렙도 이놈이 뒤에서 헬파이어를 쏘기 시작하면 버틸 수가 없다]]. 스마이트 형태로 조준하기 때문에 헬파이어에 면역인 적에게 둘러싸여있으면 얄짤없이 날려댄다. 더 개같은 건 스펠셋이 죄다 헬파이어 발사로 채워져 있다는 것. 그러니까 눈에 들어오면 헬파이어만 주구장창 쏴댄다는 뜻이다. 속도도 유저의 이동 속도보다 빨라서 발을 잘못 디디면 연속으로 2방을 맞는 더러운 경우가 생긴다. 그나마 다행인건, 이놈들이 투명감지가 없다는것과 날지 못한다는 것인데... 어차피 헬파이어 범위가 넓어서 찍어맞추기 시작하면 [[으앙 주금.",
		"헬파이어를 차단하는 가장 확실한 방법은 헬파이어 면역이 없는 3~4급 악마와 붙어서 싸우는 것이다. 파란 악마, 녹시놀, 얼음의 악마 등과 붙어있으면 팀킬을 염려해서 헬파이어를 봉인하고 걸어온다. 특히 녹시놀은 주변을 우페베터스로 덮어버리기 때문에 가장 좋다. 2급 이상 악마는 면역이 없다고 해도 체력 자체가 높아서 무시하고 헬파이어를 날릴 가능성이 있다. 판데모니엄 지형중 '헬리온 섬'이라는 게 있는데, 확정적으로 데모닉 룬이 용암으로 둘러쌓인 섬 위에 놓여있지만 그 지형에 헬리온이 10마리 넘게 있다. 재수없으면 시야에 들어오자마자 헬파이어를 쳐맞고 골로갈 수도 있고, 어찌어찌 붙는다 한들 헬리온들은 헬파이어에 면역이라 닥치고 쏴대는 고로 만렙 전사도 순식간에 끔살. 과거에는 3급 악마였다. "
	],
	"boggart": [
		"보가트 ",
		"모습은 정원 장식품으로 유명한 노움과 비슷하다. 하지만 보가트는 투명화, 혼란, 슬로우 등으로 플레이어를 귀찮게 하고, 결정적으로 몬스터 무리를 소환하는 마법을 가지고 있다. 소환사(Ironbrand convoker)와 비슷한데, 차이점은 보가트가 소환한 몬스터는 말 그대로 소환물이라 맵에 몬스터가 없어도 소환되며, 경험치를 주지 않는다. 설상가상으로 보가트가 소환한 몹에 보가트가 나올 수 있다! 최악의 경우 그 보가트가 또 소환물을 소환하고, 거기에 또 보가트가 섞여나오는 식으로 순식간에 화면이 몬스터로 가득 찰 수 있다. ",
		"보통 3~4마리 무리를 지어나오는데, 두명만 소환해도 벌써 8~9마리 몹이 나온다. 투명화를 동반하고 나타나 길가는데 난데없이 몬스터 무리가 나타나는 충공깽 상황을 일으키기도 한다. 다행히도 공격력은 없다시피 하고, 체력과 마법저항도 매우 낮아 약한 마법에도 한두방에 죽으므로 빨리 처리해야 한다. HD가 2라서 변신 마법봉도 효과적. 중반 몹을 순식간에 극초반 몹으로 변신시킬 수 있다. 단, 거꾸로 말하면 극초반 몹에게 변신 마법봉을 남용했다간 보가트가 나타날 수도 있다는 이야기(...). 0.14 버전에서는 소환한 시전자가 죽으면 그 시전자가 소환한 몬스터가 전부 사라지도록 바뀜에 따라 광속으로 때려잡는 방법이 좀 더 용이해졌다."
	],
	"shock serpent": [
		"전격 독사",
		"격렬한 전류와 함께 몸을 탁탁거리는 구불구불한 뱀이다. 몸을 뒤덮는 전류는 근처의 적들에게 고통스런 충격을 줄 때 방전된다.",
		"스플래시 전격공격을 하는 뱀. 척살 우선순위가 높다. "
	],
	"deep elf death mage": [
		"딥 엘프 죽음의 마법사 ",
		"이들의 주위로 천천히 퍼지는 어두운 에너지는, 이들이 이룬 강령술이 얼마나 경이로운 수준인지를 대강 짐작할수 있게 해준다. ",
		"엘프의 방 3층에서 짜증을 유발하는 몹1. 흡성의 화살때문에 음저항이 충분하지 않으면 드레인 상태에 빠지기때문에 짜증을 유발하는놈. 게다가 길 잃은 영혼(Lost soul)때문에 죽여도 다시 회복하고 또 귀찮게 만드니 혈압을 주의하자. 이놈때문에 음저항을 조금 맞추고 간다면 3층방이 수월하다."
	],
	"bat": [
		"박쥐 ",
		"거대한 회색 박쥐. 초식성에도 불구하고 공격성이 높다. 근시로 인한 낮은 시력을 초음파를 통해 길을 찾는 것으로 극복했다.",
		"잡몹 3. 다만 이리저리 돌아다니면서 공격하기에 좀 짜증난다. 깨끗한 고기를 제공한다. 이동 속도만큼은 게임 내 최고속 수준으로, 무려 30(* 플레이어블 캐릭터들을 비롯한 흔한 몬스터들이 10, 킬러비와 처형의 악마가 20이다.)이라는 엄청난 이동 속도를 자랑한다. 다만 이동 속도만 빠를 뿐 공격 속도는 평범하고 공격력도 허약하다."
	],
	"abomination": [
		"끔찍한 것 ",
		"||||",
		"제각각 다른 그래픽과 능력치를 가진 괴물들. 어비스와 판데모니엄에서 나타나기 때문에 이 항목에서는 후반 몬스터로 분류되었지만 소환술을 쓰면 중반부에도 볼 수 있다. 어비스 자체는 초중반 안가리고 갈 수 있는 곳이라... 혼돈적인 존재들이라서 진이 싫어한다. 크기에 따라 작은 (Small) 놈과 큰 (Large) 놈이 있다. 물론 이름만 그럴 뿐 작은 놈도 오우거 등과 동일한 덩치로 취급. 끔찍한 것 소환으로는 큰 놈만 소환된다."
	],
	"grey draconian": [
		"회색 드라코니언",
		"파충류의 꼬리와 작은 날개를 지녔으며 회색 비늘로 덮여 있는 근육질의 인간형 생명체다.",
		"이들의 비늘과 꼬리는 수중활동에 최적화 되어 있다.",
		"꽤나 특이한 녀석. 브레스를 안쏘지만 기본 공격력과 몸빵, AC가 더 높다. 날 수는 있다."
	],
	"orc warlord": [
		"오크 워로드 ",
		"오크 군대의 우수한 지휘관이다. 이들은 근접공격과 장거리 공격에 모두 노련하다.",
		"붉은 갑주를 입은 오크광산 깡패. 오크 기사보다 체력과 히트다이스가 2배다!(체력 88-141 히트다이스 15). 베오그 신자라면 오크광산에 왔을때 있었으면 바라는 몹인데, 오크광산을 털로 온 사람에게는... 원거리에서 요격하려 해도 오크 광산에 널려있는 창이나 도끼등을 던져 최대 35데미지를 입힐 수 있으니 오크 워로드가 떴으면 레벨을 좀 더 올리고 도전하자."
	],
	"tentacled star spawn": [
		"촉수 스타 스폰 ",
		"크라켄처럼 촉수 공격을 한다. 다만 지상 몬스터라 플레이어를 계속 쫓아오기 때문에 꽤나 성가시다. 종종 섬뜩한 촉수(Eldritch Tentacle)를 소환하기도 한다. 혼자만 있을 때는 크라켄의 강화판 수준으로 근접 공격력이 강한 것 외에는 특출난 점이 없지만, 조이기 공격에 묶인 와중에 위에 언급된 몬스터가 하나라도 시야에 들어오면...",
		"이하에서는 용과 관련된 모든 몬스터(용인,드레이크,드래곤)을 포괄적으로 다룬다. 원래는 dragon이 이름 안에 들어가는 놈들만 다뤘지만, 워낙에 종류도 많고 촐몰지도 광범위해 별도로 서술한다. 이곳에 포함되는 기준으로는 고정아티의 브랜드 중 하나인 dragon slaying에 영향을 받느냐다."
	],
	"black mamba": [
		"블랙 맘바 ",
		"놀라운 빠르기로 움직이는 꽤나 큰 뱀이다. 이들의 이빨은 살인적인 독을 분비한다.",
		"고증에 충실하게 나온 뱀류 끝판 왕으로 한방에 빨간 독까지 가는 강한 독공격에다 빠른 이속까지 지닌 난적. 독저항이 없는 상태에서 화력마저 딸린다면 이놈이 보이자마자 튀자."
	],
	"lurking horror": [
		"잠복한 공포 ",
		"지성있는 음에너지의 응집체로, 멀리서는 떠돌이 버섯처럼 플레이어를 몰래 뒤따라다니다가 거리가 가까워지면 포자처럼 달려든다. 달려들거나 원거리 공격에 맞아서 터지면 시야 범위 내의 모든 존재에게 음에너지와 지옥의 고통을 가한다. (물론 어비스 안에서 지옥의 고통에 당할 존재는 생물체인 플레이어밖에 없으므로 사실상 플레이어를 스토킹하는 지옥의 고통이다.) 터뜨려도 경험치는 1밖에 안 준다."
	],
	"torturous demonspawn": [
		"고문의 데몬스폰 ",
		"Powered by Pain (* 공격받을때마다 힘이나 민첩스텟이 일정확률로 상승], Augmentation[* 체력이 높을수록 공격력과 마법공격력이 상승)의 데몬스폰 변이를 달고있는놈. 그외엔 그냥 잡몹."
	],
	"orc sorcerer": [
		"상급 오크 마법사 ",
		"많은 전투를 치룬 경험많은 오크 마법사. 악의에 가득찬 이 오크는 지옥의 생물과 지하세계의 주민들을 불러낸다.",
		"오크광산 난이도를 올리는 주범 1. 악마도 잔뜩 불러내고 센 마법도 쓴다. 렙 13정도를 넘어서 가면 한두마리만 보일때는 무리없이 잡을 수 있다. 전사라면 가능하다면 빠르게 붙어서 죽이고, 마법사라면... 원래는 4층에서 나오는데, 1층에서도 튀어나온다."
	],
	"swamp dragon": [
		"늪지 용",
		"독성 브레스를 사용한다. 주로 늪지대에서 볼수 있다. 가죽을 갑옷으로 만들면 독 저항을 제공하지만, 보통 이 녀석을 잡을 때 쯤이면 독 저항은 이미 갖추고 있을 가능성이 높아서 별로 의미는 없다. 마법사가 방어력을 높이려고 입는다고 해도 로브에 붙은 저항력이 나을 때가 더 많다."
	],
	"guardian serpent": [
		"가디언 서펜트 ",
		"서펜트는 독특하고 희귀한 뱀굴의 독사다. 다른 뱀들처럼 빠르고 은밀하며, 나가와 걸맞는 지능을 가지고 있다. 비록 손이 없더라도, 뱀굴을 지켜야한다는 굳은 책임감은 이미 그들을 명성있는 수호자로 만들었다. 이들은 전투에서 비겁하게 도망치는것보다, 전장에서 침입자들과 죽는것을 더 영광으로 여길것이다.",
		"뱀에 인간의 얼굴이 달린 몹. 자체 독 공격은 하지 않고 조이기 공격도 하지 않지만 각종 여러가지 마법들로 유저를 화나게 한다. 자기 주변의 친구들을 전부 내 주변으로 보낼수 있다. 다른건 몰라도 내가 다구리를 맞는 상황이 쉽게 나오기 때문에 주의가 필요하다. 손이 없기 때문에 문을 열 수 없다. 급하면 문닫고 버티는 플레이가 가능하다는 말."
	],
	"ettin": [
		"에틴",
		"쌍두 오우거의 산악거인 버전. 무기를 두 개드는 괴물. 그러나 마찬가지로 마법저항도 약하고 주문도 못쓴다."
	],
	"ice devil": [
		"얼음의 악마 ",
		"태양의 악마 얼음버전."
	],
	"brimstone fiend": [
		"브림스톤 핀드",
		"지옥 불길의 고리를 둘러싼 거대하고 강력한 악마로,  지옥 어디에서든지 가장 무시무시한 존재 중 하나이다.",
		"헬파이어(3d20)와 지옥의 고통을 사용한다. 플레이어를 골로 보내버리기에 딱 좋은 조합이다. 이 녀석이 보이는 장소, 특히 게헨나는 헬파이어 면역을 갖춘 적이 대부분이라 헬파이어에 더욱 맞기 쉬울 것이다. 그나마 슬롯전부가 헬파이어는 아니라서 발사 빈도수가 헬리온보다 적다는 게 위안. 화염 공격에 완전히 면역이지만 대신 얼음 공격에 취약하다."
	],
	"black draconian": [
		"검은 드라코니언 ",
		"파충류의 꼬리와 작은 날개를 지녔으며 검은색 비늘로 덮여 있는 근육질의 인간형 생명체다.",
		"스파크가 이들의 콧구멍과 입에서 타오른다.",
		" 전격브레스를 쏘고 전격공격에 저항이 있다. 성체라서 날 수 있다."
	],
	"monstrous demonspawn": [
		"야만적인 데몬스폰 ",
		"다른 애들보다 피통이 조금 더 높고 데몬스폰의 Monstrous 상태처럼 근접 공격시 뿔이나 발굽같은걸로 추가적인 공격을 한다는 점 외에는 보잘것 없다. "
	],
	"ice statue": [
		"얼음 동상 ",
		"이름없는 북극의 신의 모습을 딴 인상적인 석상. 반짝이는 검푸른 얼음으로 깎여졌으며 작렬하는 한파가 이 석상을 휘감고 몰아친다. 주변의 공기는 이를 따라 서리를 내린다.",
		"주로 서브던전 얼음동굴에서 볼 수 있다. 콜드볼트, 고드름, 얼음구름 생성, 얼음짐승 소환을 사용한다. (* 동상계열 몬스터들은 침묵에 걸리지 않는다. 괜히 아까운 침묵 스크롤을 사용하지 말자.) 냉기 저항을 어느정도 갖춰놓지않으면 초중반에는 꽤 아프다. 다만 동상답게 움직이지는 않고, 모든 동상들 공통으로 분해의 마법봉이 있다면 원거리에서 안전하게 처리가 가능. 분쇄등으로도 처리가 가능하지만 마법사라면 걍 가까이 안가는게 낫다.  "
	],
	"ogre": [
		"오우거 ",
		"거대하고, 못생겼으며, 뚱뚱한 오크와 고블린의 먼 친척이다. 이들의 힘은 무지막지하다.",
		"초반 난적. 다른 초반 몹들과는 달리 최대 40이나 되는 무지막지한 체력을 자랑하고 거대한 둔기를 들고 나오는 경우가 많아 한방한방이 매우 아프다. 다만 체력만 높고 AC는 맨몸 수준이라 각종 투사무기에 취약하니 전사계열도 먼저 돌진하기 보다는 독침이나 다트, 마법 완드로 미리 체력을 깎아놓고 근접전에 돌입하는 게 좋다. 오우거나 트롤에게는 거대 둔기/스파이크 거대 둔기(일명 맛동산)를 제공하는 좋은 공급원이다. "
	],
	"blizzard demon": [
		"눈보라 악마",
		"번개와 눈을 두른 상급 악마다.",
		"각종 얼음 계열 공격을 가한다. 특히 얼음 구름을 뿌려대서 물약을 깨뜨려먹는다."
	],
	"iron dragon": [
		"강철 용",
		"말 그대로 강철로 만들어진 용이다. 황금 용보다도 튼튼한 방어력을 자랑하고 3d30짜리 저항 불가능한 에너지 브레스를 날린다. 전투력 자체는 강력하지만 반대급부로 속도가 8로 느리다. 금속으로 만들어져서 그런지 나머지 원소에는 저항이 있는데 전기 저항만 없다. 보물창고 5층이나 디스 7층에서 주로 등장한다."
	],
	"naga": [
		"나가 ",
		"뱀굴 주민중 가장 약한 잡몹. 별다른건 없지만 모든 나가류가 그렇듯 조이기와 독뿜기가 조금 골치아프다. 조이기 공격은 턴이 지날수록 조금씩 강력해지고 조이기상태일땐 도망갈수가 없기 때문에 만일 주변에 여러 나가들로 둘러쌓여잇다면 누가 자신을 조르고있는지 모를수도 있어 애꿎은 놈들만 죽이면서 죽어가는 플레이어를 볼수있다..."
	],
	"gnoll shaman": [
		"놀 주술사 ",
		"다른 놀에게 헤이스트와 힐을 시전한다. 다른 놀과 등장하는 경우가 많으므로 주의.",
		"놀 무리의 지휘관. 튼튼한 몸의 상처는 어떻게 이들이 그 지위를 얻었는가를 말해준다.",
		"오크 전사만큼 강한데, 높은 확률로 치유 포션을 들고 나오는 경우가 많으므로 이 점을 염두에 두는게 좋다. 영혼의 1:1을 하다가 놀 리더의 체력이 갑자기 쭉 차는 걸 보면...",
		"마법에 능한 종족답게 대부분이 마법을 쓸 수 있다. 체력은 딥엘프답게 상당히 약하므로 가능한한 빨리 처리하는게 여러모로 이롭다. 전사 계열을 제외하면 대부분 마법 쪽으로 치우쳐있어 항마의 무기가 있으면 상대하기 용이하다."
	],
	"shadow dragon": [
		"그림자 용",
		"음에너지 브레스를 사용한다. 음에너지 저항이 3단계면 경험치 덩어리지만, 그렇지 않으면 경험치가 쭉쭉 빨려나간다. 같은 아군이 플레이어를 향한 사선을 막고 있어도 브레스를 쏜다. 그림자 용으로 가죽을 만든다면 은밀도를 ++++ 해준다. 방어구 자체는 천둥용 갑옷과 동일한 수준.(플레이트 아머) 0.13부터는 경험치 감소 대신 드레인 효과를 입히지만, 이 녀석이 입히는 드레인은 강도가 세서 어어하다가 금방 전투력이 똥이 되고 골골댈 확률이 높다."
	],
	"pale draconian": [
		"창백한 드라코니언 ",
		"파충류의 꼬리와 작은 날개를 지녔으며 창백한 비늘로 덮여 있는 근육질의 인간형 생명체다.",
		"이들은 가열된 증기로 이루어진 먹구름에 의해 은폐되어 있다.",
		" 검은 드라코니언과 비슷하나 브레스로 연기를 내뿜는다.. 즉 데미지는 안입히지만 플레이어의 길을 차단한다."
	],
	"anaconda": [
		"아나콘다 ",
		"경악스런 빠르기로 수륙을 가리지 않고 다가오는 거대한 뱀이다. 이들에게 독은 없으나 먹잇감을 졸라 죽인다.",
		"독 공격은 하지 않지만 조이기 공격을 한다. 다른 뱀들과는 차원이 다른 공격력을 자랑하므로 전사라면 버프걸고 순삭을, 법사라면 극딜로 붙기전에 조져야 한다. 짐승소굴 8층에서 코끼리 석상의 맵이 나왔을 경우 이 아나콘다를 죽이면 코끼리 석상의 봉인이 풀리므로 주의. 일반 코끼리도 아니고 Dire Elephant가 여러마리 나온다. "
	],
	"hell knight": [
		"지옥의 기사",
		"주로 뎁스나 게헨나, 판데모니움에서 자주 볼 녀석. 네임드인 마저리를 졸졸 따라다닌다. 화염공격을 쓰며, 화염저항의 굉장히 높고, 지옥의 고통과 블링크, 헤이스트를 쓴다. 인간이라서 고기를 드랍하지만 그 때문에 성스러운 속성이 먹혀들어가지 않는지라 약간의 애로사항이 꽃피는 적."
	],
	"orb of fire": [
		"화염의 구체 ",
		"매우 강력한 화염마법을 그려내는 태고의 불덩어리 그자체.  그들의 은신처에 들어온 모든 생명체들은 그들의 원시적인 힘에 저항하지 못한다면 온몸이 뒤틀리게 될것이다.",
		"조트 5층에서 반드시 등장하는 몬스터(* 조트 1층부터 등장할 수 있긴 하다. 재수없으면 조트 1층 들어오자마자 당신을 반겨주는 화염의 구체를 볼 수 있다......]. 엄밀히 말하자면 네임드는 아니지만, 끝판 보스의 역할을 톡톡히 한다. 엄청난 양의 화염 데미지와 빠른 속도, 그리고 돌연변이 유발 (높은 확률로 나쁜 돌연변이를 유발한다) 마법을 지니고 있어 하나를 상대하는 것도 벅차지만, 컨트롤 미스로 둘 이상을 마주치게 된다면 지옥을 맛보게 된다! HD가 무려 30이라 이빨도 잘 안 들어가는데, 리치와는 달리 침묵 마법도 먹히지 않아 아픈 파이어볼을 그대로 맞아줘야 한다. 조트 5층에 가기 전에 화염 저항을 적어도 2단계는 꼭 맞춰야 하는 이유.[* 화염 저항이 없을 경우 한번에 120에 가까운 데미지를 주는 경우도 있다. 후반까지 해본 유저들이라면 다른 저항보다도 화염 저항을 많이 신경쓰는 주된 이유이다.)",
		"싸우기 전에 가속과 버프를 아끼지 말고 걸자. 화염의 구체의 화염 공격도 일종의 마법이기에 항마의 무기로 두들기는 것도 유효. 다만 돌연변이 유발과 화염 공격, 화염 마법 이외에는 공격 수단이 일절 없어서 화염저항만 제대로 갖춰져 있으면 좀 싸울만 하고, 헬파이어도 씹는 지니라면 코를 파면서(...) 상대할 수도 있다. 명색이 고대의 리치급인 최후반 몬스터인데 극초반부터 어비스에 떨어지는 재수 옴붙은 경우가 아니라면 가장 먼저 튀어나오는 악마인 핏빛임프를 잡지 못하는 굴욕을 당하기도 한다(...). ",
		"유일한 약점(?)은 냉기 저항이 rC+ (냉기 데미지 감소 50%) 라는 것. 전사라면 냉기 무기를 사용할 수 있으며, 냉기 마법을 쓸 수 있는 파괴법사의 경우 근거리에서 글래시에이트 2방만 쏴 주면 바로 경험치로 바꿔먹을 수 있다. 화염 폭풍을 완성한 파괴법사에게 세컨으로 냉기 트리가 권장되는 이유."
	],
	"deep elf fighter": [
		"딥 엘프 전사 ",
		"기초적인 전투마법를 사용하는 강한 딥엘프 군인이다",
		"허약한 체력을 자랑하지만 오크 마법사가 쏘는 마법까지 사용 가능하기에 상대에 주의하자. 낮은 확률로 헤이스트까지 쓰는 놈이기때문에 쉽사리 보다간 당한다."
	],
	"troll": [
		"트롤 ",
		"||평범한 트롤은 거대하고 물리적으로 강력한 인간형의 생명체다. 이들의 지능은 낮으나 체력은 높다. 이들의 두껍고 울퉁불퉁한 가죽은 상처를 빠르게 치유한다.",
		"당신은 위장 깊은속에서 구역감을 느꼈다.(* 설명에 이렇게 적혀져 있다.)",
		"||",
		"오우거와 비슷하게 강한데 손톱으로 덤벼든다. 체력회복이 눈에 보일 정도로 빠르다. 간혹 시체를 해체 하면 트롤 가죽이 나오고, 여기에 갑옷 강화 스크롤을 사용하면 트롤이나 딥 드워프를 제외한 나머지 갑옷을 입을 수 있는 종족에게 재생 효과를 부여해주는 트롤 가죽 갑옷을 얻을 수 있다. 마법사 캐릭의 경우 쓸만한 로브나 용갑옷을 구하기 전에 쓰는 정도론 적절. 오우거나 트롤같이 덩치가 커서 갑옷이 맞지않는 종족도 트롤 가죽 갑옷이 장착가능해서, 초반에 구한다면 오래 쓸 수 있을정도로 좋다."
	],
	"hellwing": [
		"헬 윙 ",
		"파란 악마와 동급으로 약하지만 이 쪽은 텔레포트와 텔레포트 아더를 가지고 있다. 특히 특정 구역 (무덤 3층이나 엘프 3층등)에서 텔레포트 아더 잘못 맞으면 최악의 경우 적들 한가운데로 떨어질 수 있으니 주의. "
	],
	"obsidian statue": [
		"흑요석 동상 ",
		"이름을 알수없는 아름다운 생명체의 모습을 본따 만든 칠흑의 석상. 동상의 눈이 다른 세상의 존재인것 마냥 빛나며 악의에 찬 광채를 내뿜는듯하다. ",
		"악마를 소환하는 동상이다. 5~3티어까지 다양한 악마를 소환한다. 그들의 시야 안에 들어오면 그들은 어떠한 공격에도 높은 저항성을 가지기에 처리하기가 쉽진 않을것이지만 만일 Shatter나 혹은 Lee's Rapid Deconstruction이 있다면 빠르게 처리할것이다 --조용히해라. 우리에겐 화폭느님이 계신다--",
		"메인던전 16층~27층, 짐승굴 서브던전, 보물창고, 칼날의 방에서 나오는 몬스터에 대해 작성.",
		"주로 판데모니움의 네퀘젝 밀집 지역이나 슬라임굴에서 튀어나오는 놈들. 혈압 상승의 근원이다. 보는 족족 쳐죽이자."
	],
	"black sun": [
		"검은 태양 ",
		"음에너지 마술의 대가. 스펠 테이블이 하나같이 귀찮은것 덩어리다.bolt of Draining (3d22),Malign Offering (2d20),Black Mark,Black Mark Dispel Undead (3d24) 로 Malign Offering은 엘프의 방에서 죽음의 마법사가 지겹게 걸던 1인타겟 드레인 스킬이고, Black Mark를 쓰고 플레이어를 공격하면 이놈이 정확률로 피가 차오르거나 플레이어에게 Anti-Magic, Slow, Drain중 하나를 선물해준다. 뭐 마법사들은 멀리서 녹이니깐 상관은 없지만 전사들은 샤원을 믿고있지 않거나 음저항 만땅이 아니면 조심하자"
	],
	"orc wizard": [
		"오크 마법사 ",
		"비록 오크들이 근접전을 즐기긴 하지만, 몇몇 다른 오크들은 마술의 매력에 흠뻑 도취하기도 한다.-하지만 그렇다고 근접전을 하지않는것은 아니다!",
		"마법에 특화된 오크. 원거리 공격 마법과 혼란 마법을 걸고, 투명화를 걸기도 한다. 투명화를 건 상태에서는 굳이 무리하게 싸우려고 하지 말고, 마법사를 따라온 오크 뒤로 숨어서 마법을 잠시 피하는 게 좋다. 오크가 없다고? 일자 통로에 몰고가서 척살하자."
	],
	"deep troll shaman": [
		"딮 트롤 사제",
		"신성한 힘으로 동료들을 강화 및 가속시킬 수 있도록 축복받은 트롤.",
		"당신은 위장 깊은곳에서 구역감을 느꼇다.",
		" 트롤 버퍼. 가속에 힘강화를 건다. 빠르게 척살하자. 오래 살려두면 귀찮아진다."
	],
	"stone giant": [
		"암석 거인",
		"사이클롭스의 상위호환. 근접전도 세다."
	],
	"shadow imp": [
		"그림자 임프 ",
		"임프 중에서는 가장 강하다. 네임드로 그라인더(Grinder)라는 지그문트만큼이나 흉악한 악마가 있다.",
		"잡몹 악마 1. 별다른 능력치도 없고 체력도 약하다. 잉여스런 능력치 때문에 삭제."
	],
	"ice beast": [
		"얼음 짐승 ",
		"수정화된 얼음과 눈으로 이루어진 끔찍한 생명체. 그들이 지나간 자리에는 얼음장처럼 차가운 물웅덩이가 남는다.",
		"초반 난적. 오우거와 맞먹는 체력과 공격력, 상당히 높은 방어력을 가진데다 냉기 공격을 하기때문에 잘못하면 한방에 훅간다.. 게다가 깊은 물에서도 단지 조금 느려질 뿐 건널 수는 있기때문에 보통 몹들에게 통하는 깊은 물을 이용한 전술도 무리다. 독에 면역이라 악취구름, 쿠라레 독침 등이 안먹히는 것도 덤. 화염 공격에 취약해서 화염 마법이나 무기가 있으면 상대하기 좋다. 일반 던전에서도 가끔 튀어나오지만 주로 소환수로 등장하는 경우가 많은 편. 얼음 동상에서 소환되거나 마법사라면 4레벨 마법으로 소환이 가능하다. 악마가 아닌 소환수중 드물게 속성이 뚜렷하고, 상태이상을 대부분 씹는지라 중반까진 써먹기가 상당히 좋은 편."
	],
	"mana viper": [
		"마력 독사",
		"짙은 보라색피부와 희미하게 빛을 내는 눈을 지닌 독사. 그들의 고기를 갈구하는 배고픔과 마력에 대한 갈증은 거의 동등한 본능에 위치하며, 그들의 게걸스러운 마력탐닉은 아무리 강대한 마법사라 할지라도 당황할것이다.",
		"항마(Antimagic)공격을 쓰는 뱀.  마법사들은 조심하자. 접근을 허용하지말고 최대한 빠르게 녹여야 한다. 별 저항은 없으나 기본 스펙이 상당한 편이라 광역기에 잘 안녹으니 주의."
	],
	"gnoll": [
		"놀 ",
		"더 크고 더 무장된 오크와 고블린의 친척벌 생물이다. 그 모습은 개와 흡사하다.",
		"오크와 유사하나 창같은 긴 무기를 사용한다. 간혹 초반(* 던전 1층부터 나올 수도 있다! 버서커가 아닌 이상 전사계열도 레벨 1때 할버드 가진 놀에게 덤비면 다음장 뜨는 건 순식간이다.)에 가끔 그물 (!) 이라던가 창이나 할버드같은 폴암 무기를 들고 나오는데, 폴암류의 긴 사거리 때문에 2마리 이상이 동시에 공격을 해오면 1자통로에 유인하더라도 위협적이므로 체력이 약한 법사계열은 특히 조심하는게 좋다. "
	],
	"killer klown": [
		"살인자 삐에로 ",
		"삶과 웃음으로 가득찬 재미있는 형상을 가진 자들이다. 이들은 당신을 봄으로서 매우 행복해 보인다...하지만 저 이목구비에 악의가 있는 건가?",
		"저 붉은 얼굴은 그저 붉게 칠한 것일까 아니면  덜 유쾌한 무언가 일까?(* 원문에 이렇게 나와 있다.)",
		"게임 최후반인 조트의 방 4,5층에서 등장, 꽤 빠른 이동 속도와 더불어 공간이동까지 한다. Klown이라는 오리지널 속성으로 공격하기때문에 살인자 삐에로의 색상에 따라 공격 속성이 변한다. 속성은 맹독, 부패, 흡성, 불, 냉기, 자기 블링크(* 환영처럼 상대를 공격함과 동시에 블링크해서 거리를 벌린다.), 항마로, 자기 블링크 이외에는 죄다 그 시점의 플레이어에게 엄청난 애로사항이 꽃피게 만들 속성 뿐이다."
	],
	"orc warrior": [
		"오크 전사 ",
		"가벼운 방어구로 무장한 노련한 오크 투사. 적은수의 자신의 소대원에게 명령을 내린다.",
		"근접전에 특화된 오크. 아이템을 잘 안쓰던 일반 오크와 다르게 슬슬 제대로 된 무기와 방어구를 쓰기 시작한다. 기본 스펙또한 오크보다 훨씬 높은 편. 전사라면 스펙이 어느정도 되기 전엔 맞다이도 털릴 가능성이 크니 걍 튀자. 마법사라면 저항 자체는 일반 오크와 다를바가 없으니 각종 메즈기를 통해 척살이 가능하다."
	],
	"tormentor": [
		"고통의 악마",
		"온갖 종류의 발톱들과 가시들과 잔혹한 갈고리들로 덮인 해로운 악마다. 이들은 자신들을 쳐다보는 어리석은 자들에게 고문의 고통을 가할 수 있다.",
		"지옥의 고통을 날려댄다. 주문 슬롯 1개만 지옥의 고통인 핀드류와 달리 슬롯 2개에 지옥의 고통을 장비하고 있어서 자주 날려댄다. 그 자체만으로는 사실 근접 공격력이 대단치는 않아서 짜증만 날 뿐이지만, 위의 헬리온과 조합되면 네크로뮤테이션 없이는 등골이 서늘해질 것이다."
	],
	"quokka": [
		"쿠와카 ",
		"쥐보다는 성가신 유대류. 그러나 많이 성가시지는 않다. ",
		"잡몹]] 7. 다른 잡몹들에 비해 덩치가 커서 해체하면 고기를 두개씩 준다. 한글판 번역명인 쿠와카는 오역으로, 일반적으로 [[쿼카로 음역한다. "
	],
	"lava snake": [
		"용암 뱀 ",
		"용암 웅덩이에 서식하는 불타오르는 뱀이다. 이들은 지나가는 자들에게 용해된 돌의 덩어리를 발사한다.",
		"말 그대로 용암에서 서식한다. 원거리 화염 공격을 하므로 웬만하면 그냥 피하는게 좋다."
	],
	"naga ritualist": [
		"나가 의식술사 ",
		"블랙맘바, 아나콘다 그리고 마나바이퍼같은 독사들과 함께 등장하는 독술사. 항상 독인첸트가 된 무기를 들고 등장하며 Olgreb's Toxic Radiance 스펠을 들고있기에 독저항이 없으면 일단 죽엇다 복창하면 된다. 독저항이 있더라도 Virulence라는 스펠로 독저항을 없애버리기 때문에 주의하자"
	],
	"elephant slug": [
		"코끼리 달팽이 ",
		"달팽이류 몹 중 가장 높은 스텟을 자랑하는 몬스터. 몬스터의 강함을 나타내는 척도인 HD가 20으로, 이는 타이탄과 동일한 수치다. 즉 돌연변이의 마법봉을 코끼리 달팽이에 썼을 경우 잘못하면 타이탄으로 변신한다는 말. 한방한방이 정말 아프지만 독 공격에 약하고 공속/이속이 다 느리므로 무빙샷을 하거나 독침으로 처리하는게 좋다. 다만 중반 네임드 가스트로녹이라는 코끼리 달팽이는 헤이스트도 걸고(!) 공격 마법과 저주를 날려댄다.",
		"0.15 버전에서는 삭제"
	],
	"azure jelly": [
		"하늘빛 젤리 ",
		"끔찍할정도로 차가운 하늘빛의 세포질. 주변의 공기가 이들을 따라 서릿발을 내린다.",
		"슬라임 굴 명실상부한 최강최악의 젤리. 젤리류의 산성 공격을 하는것도 모자라서 냉기피해 까지 입히는 신기한 젤리. 냉기저항이 없다면 이 젤리의 산성보다 냉기피해가 더욱 끔찍하게 느껴질 것이다.  적당히 돌연변이 목걸이와 부식 목걸이를 스윗칭 해가면서 젤리일땐 부식, 눈일땐 돌변목걸이 스윗칭을 자주 하면서 상대를 해줘야 한다.  게다가 슬라임 굴 대빵인 로얄젤리님이 맞으실때마다 이 젤리 3종 시리즈들이 숨풍숨풍 쏟아져 나오기 떄문에 법사류는 개활지에서 그냥 빵! 하고 쏴죽이면 되지만, 전사류는 그 가운데 지형에서 1:2 지형에서 싸우는 수밖에, 암살자 타입은 찌르고 바로 빠르게 텔레포트로 빠져나오면 된다...지만 실패라도하는순간..."
	],
	"titan": [
		"타이탄",
		"거인계열 최종병기. 전기 주문과 공기주문, 자가치유를 사용한다. 후반 전사도 주의해야 할 적. 근접전이나 주문이나 하나같이 더럽게 세다."
	],
	"goliath beetle": [
		"골리앗 풍뎅이 ",
		"으스러뜨리는 큰 턱과 매우 단단한 키틴질 갑옷을 가진 거대한 까만 풍뎅이.(* 직역. 원문은 \"A huge black beetle with great crunching mandibles and very hard chitinous armour.\")",
		"거대 풍뎅이. Goliath Beetle은 아프리카에 실존하는 곤충으로 세계에서 제일 큰 갑충이다. 그리고 그 이름에 걸맞는 높은 스펙을 보유하고 있다. 초반 몹 주제에 체력이 37~62''', 공격력은 무려 '''30. 다만 이동속도가 절반이고 독에 내성이 없기 때문에 자신이 근거리라면 독 무기로 히트 앤 런을 하거나 원거리라면 거리를 벌리며 공격하는 전법이 유효하다. 만약 이 방법이 불가능한 상태로  만나면 싸우지 말고 곱게 도망치자. "
	],
	"centaur": [
		"켄타우로스 ",
		"상반신은 인간, 하반신은 우람한 말의 하체를 하고있는 종족이다. 그들은 궁술의 달인으로써 잘 알려져있다.",
		"초반 난적. 이동 속도도 빠른데다 등장 시기상으로 상당히 대미지가 큰 화살을 난사한다. 켄타우로스 자체의 맷집도 상당히 좋아서 상대하기 힘들다. 근접전 능력은 그나마 원거리전보다는 떨어지는 편인데다 플레이어블 캐릭터가 접근해오면 활을 집어넣고 육탄전을 걸어오므로 전사계 캐릭터는 화살을 몸빵으로 버텨내면서 또는 블링크로 접근하는 데 성공하면 꽤 상대하기쉽다. 법사 계열의 경우 접근하다가 화살에 맞아죽으므로, 정말 가까운 거리에 있지 않다면 어떻게든 시야가 안 보이는 곳으로 숨어 몹이 스스로 자기에게 오도록 유도해야 한다. ",
		"평야에서 만나면 차라리 순간이동 스크롤을 쓰는게 나을 정도로 방어력이 약한 법사에게는 정말 무시무시한 적이다. 화살과 활의 브랜드에 따라 독, 얼음, 화염 공격을 할 때도 있는데, 이 때는 더욱더 근접전으로 처리하는게 좋다. 해체시 고기도 많이 주는데다 특이하게 플레이어블 종족 중 하나임에도 고기를 먹어도 탈이 나지않으며, 화살도 많이 챙겨다니기때문에 일단 잡기만하면 얻을 수 있는 것이 많다. 특이하게 활을 든 상태와 다른 무기를 든 상태의 스프라이트가 따로 존재한다."
	],
	"zombie": [
		"좀비 ",
		"||||",
		"||||",
		"||||",
		"||||",
		"||||",
		"강령술에 의해 언데드가 된 시체다.",
		"가장 기초적인 언데드. 전투력은 원본에 따라 다르나 일단 원본보다 조금씩 약하고 느리며 재생하지 못한다(* 당연히 히드라 좀비뿐만 아니라 스켈레톤도 목 재생 그런거 없이 툭 치면 묵이 후두둑 떨어진다.). 고블린 좀비의 경우 무기 스킬을 전혀 올리지 않은 법사도 몇대 치면 죽지만 바위 거인 좀비는 전사도 잘못하면 체력이 30-40이 한방에 까이는 식. 일단은 계단을 사용하지 못하며 원본보다는 조금 일찍 출현한다. 강령술사나 죽음의 기사가 가장 빈번하게 부릴 언데드. 고기방패로서의 가치는 꽤나 충만하나 고기를 버려야 하는 게 좀 짜증나는 사항이다. 다만 상태이상이 통하지 않는 탓에 직업에 따라 까다로울 수도 있다. 물론 속도가 느리고 계단을 이용할 수 없으므로 상대하기 벅차면 내버려두고 가거나 다른 층에서 회복하고 돌아와 싸우면 된다."
	],
	"ynoxinul": [
		"녹시놀 ",
		"우페테버스를 무더기로 소환한다. 사실 강철의 화살도 시전할 수 있는데 화면을 가득 메우는 우페테버스 소환에 밀리는 감이 있다.",
		"소환물 자체는 큰 위협이 되진 않지만 다른 악마들이랑 같이 나오면 성가시게 된다."
	],
	"ufetubus": [
		"우페터버스 ",
		"잡몹 악마2. 허나 이쪽도 녹시놀이 무더기로 소환하기 때문에 무시할 수 없다. 특히 토먼트나 헬파이어를 거는 악마 앞에 이들이 고기방패를 형성하고 있으면 매우 위험해진다.",
		"여기서부터 슬슬 귀찮은 능력/마법저항이 추가된다. 하지만 아직까지도 후반쯤 되면 법사라도 근접으로 해결할 수 있는 수준.",
		"5급과 4급은 마크레브의 하급악마 소환 권능으로 소환된다."
	],
	"balrug": [
		"발록 ",
		"그림자와 불길을 두른,  거대하고 강력한 악마다.",
		"헬파이어는 사용하지 못하지만 파이어볼이 상당히 아픈 축에 속한다. 항상 악마의 채찍을 들고 나온다. 데몬스폰등 악마의 무기가 절실한 종족이라면 반가운 템셔틀. 강화도 자체는 그닥 높지 않지만 여러가지 속성이 부여된 경우가 많다. 흡혈같은 옵션이 붙는 경우도 있다. 과거에는 1급 악마였지만 능력이 별로 눈에 띄지 않아서 2급으로 강등당했다. 다른 1급들처럼 짜증나는 고통을 쓰는 것도 아니고, 화염구도 상당히 강하긴 하지만 헬리온이 쏘는 헬파이어에 비하면야..."
	],
	"iron imp": [
		"철의 임프 ",
		"별거 없지만 속성 마법 저항이 꽤 높다."
	],
	"orc": [
		"오크 ",
		"못생긴 지하생물. 오크는 인간, 돼지, 그리고 다른 온갖 더러운것들의 단점만 모아놓고 만들어놓은듯하다. 항상 떼거지로 몰려 다니며, 불쌍한 희생물을 잔혹하게 도살하는것을 선호한다.",
		"경험치를 꼴랑 2밖에 안주는 주제에 고블린보다 전투력이 강하다. 보통 전사, 마법사, 사제 등과 떼거지로 몰려다닌다. 베오그 사제라면 종류 불문하고 굴복시켜서 추종자로 만드는 것이 가능. 여담이지만 설정에 따르면 얘네들은 플레이어블인 힐 오크와는 다른 종인 듯하다."
	],
	"ice dragon": [
		"얼음 용",
		"말 그대로 얼음 용이다. 0.13부터 맞은 대상을 2칸 가량 넉백시키는 얼음 브레스를 발사한다. 냉기 저항이 급하면 가죽을 벗겨다가 갑옷을 만들 수 있다. 보통 용에다가 색놀이만 한 타일을 가진 용들은 오염된 고기를 제공하지만 어째선지 얼음 용 고기는 깨끗해서 탈 없이 먹을 수 있다."
	],
	"hell rat": [
		"지옥 쥐 ",
		"굉장히 이상한 쥐. 이녀석의 울퉁불퉁한 귤색 피부에서 부정한 기운이 넘실거린다.",
		"음에너지 공격을 하는 쥐. 다른 쥐와 달리 기본 스펙이 이구아나 급인데다 드레인 공격까지 해대서 초반에 잘못 만나면 바로 훅간다. 이전에는 별로 보기 힘들었지만 0.16패치 이후 보물창고(Vault)나 짐승소굴에서 볼 수 있다. 0.16이후 오랜지색 쥐(Orange rat)에서 이름 변경."
	],
	"vault warden": [
		"보물창고 간수장 ",
		"보물창고의 베테랑 지휘관인 이들은 문을 잠궈 침입자들의 무단침입과 탈출을 막는다.",
		"플레이어를 발견하면 문을 마법으로 잠궈 통행 불가 상태로 만든다.(* 잠긴 문은 공간 전이나 리의 순간 해체술같은 벽 통과 및 파괴 수단으로 해결 가능하다.) 많은 수의 몬스터와 같이 방에 갇히면 굉장히 치명적이므로 주의. 그리고 간수장은 보통 다른 보물창고 병사들과 같이 나온다(...). 최신 버전에서는 계단조차 잠궈버리는 흉악함을 자랑한다. 덕분에 보물창고 마지막 층에서 계단을 왔다갔다하며 몹을 정리하는 전략이 막힌 셈."
	],
	"oklob sapling": [
		"산성초 묘목 ",
		"어린 오크롭 식물. 성장한 오크롭보다는 약하지만 그 못지않은 산성을 위험하게 뿌린다.",
		"산성초보다는 약하지만 여전히 산성 공격을 가한다. 보통 페다스의 제단에서 랜덤 인카운터 형식으로 산성초 묘목이 소환된다. 몇턴이 지나면 자라서 산성초가 되므로 빨리 잡을 수 없으면 원본처럼 그냥 피하는게 상책. 다만 오브 방어전에 나오는 묘목은 쭉 묘목으로 남는다."
	],
	"starcursed mass": [
		"저주받은 별의 덩어리 ",
		"슬라임 안에 별자리가 박혀있는 도트로 표현되는 개체. 일정 시간마다 비명을 질러서 저항 불가능한 데미지를 입히고 기절을 가한다. 그냥 내버려두면 순식간에 분열하는데, 분열하게되면 각 개체의 HP는 쪼개지는 대신 비명의 데미지가 시야 안에 있는 모든 비명의 개체수의 비례해서 강해진다. 쪼개진 개체를 때리면 해당 개체는 다른 개체로 흡수되고, 쪼개진 개체를 다 때린 뒤에 하나만 남았을 때 본체를 죽인 뒤에야 비로소 죽일 수 있다. 일단 개체가 쪼개지기 시작하면 주변의 다른 적, 심지어 네쿼젝까지 다 제치고 곧바로 달려가서 개체수를 줄여야 기절당하는 사태를 방지할 수 있다. 녹시놀의 우페베터스 떼거지등 다수의 적에 둘러싸여 움직일 수 없는 상황에서 이 녀석이 시야에 나타나면 관통력이 있는 주문이나 탄환으로 비명 개체를 먼저 때려줘야 한다."
	],
	"blood saint": [
		"피의 성자 ",
		" ",
		"여러개의 요술학파 마법을 랜덤하게 풍풍 쏴대는 귀찮은 놈.Orb of Electrocution (3d27, 21%),Lehudib's Crystal Spear (3d34, 21%),Orb of Destruction (9d15, 4%),Ghostly Fireball (3d20, 10%),Fireball (3d25, 21%),Flash Freeze (3d22, 21%) 이것들 중에 쏴대는데, 이중 레후딥의 수정창은 조심하자"
	],
	"golden eye": [
		"금빛 눈알 ",
		"공중을 떠다니는 작고 빛나는 눈알. 바람과 같이 빠르며 금빛과 같이 광채를 낸다. 마치 독특한 색채로 우리를 최면으로 유도하는듯.",
		",,어떠한 탐심도, 어떠한 부러움의 열상도 없습니다.,,",
		",,당신의 밝은 황금빛 눈, 그 속의 고요함과 순수함이,,",
		",,하늘 아래 모든것의 본질입니다.,,",
		",,-Hannah Flagg Gould, _The Youth’s Coronal_,,",
		"이놈 역시 직접적인 공격능력은 전무하다. 하지만 더럽게 빠르고 시야에 보이는 마법저항이 낮은 플레이어에게 혼란상태를 유발하니 조심하자."
	],
	"jelly": [
		"젤리 ",
		"산성으로 이루어진 꼬물거리는 원형질을 지녔다. 그들의 산성은 거의 모든것들을 먹어치울수 있도록 해주었고, 시간이 지날수록 성장하는듯 보인다.",
		"초반에 나오는 까다로운 적 중 하나. 문을 닫아도 문을 뜯어먹어서 극초반에는 튀기도 힘들다. 그러다가 바닥에 있는 아이템은 죄다 녹여버리고 무기나 방어구를 부식시킨다. 일정 수 이상 아이템을 먹으면 2마리로 분열한다. 공격시마다 산성 데미지를 입히는데, 방어구, 특히 망토를 끼고 있으면 데미지를 크게 감소시킬 수 있다. 그래도 상당한 데미지므로 가급적 원거리에서 마법이나 슬링+돌로 처리하자. 돌이나 마법적 투사체 이외의 투사체의 경우, 젤리가 먹으면서 체력을 회복한다."
	],
	"frost giant": [
		"얼음 거인",
		" 빙결계열 주문과 무기를 사용하는 거인. 화염속성으로 썰어주자."
	],
	"black bear": [
		"검은 곰 ",
		"작은 검은곰. 다른 곰들과 같이 만일 심각한 상처를 입거나 겁을 먹는다면 이들은 광기에 휩싸이게될것이다.",
		"기본적으로 오우거를 능가하는 체력을 가지지만 오우거보단 약한 공격력을 자랑한다.  공포의 형상이나 체력이 일정량 이하로 깎이는 등 보통 몬스터가 겁에 질려야할 상황에 놓이면 광폭화한다. 간혹 곰이 처음 나타난 곳 근처에 벌집(랜덤 인카운터말고 음식)이나 로열 젤리가 몇개 놓여있는 경우도 있다."
	],
	"draconian monk": [
		"드라코니언 수도승",
		"속도도 더럽게 빠르고 공격력도 더럽게 높다. 근접을 불허하거나, 순삭시키자. "
	],
	"shadow demon": [
		"그림자 악마",
		"주변의 어둠으로부터 구별하기 힘든, 미스터리한 악마의 형상이다. 이들은 강력한 부하들을 향해 그림자를 이리저리 누빈다.",
		"같은 층에 있는 아군을 송환하거나 층의 수준에 맞는 아군을 마구잡이로 소환한다. 빨리 처치하지 않으면 골치가 아플 것이다. 타르타로스에서 이 녀석을 한꺼번에 여러마리 볼 수 있다. 본인은 2급인 주제에 1급 악마도 소환해대니 주의."
	],
	"orc knight": [
		"오크 기사 ",
		"수많은 전투로 더더욱 경험을 쌓은 투사. 얼굴에 어우러진 상흔과 무거운 갑주를 보고있노라면 만만한 상대는 아님을 알수있다. 오크 기사는 그의 뜨거운 전장의 숨결과 우렁한 고함으로 다른 오크들의 잔혹함과 용맹성을 광기 수준으로 끌어올린다.",
		"오크 전사 강화판. 오크광산 3층 밑에서는 흔하게 볼 수 있다. 체력도 2배정도 높고 히트다이스도 2배다. 전투 함성을 질러 주변 오크들을 강화시킬 수 있다."
	],
	"ball python": [
		"작은 뱀 ",
		"먹잇감을 조여 깨물 횟수를 늘리는 작은 뱀이다.",
		"조이기 공격을 하는 뱀. 스펙은 뉴트급이라 다른 적과 섞여나오는 경우만 아니라면 그냥 잡몹 4."
	],
	"wretched star": [
		"역겨운 별 ",
		"시야에 들어오면 일시적인 돌연변이를 일으키는 광채를 내뿜고, 가끔씩 이스켄데룬의 폭파의 비술을 발사한다. 일시적인 돌연변이는 분홍색으로 표시되고 몬스터를 잡으면 얻은 경험치의 양에 비례해서 없어진다. 일시적이라고는 하지만 체력 최대치와 능력치가 크게 깎였는데 회복되기 전에 싸워야 하는 불상사를 원하는 플레이어는 없으니 빨리 잡아주면 좋다. 언데드 플레이어가 맞으면 다른 돌연변이와 마찬가지로 부패를 당하고 능력치가 깎이는데, 이 경우에는 능력치 감소가 일시적인 게 아니라 영구적으로 남기때문에 상당히 치명적이다. 특히 물약을 마시지 못하는 미라가 이 놈 때문에 부패가 심해지면 눈물을 머금고 최대 MP를 깎아 회복시켜야 한다."
	],
	"red devil": [
		"붉은 악마 ",
		"빨간색의 악마. 주로 삼지창이나 악마 삼지창을 들고 나오는데, 근접할 경우 뒤로 물러나는 귀찮은 능력이 있다. 하지만 그것 뿐."
	],
	"neqoxec": [
		"네퀘젝 ",
		"최악의 3급 악마.''' 돌연변이를 건다는 사실 자체만으로 굉장히 위협적이다. 나머지 주문도 임프 소환과 지능 흡수로 의외로 성가신데, 전자는 고기방패가 되어주고 후자는 잘못하면 지능이 낮아져 스텟死할 수 있다. 악명높은 돌연변이 마법은 유저가 시선(* Line of sight. 매우 중요하다. 시야에 들어왔다고 네퀘젝이 곧바로 돌연변이를 쓰는 건 아니다! 이를 이용해 돌연변이 저항이 없을 경우 소환물이나 지형, 그리고 정말 급하면 네퀘젝이 소환하는 임프로 네쿼젝 시선을 막아 돌연변이 걸리는 걸 방지할 수 있다.)에 들어올 경우 일정 확률로 시전하는데, 신기하게 완전 나쁜 돌연변히 효과를 거는 건 아니라 아주 가끔 이로운 돌연변이 효과를 주기도 한다. "
	],
	"mottled draconian": [
		"얼룩 드라코니언",
		"파충류의 꼬리와 작은 날개를 지녔으며 얼룩무늬의 비늘로 덮여 있는 근육질의 인간형 생명체다.",
		"액체로 된 화염이 이들의 입에서 뚝뚝 떨어진다.",
		"스펙은 빨간 드라코니언 수준이지만 브레스가 점착화염이다!"
	],
	"scorpion": [
		"전갈 ",
		"혐오스러운 거미류중 하나. 단단한 껍질로 덮혀 있으며 꼬리의 끝에는 치명적인 독액을 함유하고있다. 양손에 달린 날카로운 집게발 역시 무시하지 못할것이다.",
		"체력이 어느정도 높고 독을 거는 난적. 언데드로 되살릴 시에는 거미와 그래픽을 공유한다. "
	],
	"greater naga": [
		"고대 나가 ",
		"가속(Haste), 타인 공간이동(Teleport Other), 이스켄데룬의 신비한 폭발(Iskenderun's Mystic Blast)등 강력한 마법과 함께 등장하는 뱀굴의 룬수호자. 꽤나 까다로운 수준의 마법과 데미지를 보여주는 뱀굴의  깡패. 이스켄데룬의 신비한 폭발을 막을 높은 방어력이나 투사체 반사(Deflect Missiles)스펠이 있다면 이놈들을 막아내는데 좋은 도움이 될것이다.",
		"해안가(Shoals)에서 거주하시는 머포크들. 해안가에서는 모든 종류의 머포크를 볼수있다. "
	],
	"giant  leech": [
		"거대 거머리 ",
		"매우 호전적인 흡혈성 환형동물. 늪지와 다른 습지에서 번성한다.",
		"늪지대에서 자주보이는 벌레중 하나. 느리지만 공격에 흡혈능력이 있어 일정 데미지를 hp로 전환한다. 조금 미미한 수치기에 그냥 무시하고 때려 죽이자."
	],
	"brain worm": [
		"대뇌 벌레 ",
		"끈적거리며 연한 자주빛의 피부를 지닌 벌레. 그들의 거대한 머리는 지각능력이 있는 생명체들의 지능을 빨아먹는다.",
		"던전 내부에서 종종 보이는 조금은 위험한 벌레. 멀리서 스마이팅 식으로 조금씩 지능을 하락 시키는데, 이게 꽤나 성가시다. 법사라면 그나마 이놈한테 죽을일은 거의 없지만, 전사의 경우는 아직 지능스탯을 찍지 않았거나 장비템의 부작용으로 인해 지능이 많이 내려간경우 이놈에게 지능이 빨려서 나도 모르는 사이에 스탯死 할 수 있다. 빠르게 죽이거나 코너링으로 시야에서 벗어난뒤 도망가자. 가장 좋은 방법은 능력유지 옵션이 붙은 아이템 등을 이용해 능력치를 보호하는것."
	],
	"oklob plant": [
		"산성초 ",
		"자신의 영역에 침입한 포식자들에게 끔찍한 황산을 뿜어대는 위험한 식물. 아무리 경험쌓인 모험가라도 이들이 번성한 지역에 들어가는것을 꺼려한다.",
		",,\"이산화탄소는 식물의 3대 성장요소중 하나이며 다른 두가지는 각각 물과 질산입니다. 이것은 탄소와 산소로 화학적으로 결합되어있으며 색깔이 없고, 산성의 맛과 향기가 나고; 신맛이 나는 물같은것 말입니다; 용해성이 존재하고 공기보다 절반가량 더 무겁습니다. 게다가 다른 용기에 물에 용해 시킨뒤 따르는것도 가능하단 말이죠. 100정도의 물은 106정도의 이산화탄소를 녹일수있다는것. 또한 식물은 뿌리를 통해 다른 이산화탄소가 필요한 기관에 공급합니다.,,",
		",,Henry Stuart, _The Culture of Farm Crops: A Manual of the Science of,,",
		",,Agriculture, and a Hand-book of Practice for American Farmers_, ch X. 1887.,,",
		"사실 몹이라기보다는 함정이나 파괴가능한 구조물에 가깝다. 설정상 산성 공격을 하는 식물이라서 무언가가 사정거리 안에 들어오면 엄청난 대미지를 입히는 산성 공격을 사정없이 뿌려댄다. 게다가 페다스의 권능으로 멀쩡하던 풀이 갑자기 자라서 산성초가 되는 어처구니없는 사태도 발생.(* 유저도 페다스를 믿을 경우 권능으로 식물을 산성초로 만들 수 있다.] 죽여봤자 손해가 많으니 가급적 피하는게 좋다. 굳이 죽여야 한다면 방법이 없는 건 아니다. 우선 see invisible속성이 없으므로 투명화를 걸고 잡을 수 있고[* 다만 안보여도 산성은 발사한다. 맞을 확률이 줄어드니 없는 것보단 낫긴 하다.), 시야 밖에서 광역 스펠을 잘 끼얹어주면 피해 없이 잡을 수 있다. ",
		"다른 방법으로 산성공격에 면역인 젤리로 잡는 방법이 있는데, 젤리는 마법 저항력이 낮으므로 Enslavement 마법이나 wand of enslavement를 이용하면 쉽게 일시적 동료로 만들 수 있다. 그 외에도 '부식저항의 부적'을 끼면 데미지가 큰폭으로 줄어들기 때문에 문제없이 다가가서 파괴할 수 있다. 특수지형 중 짐승굴 1층에서 2층으로 내려가는 입구를 산성초가 전부 막고 있는 지형이 있는데 자칫하면 한 순간에 다음장을 볼 수도 있다."
	],
	"yellow draconian": [
		"노란 드라코니언 ",
		"파충류의 꼬리와 작은 날개를 지녔으며 노란색 비늘로 덮여 있는 근육질의 인간형 생명체다.",
		"산성의 연기가 이들 주위로 소용돌이친다.",
		"검은 드라코니언과 비슷하나 산성브레스를 쓰고 산성저항을 지녔다."
	],
	"naga sharpshooter": [
		"나가 명사수 ",
		"뱀굴 후반부 플레이어의 죽음을 책임지는 더러운 몹.''' 이놈들 자체는 느리고 허약하기 짝이없지만, 멀리서 두마리 이상이 보일경우 켄타우로스나 다른 원거리 몹처럼 다가가서 죽인다는 생각은 자신의 캐릭터가 강하지 않은 이상 일단 보류하자. 기본적으로 '''Portal Projectile스펠을 보유하고 있기에 주변에 몬스터가 많아 그놈들이 몸빵을 해줄거란 생각은 버리자. 코너링! 무조건 코너링이다!"
	],
	"entropy weaver": [
		"엔트로피 방직꾼",
		"0.17 트렁크부터 추가된 몬스터. 거미굴 또는 뎁스 이후부터 등장하는 몬스터이다. 상당히 까다로운 몬스터중 하나인데, 돌죽에서 가장 까다로운 디버프중 하나인 부식(-Corr)을 유발한다. 근데 이 부식 유발이라는게 타 몹과는 다르게 한꺼번에 -12씩 깎아버리니 조심할것. 그에 따른 패널티도 있는데 이 마법을 걸기까지 3턴이 걸린다. 사일런스가 있으면 중간에 끊어먹을 수도 있고, 본체가 생각보다 강한편은 아니다. 다만 타 몹과 함께 등장한다면 우선적으로 처치해야 할 대상이다. 심할 경우 전투보다 도주를 고려해야 할 수 있다.",
		"다만 지구랏에서 만났을때는 진정 오금 저리는 경험을 선사해주는데, 다른 몹에 의해 엔트로피 방직꾼에게 접근을 못하는 경우다. 법사라면 크게 문제 안되겠지만 역시나 문제는 원거리 공격수단 또는 스마이트 타겟팅 공격수단(권능)을 갖추지 못한 전사. 안개스크롤도 없고 투명화 물약도, 별다른 탈출수단도 없다면? 한꺼번에 AC 20,30씩 깎아먹고 다음장을 보게 될 수도 있다. 이런 경우에는 시야 차단에 항상 유의할것. 부식저항 부적이 어느정도 막아주지만 한계는 존재한다.   ",
		"엘프의 방, 납골당, 묘지, 조트의 렐름, 그 외에서 나오는 몬스터에 대해 작성"
	],
	"bone dragon": [
		"해골용",
		"주로 깊은 던전,무덤,납골당에서 혈압을 올리는 녀석.기본적으로 체력이 150이 넘어가다보니 버겁다고 생각되나, 브레스 공격이 없는 관계로 호구용중 하나. 하지만 몸빵 하나 만큼은 끝내주기 때문에 쉽사리 보진 말자.",
		"조트방의 몬스터들. 어비스에도 촐몰하며 변형괴물이 즐겨 변형한다. 사실 얘들도 빡치는데 삐에로나 화염구체, 고대의 리치등이 넘사벽급으로 빡쳐서 존재감이 비교적 미미하다.  허나 스펙은 후진 그 플레이어블과는 정반대로 굉장히 높으니 유의. 후반에 주로 보인다만 변형괴물이 즐겨 변형하는지라 초반에 만나면.. 여담이지만 대부분의 캐릭터와는 달리 몬스터일때의 타일이 플레이어블의 것보다 훨씬 간지난다. 데몬스폰과 마찬가지로 직업과 색에 따라 패턴이 달라진다. 그러나 일부는 직업이 없다.",
		" 예를 들어 검은 드라코니언 파괴술사는 레후딥의 수정창 등 최상위 대지마법과 전격브레스를 사용하고 전기저항이 있으며 빨간 드라코니언 소환사는 드레이크를 소환하며 화염브레스를 내뿜고 날았다가 착륙한 자리에 불기둥이 생기고 화염저항이 강하다. 기본적으로 플레이어블과 직업이 상당히 비슷하다. 몽크 , 질럿 , 어나힐레이터 , 콜러, 서모너(콜러), 워퍼 등등.",
		"다른건 몰라도 드라코니언 워퍼는 가디언 서펜트 처럼 자기 아군 드라코니언을 내 옆으로 옮기거나  나를 쫓아내거나.... 말 그대로 워퍼처럼 가지고 논다.. 참고로 나올 수 있는 개체의 경우의 수는 색 10가지x직업 7가지로 총 70가지다.",
		"성체를 제외하면 모두 비행이 가능하며 근거리 공격으로 가끔 꼬리 공격을 시전한다."
	],
	"sun demon": [
		"태양의 악마 ",
		"상당히 강한 화염공격을 평타로 유저에게 선사하며 속도도 빠른 편이라 오크 광산등에서 준비 안된채로 만나면 상당히 무섭다. 공격력 하나는 1~2급 수준. "
	],
	"hell sentinel": [
		"지옥의 감시자",
		"악마 군단에 의해 제작되고 조종되는 우뚝 솟은 거대한 돌 기둥이다.  삐죽삐죽하게 가시가 박힌 갑옷의 틈 사이로 이들의 천개의 눈들은 음흉한 미소를 짓는다.",
		"v10 이후로 본래 등장하던 핏 핀드]]가 너무 약하다는 이유로 삭제되고 대신 등장한 악마인데 그 성능이 존재 자체만으로도 디스가 4대 지옥 중 최악의 지옥'''이 되어버렸을 정도로 강하다. 모든 원소 저항을 +++씩(='''면역) 가지고 있는데다가 적대적 주술에도 면역이고, ac도 23으로 상당히 높다. 근접 공격시에 일정 확률로 19d4의 데미지를 공격자에게 입힌다. 더욱 흉악한 건 3d20의 헬파이어와 3d33의 아이언샷을 쓴다는 것! 둘 다 AC로 인한 데미지 감소고 뭐고 ([그런 거 없다]). 항마의 무기가 있으면 때려서 헬파이어와 아이언샷을 차단할 수도 있겠지만, AC가 높기 때문에 고강화가 된 고급형 항마의 무기가 필요할 것이다.",
		"0.12 버전에서 처음 등장하였다. 악마와 어보미네이션, 용인만 있어서 심심했던  어비스를 손 보는 과정에서 추가된 몬스터이다. 러브크래프트의 작품에서 모티브와 분위기를 따왔다. 원전이 원전이니만큼 하나같이 강약에 상관없이 봤을 때 기분이 나빠지는 놈들 뿐이다. 고레벨이 되면야 그냥 때려잡고 다니면 되지만, 중저레벨에는 부패물을 제외하면 하나같이 먼저 처리하지 않으면 뒤끝이 끝내주는 위험한 몬스터이다."
	],
	"ice fiend": [
		"아이스 핀드",
		"서리로 덮여 있으며 차가운 공기의 고리를 둘러싼 거대하고 몹시 차가운 악마로, 많은 지옥들에서 가장 끔찍한 존재 중 하나이다.",
		"지옥의 고통을 사용하고 3d27짜리 얼음 화살을 날려댄다. 근접전시에도 타격 횟수당 평균 36점의 얼음 데미지를 가한다. 코기토스에서 안타이우스 곁에 4마리가 서있는 것을 보면 샤이닝 원을 믿거나 네크로뮤테이션이 없는 이상 등골이 서늘해질 것이다. 정면으로 덤벼들지 말고 우선 공간 이동을 한 뒤에 한마리씩 떨어뜨려서 처치하는 것이 건강에 좋다. 문제는 막층은 항상 공간이동 방해 상태라는 것."
	],
	"queen bee": [
		"여왕벌 ",
		"벌무리의 통치자. 그녀가 다스리는 벌들은 더욱더 재빨라지고, 강력해진다.",
		"보통 특수 지형에서 킬러비들을 대동한채 나타난다. 속도가 약간 느린 것을 제외하면 당연히 킬러비보다 강하지만 진짜 무서운 점으로 주변 킬러비들에게 광폭화를 걸어댄다."
	],
	"sheep": [
		"양 ",
		"어두운 털을가진 소의 친적류. 많은 모험가들에겐 그들은 흉포한 생물보다 북실거리는 털가죽이 많은 동물로 인식되있다. 던전의 양들은 지상의 양들보다 더 흉맹스럽다는것은 말할 필요도 없다. 이 북실거리는 털들때문에 양들은 불에 매우 취약해보인다.",
		"일반 던전에서도 보이지만 짐승 소굴에서 더 자주 보인다. 상당히 약하며 고기를 많이준다. 털이 북실북실해 점착 화염 주문을 쓰면 주변 양에게까지 다 옮겨 붙는다. "
	],
	"giant newt": [
		"뉴트 ",
		"작고 집요한 양서류다. 통상의 개체보다 몇 배는 크지만, 그리 위협은 되지 않는다.",
		"잡몹 5. 고기셔틀. 자는 경우가 많아 암습이 어느정도만 된다면 꼭 암습이 주가 되는 캐릭터가 아니라도 쉽게 암습을 걸 수 있다. 워낙 약해서 의미가 없지만 의외로 깊은 물에도 들어오고, 물에서 머포크와 동급으로 빠르게 움직이기때문에 깊은 물을 이용한 전술이 거의 통하지 않는다."
	],
	"hobgoblin": [
		"홉고블린 ",
		"평범한 고블린보다 더 못생기고 큰 고블린. 이녀석들의 전투실력을 우습게 여기고 싸움을 거는 어린 모험가들은, 목숨을 잃고서야 비로서 과소평가 했음을 알아챈다.",
		"고블린보다 살짝 튼튼하다. 만만해 보이겠지만 힛다이스 시스템 때문에 최대 HD로 나올경우 굉장히 강하게 나올 수 있다. 1렙 플레이어를 끔살시킬수 있을 정도이며, 그 덕분에 유저킬 1위를 당당히 기록한 몬스터다."
	],
	"merfolk impaler": [
		"머포크 임페일러 ",
		"초중반 플레이어들의 연약한 방어력을 찢는놈.''' 속성이 인첸트된 창을 들고 플레이어를 공격하는데 이놈들은 '''다른 몬스터보다 2배 정도 빠르다 마법사들은 접근을 차단하려고 노력하고, 전사류는 코너링이나 1:1 통로를 통해 최대한 조심해서 공격하자. 만일 Mephitic Cloud 스킬이 있다면 정말 최고의 상대법이 될수있다. Mephitic Cloud는 독데미지와 더불어 혼란 상태까지 주기때문에 임페일러가 많은 장소에 한번 쓱 뿌려주면 서로 동족상잔을 일으키니 좋은 선택지가 될것이다."
	],
	"mottled dragon": [
		"녹아내린 용",
		"빨간색과 자주색 사이 정도 되는 색을 띈다. 점착 화염으로 공격을 한다. 이것에 맞으면 데미지 자체는 얼마 되지 않지만 스크롤이 순식간에 타버리는 불꽃 쇼를 볼 수 있었다. 점착화염을 거의 확실히 명중시키기 때문에 아이템 파괴가 존재하던 버전(0.15 이전)에서는 이 몬스터를 상대하기 전에는 중요한 스크롤을 바닥에 버려놓고 덤비는게 팁 중 하나였지만 지금은 그냥 뎀딜하는 용 중 하나."
	],
	"hydra": [
		"히드라 ",
		"거대하고 악몽스러운 도마뱀류. 그들의 많은 머리는 꿈틀거리며 자라날것처럼 보인다!",
		"히드라의 '특별한 생물학'에 의하면 단검보다 더 길거나 큰 무기로 이들을 베어낸다는것은 너무나도 멍청한 행위임이 분명하다. 트롤의 길다란 손톱마저도 말이다. '불'의 기운이 담긴 무기만이 그들의 잘라낸 머리부분을 지져버려 또다시 머리가 생겨나는것을 방지할수있다.",
		"짐승굴부터 볼 수 있다. 개구리나 양, 야크, 사냥개, 쥐같은 짐승굴의 밑바닥 몹들을 잡아죽이고 방심하고 있을때 나타나서 난이도의 수직상승을 느끼게 해주는 난적. 특징이라면 당연히 전승답게 머리가 많은데, 문제는 이 머리가 각각의 공격 횟수를 지닌다.(* 본래는 모든 머리가 하나의 적을 일점사하기때문에 작은 짐승 소환을 이용해 약한 동물을 대량으로 소환하면 히드라가 작은 동물 하나하나를 죽이기위해 풀어택을 낭비했지만, 돌죽에서는 각각의 머리가 다른 적을 때릴 수 있게되어 작은 짐승의 소환 물량빨로 히드라 갉아먹기가 안 먹히게 되었다.] 고증에 충실한 탓인지 화염 옵션이 없는 날붙이로 공격이 적중하면 머리가 잘려서 하나 더 늘어나 공격횟수가 더욱 늘어나기 때문에 처음 만났을때 날붙이로 썰어대다간 도망도 못치고 사망한다. 반드시 화염무기를 쓰거나[* 화염속성 날붙이 무기는 히드라의 목에 난 상처를 태워서 머리가 재생하지 못하도록 만든다는 설정이기 때문에 날붙이라도 머리를 줄일 수 있다.) 둔기를 써야한다. 다만 방어력과 레벨이 올라가 적당히 딜과 몸빵이 되면 그냥 무시하고 속전속결로 죽여도 된다.",
		"일단 머리가 늘어나는 걸 저지할 수단이 있더라도 상당히 어려운 편. 기본 체력이 높은데다 대가리를 줄이는 방법은 없는고로 혼의 맞다이를 까면서도 둘러쌓인 듯한 느낌으로 싸워야 한다. 화력 중점의 법사가 아니라면 마법사에게도 저승사자 격으로 나가오는데 상태이상에도 저항이 꽤나 되는 탓에 근접을 허용하면 순식간에 훅간다. HD가 13이나 되기 때문에 변신의 마법봉을 사용할 생각은 하지말자. 폭풍용(HD 14)이나 유령나방(HD 13)으로 변신하는 경우가 왕왕 있다. 혹은 황제전갈로 변하는 불상사가 발생하기도 한다... 트롤의 손톱(다른 종족이라도 2단계 이상의 손톱 변이가 있다면 포함)이나 칼날손같은 것도 얄짤없이 날붙이로 분류되기 때문에 머리가 늘어난다.",
		"화염 날붙이를 준비해 머리를 하나씩 따면서 장기전을 노리거나 트롤같은 경우에는 투척을 조금 올려서 거대 바위를 들고 다니다가 멀리서 보이면 던져서 피를 까자. 피켈이 가끔 주는 전기옵션 달린 채찍이 유용할 때가 있다. 동물 판정이라 교화 판정값이 3배되기때문에 엘리빌론을 믿고 있다면 하급 치유를 써서 달래는것도 방법이다. 분열되는 머리의 숫자는 최대 20. 레르나의 히드라가 아닌이상은 무조건 20이 최대다. 그 이상으로는 20 > 19 > 20 무한 반복.",
		"구버전 한글 패치를 적용했을 경우 특수 지형에서 27머리 히드라가 나오는 버그가 있었다. "
	],
	"giant slug": [
		"민달팽이 ",
		"그냥 달팽이 정도로 그다지 위협적이지 않다. 차이점이라면 껍질이 없어서 숨는 패턴도 없다는 것. 0.15 버전에서는 삭제."
	],
	"orb guardian": [
		"오브 수호자",
		"여러분이 이놈들을 상대하고 있다면, 당신은 거의 게임의 막바지에 다다랐다는 뜻이다. 이놈들은 조트의 오브 근처에 있을 때만 소환되기 때문이다. 꽤나 강할 것 같지만.... 잡몹이다. 정말 잡몹이다.'''  (* 다만, 오브 수호자가 등장하는 조트의 방에는 진노의나방이 같이 나온다. 법사 캐릭터인 경우엔 약하단 말만 듣고 방심했다가 광포화 걸린 오브 수호자에 찢길 수 있다.) '''마법도 못쓰고 저항도 거의 전무하다. 그냥 오브가 \"나 여기 있슈\" 하고 가르쳐주는 이정표인 셈. 여담으로 원래 그래픽은 태아의 모습이었지만 너무 그로데스크해서인지 그래픽이 바뀌었다.",
		"악마는 전체적으로 다섯 등급으로 나뉘어지며, 아스키 버전에서는 다른 몬스터와 달리 이름의 약자가 아닌 등급과 색으로 종류가 구분된다. 예를 들어 5급 악마인 핏빛 임프는 빨간색 5로 표시되는 식. 타 몹들과는 달리 이놈들은 초중반에 걸쳐 나오므로 이곳에 서술한다. (* 주로 지옥 계열 지역에서 쏟아져 나오는데 이 지역들은 운이 나쁘면 초반부터 갈 수 있다.)",
		"악마들 중에 가장 약한 등급. 중~후반쯤 되면 걍 법사도 지팡이질로 잡을 수 있다(...). 다만 중후반엔 직접 나타나기 보단 상급 악마들의 소환수로 나타나 고기방패 역할을 주로 하는 탓에 다른 의미로 골치아프게 다가온다."
	],
	"giant gecko": [
		"게코 ",
		"천장과 벽을 오르는 것을 허용하는 발바닥과 거대하고 날카로운 이빨을 가진 도마뱀이다. 보통 겍코보다 몇 배는 더 크며, 그 크기는 이들의 민첨성을 착각하게 만든다.",
		"잡몹 6. 회피가 높은지라 초약체 캐릭터에겐 가끔씩 HD만빵 홉고블린같은 초반끔살의 좌절감을 안겨주기도 한다. 단 이쪽은 홉고블린만큼 강하지는 않고, 핀치에 몰렸을 때 위협이 되는 수준."
	],
	"merfolk aquamancer": [
		"머포크 물마법사 ",
		"냉기저항이 없다면 밑에서 서술할 머포크보다 더 큰 곤욕을 치를수 있는 몬스터. 태고의 파도(Primal wave)라는 스킬은 강력한 데미지와 함께 플레이어가 서잇는 구역이나 주변의 지역을 '얕은 물' 지형으로 바꾼다. 다행히도 깊은 물로는 밀어내지 않으니... 만일 당신의 캐릭터의 종족이 물과 친근하거나(머포크,옥토퍼스, 혹은 마법중 얼음형상(Ice form)상태)  숨을 쉬지 않아도 되는 종족(회색 드라코니언, 가고일, 미라, 뱀파이어, 구울, 리치폼상태, 석상폼 상태.)라면 40%깎인 데미지를 받는다. 그리고 Throw Icicle 주문또한 꽤 아프기 때문에 조심해서 상대하자."
	],
	"draconian shifter": [
		"드라코니언 전이술사",
		" 여건이 된다면 빠르게 처치해야 하는 몬스터 자체적으로는 그리 강하진 않지만, 전이술사의 시야내에 있는 모든 드라코니언들을 플레이어 바로 옆으로 이동시킨다. 수호자 뱀과 똑같이. 또한 플레이어를 자주 이곳저곳 이동시키기때문에 조금 짜증난다.(* 플레이어의 전이를 방해하는 마법(Dimension Anchor) 등.) 주변의 드라코니언이 몰려있다면 제일 먼저 처치하자. 처치 못할시, 바로 옆으로 드라코니언들이 우수수 이동하는걸 볼 수 있을 것이다."
	],
	"deep elf conjurer": [
		"딥 엘프 요술사 ",
		"파괴마술에 더 깊히 정통한 딥엘프.",
		"맹화의 화살(Bolt of Fire), 동결의 화살(Bolt of Cold), 번개의 구체(Lightning Bolt), 흡성의 화살(Bolt of Draining),등 열기저항, 냉기저항, 음저항...등등 꽤나 강력한 상위 스펠들을 난사하기 때문에 조심해야할 필요가있다. 하지만 이놈은 딥엘프. 멀리서 완드질로 괴롭히고 빠르게 다가가서 톡 쳐서 죽이자!"
	],
	"yak": [
		"야크 ",
		"던전의 흔한 야크. 텁수룩한 털을 자랑하며, 모험가들을 자신의 뾰족한 뿔로 찌르는것을 좋아한다.",
		"게임 초중반 최강의 몹 중 하나. 짐승소굴에서 특히 자주 볼 수 있는데 공격력도 체력도 하나 같이 괴물같다. 거기다 대부분 3~4마리가 몰려다녀 위험도는 배로 증가한다. 등장시점에서 2마리 이상과 근접전을 펼치게되면 거의 100% 다음장을 보게될테니 반드시 좁은길에서 1:1로 싸우거나 계단플레이를 활용하자. 이도저도 안되면 그냥 얌전히 달아나자. 다만 그냥 동물이라 상태이상이란 상태이상은 다 걸리니 적절한 수단만 있다면 경험치+고기 셔틀이 된다."
	],
	"blink frog": [
		"깜빡이 개구리 ",
		"원거리 점멸이 가능한 아주 특별한 개구리종. 사냥감을 재빠르게 낚기위해 점멸하거나 혹은 공격에서 벗어나기위해 점멸을쓴다.",
		"이들은 주로 한무리로 다니는것을 선호한다",
		"말 그대로 블링크 해대며 이리저리 돌아다니는 개구리. 주로 여러마리가 한꺼번에 나오는 탓에 1자형 통로에서 싸워도 앞뒤로 둘러쌓일 수 있어 위험하다. 왜곡 속성 무기에 맞을 경우 일정 확률로 체력이 회복된다! 네임드 깜빡이 개구리로 개굴 왕자가 있다."
	],
	"soul eater": [
		"영혼을 먹는 악마 ",
		"이전버전에서는 그냥 호구였지만 이후 시야내의 모든 생명체의 영혼을 먹어치워 회복하는 능력을 갖게되었다. 몹들 뒤에서 깔짝대면 은근 짜증나는 유형. "
	],
	"merfolk avatar": [
		"머포크 인도자 ",
		"0.16 이전의 사이렌(Siren)의 자리를 차지하고있던 몬스터엿지만 머메이드가 사이렌으로 개명하고 이전의 사이렌은 머포크 인도자로 개명했다. 사이렌처럼 플레이어를 유혹하지만 문제는 플레이어로부터 조금씩 멀어지기 때문에 만일 깊은물쪽으로 간다면 플레이어가 깊은 물에 빠져 죽을수도있다! 게다가 익사한자들의 영혼 (Drowned souls)를 소환해서 플레이어를 공격하기때문에 성가신 놈중 하나. 다행이 그리 흔하게 볼수 있는 놈들이 아니니 불행중 다행이라 할수있다."
	],
	"caustic shrike": [
		"부식 유발 까치 ",
		"0.16에서 추가된 몬스터. 뎁스 이후부터 등장한다. 처음 등장했을때 거의 충격과 공포급 몬스터였다. 이동속도는 더럽게 빠른데다 더럽게 아픈 Corr유발 공격에도 모자라, 2~3마리씩 떼지어 나오는 더럽기 짝이 없는 몬스터였다. 오죽하면 양심의 가책을 느낀 제작진이 중간에 너프를 먹였을 정도. 이전과는 달리 한마리씩 나오지만 여전히 속도도 빠르고 아픈 몬스터중 하나이다. 웹죽러들 말에 의하면 너프했다고는 하는데 체감을 못하는 수준이라고(* 처음에는 벌(Bee)로 등장했었다. 도망칠 수 없는 이동속도, 1:1로도 황금 용을 발라버리는 스펙을 갖추고 떼로 몰려다녔다.).",
		"그나마 다행인건 독저항이 없기 때문에 맵틱이라도 깔아 두면 할만하다."
	],
	"orange crystal statue": [
		"오렌지색 크리스탈 동상 ",
		"시야 내에 있으면 고속으로 마력을 날려버리고, 지능을 흡수해간다. 설상가상으로 혼란도 걸며, 지능 흡수는 끔찍한 것 소환의 부작용 처럼 능력치 유지 반지로도 못막고 혼란은 명석함의 목걸이로 막을 수 있다. 생각없이 탭질하다간 순식간에 숨쉬는 방법을 잊고 다음장을 보게된다. 기본적으로 다른 동상들과 특징은 같으므로 파괴의 구나 분해의 마법봉으로 부수는게 편하다."
	],
	"death yak": [
		"데스]] [[야크 ",
		"크고 우람한 야크의 친적뻘. 이들의 작고 붉은 눈은 살아있는 고기에 대한 탐욕으로 넘실거린다.",
		"야크의 강화판으로 여러마리가 몰려다니는데 하나하나가 굉장히 아프고 강하다. 중후반의 위험한 몹. 극후반 만렙전사에 아티팩트 떡칠 상태라면 그냥 썰어버리겠지만 처음 나올때쯤에는 절대로 정면으로 붙어선 안된다. 피도 독성이라 독 저항 없이는 고기를 못 먹는다."
	],
	"deep elf sorcerer": [
		"딥 엘프 고위마법사 ",
		"지옥의 끔찍한 힘을 이곳에 강림시킬수있는 딥엘프. 치명적인 파괴술 마법, 소환마법, 그리고 자신과 대적한 적을 어비스로 보내는것을 즐긴다.",
		"헬파이어, 악마소환, 추방. 삼위일체. 헬파이어를 시전하는 모습을 보고 있노라면 헛웃음이 나올지도 모르는 또다른 난관. 파괴술사와 다르게 묵직한 주먹을 명치에 꽤나 찔러대는 이놈은 추방까지 있어서 상대하기가 꺼려진다.  코너링. 코너링이다. 엘프의 방은 코너링이 생명이다!"
	],
	"giant eyeball": [
		"거대 눈알 ",
		"공중을 자유롭게 떠다니는 커다란 눈알, 이 눈알의 시야에 들어온 모든 것들은 저항하기 힘든 마비에 천천히 몸이 잠식되가는것을 느낄것이다. 어떠한 경험많은 모험가라도 말이다. 혹자는 이 거대한 눈알들이야 말로 지이바의 사도들이라고 말하기도 한다.\\",
		",,당신이 보는 눈,,",
		",,당신이 볼수 있기에 그것은 눈이 아닙니다.,,",
		",,그러나 당신이 볼수 있기에 그것이 눈입니다.,,",
		",,-Antonio Machado, Campos de Castilla. 1912-1917.,,",
		"슬라임 굴 숨은 난적1'''중 하나. 직접적인 공격능력은 없으나, '''저항 불가능한 마비공격을 감행한다. 만일 이놈들이 3마리 이상 모여있는 장소로 내려왓다면 신속히 다른 입구를 찾거나 다시 던전으로 돌아와 마법저항을 맞추고 도전하자. 판데모니엄 로드 무노로그 역시 해당 눈알을 소환하는 관계로.... 언제나 주의해야할 몬스터. 역시 정지의 부적을 착용한다면 그냥 신경꺼도 무관한 몬스터."
	],
	"lava fish": [
		"용암 물고기 ",
		"용암속에 사는(...) 물고기다. 용암속으로 달아나면 걸어서는 쫓아갈수도 없는데다 화염 공격을 미친듯이 퍼붓는다. 잡아봤자 득도 없고 상처만 남을뿐이니 화염저항이 없다면 피하는게 여러모로 이롭다. 0.14부터 삭제되었다."
	],
	"big kobold": [
		"거대한 코볼트 ",
		"평범한 코볼트들보다 크고 강인하며 종종 진짜배기 무기를 가지고 나온다.",
		"코볼트의 강화판. 코볼트처럼 이래저래 장비를 랜덤으로 챙겨입고 나온다. 자체로도 강한 편인데다 십중팔구 코볼트들을 3~4마리 데리고 나오므로 초반에는 주의하는 것이 좋다."
	],
	"vault guard": [
		"보물창고 수호병 ",
		"중무장한 보물창고의 수호병이다.",
		"보물창고 근처나 보물창고에서만 등장하는 몬스터. 가끔 왜곡 무기를 들고 나오는 것 빼면 딱히 위험한 점은 없다. 다만 대형 방패와 판금 갑옷을 입고 있는 경우가 많아 몸빵은 상당하니 주의. 여담이지만 얘네들 다 인간이다. 즉 인남캐 선신유저는 시체를 먹을수 없으며 고기는 아무런 탈없이 먹을 수 있다. 오리지날 시절부터 잉여였던 것에 변화를 주기 위함인지 0.12버전부터 아래의 강화판 수호병이 새로 등장한다."
	],
	"wight": [
		"와이트 ",
		"고대의 전사중 한명으로써, 전장의 명예로운 죽음을 영원히 갈구하는 그 마음때문에 다시 일어나 싸운다.",
		",,행복하지않은 망자여, 태어나되 불행하게 죽었도다, 그의 인생 대부분을 보살피는것에 너무나 쏟아부었구나!,,",
		",,Edmund Spenser, “Mother Hubberds Tale”, _Complaints_. 1591.,,",
		"보통 셋이서 몰려다니는 언데드. 몬스터 설명을 보면 싸움에서 명예로운 죽음을 원한다지만 AI의 한계로 플레이어블 캐릭터가 혼자서 다녀도 비겁하게 셋이서 다굴하려고 한다.  기본적으로 흡성 공격을 할 수 있으며, 초반치곤 상당한 수치의 플러스/마이너스가 붙은 마법 무기를 자주 가지고 다닌다. 물론 마이너스가 붙은 쪽은 저주받은 무기. 초반에 나오는 언데드 주제에 지성이 있는지 불기둥에 들어오질 않는다. 거기다 계단도 올라온다. 마법사의 경우 화력으로 때려잡기 힘들 것 같으면 닥치고 튀고, 전사도 개싸움이 될 것 같거나 득템이라 외쳐줄 만한 무기를 들고 있는 것이 아니라면 튀는게 나은 편."
	],
	"deep elf mage": [
		"딥 엘프 마법사 ",
		"여러가지 잔혹한 마법을 익힌 딥엘프. 그의 손에서 여러가지 치명적인 마법들이 그려진다",
		"주문 템플릿에 따라 쓰는 주문이 결정된다. 오크 마법사 보다 조금 높은 수준의 마법을 쓰지만 아픈건 매한가지. 조심하자."
	],
	"iron troll": [
		"강철 트롤 ",
		"강대한 팔다리와 평평하고 두꺼운 녹슨 철같은 비늘이 조금씩 피부에 돋아나있는 거대한 트롤. ",
		"당신은 위장 깊은곳에서 구역감을 느꼇다.",
		"엄청 딴딴하고 강하다........ 딮트롤 샤먼이 헤이스트라도 걸어주면 그날로 무쌍찍는 수준. 괜스레 잡몹이라고 무시하지말고 주의하면서 잡자."
	],
	"shining eye": [
		"빛나는 눈알 ",
		" 크고 이상하게 뒤틀린 공중을 떠다니는 눈알. 피부를 뒤틀리게 할것만 같은 이상한 에너지를 내뿜기는 하나, 이 감시자에게는 다른 눈알들과 틀리게 아름다움이라는것을 발견할수 있을것이다. ",
		"슬라임 굴 공략을 주저하게되는 원흉중 하나.''' 공격능력? 전무하다. 근데? '''시야에 들어온 플레이어에게 돌연변이를 유발한다. 3층부터 슬슬 고개를 내미더니 6층에는 기본적으로 3~5개의 눈알들이 뿅뿅 돌아다니면서 돌연변이를 선사할 준비를 한다. 만일 돌연변이 저항부적이 없다면 아예 공략이 힘들다고 보면 된다."
	],
	"goblin": [
		"고블린 ",
		"작고 못생긴 호전적인 인간형태의 괴물. 땅딸막하고 넓적한 입에 누르스름한 피부, 그리고 피스타치오처럼 생긴 눈을 가졋다.",
		"코볼트처럼 기본적으로 잡몹 수준. 코볼트와 마찬가지로 이 쪽도 속성 무기를 들고 나올 경우 조심할 것. 이 쪽은 독침 대신 주로 슬링으로 돌을 던지기도 하는데 초반엔 아프므로 코너로 유인한 뒤 근접전에서 해치우자."
	],
	"chaos spawn": [
		"혼돈의 악마 ",
		"||||",
		"혼돈 속성 공격을 가하고 죽을 때 혼돈 속성 구름으로 분해된다. 이 구름에 서있는 동안에는 매 턴마다 혼돈 속성 공격을 받는다. 그 외에는 별 볼일 없다. 매턴마다 타일 모습이 바뀐다. 콘솔에서는 색깔이 바뀐다.",
		"설령 만렙이라 할지라도 3마리이상 나타나기 시작하면 주의하고 싸워야하는 악마들이다. 대신 이쯤 부터 속성이 확연하게 정해져 있으므로 대응하기는 편하다. 과거 파란 섬멸자(Blue Death)의 소환 특수 능력을 옮겨서 떼어놓은 놈들이다."
	],
	"steam dragon": [
		"증기 용",
		"증기를 쏜다. 용들 중 제일 호구로 녹아내린 용처럼 다른 의미로 위협적인 것도 아닌데다 갑옷도 쓸데가 많은 호구 템셔들. 증기용 가죽으로 갑옷을 만들면 사슬갑옷 급의 방어도에 로브처럼 가볍게 입을 수 있다. 마법사 캐릭터의 AC를 높일 때 유용하다."
	],
	"storm dragon": [
		"폭풍 용",
		"전기 브레스를 사용한다. 전기 저항 여부에 따라 난이도가 갈린다. 전기 저항이 급하면 폭풍 용을 잡아다가 가죽으로 갑옷을 만들어서 쓸 수 있다. 판금 갑옷을 감당할 수 있는 전사가 고려할만하다. 물론 성능자체는 평이."
	],
	"slime creature": [
		"슬라임 덩어리 ",
		"구역질나는 방울진 유기체. 땅바닥을 주르륵 미끄러져 다니며 종종 주변의 다른 똑같은 유기체들과 하나가되기도 한다.",
		"각각의 개체일때는 별로 무섭지 않지만, 개체가 모일수록 점점 위력적으로 변한다. 3마리 까지만 모여도 꽤 위험해지기 때문에, 빠른 정리가 필요한 몬스터. 돌죽내에서는 왠만해서는 개활지가 아닌 통로에서 1:1을 위주로 추천하지만, 이 슬라임 크리처 한테는 적당히 2~3정도 유지를 하면서 합쳐지지 않도록 적당히 컨트롤을 해줘야 한다.",
		"||뭉치는 수|| ||이름|| ||HP|| ||데미지||",
		"||1마리|| ||Slime creature|| ||40~80|| ||22||",
		"||2마리|| ||large slime creature|| ||80~160|| ||44||",
		"||3마리|| ||Very large slime creature|| ||120~240|| ||66||",
		"||4마리|| ||enormous slime creature|| ||160~320|| ||88||",
		"||5마리|| ||titanic slime creature|| ||200~400|| ||110|| "
	],
	"draconian knight": [
		"드라코니언 기사",
		"척살 1순위.''' 오크기사와는 비교하기 민망할 정도로 강하다. 투명화에다,  '''시체를 영구적인 언데드 몹으로 만들어 버리는animate dead를 사용한다.  게다가 몸빵도 제일 높다!! "
	],
	"deep elf priest": [
		"딥 엘프 사제 ",
		"고대의 사악한 딥엘프들의 신을 섬기는 딥엘프. 그들의 알수 없는 신에게 하사받은 어두운 에너지를 사용한다.",
		"오크사제랑 똑같이 스마이팅을 통통 쏴되는 혈압상승의 주역중 한명. 스마이팅 데미지가 초중반엔 무시못할 데미지이기에 조심해야할 필요가 있다."
	],
	"big fish": [
		"거대 물고기 ",
		"단백질 공급원. 물속에 있는 적 중에는 약한편이나, 초반에는 무시 못할 데미지이므로 조심하자. 0.15부터 삭제되었다."
	],
	"worm": [
		"벌레 ",
		"거대한 환형돌물. 끈적거리는 건더기가 온몸을 반짝반짝 치장하고, 거대한 이빨을 뽐낸다.",
		"마인드리스(* 지능이 없다. 따라서 엘리빌론 치유로 교화할 수 없어 치유사의 초반 난적. 그러나 화염구름 같은데 거리낌 없이 들어와 화염술사 입장에서는 대환영.)에다 체력도 높고 굉장히 아프게 물어뜯는다. 미노광이나 트롤광같은 초반학살자가 아니라면 3렙이하는 도전하지 않는게 상책. 다만 나가랑 비등비등할 정도로 속도가 굉장히 느려서 상대하기 버거우면 도망치거나 뒤로 빠지면서 깔짝거리기도 쉽다. 전사도 한대 때리고 튀는 히트 앤 런 전술이 가능할 정도다. 나가일 경우엔 독을 뱉어서 손쉽게 끔살 가능."
	],
	"emperor scorpion": [
		"황제 전갈 ",
		"강화판 전갈. 공격력, 체력, 방어력이 모두 뛰어나고 근접전시 맹독까지 거는 난적이다. HD13에 AC 20이라 때리는 사람 입장에서 정말 지치게 만든다. 혼자 등장하는 경우는 별로 없고 주로 거미굴 끝층 같은 서브 던전에서 여러마리가 한꺼번에 등장하기 때문에 더더욱 위험하다. 독 점화(Ignite Poison)나 원소계 마법이 있으면 그나마 수월하게 상대할 수는 있다."
	],
	"demonspawn": [
		"데몬스폰(몬스터)",
		"판데모니엄의 잡몹. 이미 수많은 룬들을 들고다니고 악마들을 도륙하고 다니는 당신에게는 경험치도 주지 않는 쥐새끼와 맞먹는 위치이다. 보물창고(Vaults)나 형체없는자(shapeshifters)가 이것으로 변해서 던전에서 볼수도 있다. "
	],
	"cyclops": [
		"사이클롭스",
		"돌을 던지는 놈들. 근접전으로 처리하거나 투사체 반사주문을 이용하면 썰린다."
	],
	"ooze": [
		"진흙괴물 ",
		"부글거리는 회백색의 폐수였으나, 어찌된 일인지 기초적인 인식능력과 제한적인 움직임이 가능해졌다.",
		"순수하게 물리적으로 상대할 경우 공격력 낮은 열화판 벌레. 산성 능력도 없고 아이템을 먹지도않는 최하급 우즈. 다만 상태이상을 씹는 탓에 직업에 따라 초반엔 좀 까다로울 수도 있다."
	],
	"merfolk javelineer": [
		"머포크 투창꾼 ",
		" 슬라임굴에 산성방울, 엘프방엔 마스터아처가 있다면 해안가엔 이놈이 있다.''' 일단 투창꾼을 보는순간 욕부터 나오는데, 한마리만 나오는게 아니라 수십명이 사이좋게 나오기 때문이다. 속성이 인첸트된 자벨린을 풍풍 던지는것도 모자라서 도망칠수 없게 '''그물 까지 던진다음 멀리서 꼬챙이질을 한다!''' 만일 낮은 회피수치(EV)가 없다면 살아서 도망친다는것을 보장 할수 없을정도로 맞으면 높은 데미지를 자랑하기에 일단 Repel Missiles 이나 Deflect Missiles 스펠을 배우는것을 강력하게 추천한다. 게다가 종종 은도금된 자벨린을 던지기 때문에, 변이마법을 쓰고 공격한다면 자살행위가 될수있다. 은도금은 shapeshifting몬스터나  변형(Form마법들), 그리고 혼돈속성의 몬스터나 플레이어에게 '''175%의 데미지를 주기 때문이다."
	],
	"deep elf demonologist": [
		"딥 엘프 악마술사 ",
		"수많은 시간을 강력한 악마들이나 무간지옥 어비스와 공명하는것에 시간을 보낸 딥엘프.",
		"1~4 등급의 악마들을 소환해대는것도 모자라서 유저를 어비스로 추방시켜버리는 두번째 공포. 아이스핀드, 처형의 악마 등 공포스러운 수준이다. 전사들은 보는 순간 빠르게 유인해서 코너링을 이용, 단시간안에 죽여버리자. "
	],
	"naga warrior": [
		"나가 전사 ",
		"슬슬 나가주민들이 강력해지는데, 이놈은 hp가 최소 90이상이기에 튼튼할 뿐더러 종종 인첸트 된 중갑이라던지 무기를 들고 나온다. 인첸트된 무기로 플레이어에게 다음장... 을 보여줄수 있기 때문에 둘러싸이지 않게 조심하자. 만일 인첸트된 방패나 대형방패를 얻고싶다면 이놈들의 유품들을 빌리자. 꽤 좋은것들이 많이 나올것이다."
	],
	"draconian scorcher": [
		"드라코니언 화염술사",
		"헬파이어, 헬파이어 버스트, 점착화염을 사용한다. 헬리온급의 주의를 요한다."
	],
	"eye of draining": [
		"흡수의 눈알 ",
		"마력과 끈끈하게 연결되어 공중을 부유하는 끔찍한 공포.",
		"슬라임 굴에 도전하는 마법사들의 원수'''. 모든 눈알들이 그렇듯 직접적으로 때리진 않는다. 그러나 '''5-17가량의 마나를 흡수해버린다. 전사라면 별 걱정없이 푹찍푹찍을 하면되지만. 만일 마법사라면 눈에 보이자마자 뒤도 돌아보지않고 도망치거나 빠르게 녹여버리자."
	],
	"fire bat": [
		"불 박쥐 ",
		"말 그대로 불 박쥐. 화염 공격을 한다."
	],
	"draconian occupations": [
		"강화된 드라코니언 칭호 ",
		"데몬스폰 놈들과 마찬가지로 얘네들 역시 칭호를 가진 개체들이 있다. ",
		"견본 사진은 검은 드라코니언이 이 칭호를 갖고 있는 모습. 허나 칭호 자체는 ",
		"개체 구별 안하고 가질수 있다."
	],
	"green draconian": [
		"녹색 드라코니언 ",
		"파충류의 꼬리와 작은 날개를 지녔으며 녹색 비늘로 덮여 있는 근육질의 인간형 생명체다.",
		"맹독이 이들의 턱에서 뚝뚝 떨어진다.",
		"검은 드라코니언과 비슷하나 독저항과 독브레스를 쓰고 가끔 독공격을 날린다."
	],
	"executioner": [
		"처형의 악마",
		"끔찍하게 빠르고 강력한 악마이다. 그 형태를 분간하는 것은 소용돌이치는 낫 형태의 칼날로 이루어진 구름으로 인해 어려워진다.",
		"속도가 빠른데다가 자기한테 가속마법을 쓴다. 공격 속도가 워낙 빨라 법사나 회피력 중점화 캐릭터에게는 은근히 난적이지만 방어력 중점화 캐릭터나 체이브리아도스 신도에게는 경험치원이다. AC가 높은 캐릭터에게 거는 고통도 음에너지 저항이 높으면 막을 수 있다."
	],
	"blue devil": [
		"파란 악마 ",
		"말 그대로 파란색의 악마다. 별볼일 없는 놈이었지만 0.13부터 원거리에서 유저 근처로 날아오는 능력이 추가됐다."
	],
	"spatial maelstrom": [
		"아공간의 소용돌이 ",
		"기존 몬스터인 아공간의 회오리(Spatial Vortex)의 강화판. 더 이상 혼란 상태가 아니기에 플레이어를 집중적으로 때려서 왜곡 데미지를 가하고, 주변의 벽을 아공간의 회오리로 변환시킬 수 있다. 그냥 내버려두면 회오리를 증식시키기 때문에 보이면 빨리 처리해야 된다."
	],
	"giant goldfish": [
		"거대 금붕어 ",
		"거대 물고기의 강화형. 중반에도 의외로 무시못할 데미지를 자랑하므로 웬만하면 피하는게 좋다. 물속에 사는 몬스터 공통이지만, 피가 달면 깊은 물로 도망가거나 물 속에 숨어서 잡기가 은근히 귀찮다. 이레데렘눌의 제단과 관련된 랜덤 인카운터로 거대 금붕어 좀비들이 사는 수로가 있는데, 좀비라고 해도 초반에는 상당히 까다로운 상대라서 별 생각없이 빠른 이동으로 돌아다니다가 끔살당할 수도 있다. 대개 절묘하게 벽으로 가려진 상태라 빠른 이동이 잘 멈추지도않는다. 초반에는 꽤 경험치를 많이 주다보니 창이나 도달의 무기를 들고 명중률이 꽤 된다면 경험치원으로 쓸 수도 있지만. 0.15부터 삭제되었다."
	],
	"sea snake": [
		"바다뱀 ",
		"밝은 색을 가진 뱀이다. 물속 활동이 더 능숙한 이 생물들은 강력한 맹독성의 깨물기를 구사한다.",
		"주로 해변가에 나온다. 물뱀과 비슷하지만 약간 스펙이 더 높고 이 쪽은 체력이 낮아지면 물가에 숨을 수 있어 약간 귀찮다."
	],
	"red draconian": [
		"빨간 드라코니언 ",
		"파충류의 꼬리와 작은 날개를 지녔으며 붉은색 비늘로 덮여 있는 근육질의 인간형 생명체다.",
		"연기가 이들의 콧구멍에서 흘러 나온다.",
		"검은 드라코니언과 비슷하나 화염저항과 화염브레스를 쓰고 비행후 착륙할때 화염구름이 생긴다."
	],
	"hill giant": [
		" 산악 거인",
		"거인 치고는 약한 편. 마법저항도 약한 잉여. 주문도 못쓴다. 그래도 법사는 요주."
	],
	"hippogriff": [
		"히포그리프 ",
		"말의 하반신과, 독수리의 부리와 머리 그리고 강맹한 날개를 지닌 커다란 괴물.",
		"한번에 공격을 여러번씩 한다. 6층 이전까지는 은근히 위험하나 중반으로 갈수록 고기셔틀로 전락한다."
	],
	"orc priest": [
		"오크 사제 ",
		"베오그의 종. 오크들이 숭배하는 이 고대의 잔혹한 신은 자신을 믿는 종들에게 대적하는 적들의 머리에 천벌을 내린다.",
		"초~중반 가장 위협적인 적 중 하나. 신의 힘을 빌어 공격한다는 설정으로 스마이트 (Smite) 공격을 하는데, 방어도/회피를 무시하고 데미지가 들어간다.(* 막 덤비면 10~20은 그냥 까인다.) 2~3번 맞으면 전사계열도 도저히 버틸 수가 없다! 오크 사제를 만났을 경우 도망가기 보다는 차라리 싸우는게 나은 이유. 물론 2~3명이 한꺼번에 시야에 들어온다면... 0.13버전부터는 힐 오크 유저의 경우 오크 사제를 첫 조우시 처음 한번 한정으로 베오그를 섬길 수 있다. 대신 시작부터 믿는 것은 불가능. 섬길 경우 그 오크 사제와 주위 오크들은 적대적이지 않게 된다. 동료화 자체는 베오그의 권능이므로 그냥 중립화만 된다."
	],
	"fire giant": [
		"화염 거인",
		"화염계열 주문과 무기를 사용하는 거인. 빙결속성으로 썰어주자. "
	],
	"rat": [
		"쥐 ",
		"던전에 서식하는 많고 더러운 설치류",
		"잡몹 1. 깨끗한 고기를 제공한다."
	],
	"corrupter": [
		"타락귀 ",
		"차원 분열(Plane Rend)이란 스킬로 짐승굴,뱀굴,거미굴,늪지,슬라임굴,해안가,등등 모든 서브던전과 모든 던전의 몬스터중 랜덤으로 1d3마리의 몬스터를 소환해대는놈. 다른놈들은 별로 안무섭지만 만일 미라사제라던지 스핑크스라던지 스마이팅을 풍풍 쏘는 놈들을 소환한다면 플레이어의 혈압도 상승하는것이 느껴질것이다.그리고 신체 오염(Corrupt Body)은 역겨운 별(Wretched star)처럼 일시적으로 나쁜 돌연변이를 부여하기때문에 상대할때 귀찮음을 유발시킨다."
	],
	"pearl dragon": [
		"진주 용",
		"선한 신들의 축복을 받은 성스러운 용이다. 판데모니엄에서 아주 희귀하게 다른 천사들과 함께 볼수 있다. 저항이 불가능한 양에너지 브레스를 쏜다. (3d36 + 구름에 서있을 시 턴당 3d12) 언데드나 데몬스폰 캐릭터는 1.5배 데미지를 추가로 입기 때문에 상대하는 것 자체를 포기하는 것이 이롭고, 리치폼을 쓰고 있는 경우에는 리치폼을 빨리 풀어야 살 수 있다. 주변의 천사들까지 고려하면 정말 어려운 싸움이 된다. 전사의 경우 샤이닝 원을 믿는다면 이놈도 중립화가 될 가능성이 크고, 일반 전사라면 크게 약점 잡힐건 없으므로 알아서 싸우자. 법사라면 닥치고 화폭/빙폭 난사로 만사 OK. 다만 같이 있는 천사들이 쓰는 스마이트에 쳐맞고 훅갈 수도 있으니 주의. ",
		"어찌어찌해서 진주 용 가죽을 구하면 판금 갑옷 수준의 AC에 음에너지 저항을 제공하고, 마법 방해도 체인메일 정도밖에 되지 않는 최고급 갑옷을 얻을 수 있다. 만렙 마법사가 파이어 스톰을 쓰면서 입을 수 있는 가장 좋은 갑옷이다. 전사가 입수했다는 것은 이 괴물을 죽일 수 있을 정도로 갑옷술이 높다는 뜻이기 때문에 입고 나서 금방 헤이스트를 쓸 정도까지 마법을 익힐 수 있다. 과거에는 성스럽다는 이유로 저주가 걸리지 않았지만 성스러운 존재의 껍질을 끔찍하게 벗겨 만든 것이라 저주 면역은 없어졌다."
	],
	"vault sentinel": [
		"보물창고 정찰병 ",
		"조심성있는 순찰자들인 이들은 동료들에게 침입자들의 존재를 빠르게 알린다. 이들은 동일한 침입자에게 어디로 도망치건 상관없이 추적으로부터 벗어날수 없게 하는 마법을 걸 수 있다.",
		"플레이어에게 Mark(* 함정으로도 걸릴 수 있는데, 걸리면 맵 전체의 몬스터에게 플레이어 위치가 발각되고 플레이어 쪽으로 오게 만든다.)를 걸 수 있다. 따라서 척살0순위. 체력은 약하니 가능한 한 빨리 처리하는게 좋다. mark는 마법저항력이 높을수록 저항할 확률이 높다."
	],
	"dragon": [
		"용",
		",,\"나는 새가 잘 난다는 것을 안다. 물고기가 잘 헤엄친다는 것도 안다. 짐승이 잘 달린다는 것도 나는 잘안다. 달아나는 자에게는 그물을 칠 수 있고, 헤엄치는것에게는 낚시질 할 수 있으며, 나는 것에게는 화살을 쏘아 올릴 수 있다. 그러나 용(龍)에 대하여는 나는 그것이 어찌 바람과 구름을 타고 하늘에 올라가는지 알지를 못한다. 나는 오늘 노자(老子)를만났다. 그는 용과 같은 존재라고나 할까.\" ,,",
		",,-Life of Confucius,,",
		",,이 용은 두쌍의 맹렬한 날개를 각각의 어께에 달았으며, 날카로운 창날같은 꼬리침이 꼬리에 달려, 그것을 더욱 난공불락으로 보이게 하는구나. 길다란 네개의 손톱과 40개의 날카로운 강철톱니를 지니면서도 어떠한 외피보다도 단단하며 어떠한 환경에도 끄떡없구나.,, ",
		",,\"An Excellent Ballad of a most dreadful Combat, fought between Moore of Moore-Hall, and the Dragon of Wantley\", retold by Ambrose Philips, _A Collection of Old Ballads. Corrected from the Best and Most Ancient Copies Extant. With Introduction Historical, Critical, or Humorous_. 1723.,,",
		"후반부에 주로 나오지만 초반부 던전에서 보스격으로 튀어나오기도 한다. 체력이 일정 이하가 되면 도망가기도 하며, 넉백을 해대서 상당한 짜증을 유발. 용을 잡아 나오는 시체를 분리하다 보면 일정 확률로 가죽이 나오는데, 방어구 강화의 두루마리로 강화하면 그 드래곤에 해당하는 속성의 갑옷을 얻을 수 있다. 속성만 붙는건 아니고 특성도 붙거나 특성만 붙는 경우도 있다. 혹은 운이 좋으면 메인 던전에서도 매우 적은 확률로 가죽이 생성된다. 5층 이하에서도 확인. 공통적으로 진주용을 빼면 용소환 마법을 통해 부리는게 가능하다. 일반적으론 디스가 아니면 보기 힘든 강철용이나 수은용도 튀어나오고, 심지어 황금용도 가끔 튀어나와서 9레벨 마법이라는 이름값을 톡톡히 하는 마법. 0.14이후론 마법이 훨씬 강력해졌다."
	],
	"phantom": [
		"환영 ",
		"거의 투명한, 몇몇 현자들에게 유령의 퇴화 형태로 의심받는 언데드 영혼이다.이들에게는 생전의 기억이 없으며, 거의 가만히 있지를 않는다.",
		"계속해서 이리저리 블링크하는 언데드. 공격력이 10으로 초반 몹 중에서는 꽤 센 편이지만 공격이 맞든 안 맞든 한대 휘두르자마자 블링크해서 거리를 벌리기때문에 체감상 공격력은 훨씬 낮다. 전사계열은 극초반만 아니라면 이래저래 튀어서 잡는게 귀찮은 정도지만 쪼렙 마법사는 마법이 잘맞지도 않고 소환수도 순식간에 털리는 경우가 많아 잘못하면 순식간에 다음장을 볼 수도 있다. 경험치는 그럭저럭 잘 주는 편."
	],
	"giant frog": [
		"거대한 개구리 ",
		"크고 흔치않게 호전적인 양서류, 재빠른 도약으로 사냥감과의 거리를 줄인다.",
		",,안녕, 그대,,",
		",,안녕 나의 님이여,,",
		",,안녕 파티장의 여인이여,,",
		",,사랑의 전선으로 키스를해주오,,",
		",,오 그대, 내 심장은 불타올라요,,",
		",,만일 그대가 거절한다면,,",
		",,그대, 절 잃어버리겟죠.,,",
		",,그러면, 당신은 혼자가되버려요.,,",
		",,그대여, 전화를 해줘요,,",
		",,그리고나서 절 사랑한다 말해줘요”,,",
		",,-Ida Emerson and Joseph E. Howard, “Hello My Baby!”,,",
		"개구리 시리즈중 제일 먼저 나오는 몬스터이다. 6층 전에 나와도 상대하기 힘들고, 그렇다고 뒤에서 나와도 이동속도가 빨라서 귀찮다."
	],
	"siren": [
		"사이렌 ",
		"0.16 패치 이전에는 머메이드(Mermaid)라고 불리었으나 패치이후로 이름이 바뀌었다. 사이렌의 노래라는 귀찮은 마법을 쓰는데, 이것에 걸리면 사이렌으로부터 주변 타일에서 벗어날수가 없다. 만일 주변 몹이 많은데 걸린다면 빠르게 사이렌을 처치하고 도망가자."
	],
	"warmonger": [
		"전쟁인도자 ",
		"강력한 근접 데몬스폰. 그리고 스펠중에 Grand Avatar 라는 스펠은 피할수 없는 공격(2d10)을 해대는 grand avatar를 소환한다 별로 아프진 않지만 그래도 성가시다."
	],
	"giant cockroach": [
		"바퀴벌레 ",
		"쉬익 쉬익 거리는 소리를 내는 거대한 갈색 곤충. 전설과는 다르게 돌연변이성 에너지에는 약하다.",
		"잡몹 2. 쥐보다 아주 약간 체력이 높고 빠르나, 공격력이 약하고 방어력이 낮으며 독에 약하다. "
	],
	"deep elf annihilator": [
		"딥 엘프 파괴술사 ",
		"다른 이들 보다 더더욱 깊이 파괴술과 요술에 능통하며 대단히 재빠르고 공포스럽다. 이들이 시전하는 마법들은 거의 절대로 빗나가지 않을것이다.",
		"렙후딥의 수정창이 얼마나 강한지 모르는 플레이어를 위해 제작자가 제작한 몬스터. 렙후딥의 수정창이 얼마나 아픈지 몸소 체험하게 해주는 짜증나는 놈. 블링크로 도망가는걸보면 아예 유저를 가지고 노는것같다. "
	],
	"apocalypse crab": [
		"파멸의 게 ",
		"불꽃 게처럼 전방위 넓은 범위에 구름을 발사한다. 그런데 그 구름이 혼돈 속성이다. 혼돈의 악마가 죽을 때 내뱉는 구름과 효과가 정확하게 같은데, 그 구름이 넓게 퍼져있으니 정통으로 맞으면 안전한 장소에 도달하기 전에 몇번 혼돈 속성 공격을 당할 수 있다. 몬스터에 둘러싸인 상황에서 맞으면 온갖 부작용에 시달리니 다시 구름을 발사하기 전에 빨리 처리해야 한다."
	],
	"crimson imp": [
		"핏빛 임프 ",
		"화염 면역, 높은 회피율에 이리저리 블링크해대서 잡기 귀찮다. 한가지 팁으로 이들을 계단으로 유인한뒤 이미 클리한 전 층으로 임프와 같이 올라가 그 층에 남겨두는 식으로 처리가 가능하다. 일명 임프 주차(Imp Parking) 방법. 자신이 화염 법사일 경우 초반에 핏빛 임프는 임프 주차 식으로 처리하는게 가장 속편하다. 다른 하위 악마와는 달리 이놈은 무기를 주워서 쓸 수가 있다. 물론 들어봤자 잉여기는 하지만 극초반 법사 계열에겐 상당히 위험하고, 흡수같이 특정 인첸트가 붙은 무기를 들 경우 골치아파진다. 가끔은 회복 물약이나 돈을 들고 나오기도 한다.",
		"악마들중 가장 빨리, 상당히 초반에 등장하는 몹임에도 화염 면역과 상태이상 저항 덕분에 아레나에서 조트의 렐름 5층에서 등장하는, 즉 최후반 몬스터인 화염의 구와 싸우게 해보면 절대로 안 죽고 게임 자체에 문제가 생겨서 꺼지거나할 때까지 싸우는 위엄을 보여준다.  그 탓에 화염술사의 경우 초반엔 처리할 방법이 없다. 보통 Imp Parking이라는 방법을 쓰는데, 임프가 붙었을 때 계단을 올라간 후 임프가 블링크로 떨어지면 다시 내려가는 방식. 진행하면서 냉동 옵션이 붙은 무기를 하나 챙겼다면 백병전으로도 잡을 수 있다."
	],
	"griffon": [
		"그리폰 ",
		"사자의 하반신과, 독수리의 부리와 머리 그리고 강맹한 날개를 지닌 커다란 괴물.",
		",,As when a Gryphon through the wilderness,,,",
		",,With winged course, o’er hill and moory dale,,,",
		",,Pursues the Arimaspian who by stealth,,",
		",,Hath from his wakeful custody purloined,,",
		",,His guarded gold.”,,",
		",,-Milton, _Paradise Lost_, Book II. 1667.,,",
		"히포그리프의 강화형이지만 등장할때쯤에는 이미 고기셔틀이 된 뒤일것이다. 자주 등장하지도 않아서 강화형인데도 히포그리프보다 존재감이 떨어지는 몹이다."
	],
	"demonspawn occupations": [
		"강화된 데몬스폰 칭호 ",
		"이러한 칭호들이 붙으면 이제야 좀 몹이라 부를수 있는 아이들이다. 거의 2급 악마 수준이니 조심하자. 여담이지만 이들 칭호는 악신의 신도에게 주어지는 것이다. "
	],
	"demonic crawler": [
		"악마의 벌레 ",
		"수많은 기다란 다리와 퉁퉁불은 몸뚱아리를 지닌 지옥의 생명체. 셀수없는 다리들을 따라 올라가다보면 인간과 흡사한 얼굴을 지닌 머리부분이 보인다.",
		"땅 마법을 제외한 모든 속성 마법에 저항력이 있어 은근히 성가신 몹. 판데모니움에서 주로 나오긴 한데 거미굴에서도 자주 나온다. 악마 주제에 시체가 남아 판데모니움에서 식량난에 허덕이다 만나면 매우 반갑다."
	],
	"chaos champion": [
		"혼돈의 영웅 ",
		"별로 강력하진 않지만 혼돈의빔을 스마이팅 형식으로 플레이어를 공격하거나 시야의 몬스터중 아무와 자리를 툭툭 바꾸는것이 플레이어를 농락하는것 처럼 보인다. ",
		"  "
	],
	"white imp": [
		"흰색 임프 ",
		"냉기 마법을 쓰는 임프. 별거 없지만 재수 없으면 물약이 터지는 수도 있다. 소환수로 나온 경우엔 쓸만한 전투력을 발휘.  "
	],
	"butterfly": [
		"나비 ",
		"크고 , 아름답게 빛나는 날개를 펄펄 날개짓하는생물. 어두운 던전을 아무런 목적이나 의미도없이 날아다닌다.",
		"항상 혼란 상태인 특이한 몬스터. 기본적으로 1레벨 마법인 나비 소환이나 그 마법을 최대 스펠 파워로 시전해주는 랜덤 효과의 두루마리에 의해 소환되며, 랜덤 인카운터에 의해서 한번에 한무더기씩 등장하기도 한다. 플레이어에게 직접적인 해를 끼치는 일이 일절 없고 무엇보다도 죽여봤자 경험치가 0이라 만나면 그냥 무시하고 지나가는 게 편하다. 플레이어에게 아무런 해가 되지않기때문인지 시야 안에 비우호적인 나비가 있어도 인카운터 상태에서는 불가능해야 정상일 빠른 이동과 휴식이 가능하다. 굳이 해를 끼친다면 좁은 길에서 만날 경우 혼란 상태라 제대로 빠져나가지도 못하고 길막을 한다는 것인데, 가장 자주 보게될 소환술에 의한 나비는 우호적인 생명체라 적들만 막고 플레이어는 그냥 통과할 수 있다. 전투 능력은 회피력이 상당히 높은 것을 제외하면 사실상 없는 것이나 마찬가지이며 이동 속도는 25로 거의 박쥐급으로 빠르다."
	],
	"merfolk": [
		"머포크 ",
		"해안가로 침입한 플레이어들을 막으려드는 해안가의 대다수의 주민. 폴암류와 창으로 공격하기에 플레이어와 2타일 멀리서 먼저 공격하고 들어온다. 종종 그물을 던져 플레이어를 못움직이게하고 푹찍푹찍하고 hp를 깎아대는것이 여간 성가신게 아니다. 아주 종종 보물창고(Vaults)에서 주변에 트로그의 제단이 있을때 광폭화한 머포크를 볼수있다."
	],
	"worldbinder": [
		"차원연결체 ",
		"몸 자체는 매우 허약하지만 중레벨 서브던전의 몬스터를 소환해서 부린다. 전투력이 가장 강한 소환수도 거미굴의 오브 거미나 뱀굴의 가디언 서펀트 정도라 싸움 그 자체는 어렵지 않지만, 혹시라도 보물창고 정찰병을 소환해서 Mark를 걸어버리면... 체력과 저항력이 허약하니 원거리 마법이나 그 외의 수단으로 빨리 죽이면 된다. 0.14에서 소환수는 소환한 시전자가 죽으면 사라지게 변했으니 차원연결체를 먼저 때리면 된다."
	],
	"snail": [
		"달팽이 ",
		"초반 만날 수 있는 적 중에서 체력이 꽤 높고 공격력도 높다. 다행스럽게 달팽이라서 이속은 매우 느리므로 그냥 도망치거나 무빙샷으로 상대할 수 있다. 장창을 들고 있으면 금상첨화. 체력이 낮아지면 껍질 안으로 숨는데, 이 동안은 방어력이 +10으로 뻥튀기되고 체력이 서서히 회복된다. 하지만 공격은 하지 않으므로 그냥 두들겨패면 OK.(* 플레이어 종족 중 하나인 가고일 또한 초기에는 비슷한 능력을 가지고 나올 계획이었으나, 이러한 약점이 지적되어 실제로 업데이트되었을 때는 이 능력 대신 밀치기 공격을 받아도 넉백되지 않는 능력으로 변경되었다.] 민달팽이와 별 다를 점이 없단 이유로 0.14 버전에선 삭제. 이후 Agate Snail이라는 이름으로 부활했는데, 시야에 들어오는 플레이어에게 슬로우를 거는 강력한 디버퍼로 재탄생했다. 이걸 벗어날려면 정지의 부적을 껴야 회피가 가능. [* 당연히 개미맨 역시 해당되지 않는다.)"
	],
	"purple draconian": [
		"보라색 드라코니언",
		"파충류의 꼬리와 작은 날개를 지녔으며 보라색 비늘로 덮여 있는 근육질의 인간형 생명체다.",
		"이들의 윤곽은 마법 에너지로 희미하게 빛난다.",
		" 마법 저항에 버프 무효화를 거는 꽤나 빡치는 녀석. 이외는 검은 드라코니언과 동일. 브레스는 요술마법 계열로 저항이 불가능하니 주의.",
		"초반에 어비스에서 만나면 은근히 스트레스 받게 한다.."
	],
	"sixfirhy": [
		"식스파이리 ",
		"핏빛 임프와 비슷하게 빠르고 높은 회피율을 지닌 악마. 전격 공격을 한다. 오크 광산에서 상급 오크 사제나 오크 소서러가 불러내기도 하는데, 전격공격이 저항이 없으면 상당히 아픈 속성인데다가 식스파이리는 무지하게 빠르므로 주의가 필요하다.",
		"여기서부터 정신줄놓고 tab질하다간 피보는 경우가 많다. 3급 악마 대부분은 특정 속성이나 마법, 돌연변이 저항이 없을 경우 상대하기 상당히 버겁다."
	],
	"ogre mage": [
		"오우거 마법사 ",
		"마법 사용에 노련한 희귀한 오우거다. 이들이 주로 일족의 족장을 맡는다.",
		"던전 중~후반, 그리고 오크광산에서도 나오는 깡패. 무엇보다 마법이 쎄다! 체력은 오크 기사랑 비슷한데, 레후딥의 수정창''' 같은 것도 쓰고 '''추방도 쓴다. 거기다 투명화, 감속, 혼란...",
		"오우거 무리와 같이 나오는 경우가 많다."
	],
	"rust devil": [
		"부식의 악마 ",
		"기존에는 철의 악마였으나, 너무 잉여하다는 이야기 하에, 재설계된 악마. 주로 부식 공격을 가한다.... 최후반에도 어느정도 부식저항이 필요해진 이유"
	],
	"polar bear": [
		"북극곰 ",
		"흰색으로 반짝거리는 털로 뒤덮힌 크고 강력한 흰색 곰. 추운 지역에서 거주하며 다른 모든 곰들과 마찬가지로 만일 심각한 상처를 입거나 공포에 질린다면 광기에 휩싸이게 될것이다.",
		"일반 곰의 강화형 2. 북극곰이라 그런지 얼음 동굴에 자주 등장하며, 수영이 가능하다.",
		"검은곰과 마찬가지로 공포나 심각한 상처를 입는다면 광폭화에 걸린다."
	],
	"adder": [
		"뱀 ",
		"평범한 던전의 뱀이다. 이 부류의 파충류들은 지하에 은거한다.",
		"이동 속도가 빠르고 독을 거는 초반 난적. 예전 버전에선 약간 위험한 정도의 적이었으나 0.15버전에서 독 중첩이 포풍같이 버프를 받은 덕에 지그문트 못지않은 초보 학살자로 돌변했다. 광전사라도 싸우는 중에 빨간 독 중첩이 걸리면 답이 없을 정도."
	],
	"pandemonium lord": [
		"판데모니움 군주",
		"(* 위키에서 보이는 이 이미지는 페이퍼돌 조합의 예 중 하나일 뿐, 실제로 나올 수 있는 조합은 무려 머리 타일 27개X몸통 타일 13개 X날개 타일 13개로 총4563개이다! 흠좀무... )",
		"판데모니움의 무한히 거대한 건물들에 거주하는 강력한 악마들로. 각자 다른 능력과 약점을 가지고 있다.",
		"이름 그대로 판데모니움의 군주격 존재들. 여러가지 페이퍼돌을 조합해서 만들어지는 특수 외형과 고유 이름을 가지고 있는 랜덤 네임드 몬스터군으로, 한 층에 하나 정도가 등장한다. 판데모니움 군주 자체도 더럽게 강할 뿐더러 대부분의 군주가 1급 악마 서너마리는 기본으로 나오는 악마 소환 주문을 시전하기 때문에 어떻게든 안 만나거나, 만났다면 다른 몹들을 전부 제치고 일점사해서 죽이는 것이 좋다. 고정 네임드로는 세레보브, 그록스 블루크, 롬 로본, 므놀렉, 일명 4대 군주가 있다. ",
		"이전에는 거대한 하마 이미지였다.",
		"축하한다! 이 몬스터를 게임에서 보고 있다는것은 이미 당신의 캐릭터는 강력하고, 갖은 위험을 뚫고, 이곳. 판데모니엄에 도착한 역전의 용사라는 셈이다! 데몬스폰들은 속성이 악마이기에 성속성 공격에 매우 취약하다. 용인과 마찬가지로 직업+변이의 구조로 패턴이 결정된다. 용인과 마찬가지로 간혹 칭호가 없는 놈들이 있다."
	],
	"basilisk": [
		"바실리스크",
		"중간정도의 크기를지닌 도마뱀. 바실리스크를 응시한자는 끔찍한 마비에 겪을것이다",
		",,그들을 황가의 바실리크스로 보아라. 당신들을 모호한 상처를 입혀 죽게할것이다.,,",
		",,압력을 응시하며, 절망의 때를 두려워하라.,,",
		",,경악에 쌓인 그녀를 대지의 원반에서 전달하라.,,",
		",,두려워말라. 그러나 응시하라.-자유민의 힘이 솟아 오르기위하여.,,",
		",,그리하여 노예들은 점점 허약해질것이고, 적들을 응시할것이다.,,",
		",,만일 희망과 진실이, 그리고 정의가 닿는다면.,,",
		",,당신들은 위대해 질것이다.-모두를 찬양하라!,,",
		",,-Percy Bysshe Shelley, “Posthumous Poems”. 1824.,,",
		"제작진이 히드라에 이어 만든 짐승굴 고문도구. 석화를 건다. 주변에 야크떼라도 있을 경우 처참하게 찢기는 풀레이어를 볼 수 있다."
	],
	"putrid demonspawn": [
		"부패한 데몬스폰 ",
		"데몬스폰의 변이중 하나인 Powered By Death와 비슷한 메커니즘의 패시브를 들고 있다. 판데모니엄이나 종종 Depths의 입구에서 만날수있다."
	],
	"ironbrand convoker": [
		"강철인장 소환사 ",
		"무늬가 새겨진 갑옷으로 온몸이 덮인 마법사 수호병인 이들은, 멀리 떨어진 동맹들을 부르는 주문을 암송하고 그들을 이상한 힘으로 채울 수 있다.",
		"플레이어를 발견하면 마법으로 몬스터를 3~4마리 소환'''하는 마법과 '''힘강화 마법을 걸어준다.  네임드도 이 소환의 대상이 되기 때문에 마라나 보리스, 메나스같이 강한 네임드를 불러오면 대략 정신이 멍해진다. 소환마법은 특수지형에 갇힌 몹도 불러오기 때문에, 재수없으면 볼트 1층에서 convoker를 메인던전으로 끌고나왔는데 마크레브의 제단 특수지형 안에 갇힌 처형의 악마를 소환한다거나 하는 상황이 벌어지기도 한다. 소환 마법은 시전하는데 2~3턴간 시간이 걸리므로 정찰병과 마찬가지로 빨리 죽이는게 좋다. "
	],
	"deep elf knight": [
		"딥 엘프 기사 ",
		"다양한 전투를 치르고 강력해진 딥엘프 전사이다",
		"강력한 딥엘프. 딥엘프 전사보다 강하고 딥 엘프 전사와 마찬가지로 오크 마법사가 쏘는 마법까지 사용할수 있다. 높은 확률로 헤이스트를 걸고 나오니 주의하자"
	],
	"orc high priest": [
		"상급 오크 사제 ",
		"많은 사악한 의식을 섭렵한 오크의 신 베오그의 승격된 종이다. 베오그는 이들에게 지옥의 존재들까지 하사한다.",
		"오크광산 난이도를 올리는 주범 2. 이녀석도 악마를 불러낼 수 있는데, 보통 4층, 운 나쁘면 3층에 나와서 오크 고기방패를 두르고 있는 경우가 많다. 스마이트도 더 쌔고(1d13으로 1d8인 오크사제보다 높다) 적당히 시야에서 벗어나는 것이 좋다."
	],
	"deep elf summoner": [
		"딥 엘프 소환사 ",
		"치명적인 독물들을 소환하는것에 정통한 딥엘프",
		"거미굴 몹들을 소환해대는 귀찮은 몹. 본체의 공격력은 하찮은 수준이니 소환물을 죽이는것보다 빨리 이놈을 죽이는것이 더 현명하다."
	],
	"swamp worm": [
		"늪지 벌레 ",
		"거대한 끈적거리는 벌레. 더럽고 냄새나는 몸으로 늪지를 더더욱 더럽히는 중이다.",
		"늪지대나 보물창고에서 종종 보이는 벌레이다. 호구몹중 하나. 독저항이 없어서 독바늘 등이 있다면 유용하다. 자체 스팩은 약해서 일단 붙으면 그냥 잡아죽일 수 있는데, 물 속에 숨어서 평소에는 보이지 않기 때문에 바로 코앞까지 다가가야 잡아죽일 수 있다. 물 속에 있는 경우는 물에 조금 더 짙은 색으로 표시되므로 위치는 금방 파악할 수 있다.",
		"이래저래 별거아닌 몹이지만, 늪지를 돌아다닐때는 상상이상으로 짜증이 나는데, o(자동모험)버튼을 눌러서 자동이동을 할려고 하면, 이놈들이 근처에 있을 경우 주변에 몹이 있으므로 자동모험이 안통하기 때문이다. 그렇다고 탭질해서 얼른 죽이고 갈려고 하면 시야에 보이지가 않기 때문에 찾아가서 죽이지도 않는다! 자동모험버튼도 탭버튼도 안먹을때는 십중팔구 이놈들이 근처에 있는데, 일일이 근처로 직접 이동해서 죽여야 해서 쓸데없이 귀찮음과 짜증을 유발하는 몬스터."
	],
	"white draconian": [
		"백색 드라코니언",
		"파충류의 꼬리와 작은 날개를 지녔으며 백색 비늘로 덮여 있는 근육질의 인간형 생명체다.",
		"냉기가 이들의 콧구멍에서 흘러나온다.",
		"냉기계열 브레스를 사용하는 녀석. 그 이외는 다른 놈들이랑 얼추 비슷하다. 참고로 냉기 브레스는 AC를 무시하니 주의."
	],
	"spiny frog": [
		"가시 개구리",
		"이 개구리들은 작은 늑대같은 크기를 자랑하며, 자그마한 가시들로 덮힌 피부와 독액이 뚝뚝 떨어지는 이빨로 무장하고있다.",
		"짐승굴 초반층 단골손님으로 보통의 거대개구리와 비슷하겠거니 하고 방심할 수 있는데 어중간하게 탭치고 있다간 그냥 골로간다. 기본적인 공격력도 개구리에 비해 매우 막강하고 독공격을 하기때문에 짐승굴 초반에 만나서 방심하다간 아픈꼴을 보게된다. 초반 짐승굴 주의요망 몬스터."
	],
	"death ooze": [
		"죽음의 분비물 ",
		"다량의 썩어빠진 살덩어리들로 이루어진 유기체. 조금만 닿아도 부패해버릴듯한 유기물질을 뿜어댄다.",
		"속도도 빨라서 도망치기도 힘들고, 그렇다고 싸우자니 부패효과가 있는 더러운놈. 전사들에게는 고난을, 법사들에게는 뭐 별로 무섭지도 않은 놈이다. 그나마 이놈은 마법저항이 별로 없어서 전사나 마나가없는마법사는 멀리서 완드류나 원거리 무기를 써서 체력을 깎고 전투에 돌입해보자. 죽음의 분비물은 속성이 언데드라 디스펠 언데드 스킬이나 신성 속성이있는 무기에 취약하다. 부패 효과는 음에너지 저항이 낮을때 일어나므로, 음에너지 저항이 충분하다면 그렇게 위력적이지 않다."
	],
	"killer bee": [
		"킬러비 ",
		"거대한 벌. 여러번 빠르게 찔러넣을수있는 치명적인 맹독을 지닌 독침을 꽁무니에 달고있다.",
		"초반 난적. 기본적으로 여러마리가 몰려다니는데다가, 이동 및 공격 속도도 매우 빠른 편이고 독까지 걸어댄다. 물론 일정수준 이상의 방어력과 독저항을 갖춘 전사에게는 날파리에 불과하다. 법사도 '독의 연소'마법만 있으면 날아다니는 경험치로 보일것이다."
	],
	"mimic": [
		"미믹 ",
		"아이템이나 계단같은 특수 타일로 변장하고 속은 플레이어블 캐릭터가 접근해오면 갑자기 입을 달고 공격해온다. 4층에 진입하자마자 만신전 입구가 있거나 초반에 고급 아이템이 툭 떨어져있기에 걸어갔더니 미믹으로 변해 공격해와서 플레이어를 분노케하기도 한다. 조이기가 있어서 위험한 상황에 문이나 계단으로 변장한 미믹한테 걸리면 짜증난다. 서브던전 입구로 위장한 경우는 주변 특수 지형이 상당히 유사해서 쉽게 속아 넘어가며 미믹이 등장하는 특수 지형으로는 좀의 제단이 대표적. 아이템과 포탈, 문, 석상, 그리고 심지어 룬까지 미믹일 수 있다. ",
		"타일 버전으로 플레이할 경우 등급이 높은 미믹일수록 촉수(...)가 엄청나게 많이 붙기 때문에 보기에 징그럽다. 계단이 미믹이면 기분이 드러울 수 밖에 없다. 패치로 인해, 미믹은 더 이상 공격을 하지 않고, 미믹임을 들킬시 먼지처럼 사라진다. 그 이후론 같은 아이템은 다시 미믹으로 나타나지 않는다."
	],
	"reaper": [
		"사신",
		"거대한 낫을 든 해골형의 존재다.",
		"이들은 당신의 영혼을 뺴앗기 위해 왔다!",
		"낫을 들고서 2칸 밖 거리에서 공격한다. 돌죽에 들어서 체력과 근접 공격력이 바위 거인 수준으로 크게 향상되었다. 죽이면 들고 있는 낫을 빼앗아 쓸 수 있지만, 이 녀석을 죽일 수 있는 캐릭터라면 대개 괜찮은 무기나 마법을 갖춘 상태이기 때문에 별로 아쉽지는 않을 것이다. 대신 항상 인첸이 되어있는 낫만 떨군다. 문제는 옵션이 랜덤이라 왜곡이나 흡수 속성을 들고 나오는 거지같은 경우도 있다. ",
		"혼자서도 상황에 따라 만렙 유저를 죽일 수 있고, 2마리 이상과 싸우면 굉장히 위험하다. ",
		"따라서 혼자 유인해서 빠르게 척살할 것. 때에 따라서는 데미지 최강인 레후딥의 수정창도 버티는 경우가 있다."
	],
	"draconian annihilator": [
		"드라코니언 파괴술사",
		"드라코니언 파괴술사는 이들을 앞길을 가로막는 모든 이들을 파괴 하기 위해 생명을 빼앗아가는 브레스 뿐만 아니라 강력한 파괴마법을 사용한다.",
		"...탁탁거리는 소리를 내는 순수한 에너지의 구체는 윙윙거리며 비늘로 덮인 이들의 주먹과 팔을 왕복한다.",
		" 몸빵까지 되는 딥엘프 파괴술사 심지어 AC도 10이다!! 사용 마법은 딥엘프 놈과 동일."
	],
	"dancing weapons": [
		"춤추는 무기 ",
		"살아 움직이는 무기. 무기의 등급이 높을수록 체력과 데미지가 당연히 높다. 무기라 그런지 마법 저항력이 굉장히 높다. 땅속성 제외한 모든 속성 마법에 2단계 저항을 가지고 있다! 주로 칼날의 방에서 나오지만 가끔 메인던전에서도 나온다. 속도도 빨라 이래저래 귀찮은 몹. 일정 확률로 왜곡속성까지 붙어서 나오면 굉장히 위험해지는데, 왜곡무기가 다 그렇듯이 맞으면 일정확률로 어비스관광을 가게되기 때문. 칼날의 방이 기피되는 이유중 하나. (* 사실 칼날의 방에 도달할 때면 트로그나 오카와루를 믿으면 이미 자기가 후반까지 쓸 무기는 신이 하사해줬을 것이다. 춤추는 활이나 석궁등은 없어 원거리 캐릭은 칼날의 방을 갈 메리트가 없고, 속성 저항이 덕지덕지붙은 무기가 빠른 속도로''' 플레이어에게 다가오는데 법사 계열에게는 상대하기 굉장히 버겁다. 그리고 칼날의 방을 완전 넘겨도 27레벨을 찍는데는 전혀 문제가 없다.) 그렇다고 여기 엄청난 보물이나 룬이 있냐면 또 그건 결코 아니라서.. 어쨌든 무기를 잡으면 허공에서 떨어져 집어쓸 수 있으니 칼날의 방에 당도할 때까지 정말 불운하게 쓸만한 무기를 못 얻었다면 잠깐 다녀오자. 좀은 간혹 플레이어블 캐릭터가 든 무기를 '''적대적인 춤추는 무기로 만들어버리는 만행을 저지르기도 했으나, 0.12 버전부터는 좀이 플레이어에게 좀더 우호적으로 바뀜에 따라 그런 끔찍한 일은 없고, 설사 춤추는 무기로 만들더라도 적대적이긴 않게 되었다."
	],
	"draconian": [
		"미성숙한 드라코니언",
		"파충류의 꼬리와 작은 날개를 지녔으며 갈색 비늘로 덮여 있는 인간형 생명체다. 이들은 아직 성숙체의 뚜렷한 색과 브레스를 발달시키기에는 미성숙하다.",
		"워낙에 약한지라 출현빈도는 오히려 적다. 날지도 못하고 브레스도 못쏘며 무엇보다 저항이 구리다(...)"
	],
	"golden dragon": [
		"황금 용",
		"일반적으로 나오는 용 중에서는 최강의 용. 랜덤하게 모든 속성중 하나의 브레스를 쏴댄다. 물론 진주용이나 그림자 용처럼 음/양에너지 브레스는 제외. 자체 전투능력도 강철용급이라 상당히 강하다. 쓰러뜨리고 얻을수있는 가죽을 방어구 강화 스크롤로 강화하면 용 갑옷중에서 최강의 갑옷인 황금용 갑옷을 얻을 수 있다. 마법 방해가 최고 수치이긴 하나 화/냉/독 저항을 세트로 주고, 자체 AC도 수정 판금 다음이라 랜다트 수정판금이라도 건지지 않은 한 전사계열의 최종갑옷으로 매우 적합."
	]
};

namedmondic = {
	"Terence,  the Incautious": [
		"쾌락과 돈을 위해 살인을 하는, 폭력적인 살인마다. 테렌스는 하던 일이 실패하여 어딘가로 숨을 수밖에 없었으며, 자신의 얼굴을 본 자가 던전을 살아서 빠져나가게 놔두지 않는다. 그의 목에는 현상금이 걸려있기 때문이다.",
		"표기에 따라 테런스,테렌스. 이름이 붙은 몬스터 중 가장 약한 축에 속한다. 템빨을 가장 많이 받는 놈으로, 어설픈 장비를 갖고 나오면 한방에 경험치로 산화하나, 가끔씩 음에너지 속성이 붙은 무기나 강화가 많이 된 플레이트 아머 등 좋은 장비를 갖고 나와서 사람을 당황하게 만든다. 들이대기 전에 장비부터 살펴보자. 가장 약한 축에 속하는 만큼 경험치는 오크 9마리분밖에 안 된다."
	],
	"Aizul": [
		"고대의 수호자중 하나로써 전설의 보물을 지키고 있었으나, 그가 잠든 사이 도둑들이 들이닥쳐 보물을 훔쳐갔다. 이제 아이줄은 던전을 돌아다니며 모든 도굴꾼들에게 복수하려 하고 있다. 아이줄은 훌륭한 마법사이나, 근접전투 역시 누구와도 견줄 수 없을 정도로 강하다.",
		"나가 수호자 네임드.  수면 마법을 건 다음 강력한 독으로 말려죽인다. 마법 저항이 최소 2단계 이상은 갖춰줘야 상대할 만한 적.",
		"슬립 마법으로 플레이어를 재운다음 조이기 + 줘팸 + 독뿜뿜 이라는 삼종신기를 시행하므로, 독저가 있어도 마저가 안된다면 재우고 일어나면 다음장. 을 볼 수 있는 상황이 쉽게 나온다... 슬립은 실질적으로 마비와 똑같기때문에.... 마법저항은 필수. 독저는 저항의 물약으로 커버가 가능하므로... 독저가 있든 없든... 있으면 좋고 없으면 큐어링 몇발 장전을 해두는게 좋다. 네임드 자체는 그리 쌔진 않지만, 마비와 같은 슬립이 있기 때문에 상당히 위험한 수준."
	],
	"Arachne": [
		"||설명||한때 최고의 인간 방직공이었던 아라크네는 저주를 받아 반사람 반거미의 모습으로 변해버렸고 더이상 나이를 먹지 않았다. 한때 아름다운 여성이었지만 지금은 괴물의 다리를 가진 거대한 거미괴물일 뿐이다.",
		"수천년의 세월동안 아라크네는 마법과 기술들을 익혔다. 그녀가 거미줄과 마법으로 적을 제압하면 그녀의 애완동물들이 덤벼들고, 곧 당신은 말라죽어버릴것이다.||",
		"거미굴에서 반드시 등장하는 네임드. 뭔가 무시무시해보이지만 딱히 저항도 없고, 도망다니지도 않으며 부하를 우글우글 몰고다니지도 않는다. 다른 고정 네임드인 해안가의 일스이우나 뱀굴의 라미아에 비해 많이 약하다는 평.",
		"독마법 지팡이를 반드시 드랍한다. 독저항 없이 거미굴에 들어온  마법사라면 독저항템으로 쓸만하다."
	],
	"Grinder": [
		"이전에 지옥에서 고문사 일을 하던 섀도 임프. 불평을 하거나 헛소리를 늘어놓는 경향이 강하다.",
		"특이하게 매우 호전적인 임프. 한 차례 능력치가 강화되어 아래 설명할 지그문트와 거의 동급의 전투력을 지니게 되었다. 오히려 상태이상이란 상태이상은 다 걸려서 대항책만 있다면 은근 호구인 지그문트에 비해 그냥 닥치고 때려잡는 것 외엔 방법이 없는터라 어찌보면 더 잡기힘들다.",
		"마비와 블링크를 쓰면서 공격해서 전사의 경우 따라붙기가 힘들다. 독저항과 2단계 냉기저항이 있으니 냉기술사나 독술사는 필히 피할 것.",
		"3층부터 등장해서 초보자에게 절망을 선사한다. 마비를 걸고 때리는데 아주 강하다. 고통(Pain) 효과가 붙어 있어서 더 그렇다. 초반엔 광전사 제외하면 거의 이길방법이 없으므로 알아서 잘 피하는게 좋다. 최신 버전에서는 지그문트와 킬수가 거의 비슷하다. --그라인더 피하다가 지그문트 뜨면 그날 게임 접고 싶어진다-- 악마인만큼 신성 공격에 약하나 이맘때쯤엔 신성 공격이 갖춰졌을 리가 없으니 더 어렵다. 대신, 이렇게 어려운 만큼 경험치는 짭짤하다. "
	],
	"Mara": [
		"이 크고 강력한 악마는 마라, 환영의 군주, 꿈꾸는 자로 불린다. 마라는 매우 정교한 환영을 만들어 낼 수 있으며, 아주 강력한 전사나 마법사라도 모든 것을 망각하게 만들 수 있다.",
		"특이한 네임드. 전용 스킬인 환각(Mislead)을 가지고 있으며 본인을 환영복제한다. 심지어는 플레이어도 복제할 뿐만 아니라 악마의 무기, 강력한 화염주문도 있기 때문에 사실상 보자마자 피하는 게 좋다. 마라 본인도 힘든데 플레이어 복제품까지 나오면 아무리 좋은 캐릭터라도 순식간에 다음장을 볼 수도 있다. 다만 자신을 복제하더라도 시체가 남는 본체만 잡아놓으면 다른 분신은 시간이 지나면 사라진다. 전사라면 무기를 놓고, 마법사라면 큰 방패를 끼자. ",
		"망각 스킬은 주변의 몬스터들이 죄다 이상한 모양으로 보이게 만든다. 예를 들면 고블린이 그림자 용으로 보이게 만들거나...",
		"싸우려면 상당히 골치아픈 네임드 중 하나로 고전게임 갤러리에서는 더러움의 대명사(...)로 통하고 있다. 왠만하면 피하는게 상책이다.",
		"전사라면 마라가 플레이어를 복제할 때 까지 휴대용 빵 등, 공격력이 0에 수렴하는 잡동사니를 들고 버티면 마찬가지로 공격력이 0에 수렴하는 복제품이 나온다. ",
		"이름은 로저 젤라즈니의 소설 '신들의 사회'의 등장인물에서 따왔다."
	],
	"Norris": [
		"편안한 죽음을 신봉하며, 그을린 피부와 부드러운 목소리를 가졌다. 사실 노리스는 당신이나 자신 중 누가 죽건 신경쓰지 않는다. 둘 다 죽는쪽을 최선이라고 생각하는 것 같다.",
		"마비를 걸거나 플레이어의 지능을 떨어뜨리고 스마이트(7d17)까지 사용 가능하다. 투명화와 혼란도 사용. 별 상관은 없으나 이름 때문인지 왠지 2D 도트 이미지가 척 노리스와 비슷하다. 설정때문인지 신성 공격에 약하다."
	],
	"Nessos": [
		"사악하게 빛나는 눈을 가진 검은 켄타우로스 전사.",
		"무조건 불 속성이 붙은 장궁을 드랍한다. 원거리에서 활로 공격하는데 불화살을 쓰기 때문에 스크롤을 태워먹는다. 블링크와 헤이스트까지 사용해 전사계열이라면 처리하기 굉장히 까다로우니 주의. ",
		"자신의 독기어린 피를 바쳐 헤라클레스의 몸에 타오르는 고통을 줬다는 설정 때문에 크롤의 모든 몬스터 중 유일하게 불/독 이중 속성 화살을 날린다. 이는 네소스 고유의 기술로, 네소스의 활만 가지고서는 사용할 수 없다.",
		"투명감지가 없으므로 투명화를 적극적으로 사용해주자. 마법 저항이 중반 네임드 치고는 상당히 낮으므로 완드로 마비나 혼란을 거는 것도 좋은 방법. 아이템 보존 개념이 없어진 버전부터는 스크롤 걱정을 하지 않으며 잡을 수 있게 되었다."
	],
	"Serpent of Hell": [
		"||설명||게헨나: 온 몸이 지옥의 불길로 빨갛게 타오르는 거대한 용이다. 게헨나와 게헨나를 태우는 불길을 나타내는 살아있는 상징이다.",
		"코키투스: 하얗고 거대한 용이 내뿜는 한기를 헤쳐 한 발자국 떼는 것도 일이다. 얼음 비늘에서 반사된 빛에 눈이 부시고 눈물이 따갑게 얼어붙어 눈을 뜨기조차 힘들 지경이다.",
		"타르타로스: 한치 앞을 내다볼 수 없는 어둠 속에서 자주색 눈 두개가 섬뜩할 정도로 날카롭게 당신을 바라보고 있다. 어디부터가 용이고 어디까지가 어둠인지 가늠하기 힘들지만, 용의 길게 배배꼬인 몸으로부터 손으로 만져질 듯한 악기가 뿜어져나오고 있다. ",
		"디스: 군대 하나를 전부 무장시킬 수 있을 정도의 수많은 칼로 된 이빨과, 하나하나가 가장자리에 날이 선 방패같은 비늘을 가진 괴수이다. 한 쌍의 감정없는 크롬 눈이 당신을 응시하고 있다.||",
		"원래는 게헨나 7층에서 등장하던 몬스터. 0.11 버전 이후는 4대 지옥 중 하나에서 무작위로 등장한다. 등장하는 지옥의 배경에 맞는 속성 브레스를 발사하고, 배경의 속성에 대해 완벽한 면역성을 지닌다. 자세한 특성은 아래와 같다.",
		" * 게헨나: 헬파이어 브레스, 화염 면역",
		" * 코기투스: 얼음 브레스, 얼음 면역 ",
		" * 타르타로스: 부패 브레스, 드레인 볼트, 산성 브레스",
		" * 디스: 저항 불가능한 에너지 브레스, 강철 파편 브레스",
		" 지옥의 숨겨진 보스 ",
		".16 패치로 인해서 대가리가 3개로 늘어났는데, 늘어난 대가리로 하는짓이.. 브레스뿜기.",
		"고로 플레이어는 지옥의 고룡을 보자마자 게헨나면 헬파,브레스,헬파 라는 3연타를 제일 먼저 맞고 시작해야한다. 다른곳도 마찬가지다. 무조건 브레스 먹고 시작해야한다..... 당연히 브레스 역시 3D40 짜리 특제 브레스를 뿜으므로.. 그나마 디스의 브레스는 좀 약하기에 메탈 스플린터 라는 특제 주문을 직접 날려주신다! 그것도 두발이나! 게다가 이것만으로 끝나는 것이 아니며, 드래곤 콜로 인해서 계속 친구용들을 뽑는다.. 황금용까지 나오므로 빠르게 처리하는것이 좋다. 솔직히 다른곳은 몰라도 디스나, 게헨나에서 싸워야 된다면 웬만한 지옥의 군주와 비슷하다고 가정하에 적당한 도핑으로 잡는걸 추천. "
	],
	"Nikola": [
		"전기를 연구하던 똑똑한 과학자. 완벽한 전기골렘을 제조하려는 시도를 했으나 끔찍한 사고를 당했고, 정신이 나가버렸다.",
		"설명이나 이름처럼 전기 계열 마법을 구사하며, 망토와 전기 속성이 붙은 무기를 드랍한다. 가끔은 장갑도 드랍하는데 대부분 인챈트가 붙은 장갑. 종종 인챈트 붙은 망토가 나오는 덕에 잡을까 도망칠까 꽤나 고민하게 만들기도 한다. 전기 저항이 갖춰져 있다면 매우 쉽지만 없을 경우 체인 라이트닝이 자신-니콜라-자신-니콜라 식으로 5번쯤 튕겨서 농담이 아니라 진짜 한턴만에 죽을수도 있다. 저항 포션까지 없다면 가급적 피하는게 좋다. 나비 소환이 있다면 나비무리를 소환해서 체인 라이트닝 데미지를 경감하는 꼼수가 있다.",
		"이름은 당연히 니콜라 테슬라에서 따왔다."
	],
	"Margery": [
		"경쾌해 보이는 마법사로, 그녀는 거의 옷을 입지 않았다! ...그 대신 상당한 보호력을 제공하는 용갑을 입고 있다. 그녀에게 넋이 나가 따라다니는 남자들도, 전투에서는 상당히 강한 모습을 보일 것이다.",
		"다수의 헬나이트를 동반하고 나타난다. 일단 헬나이트들을 다 떨어뜨려 놓은 뒤 1대1로 상대하면 그리 어렵지 않지만, 개활지에서 만났다면 상당히 강력. 1자 통로라고 해도 뒤에서 삼지창으로 찔리며 싸우는 경우도 종종 생긴다.",
		"자체 전투력은 그리 쎈편은 아니고 기사들 뒤에서 불마법을 쏴대는게 짜증나는 정도이므로 화염저항이 있다면 쉽게 상대할수 있다.",
		"높은 확률로 데몬 계열 무기와 용갑옷을 들고 나오므로 고렙 데몬스폰과 샤이닝 원 신도에게는 그저 데몬 웨폰 셔틀에다가 갑옷셔틀이 돼버리기도 하는 비참한 네임드.",
		"거의 옷을 입지 않았다는 묘사 때문인지 링크2"
	],
	"Joseph": [
		"용병처럼 보인다.",
		"인챈트된 슬링을 들고 나와서 불붙은 돌멩이 따위를 마구 날려대는데, 개활지에서 만났다면 꽤 위험하다. 대신 근접무기는 육척봉이므로 빨리 달라붙는게 최선."
	],
	"Urug": [
		"건방진 오크. 우루그는 그의 한 쪽 눈을 하피와 싸우다가 잃었고, 그들을 남김없이 죽이겠다고 맹세했다. 불행히도 그의 나머지 눈도 그다지 상태가 좋지 않고, 그는 당신을 그 하피들 중 하나로 오해하고 말았다.",
		"오크 전사와 기사의 중간 정도 되는 녀석. 스톤 수프에서는 종종 투창(Javelin)을 들고 나온다. 툭툭 맞으면 매우 아프다. 당연히 베오그 신도라면 동료로 삼을 수 있다. 다만 워로드로 크질 못하는데다 기사보다도 능력치가 좀 딸려서 중반이후엔 전혀 쓸모가 없으니 주의."
	],
	"Roxanne": [
		"마법 시전에 실패하여 실종됐다는 유명한 대지술사를 닮은 아름다운 사파이어 석상. 손에 책을 쥐고있다.",
		"철괴 화살, 레후딥의 수정창, 마그마 화살 같은 상급 대지마법을 구사한다. 특히 레후딥의 수정창은 매우 위협적. 플레이어를 블링크로 자신에게 끌어당길 수도 있다. 일반적인 석상과 달리 분해완드도 안먹히니까 그냥 때려부수는 수밖에 없다. 전사라면 방패술이 높지 않으면 무조건 피하고, 마법사라면 정지의 부적을 낀 후 OOD로 날리는 게 정석. 화염구나 화염 폭풍 같은 마법으로는 백날 때려도 HP가 잘 깎이지 않는다.",
		"손에 책을 쥐고있다는 설정답게 부수면 무조건 마법책을 드랍했는데, 반드시 석상폼(Statue Form)마법이 들어있으므로 석상-체이 조합을 원하는 몽크/대지술사들의 훌륭한 마법셔틀이었다. 0.17 트렁크 버전 기준으로는 책을 드랍할때도 있고 안할때도 있다.. 변이술사 다 죽게 생겼다 이놈들아",
		"돌죽을 실행시키면 처음 나오는 표지에 가~끔 록산느가 등장하기도 한다. 사족으로 하는 대사를 들어보면 영원한 삶을 원해 무언갈 했는데 실패하건 속아넘어간 탓에 본의아니게 이런모습이 되버린 모양."
	],
	"Murray": [
		"사악한 해골이 던전 바닥 위에서 천천히 돌고 있다.",
		"저주받은 해골의 유니크 버전으로 지옥의 아가리에서 등장한다. 이 쪽은 저주받은 해골과는 다르게 움직일 수 있다. 일반 저주받은 해골처럼 언데드 소환, 고문 주문을 사용. 이름은 원숭이 섬의 비밀]] 시리즈에 등장하는 [[머리에서 따왔다. 생긴 것도 비슷하다."
	],
	"Jorgrun": [
		"딥 드워프 마법사다. 대지 마법에 부분적으로 능숙해 있다.",
		"리의 신속 해체술 , 섀터, 석화 등등 강력한 대지 마법을 사용하는데, 특히 가고일, 석상폼 플레이어, 체력이 낮은 법사 플레이어는 조심하자. 다만 가고일의 경우 비행이 가능한 레벨에 만났다면 석화랑 분쇄를 씹으므로 별로 무서울 건 없다. 딥 드워프인만큼 자체적으로 체력을 회복하지 못한다.",
		"||||"
	],
	"Cerebov": [
		"흉폭하고 분노에 찬 악마 세레보브는 거대하고 뒤틀린 검을 들었으며 빛나는 황금색 갑옷을 입은 거인으로 보인다.",
		"판데모니엄의 4대군주 중 불의 지배자. 불의 조트 룬을 지키고 있는 거인. 죽이면 고정 아티팩트 세레보브의 검(+6, 불 저항 1 무시, 저주받음)을 드랍한다. HP가 매우 높다. 역시 좁은 곳에 밀어넣고 정직하게 때려잡는 방법밖에 없다. 화염폭풍도 사용하므로 불저항 3단계가 아니면 잡기 몹시 힘들다. ",
		"마법사 계통은 세레보브를 밖으로 유인하고 룬만 먹고 튀는 게 좋다. 그냥 냉기술사를 제외한 마법사는 1:1로 세레보브를 이기는게 불가능한거 아니냐는 평이 나올정도. 최신 버전에서는 헤이스트도 써서 화력이 더욱 강해졌기 때문이다.(* 헤이스트 생기기 전에도 유저사이에서는 판데모니엄 최강 군주로 명성이 자자했다. 강력한 물리공격에 최강마법인 화염폭풍을 난사했는데 설명이 더 필요할까? 나머지 판데모니엄 군주들을 잡아내는 케릭으로도 세레보브에게는 발리는 일도 허다하게 많았다.)",
		"아레나에서는 작중 등장하는 모든 몬스터를 통틀어 최강급. 로열 젤리에게 물량에 밀려 패하는 경우나 가끔씩 안타이오스에게 능력치에서 밀려 패하는 경우를 제외하면 1:1 전투에서 패하는 일이 거의 없고, 다른 판데모니움의 군주들을 혼자서도 거뜬히 잡는 메나스가 6명이 동시에 덤벼도''' 쉽게 이긴다. 때문에 던전마다 보스급 네임드가 존재할 뿐 딱히 최종보스라고 할만한 존재는 없는 던전 크롤의 최종보스격 존재라고 평가되기도 한다. 어느 플레이어의 말을 빌리자면 '''플레이어를 사냥하기 위해 기다리는 놈.",
		"다만 기본적인 저항이 뭔가 2% 부족해서(* rDrown과 석화저항이 없고 마법저항이 낮은편이다.) 토네이도에 휘말려 용암에 빠져죽거나, 동물상자에서 나온 몹의 브레스를 맞아 석화되거나, 취약스크롤을 찢고 마비완드로 마비를 걸거나(!)하는 굴욕을 당하기도 한다. 지못미"
	],
	"Dowan": [
		"아름답지만 사악한 엘프로 마법에 적성을 가지고 있다. 그의 여동생 듀베사와 함께 완벽한 콤비네이션을 구사한다."
	],
	"Kirke": [
		"아름다운 주문술사.",
		"주변에 있는 인간형 몬스터를 다 돼지(Hog)로 만들어버리는 능력이 있다. 플레이어에게 시전할 수도 있으므로 돼지로 변하는 사태를 막기 위해 어느정도 마법저항을 갖추고 가는게 좋다. 주변에 있는 돼지들은 키르케를 죽이면 원래대로 돌아가며 비선공이 된다.",
		"돼지로 변하면 전투력이 거의 0이 되므로 빨리 피하자. 스크롤은 돼지라서 당연히 읽을 수 없다. 자신 마법 저항이 충분하지 않다면 시야에 돼지가 나타났을 경우 주의하자. 십중팔구 주위에 키르케가 있다는 신호다.",
		"느림신 미노전사라면 마법저항이 없다면 죽은 목숨. 느려서 도망칠 방법이 없다. 보자마자 피하는게 상책이다.",
		"맨손전투를 올리는 몽크나 변이술사라면 돼지가 되어서도 키르케를 물어죽일 수 있다."
	],
	"Nergalle": [
		"쭈글쭈글한 여마법사로, 일반적인 오크보다 더 못생겼다.",
		"유령 오크를 소환하는 고유기술을 가졌다. 역시 플레이어가 오크 사제라면 아군으로 만들 수도 있다. 그 외에는 드레인 볼트를 쓰고, 일정 턴동안 자신을 죽지 않게 해 주는 죽음의 문 (Death's Door)를 가지고 있으며, 소환하는 스펙트럴 오크는 기사는 물론 워로드까지 소환한다. 유령 상태라 그다지 강하진 않으나, 네르갈이 데스 도어를 쓰면서 드레인 볼트로 플레이어의 스킬을 깎고, 옆에선 유령들이 플레이어를 열심히 때리는 상황에 이르면 굉장히 플레이어를 짜증나게 만든다. "
	],
	"Menkaure": [
		"강력했던 고대 왕국의 공정하고 고귀한 지도자로, 젊은 나이에 죽어 미라가 되었다. 멘카우레의 헌신적인 사제들은 멘카우레에게 강력한 마법을 불어넣어, 영원한 삶을 살도록 하였다. 이제 그는 버려지고 잊혀져 썩어가는 붕대와 말라붙은 뼈만 남게 되었다.",
		"표기에 따라 멘카우레,멘카우어. 초반의 강적 중 하나. 미라(즉 언데드)이기 때문에 냉기, 음에너지 저항이 있으며 혼란, 독 등이 전혀 안통한다. 게다가 HP를 절반으로 깎는 고통 마법을 구사하는 등 강력하다. 초반부터 고통(Torment) 맛을 보라고 일부러 만든 티가 나는 네임드. 설명은 상당히 거창한데 지도자치곤 전투력이 참(...).",
		"마법사라면 불기둥이나 스위프트를 이용해서 접근을 허용하지 말자. 원거리에서 할줄아는건 토먼트공격 뿐이다. 토먼트는 현재 체력의 절반을 깎는 공격인고로 아무리 쳐맞아 봤자 죽진 않는다. 일단 미라인만큼 화염 공격에 약하므로 화염 마법이나 완드가 있으면 빨리 처리할 수 있다.",
		"죽으면 미라 1단계 저주를 건다.(착용한 아이템중 하나 저주)"
	],
	"The Iron Giant": [
		"Huge, lumbering, and particularly dull, this rusting monolith packs quite the punch. It is quite possibly the largest giant you have ever seen.",
		"소환도 하고 돌도 던지고 심지어 마법으로 철도 던지는 네임드.",
		"괜히 강철이 아닌지 불 , 냉기저항에 독저항이 1단계씩 달려있다. 여러모로 흉악한 사기캐릭.",
		"스프린트의 특성상 아이템이 부족하기 때문에... 꿀주먹에 꿀바위 맛은 여러모로 다음장을 보게 만드는 네임드.",
		"소환으로는 강철 골렘들 (Iron Elemental) 소환에, 마법으로는 Iron Shot 마법을 쓴다..."
	],
	"Jessica": [
		"사악한 견습 여마술사.",
		"아주 약하다. 톡 쳐도 죽는 HP에 사용하는 마법도 별로 위협적이지 않다. 가끔 완드를 들고 나올때만 좀 위험하다. "
	],
	"Mennas": [
		"||설명||아주 오랜 옛날, 메나스라 불리는 사제가 있었다. 진의 가르침을 널리 알리기 위해 머나먼 곳까지 여행하던 그는 오크의 땅에 당도하였고, 원주민인 오크들에게 질서와 자비에 대해 가르치려 하였다. 이후 메나스의 운명에 대한 소식은 들리지 않으나, 소문에 의하면 오크들이 그를 베오그의 신앙으로 개종하도록 강요하였고, 메나스가 침묵으로 일관하자 혀를 잘라버렸다고 한다.",
		"눈 앞에 있는 벙어리 천사가 과연 그 메나스인지 묻는다 해도 대답을 듣지는 못할 것이다.||",
		"자신의 시야 전부에 침묵(Silence) 주문을 거는 유니크 천사. 속도와 전투력이 아래 설명할 에리쉬키갈과 동급인데다가 대형 방패빨로 맷집도 상당히 튼튼하다. 주문, 스크롤, 신의 권능 사용까지 봉쇄해버리기 때문에 마법사 계열 캐릭터들에게 지그문트 이상의 공포감을 불러온다.(* 판데모니엄의 4대 악마 중, 전사형인 세레보브를 제외한 나머지와 1:1로 싸웠을 때 여유있게 이길 수 있을 정도이다.) 신성 계열 무기를 들고 있기 때문에 데몬스폰/언데드 캐릭터들은 정면 승부 자체를 피하는 것이 바람직하다. 몇턴 만에 강력한 주문으로 처리할 자신이 없으면 시야에 들어오는 즉시 도망가자. 침묵의 범위 안에 들어갈 경우 탈출할 수 있는 수단은 텔레포트 완드나 반지 뿐이고, 둘 다 없으면 가속 물약을 먹은 후 침묵이 꺼지기를 간절히 바라면서 도망쳐야 할 것이다.",
		"전사의 경우 자신의 능력치가 높다면 한번 싸워볼만 하다. 잡고나서 아티팩트 큰 방패를 주는 경우도 있으므로 방패전사라면 의외의 득템도 가능.",
		"다른 직업의 경우 정 싸우고 싶다면, 일단 후퇴한 후 소환수와 부하들을 먼저 잔뜩 데려오자. 3대 선신을 믿는 경우, 다른 천사계열 몬스터처럼 메나스 역시 플레이어에게 우호적으로 나오며, 신앙도가 높을 경우 메나스가 경례도 해준다... 는 것은 0.14버전까지의 이야기고, 0.15 버전부터는 선신을 믿어도 상관없이 공격하게 변경됐다."
	],
	"Louise": [
		"강력한 여자 마법사로, 특이하게도 머리부터 발끝까지 중갑을 걸치고 있다. 한때는 그녀도 조트의 오브를 찾아다니던 모험가였지만, 어떤 적에 의해 어비스로 추방되어 길을 헤매게 되었다. 어떤 위대한 힘의 장난인지는 몰라도, 그녀는 이곳에서 10년 가까이 빠져나오지 못하였다. 마침내 그녀가 어비스를 탈출했을 때 그녀는 10년간의 사투 덕분에 강해졌지만, 그 대신 완전히 정신이 나가버렸다. 이제 그녀는 던전을 떠돌아다니며, 다른 모험가들에게도 그녀의 운명을 고스란히 나눠주고 싶어한다.",
		"중갑 입은 마법사. 중갑을 입으면 마법 사용에 지장을 받는 플레이어와 달리 별 무리 없이 중급 마법을 구사한다. 추방 마법을 쓰기 때문에 매우 위험하며 속전속결로 끝내자.",
		"마법저항이 낮다면 추방 -> 어비스에서 고군분투끝에 탈출 -> 나오자마자 추방 이런식으로 당할 우려가 있다. 어비스 간신히 출구를 발견했다고 바로 튀어나오지 말고 탈출하기 직전 마저템을 두르고 탈출하자."
	],
	"Lom Lobon": [
		"매우 오래되었고 이상할 정도로 고요한 악마. 당신을 빛나는 거대한 눈으로 소름끼치게 주시하고 있다.",
		"판데모니엄의 4대군주 중 마법의 지배자.",
		"마법의 조트 룬을 지키고 있다. 냉기/전기 계열 마법을 구사한다. 전격 내성만 있다면 4대 군주중 가장 쉬운 군주라고 평가받았었다. 15 까지만 해도 그냥 호구중에 상호구. 냉폭 자체엔 물리 뎀이 없었으며, 전기구체도 전기 저항만 있다면 별로 아프지도 않은 탓에 토네이도로 인한 익사만 조심하면 되는 수준이었지만 아이스 스톰의 개편으로 인한 냉법의 상향 → 냉폭을 주무기로 써대는 롬로본 자체의 상향이라는 공식이 성립한 덕에 롬로본이 엄청나게 강해졌다.",
		"아이스 스톰 대신 튀어나온 글래시에이트는 60%저항 무시뎀을 박아대서 냉기 저항 3단계가 있어도 실컷 쳐맞는다. 스마이팅 형식이라  냉기저항이 없다면 피가 쫙쫙 빠져나가며 토네이도또한 묘하게 상향을 먹어서 체력이 남아나질 않게 변했다. 마법사에겐 맞딜이 불가능에 가까운 네임드로 변한 셈. 화법이라 해도 저놈의 힐링때문에 답이 안나온다. 화폭으로 적당히 긁은 다음 레후딥으로 빨리 정리하는게 답. 다만 2단계 이상 화폭의 위력을 올릴 수단이 있다면 맞딜을 시도해 봐도 무방. 전사라면 어떻게든 재빨리 붙어서 항마 무기로 두드려 패야 피를 덜 본다. 냉기마법 개편과 더불어 장난아니게 강해진 네임드. 세레보브를 잇는 2인자 군주로 자리매김했다고 봐도 무방해졌다."
	],
	"Donald": [
		"조트의 구슬을 찾기 위해 들어온, 당신과 같은 모험가다.",
		"오크 기사-오크 워로드의 중간 수준으로 강한 전사형 몬스터. 무조건 방패를 들고 나오는데, 반사 인챈트가 된 경우도 있으므로 함부로 마법으로 잡으려 하면 위험하다. 역으로 방패를 끼는 플레이어에겐 귀중한 반사 방패의 공급원이다. 반사 방패로 거미굴의 오브 거미를 상대로 파괴의 구를 받아치다보면  쉽게 라지 쉴드로 안 바꾸게 될 정도.",
		"등장위치에 따라, 플레이어의 종족 및 신앙에 따라 대사가 바뀌는데 여유가 있다면 감상해보자. 떠벌이 수준의 네임드로, 상당히 많은 스크립트가 있고 읽는 것만으로도 꽤나 재미있다.(* 돌죽 다운로드 버전에서 dat/database/monspeak.txt를 열어보면 몬스터들의 대사를 읽어볼 수 있는데, 그 중 이 녀석의 대사가 가장 길다.) ",
		"갑옷을 입었지만 깊은 물을 헤엄쳐서 건너오는 이상한 네임드."
	],
	"Frances": [
		"판데모니엄의 군주들에게 선택받은 강력한 전사이며, 악마 왕국과 군주들을 통치할 수 있는 능력을 가졌다. 전투 중 얼굴에 깊은 흉터를 얻었으나, 프란세스는 그것을 치욕이 아닌 명예의 상징으로 생각한다.",
		"설명은 거창한데 별로 강하지 않다. 판데모니엄 군주를 죽이면 약화되는 특징이 있긴 하지만... 사용하는 주문은 오크 대사제와 같다."
	],
	"Dispater": [
		"철의 도시 디스의 군주",
		"후반에 방문할 수 있는 4대 지옥 중 철의 도시 디스에서 마지막으로 등장하는 네임드. 1급 악마를 소환하기 때문에 좁은 곳으로 몰아 죽이는 게 편하다. 죽인 뒤 '철의 조트 룬'을 얻을 수 있다. ",
		"고정 아티팩트 '디스페이터의 지팡이'를 드랍한다. 헬파이어를 발사하는 지팡이로, 헬파이어 저항이 없는 몬스터(미라 등)에게는 화염 방사기같은 위력을 자랑한다. 사족이지만 지옥의 군주 중 가장 주는 경험치가 적다. "
	],
	"Jory": [
		"평범한 농부였던 조리는 어느날, 자신을 강력한 존재로 탈바꿈 시킬 불멸의 힘을 찾았다. 그 이후 무수한 세기를 걸쳐 그는 자신의 전투 및 마법 스킬을 연마 하였으며, 막대한 부와 보물을 가지게 되었다.",
		"투명화 등의 마법을 사용하는 네임드. 레후딥의 수정창을 사용하는데 상당히 위협적이다.",
		"처음 나왔을 때는 특정 볼트에서밖에 등장을 안했는데, 그 볼트에 정적의 유령이 있어 완벽한 호구였다(...).",
		"죽을때 사방팔방으로 피를 뿌리고 죽는 특성이 있다... 딱히 페널티인건 아니고... 그만큼 피를 많이 먹어서 그런걸까.."
	],
	"Gloorx Vloq": [
		"깊은 암흑에 둘러싸인 어둠의 형상이다.",
		"판데모니엄의 4대군주 중 어둠의 지배자. 어둠의 조트 룬을 지키고 있다. 이름이나 직위처럼 독, 암흑 속성 마법을 쓰기 때문에 독저항과 음에너지저항을 갖춘 뒤 버프 걸어 근접전으로 처리하는게 좋다. 디스펠 언데드 마법을 쓰니 미라나 리치 폼 플레이어는 주의 요망.",
		"광역공격기가 토먼트와 부패 구름밖에 없기 때문에 키쿠의 시체군단이나 소환 마법, 각종 발동템에 매우 약하다."
	],
	"Lamia": [
		"강력한 나가들의 여왕이다. 자신의 아이들을 잡아먹는다는 소문이 전해진다. 하반신이 뱀처럼 꼬여있다고 해도 기절할 정도로 아름답다.",
		"나가 여왕답게 뱀굴의 3층~5층에서 다수의 나가 무리들을 이끌고 등장한다. 육체적으로도 조이기가 있어 약하지 않은데, 종종 강력한 '파괴의 구' 마법을 사용하기 때문에 거대 나가 상대하기도 벅차다면 보이면 피하는 것이 상책이다. 반대로 충분한 방어력을 갖추고 다른 나가들을 정리했다면 어렵지 않게 잡는것이 가능하다.",
		"투명보기+마법면역이라서 암살자들은 다즐링스프레이, 혼돈속성 무기로 로또를 노리는게 아니면 아예 상대가 불가능한 저승사자급 네임드.",
		"0.14부턴 삭제되고 다른 네임드로 교체되었다."
	],
	"Khufu": [
		"신이 되려 했던 아주 강력한 황제.",
		"납골당과 무덤에서 주로 등장한다. 위대한 미라(Greater Mummy)가 강화된 형태라 혼자만 있어도 굉장히 위험하다. 최강의 방어 마법인 '도로클로헤의 무덤'을 사용하여 자신의 주변을 돌벽으로 둘러싸기 때문에 굴착 완드나 굴착마법이 필수적이다.",
		"도로클로헤의 무덤은 원래 플레이어도 사용가능한 7레벨 대지 마법이었으나 돌죽에선 삭제되었기 때문에 쿠푸의 전용마법이 되었다. 네멜렉스 조베의 가장 강력한 능력으로 꼽히는 것이 바로 이 마법의 효과를 따라하는 무덤(Tomb) 카드이다."
	],
	"Agnes": [
		"매우 민첩하며, 날씬하고 아름다운 전사. 당신은 아그네스가 휘두르는 이국적인 무기와 재빠른 몸동작을 파악하기 힘들 것이다. 아그네스는 자신이 만족할만한 예술품을 찾기 위해 던전에 들어왔다.",
		"스프리건 전사라는 특이한 조합의 캐릭터. 등장할때 항상 지팡이류 근접무기인 라자탕(Lajatang)을 들고 나온다. 인챈트 된 라자탕은 아그네스가 드랍하는게 아닌 이상 구하기가 매우 힘들다. 스프리건이기 때문에 공격속도와 이동속도가 엄청나게 빠르며 방심하다가 수십대 맞고 뻗을 수도 있다. 슬로우 마법을 걸거나 쿠라레 바늘을 사용하는 편이 좋다."
	],
	"Geryon": [
		"거대하고 머리가 3개이며 날개가 달린, 지옥의 입구를 지키는 대악마.",
		"지옥의 아가리에 처음 들어가면 나타나는 악마. 죽이면 악마를 소환하는 고정 아티팩트인 '게리욘의 뿔나팔'을 드랍한다.",
		"선신 유저일 경우 게리욘의 뿔나팔을 줍는것만으로도 참회카운터가 돌게 되니 선신(샤이닝원, 진, 엘리빌론)을 믿고있다면 절대 줍지 말것.",
		"0.10 이후부터는 게리욘의 호위병으로 1급 악마까지 등장하니 주의. 이후 버전에서 본인은 뿔나팔을 불어 털복숭이 악마로 플레이어를 둘러싸고 자신은 뒤로 물러나는 행동 패턴을 보인다. 헬리온이나 고통의 악마, 핀드 등이 섞이면 의외로 난감하다.",
		"헤라클레스의 12시련 가운데 등장했던 괴물중 하나이다.",
		"||||"
	],
	"Antaeus": [
		"한때 아주 강력한 타이탄이었으나, 그의 오만은 스스로를 파멸시켰다. 이제 안테우스는 오염되고 타락한, 아주 강력한 악마로써 코키투스를 지키고 있다. 안테우스의 커다란 몸집은 당신의 공격을 손쉽게 막을 수 있을 것 같다.",
		"후반에 방문할 수 있는 4대지옥 중 빙한지옥 코키투스에서 마지막으로 등장하는 네임드. 죽인 뒤 '얼음의 조트 룬' 을 얻을 수 있다. 물리공격에 강하며 수치상 HP가 모든 몬스터 중 가장 높지만, 불공격에 매우 약하며 독저항이 없기 때문에 불정령을 소환하거나 쿠라레 바늘로 찌른다음 도망가는 전법이 유효하다. 냉기저항 3단계와 전기 저항은 필수.",
		"아이스 핀드 4마리를 항상 대동하고 다니기 때문에 처음 들어가자마자 싸우는 것은 리치폼이나 고통 면역 없이는 자살 행위이다. 일단 문을 열고 약을 올려서 플레이어를 인식시킨 다음 텔레포트로 튀면 사방으로 플레이어를 찾으러 흩어지니 핀드를 먼저 족치고 싸워보자.",
		"기본능력치가 상당한 네임드인데, 거기에 맞은 흉악한 전용 스펠까지 추가가 됬다. Flash Freeze 라는 마법으로, 안테우스 전용마법... 근거리에서도 아픈 안테우스인데, 이마법으로 인해서 원거리 역시 어느정도 해결된 상태. 데미지는 데미지라도 반드시 Frozen 상태가 됨으로 안테우스가 미친듯한 속도로 당신을 쫓아온다. 주의!",
		"크리스마스때 가끔 이런 이쁘장하게 옷도 차려입고 오신다."
	],
	"Boris": [
		"고대의 리치. 주변의 공기가 그의 사악한 에너지로 흔들리고 있다",
		"후반에 만날 수 있는 네임드. 죽여도 지팡이와 로브만 드랍하는 주제에 불멸의 존재라 한번 만난 뒤로는 잊을만 하면 다시 등장한다. 강력한 공격마법인 파괴의 오브와 드레인 볼트(* 스펠 파워가 겁나게 세서 한대만 맞아도 드레인 효과로 플레이어가 뒷목을 잡게 만든다.)를 사용한다. 만약 더이상 올 일이 없는 층에서 출현한다면 그 층에 들어가지 않고서 따로 떨어뜨려놓을 수 있다. "
	],
	"Crazy Yiuf": [
		"긴 은빛 수염을 가졌으며 지팡이와 망토를 입은 늙은 놀. 마치 신화 속에 나오는 모습같다! 잠깐, 저 수염은 얼굴에 갈고리로 매달려 있는 거잖아?",
		"항상 망토와 지팡이를 드랍하는데, 지팡이는 무조건 혼돈(Chaos) 속성이다. 가끔 망토에도 인챈트가 걸려있을 경우가 있어 초반 대박을 노릴 수 있다. 별 의미는 없지만 망치는 이우프가 떠서 먹는 것들 외엔 사실상 얻을 곳이 없다. 물론 의미가 없듯이 쓸모도 없다(...).",
		"이우프가 등장하는 지형은 특수지형(* 맨땅(페다스의 정원과 달리 잔디가 없는 맨땅이다.)에 나무들이 늘어서있고 뒤쪽에 망치가 놓여있는 작은 방이 있는 숲이 보통이나, 숲이 없는 대신 거대한 문앞에 대량의 망치가 놓여있는데 그 뒤의 문을 열면 이우프가 나타나는 경우, 혹은 버섯이 숲을 막고있는 경우도 있다. 어찌 되었든 맨땅에 나무만 있거나, 대량의 망치가 갑작스레 나타나면 이우프의 지형일 가능성이 높다.]이 있어 쉽게 알아볼 수 있다.[* 아주 드물게 아무 예고도 없이 확 튀어나오는 경우도 있지만, 이 경우에도 망치가 있는 방은 반드시 나타난다.) 이우프는 플레이어블 캐릭터와 조우하기전에는 절대 특수지형에서 나오지않기때문에 굳이 안쪽까지 들어가지만 않으면 만날 일이 없지만, 마주치게 될 경우에는 혼돈 지팡이 하나로 지그문트 수준의 전투력을 자랑한다. 잘못하면 전기에 감전돼서 체력 20~30이 순식간에 깎인다던가, 초반부터 어비스로 가버리는 참으로 뭐같은 결과가 나올 수 있다. 가급적이면 원거리에서 처리하는게 좋고, 몇턴만에 죽일 자신이 없으면 피하자.",
		"이우프가 혼란 상태이거나 플레이어가 좀]]의 신도일 때에만 나오는 대사 패턴이 있다. 오히려 혼란에 걸리면 제대로 된 문장을 구사하고, 좀의 신도인 경우 ([소크라테스]], [[아인슈타인]), [[니체 등의 명언을 읆는다(...) 이때의 대화를 보면 미치광이 이우프가 아니라 현자 이우프(...)라고 말해야 될 수준이다."
	],
	"The Royal Jelly": [
		"아주 거대하고 황금빛으로 빛나는 젤라틴 물질.",
		"슬라임 굴의 최종보스. 지성을 가진 슬라임으로 마법을 구사한다. 체력이 1/4씩 깎일 때마다 다수의 부하들을 소환한다(* 소환물로 분류되지 않는다.). 전사 캐릭터에게는 27레벨을 찍고 도전해도 무기가 도끼가 아니라면 대단히 버거운 상대지만, 속성 저항이 없는 관계로 마법사로 플레이하면 파이어스톰 4방에 자신이 소환한 부하들과 함께 황천길 특급열차를 탄다( ..) 파괴법사라면 저항이고 뭐고 가속물약 마신 후 극딜세팅으로 도전해서 광역기 좀 뿌려 주면 수월하고, 소환법사라면 물량으로 압도해야 한다.",
		"죽이면 로열젤리 방의 벽이 평범한 유리로 변해 굴착완드나 분해완드등 유리를 제거할 수단이 있다면 아이템과 룬을 전부 얻을 수 있다. 만약 로얄젤리를 실수로라도 어비스로 추방해 버렸다면 리의 순간 해체술이나 섀터 말고는 방법이 없으므로 요주의.",
		"로열젤리를 죽일 경우 플레이어가 슬라임 신 지이바의 신도가 아닌 이상(* 이 경우 로열 젤리를 죽이고 곧바로 신앙을 포기해도 지이바는 사라지지않는다.) 지이바는 게임상에서 영원히 사라진다. 유일한 신도였던 로열젤리가 죽었기 때문. Ctrl + O 버튼을 눌러보면 지이바의 이름이 검게 표시된걸 볼수 있다.",
		"아레나에서 전투력 비교시 1:1 상황이면 지옥 군주들조차 꺾어버린다--굴욕--. 실로 무시무시한 몬스터.",
		"로얄 젤리 자체의 파워보다는 강력한 공격력/유리몸의 특성을 가진 슬라임 부하를 잔뜩 뱉기 때문이지만 어쨌든 더 쎈건 더 쎈거. 이 정신나간 젤리가 얼마나 강하냐면, 지옥군주를 가지고 노는 메나스도 이기는데다, 그 메나스를 이기는 최강의 지옥군주, 던전크롤 내에 최강의 몬스터인 세레보브까지 이긴다! --이게 뭐야.. 장난쳐? (* 아레나의 설정상으로, 모든 몬스터가 없어져야 이기는 특성상 ..... 다구리를 놓기 때문... 그런데 그걸로 따지면 세레보브도 파이어스톰에 핀드 소환 토먼트로 다 아작을 낼텐데..? )"
	],
	"Dissolver": [
		"슬라임 굴은 과거 번화한 문명의 중심지였으며, 용해자는 그들의 신의 예언자였다. 도시가 멸망했을 당시, 용해자만이 슬라임 신의 신도가 되어 살아남게 되었다. 용해자는 거대한 산성 젤리가 되었지만 지능만은 여전히 남아 있다. 이제 그는 모든 형상을 갖춘 존재를 증오한다.",
		"슬라임 굴에서 등장하는 네임드. 바위벌레처럼 HP가 낮아지면 벽 속에 숨는 기능이 있다. 또한 돌연변이를 일으키는 빛나는 눈을 계속 소환할 수도 있으므로 주의할 것."
	],
	"Snorg": [
		"화가 많이 난 것 같은 털투성이 트롤.",
		"일반적인 트롤보다 HP가 2배 가까이 높은 트롤로(트롤의 HP가 25~51인데, 스노그는 96이다), 플레이어를 만나면 광폭화하기 때문에 굉장히 위험하다. 광폭화 전에 원거리 공격으로 요격하면 별 것 아니지만, 일단 광폭화에 들어가면 짐승굴 서브던전을 돌 스펙 정도는 되야 붙어볼만 하다."
	],
	"Frederick": [
		"훤칠한 전투마법사, 금테 외안경을 쓰고 있다.",
		"전투마법사라는 설명처럼 접근하면 자신에게 버프를 시전하고 근접전을 한다. 버프를 시전할 경우 힘이 세레보브와 같을 정도로 위험하지만, 그래도 마법 쓰는 것보다는 덜 위험하다. 별 저항은 없으므로 쿠라레 바늘로 찌르고 도망가는 것도 유효. HD가 상당히 높으므로 프레데릭의 마법을 차단하겠다고 폴리모프 완드를 쓰는 짓만은 하지 말자. 타이탄 이상의 몬스터가 되버리는 수도 있다. ",
		"인간이었으나 최신버전에서는 반신족으로 종족이 변경 되었다."
	],
	"Xtahua": [
		"고대의 강력한 용.",
		"일반적인 화염 용과 마찬가지로 독 면역에 불에도 내성을 가지고 있으며, 상당히 위협적인 브레스를 발사한다.(* 일반 화염 용은 Fire Breath (3D24) 을 쓰지만, 싸후아는 Searing Breath (3D38) 인 한층 강화된 화염 브레스를 뿜는다. )일반적인 화염 용보다는 강하므로 주의.그 외로는 완벽하게 화염 용과 같으므로 냉기 속성 마법에 약하다.",
		"죽이면 가죽을 벗길 수 있으며 용갑옷을 만들 수도 있다. 용갑옷에 싸후아의 이름이 새겨지지만 성능은 똑같다. 혹시 플레이어가 창을 주로 쓰고 와이엄베인을 소유하고 있을 때 나타나면, HD가 18보다 1 높은 19이기 때문에, 훌륭한 와이엄베인의 강화 재료가 되는 굴욕을 맛보기도 하는 네임드."
	],
	"Purgy": [
		"이상하게 몸집이 작은 트롤이다.",
		"하수구 던전에서 종종 나오지만 일반 던전에서도 가끔 만날 수 있다. 몸집이 작다는 설정처럼 일반적인 트롤보단 약하지만 그래도 원판이 트롤인만큼 꽤 강하다. 참고로 이놈도 트롤이기 때문에 시체에서 가죽을 벗길 수 있다. 운만 좋으면 초반부터 트롤가죽 갑옷을 제작 가능."
	],
	"Harold": [
		"마지막 의뢰만 끝내고 빨리 은퇴해서 쉬고 싶어하는 현상금 사냥꾼. 어서 마지막 타깃을 죽이고 그 보상금으로 가족과 함께 조용한 곳에 정착하고 싶어한다. 마지막 타깃은 바로 당신.",
		"초보적인 마법과 무기를 휘두르는 네임드. 화염 볼트를 쓴다는 점을 빼면 별로 안 강하다. 마법사 처리하는 요령으로 코너 돌아 유인한 뒤 때려잡으면 된다. 최신 버전에선 개그 캐릭터성이 부가되어 죽기 전에 운명을 한탄하는(...) 대사가 추가되었다. 패치로 투척용 그물까지 던져대서 꽤나 상대하기 힘들어졌다. 회피술이 낮다면 주의 요망."
	],
	"Erica": [
		"아름다운 마법사다.",
		"베놈 볼트, 미스틱 블라스트 등 중급 수준의 마법을 쓴다. 가끔 자신을 투명화하기도 하는데 투명 감지가 없으면 피하자. 항상 불속성 시미터를 가지고 나온다. 상당히 좋은 무기이므로 주무기가 검이라면 한번 노려볼 만 하다."
	],
	"Ignacio": [
		"||설명||신의 힘이 개입하지 않는 이상, 필멸자가 악마로 타락하는 일 따위는 일어나지않는다. 하지만 사형 집행인 이그나시오는 자신의 ‘일’ 에 대한 열정과 사랑으로 마크레브에게 큰 감동을 줬으며, 결국 마크레브가 그를 향해 미소 짓도록 만들었다. 이제 그는 영원히 그의 ‘일’ 을 즐길 수 있게 되었다.",
		"그의 악마화된 육체에는 거대하고 날카로운 수많은 칼날이 자라났지만 그는 여전히 자신의 도끼를 들고 다니며, 당신의 목을 사용해서 도끼날이 살아있는지 확인하고 싶어한다.||",
		"판데모니엄을 돌아다니다 보면, 랜덤하게 만날 수 있는 네임드이다. 고통 브랜드가 달린 처형인의 도끼를 들고 나오는데...스스로에게 가속을 걸고 플레이어를 갈아버린다. 충분한 방어력을 갖춘 전사라도 꽤나 아프고, 마법사라면 접근을 허용해선 안된다."
	],
	"Sigmund": [
		"모든 초보 모험가들을 파멸시키는 지그문트는 비겁한 전술과 거대한 망상의 결합체나 마찬가지다.",
		"악마. 모든 초보 플레이어들이 고전하는 상대로 좀 짬이 쌓인 플레이어라도 초반에 대책없이 만나면 털린다. ",
		"등장 위치는 던전 2~7층이라서 1층에서 내려가져마자 지그문트를 만나는 공포스러운 경험을 할 수 있다.",
		"자신에게 투명화를 걸거나 플레이어에게 혼란을 거는데, 이 두가지 패턴은 초반에 대응책이 거의 없어서 당하기 쉽다. 가끔 몬스터 무리에 끼어와서는 투명화 걸고 때리기도 한다. 계단으로 도망가려는데 혼란을 걸으면 정말로 플레이어도 돌아버린다. 그 덕분에 던크 최악의 네임드 자리에서 언제나 상위권을 차지하고 있다.(* 날고 기는 플레이어들이 모이는 akrasiac 서버 통계에서 가장 많은 킬수를 올린 네임드라는 명예를 당당히 차지하고 있다.)",
		"단 지그문트 본인에게는 독, 혼란 등이 다 걸리기 때문에 독침이나 마법봉이 있다면 상당히 싱겁게 잡을 수 있다. 자체전투력도 인챈이 높은 낫을 든 경우만 아니라면 그저그런 편이라 광전사도 광폭화 걸고 때리면 금방 잡는다. 다른 클래스인데다 자신도 없다면 그냥 위로 올라가거나 씹고 내려가서 캐릭을 좀 더 키운다음 와서 맞붙어보는게 낫다.",
		"무조건 폴암류 무기인 낫(Scythe)을 드랍한다. 일반적으로는 그냥 낫이지만 운좋으면 +5 정도의 인챈트가 붙은 낫일수도 있고, 여러가지 속성이 붙은 낫일수도 있다. 아그네스와 마찬가지로 인챈트된 낫은 거의 최후반부 아니면 볼일이 딱히 없는 리퍼 와 지그문트 외에 구할 곳이 거의 없다."
	],
	"Polyphemus": [
		"사이클롭스 목동으로, 가축을 지키는 일에 최선을 다 하고있다.",
		"목동이라는 설정답게 죽음의 야크 한 무리를 대동하고 나타난다. 일반적인 사이클롭스와 별로 다를 건 없으나 데스 야크와 같이 맞으면 아프므로 통로에서 1:1싸움에서 잡는게 유효. 하지만 문제는 주로 나타나는 곳이 해안가라는 점(...). 최신 트렁크 버전에서는 로빈이 고블린 던지듯 데스 야크를 플레이어 옆으로 던질 수 있게 되었다.",
		"석화 구름을 내뿜는 카토블레파스와 같이 등장하는 경우가 많은데 그 석화 구름에 본인과 데스 야크도 짤없이 석화된다..",
		"원형은 당연히 오디세이아에서 초반에 등장한 사이클롭스."
	],
	"Maud": [
		"머나먼 왕국에서 찾아온 신비한 전사 공주로, 전설의 검 '엔타렉스'를 되찾아오는 임무를 가지고 있다. 수많은 사람들이 다른 모든 걸 잊어버리고 모드의 추종자가 되었다.",
		"마법이나 원거리 공격을 전혀 하지 못한다. 간단하게 원거리에서 제압하는게 가장 편하다. 이름은 알프레드 테니슨의 시 에서 따왔다.",
		"설명만 보면 뭔가 엔타렉스 같은 검은 없다."
	],
	"Tiamat": [
		"큰 날개를 가진 강력한 용. 티아마트의 비늘은 당신이 볼때마다 색이 변하고 있는 것 같다.",
		"조트 5층에서 등장하는 네임드 드라코니언. 전용 방어구를 입고 있어 맷집이 대단히 좋고, 언제나 수마리의 드라코니언 무리를 대동한다. 일정한 주기로 비늘의 색깔이 바뀌면서 다른 속성의 브레스를 쏜다. 타일이 아닌 아스키로 플레이할 경우 다른 드라코니언과 똑같은 d로 보이는데, 곁에 있는 드라코니언 무리 때문에 어디있는지 헷갈리다가 큰 코 다칠 수 있다.",
		"매 턴마다 50% 확률로 속성저항을 부여해주는 고정 아티팩트 용가죽 망토를 반드시 착용하고 있다."
	],
	"Asmodeus": [
		"지옥의 깊은 곳에 사는 대악마 중 하나.",
		"후반에 방문할 수 있는 4대지옥 중 초열지옥 게헨나에서 마지막으로 등장하는 네임드. 흑요석의 조트 룬을 지키고 있다. HP, AC가 높고 딱히 약점도 없어서 그냥 좁은 곳으로 유인한 뒤 정직하게(?) 때려잡아야 한다. 아니면 그냥 무시하고 룬만 먹고 튀는 방법이 있다.",
		"고정 아티팩트인 '아스모데우스의 홀'을 드랍한다. 랜덤하게 불 악마 계통 몬스터를 소환하는데, 소환 후 수 턴이 지나면 적대적이 되니 주의해야 한다."
	],
	"Ijyb": [
		"지저분한 파란색 누더기를 뒤집어 쓴, 작고 뒤틀린 고블린.",
		"경험치 덩어리. 초반에 만나도 별 지장없다. 헐벗고 나올 수도 있고, 마법 걸린 아이템이나 완드를 들고 나올 수도 있다. 이지브에게 죽는 경우는 보통 재수없게 나온 분해 완드에 몸이 터지는 경우다. 사실 HD 5 이하고 2층에서 나올 수 있는 다른 네임드 (제시카, 테렌스 등)와는 다르게 유일하게 화염, 냉기, 번개, 드레인, 마비 완드를 들고 나올 수 있다. 반대로 초반부터 얻기 힘든 분해 완드를 특템할 기회이기도 하다. 물론 순삭시키지 못하면 쳐맞을대로 맞고 충전횟수 0인 완드외에는 남는게 없을 수도."
	],
	"Gastronok": [
		"게걸스러우며 놀랍도록 영리한 달팽이로, 머리에는 멋진 뾰족모자를 쓰고 있으며 만나는 모든 것을 먹어치우려 한다. 가스트로녹은 모자의 전 주인인 강력한 마법사를 먹어치우고 자신의 지능과 마법지식을 늘리기 위해 모자를 썼다.",
		"마법쓰는 달팽이. 공격시 69% 확률로 버프를 해제해버리는 능력을 가졌으며 여러가지 마법을 구사한다. 주로 사용하는건 선풍의일격(Air Strike)으로 공격력이 막강하므로 원거리에 있다고 안심해서는 안된다. 마법을 쓸때는 무려 더듬이를 손짓하듯이 휙휙 휘저어서(...) 사용한다. 체력도 은근히 높아 꽤 성가시다. 다행이 달팽이 답게 속도는 느리므로 위험하다면 그냥 도망치자. 독 저항이 없기 때문에 거리를 적당히 벌리면서 독침으로 바늘 방석(...)을 만들어 버리는 전법도 유효하다. 쿠라레가 있다면 금상첨화.",
		"죽일 시 무조건 모자를 드랍하는데 가끔 고정 아티팩트 마법사 모자를 드랍한다.",
		"고정 아티팩트 모자는 착용자의 마법 능력을 강화시키는 대신 이동 속도를 줄이는 페널티(Ponderousness)가 붙어있는데, 느릿느릿한 걸 좋아하는 체이브리아도스(Cheibriados) 신도가 쓰기에 아주 좋다. 굳이 신도가 아니더라도 좋은 투구를 구하기 전이라면 귀찮겠지만 싸울때만 신속을 미리걸어 놓는 식으로 쓸만하다."
	],
	"Eustachio": [
		"이상한 콧수염을 기른 견습 소환술사. '명예'에 관한 웃긴 아이디어를 가지고 있다.",
		"표기에 따라 유스타치오,유스타키오 작은 동물 소환, 임프 소환 같은 약한 소환마법을 쓰는 마법사. 가끔씩 전격 브랜드의 펄션을 들고오지 않는 이상 본인 전투력은 매우 약하지만 사방을 뒤덮는 짐승떼가 짜증난다. 특히 임프 소환은 갑자기 포텐셜이 제대로 터져서 임프중 가장 강함을 자랑하는 그림자임프가나오는 경우가 있으니 주의. 빨리 죽일 자신이 없으면 그냥 튀는 게 낫다. 일단 플레이어를 보자마자 소환을 해대는건 아니니 직업 불문하고 도끼든 광전사가 아니라면 시야를 주지말고 슬슬 유도를 해가며 순살시키자.",
		"0.13버전까지는 지그문트나 그라인더 다음으로 상대하기 짜증나는 적이었지만 0.14 버전부터는 소환술사를 죽이면 소환수도 모두 사라지게되어 소환수들을 무시하고 유스타치오 본인만 점사하면 쉽게 상대할수 있게 되었다."
	],
	"The Lernaean Hydra": [
		"오래되고 거대한 뱀처럼 생긴 물괴물로 수많은 머리를 가졌다. 시인들은 그에겐 꽃병에 그려진 그림보다 더 많은 머리가 있었다 하며, 눈에서는 독을 뿜고, 지하세계의 입구를 지키는 수호자라고 말했다. 어떤 것이 진실인지는 아무도 모른다.",
		"그리스 신화에서 헤라클레스가 때려잡았던 그 히드라. 기본적으로 27개의 머리를 가지고 있다. 화염속성 붙은 무기 들고 근접전으로는 잡을 생각을 말아야 한다. 근접하는 순간 1턴에 27대 맞고 원턴킬 당할 수 있다. 완드나 마법 등 원거리에서 처리하자.",
		"고유 능력으로 나무를 박살낼 수 있으며''' 늪지 던전에선 플레이어와 자신 사이의 나무를 박살내고 다가오는(!) 거대괴수물 스러운 상황을 연출하기도 한다. 이 특징을 이용해 같은 층 안에 녀석이 있다는 것을 미리 알 수 있다. 우지끈하고 박살나는 소리'''(X 27)가 들리면 이 놈이 있다는 신호다.",
		"전사계열의 경우 아예 27레벨을 찍고 도전하자. 적절한 체력과 아머, 회피를 갖추면 27번 공격 맞는 것도 별일 아니게 된다.",
		"HD가 30인 주제에 MR은 3단계인지라 폴리모프가 통하지만, 잘못 하면 늪지에서 Orb of Fire를 보게 될 수 있으니 절대 쓰지 말자. 이건 일반 히드라에게도 마찬가지로 통하는 팁."
	],
	"Sojobo": [
		"텐구의 왕. 검술, 전술, 마법 등 모든면에서 텐구들에겐 전설적인 존재이다.",
		"텐구의 왕이라는 설정답게 다수의 텐구들과 함께 나온다.",
		"근접전투도 막강하고 원거리에선 대기술을 주로 사용하는데, 사용 마법이 대부분 발사체마법이라서 전사의경우 높은 방패술이나 회피술, 마법사의 경우 레펠/디플렉트 미사일을 사용한다면 상대하기 쉬워진다. 공기의 정령으로 화면을 가득 메워대는 게 짜증나는 정도. 그런데 역으로 기본적으로 디플렉트 미사일 버프가 영구적으로 걸려있어 발사체 마법을 애용하는 법사는 상대하기 어렵다.",
		"거의 확정적으로 전격 속성의 양손검을 드랍한다. "
	],
	"Robin": [
		"전설 속의 오브를 차지하기 위해 온 산의 홉고블린이다. 던전의 심층부를 홀로 뒤질 만큼 무모하거나 멍청하지는 않아서, 로빈은 앞잡이들로 작은 군대를 만들었다. 잠재력있는 모험가들은 연이어 그들을 향해 소리지르며 날아가는 고블린들을 쉽게 볼수 있을것이다.- 조심해!",
		"Robin. the Strong Arm.",
		"던전 2~4층에서 주로 나오는 고블린 네임드. 대게 등장시 대량의 홉고블린과 고블린을 이끌면서 나오기때문에 엄청나게 많은 고블린들의 숫자를 보면 아 로빈이구나. 하고 알수가 있다. Strong Arm 이라는 이름에 걸맞게.. 주로 쓰는 기술이 고블린 던지기 이다. 이게 개미맨이 아닌이상 상당히 짜증이 나는데, 고블린 던짐 → 아픔 → 길막당함 → 다구리 당함 이라는 기묘한 상태가 되기 때문. 아무리 고블린에 홉고블린 이라지만 버프로 인한 뎀증이 있고... 잡아도 계속 던져대는 고블린이 짜증난다.. 상당히. 개미맨처럼 굴착을 해서 1:1 상황으로 강제로 유도하면 안던지므로 잘 파악해서 잡으면 된다. 잡으면 100% 확률로 투구를 드랍하는데, 이 투구가 가끔은 랜다트 투구를 줘서... 은근히 기대하게 만드는놈. 가끔 미칠듯한 인챈트의 빠따와 미칠듯한 랜다트 투구를 들고와서 플레이어를 떡으로 만들고 간다."
	],
	"Blork the orc": [
		"특출나게 뚱뚱하고 못생긴 오크. 어딘가에서 무지개색 멜빵을 줍기 위해 돌아다니고 있다. 별 도움은 안 되겠지만.",
		"초반부터 볼 수 있는 네임드 중 하나. 별로 강한편은 아니다. 헤이스트를 쓰는 탓에 조금 성가신 수준. 베오그 신도라면 꼬셔서 아군으로 만들 수도 있다. 극초반이라면 쓸만하나 중반엔 경험치먹는 잉여.",
		"attachment:crazyiuf.jpg",
		"미치광이 이우프의 고정지형중 하나."
	],
	"Natasha": [
		"귀여운 작은 고양이지만 지능을 가지고있다. 아마 어떤 마법사가 오브를 찾으러 던전에 보낸게 아닐까?",
		"기념할만한 첫 펠리드 네임드. 각종 임프를 소환하거나 매직다트로 공격한다. 혼란 구름도 뿌려대는 듯 싶지만 본인이 별 저항이 없어서 자폭을 하기도 하고(...) 펠리드라서 그런지 정말 약하다.",
		"죽어도 3번까지 부활한다.",
		"나타샤의 등장 메세지와,아티팩트 단검 모르그, 보리스의 설정을 읽어보면 나타샤는 보리스가 리치가 되기 전 기르던 고양이로 추정된다. (* Natasha, Servant of Life and Death. Master of Life and Death 는 보리스의 등장 메세지.)  물론, 나타샤를 초반에 만나서 어떻게든 죽이지 않고 내려가며 보리스와 만나게 해도 특별한 것은 없다(...)."
	],
	"Ereshkigal": [
		"죽음의 지옥 타르타로스를 통치하는 무시무시한 대악마.",
		"후반에 방문할 수 있는 4대지옥 중 타르타로스에서 마지막으로 등장하는 네임드. 죽인 뒤 '뼈의 조트 룬'을 얻을 수 있다. 회피가 매우 높아서 맞추기 힘들다. 보통 그림자 핀드 1~2마리를 대동하고 스스로도 지옥의 고통을 쓰기 때문에 최대 HP의 1/4 미만까지 떨어져도 너무 놀라지 말자.",
		"리치폼과 9레벨 공격마법을 익힌 마법사에게는... 그냥 (호구). 부패와 지옥의고통은 리치폼에 막히고, 광역마법은 회피가 불가능하다. 아이고...",
		"다만, 침묵마법도 사용하기 때문에 방심하면 마법사는 골로 갈 수 있으니 주의할 것.",
		"참고로 에레쉬키갈은 수메르 신화에서 저승을 다스리는 여신이다."
	],
	"Azrael": [
		"아주 강력하고, 호전적인 이프리트.",
		"많은 헬하운드, 불정령을 대동하고 등장하며 불마법을 쓴다. 특히 접착 화염(Sticky Fire)을 쓰기 때문에 까딱하면 스크롤이 홀랑 다 타버리는 불상사가 발생한다. 얼음마법에 약하며 HP는 높은 편이 아니므로 어렵지 않게 잡을 수 있다...였으나, 0.14or0.15버전 이후부터는 헬파이어를 사용하므로 주의"
	],
	"Chuck the Collector": [
		"Chuck the stone giant loves rocks, the bigger the better! Over the years, he has managed to amass quite the collection, including some rare, enchanted ones..",
		" 라지락에 인챈트가 붙으면 무슨 꼴이 나는질 알려주는 네임드 ",
		"스프린트 전용 네임드",
		"평범한 스톤 자이언트다. 평범하게 라지락을 던진다. 근데 라지락이 리턴 브랜드라서 무한히 던진다...!",
		"보통 스톤 자이언트는 이동이라도 하겠는데.. 얘는 구석퉁이에서 3지형이 용암이다! 건널수가 없다! 그자리에서 계속 무한히 라지락을 발사하는 라지락 기계다...",
		"라지락을 무한히 던진다... 이것 하나로 모든걸 해결하는 네임드."
	],
	"Pikel": [
		"대부분의 코볼트는 일반적으로 노예생활을 하며, 피켈 역시 마찬가지였으나, 피켈은 언젠가 노예를 부리는 노예상인이 되려는 야망을 가지고 있었다. 이제 피켈은 오크 광산으로 노예를 팔러 가는 중이며, 겁많은 인간들을 채찍질로 위협하고 있다.",
		"초반에 나오는 네임드로 매우 난감하다. 지그문트나 그라인더와 달리 싸우려 들지만 않으면 별로 위험하진 않지만 싸우려 들 경우엔 애로사항이 꽃핀다. 주변에 노예 여럿을 대동하고 나타나며 노예의 전투력이 상당히 높다. 게다가 이들은 그냥 노예라서 죽여봤자 경험치도 별로 주지 않는다.(* 인간과 엘프를 맨몸 상태로 볼 수 있는 몇 안되는 경우다. 특히 깊은 층에서 등장하는 맨몸 엘프는 변이괴물일 가능성이 99%다.) 죽일 경우 '죄책감을 느낀다'라는 메세지가 뜬다.",
		"따라서 무시하고 피켈부터 빠르게 죽이는게 좋은데, 불이나 전기 속성이 달린 채찍을 들고 다녀 원거리에서 요격하는게 좋다. 특히 채찍에 전기속성이 달려 있으면 체력이 한순간에 쭉 달을 수 있어 더욱더 위험하다. 펠리드의 슬픔",
		"일자통로에서 싸우면 강한놈이 앞에서는 AI때문에 노예를 보호하며 앞장서서 싸우는 괴이한 모습을 보여준다(...)",
		"일단 초반엔 쉽게 나오지 않는 속성무기를 확정적으로 주기때문에 둔기계열 캐릭터라면 잡을 수만 있다면 훌륭한 초반 템셔틀. 피켈만 죽이면 나머지 노예들은 전부 우호적으로 변한다. 노예들이 은근히 강해 극초반에 피켈을 잡았다면 노예들이 그 층을 싹 쓸고 다니는 모습도 볼 수 있다.  피켈과 노예 4명을 다 상대해야한다는 점 때문인지 초반 네임드치고는 꽤 많은 경험치를 제공한다.",
		"피켈을 죽이지 않고 노예화시켜도 일단은 피켈을 제압한 것으로 취급해서 노예들도 우호적으로 변하는데, 이후 노예화가 풀려서 다시 적대화할 때쯤 와보면 노예들에게 두드려 맞고 있다."
	],
	"Maurice": [
		"교활하고, 약삭빠른 도둑",
		"플레이어가 보이면 투명을 걸고 블링크로 이리저리 돌아다니면서 귀찮게 군다. 그러다가 플레이어에게 접근하여 물건이나 돈을 훔쳐가기도 한다. 찾기 위해서는 죽이는 수밖에 없다. 그럴 일은 거의 없겠지만 훔쳐갈 돈이나 물건이 없어서 훔치지 못하면 플레이어를 거지라며 욕하며 (...) 혼란이 걸렸을 땐 물건을 훔치려다 넘어지는 모습도 보인다",
		"정면으로 싸우면 쉽지만 투명감지나 일자통로가 없다면 대단히 고생할수 있는 적이다.",
		"죽일 시 항상 망토를 드롭하는데, 운 좋으면 인챈트 된 망토를 구할 수 있다."
	],
	"Ilsuiw": [
		"영리한 머포크 물마법사로, 불운한 모험가들을 자신의 미모와 마법으로 유혹해 깊은 물에 빠뜨린다.",
		"해안가의 보스",
		"물 정령을 다수 소환하고 주변 지형을 물로 바꾸는 마법을 쓴다. 머포크의 고향인 해변가(Shoals)에서 볼 수 있다. 근처에 플레이어가 벗어나지 못하도록 유혹하는 사이렌(Siren)이 있을 경우 어느정도 위협적으로 다가올 수 있다. 투명화도 쓰는 탓에 갑자기 난전중에 의문사를 당할 수도 있으니 주의.",
		"0.10 버전 이후로는 일스이우와 여자 인어가 동시에 노래를 불러 플레이어를 구속하고, 나머지 머포크가 2칸 밖에서 창으로 찔러대는 불상사가 벌어질 수 있다. 0.14버젼에선 사이렌의 스킬이 바뀐 탓에 딱히 의미 없어졌지만.."
	],
	"Erolcha": [
		"특이하게 영리한 오우거 마법사.",
		"다른 오우거들과 몰려나온다. 오우거이기 때문에 근접공격도 강력하다. 등장할 때 쓰는 마법이 랜덤인데, 재수 없으면 초반부터 추방 맞고 어비스로 떨어지거나 레후딥의 수정창 한방에 골로 갈 수도 있다. 빨리 제거할 수단이 없다면 마저를 갖추고 다시 붙거나 걍 튀자."
	],
	"Wiglaf": [
		"바보같아 보이는 모자를 쓴 뚱뚱한 드워프. 취한 것 같다.",
		"오카와루의 신도로 전투를 시작하면 권능 발동해서 힘세고 강해져서 날뛴다. 오카와루의 권능인 가속은 너프되어 플레이어의 이동속도를 더이상 증가시켜주지 않지만 위글라프는 이동속도까지 증가한다.",
		"스톤수프 0.9버전에서 산드워프가 삭제된 후 유일하게 남아있는 산드워프다.",
		"가끔 유저들도 얻기힘든 수정판금갑옷 같은걸 입고 나올때가 있는데 플레이어 입장에서는 입이 떡벌어지는 충격과 공포의 강적을 만날수 있다. 물론 전사계열이라면 획득 스크롤 급의 득템."
	],
	"Asterion": [
		"한때 한 나라의 왕이자 잔인한 전쟁광이었던 아스테리온은 어느 마법사의 저주로 인해 무시무시한 미노타우로스로 변하게 되었다. 나라에서 추방당한 그는 떠돌다 던전에 들어왔으며 이곳에서 새로운 자신의 왕국을 만들고자 생각하고있다.",
		"가속을 걸거나 자신의 무기에 스펙트럴 웨폰을 사용해 무기와 함께 협공한다. 마크랩의 신자라서 대파괴도 사용하지만 악마는 소환하지 않는다.",
		"항상 악마제 무기(악마의 채찍, 악마의 삼지창, 데몬블레이드)를 들고 나오기 때문에 창을 쓰는 플레이어라면 빠른 악마의삼지창을 기대할수 있다. 데몬스폰의 경우 자신이 쓰는 무장과 같은 류의 무기를 들고 있다면 어떤 수를 쓰더라도 잡아서 득템을 노려보자.",
		"도무지 효율성이라곤 찾아볼수없는 마법셋을 가지고있는 다른 네임드들에 비해서 참 이상적인  버프형 마법전사 전술을 구사하고 있다.",
		"미노타우로스의 끔찍한 마법적성을 생각해봤을때 혹자는 마법 배울 경험치를 모두 전투기술에 쏟았으면 세레보브도 상대 가능할 네임드였을거라고 한탄하기도 한다. 정확히는 인간이라 마법도 찍었는데 미노타우로스가 되어버린 거지만."
	],
	"Sonja": [
		"우아한 코볼트 암살자. 그 우아한 움직임과 대담한 도약에 경의를! 그렇지만 소냐의 칼을 조심하라!",
		"회피가 높고 블링크 기술을 쓴다. 무조건 왜곡, 독, 흡수 속성의 단검을 드랍하며 바람총과 쿠라레 바늘도 갖고 다닌다. 쿠라레 바늘에 맞으면 감속+독이 함께 걸리기 때문에 매우 위험. 독 저항이 있다해도 왜곡 단검에 잘못 맞으면 어비스로 가버린다. ",
		"대책으로는 마법저항력이 낮기 때문에 혼란이나 변이의 마법봉으로 간단하게 처리할 수 있다. 아니면 강력한 주문으로 날려버려도 된다. 원거리에서 요격하는게 가장 안전하게 처리할 수 있는 방법이다. 아니면 블로우건을 갖고 있고 독 저항이 있다면(굳이 없더라도), 소냐가 쏘는 쿠라레 바늘을 주워다가 역으로 쏴버리자. 체력이 약하고 스피드로 승부하는 소냐에겐 오히려 자신이 쏘는 쿠라레가 치명적인 약점이다."
	],
	"Psyche": [
		"금발의 마법사로, 슬픔과 죄책감에 반쯤 미친 채 떠돌아다니고 있다.",
		"무조건 혼돈, 아니면 왜곡 속성이 붙은 무기를 들고 나온다. 왜곡무기에 맞으면 일정확률로 순간이동 당하게 되며, 잘못하면 어비스로 빨려들어가므로 주의. 초반엔 빨리 못잡을 듯 하면 별로 주는 것도 없으니 튀고, 싸울거라면 가능한한 접근을 허용하지말자."
	],
	"Josephine": [
		"굉장히 못생기고 늙었으며, 드루이드 옷을 입고 있다.",
		"냉기저항과 음에너지저항이 좀 된다면 쉽다. 근처에 수많은 좀비들을 대동하고 다니는 경우가 있다.",
		"툭하면 냉기마법을 날려대서 이전 버전에서는 악명높은 포션파괴범이었다."
	],
	"Duvessa": [
		"많은 전투기술을 익힌 엘프 전사, 자신감 넘쳐 보인다. 쌍둥이 오빠 도완의 마법으로 약점을 보강한다.",
		"표기에 따라 듀베사,드뷔사. 광폭화가 얼마나 강력한 효과인지, 그리고 딥 엘프 전사가 얼마나 약한지(...) 보여주는 초반 네임드. 처음 조우할 시 반드시 남매가 함께 등장한다.",
		"한쪽이 죽으면 다른 한쪽이 특수한 메시지와 함께 강화해서 플레이어를 공격해오는데, 도완은 \"숨겨진 힘\"을 깨달아 원래는 사용할 수 없던 5레벨 마법을 시전해오며 듀베사는 광폭화한다. 다만, 도완은 한번 강해지고 나면 죽을 때까지 강한 상태가 유지되는 반면 듀베사는 광폭화 지속 시간이 끝나면 광폭화가 풀리면서 광폭화 페널티를 다 받는다. 때문에 광폭화가 풀릴 때까지 버틸 수 있다면 도완을 먼저 죽이는 것이 난이도상 이득.",
		"이러한 설정 때문에 둘이 부적절한 관계를 가지는 남매라는 설도 있지만, 사이좋은 남매라는 점을 감안하면 한 쪽이 실컷 쳐맞은 것도 아니고 눈앞에서 죽었는데 파워업을 하지 않는게 오히려 이상.",
		"둘 중 하나가 죽기 전까지는 플레이어가 계단을 오르내려도 따라오지 않는다. 초반에 등장하면 굉장히 골치아프니 둘이 등장하면 그냥 그 층을 넘겨버리는 것도 좋은 전략이다.",
		"듀베사가 거리가 벌어지거나 공간전이에 걸려 플레이어의 시야에 없는 상태에서 도완을 먼저 처리할 경우는 일단은 광폭화하지 않은 상태로 돌아다니다가 플레이어를 인식함과 동시에 광폭화해서 공격해온다.",
		"왠지 고갤 등지에서는 도완과 듀베사 둘중 하나를 노예화 시켜서 서로 싸우게 하는걸 보는 것이 로망으로 여겨진다. 이런 식으로 또는 아레나를 통해 도완과 듀베사가 싸우게 될 경우, 두쪽 다 풀 컨디션이라면 근접전을 선호하는 초반 몹 AI상 전사인 듀베사가 이길 확률이 높다. 실제 게임 내에서 둘 중 하나가 서로를 죽이게 될 경우(막타), 공포와 절망에 찬 비명을 내질렀다는 시스템 메시지와 함께(* Duvessa shakes in grief and horror.] 절망에 찬 대사들이 나온다[* \"내가 무슨 짓을 저지른거지?\").   그 외에도 재밌는 대사들이 꽤 있는데, 또 둘 중 하나를 어비스로 추방해버릴 경우 어비스로 쳐들어가 구출하겠다는 특수 대사가 나오기도 하며, 한 명이 죽을 때 낮은 확률로 나오는 대사 중에는 지옥에 쳐들어가 구해오겠다고 외치기도 한다. ",
		"강한 정도와 별개로 듀베사가 도완보다 훨씬 경험치를 많이 준다.",
		"볼만한 여캐(...)인 듀베사가 있는데다 남매가 같이 다닌다는 특이성 때문인지 모에화가 되었다.",
		"다만 0.14버전부터 듀베사가 청발로 바뀌었기에 웹돌죽 로딩이미지에선",
		"attachment:\"던전 크롤/네임드/DCSSduvesa_2.png\"",
		"이렇게 바뀌었다."
	],
	"Fannar": [
		"||설명||마음이 차갑게 얼어버린 요정 마술사이다. 고위 관리에게 걸맞는 화려한 로브를 입고 있다. 발치에는 얼음 결정을 뿌리고 절망에 찬 말투로 중얼거리면서 던전을 떠돈다.",
		"아주 오랜 옛날, 판나르는 얼음 마법에 대한 천부적인 재능과 뛰어난 지혜를 발휘하여, 명망있는 심판관의 자리에 올라 요정의 방에서 법을 수호하였다. 그의 동료들이 사령술과 악마학에 하나 둘 빠져들기 시작할 때에도 공정한 마음가짐을 잃지 않고 자신의 의무를 열성적으로 다했다고 기록으로 전해진다.",
		"하지만 수백년간 자리를 지키는 동안, 정의를 향한 열정이 지나친 끝에 망상에 빠져 남의 말에 더 이상 귀를 기울이지 않게 되었다. 그의 가장 친한 동료들도 판나르의 마법이 파괴적이고 충동적으로 변해버렸다고 수군거린다. 그는 요정의 방에 더 이상 존재하지 않는 정의를 지키기 위해 오늘도 순찰을 다니고 있다.||",
		"냉기마법이 얼마나 안습한지 유념없이 보여주는 네임드(...). 중반부 네임드라지만 사실 중반부에 만나면 잡몹과 다를게 없고 초반부에 만나야 간신히 네임드로서의 위상을 발휘할 정도.",
		" ",
		"얼음 괴물을 소환하고 멀리서 동결의 화살을 날리는 중레벨 마법사이다. 특히 초중반층(D10 근처)에 등장하는 경우에는 아직 플레이어 캐릭터가 얼음 괴물 하나를 간신히 잡을 수준밖에 되지 않기 때문에 직접 상대하기가 힘들다. 하지만 장비를 포함해서 전~부다 얼음계열인 탓에 얼음 저항이 충분하면 위의 멋있는 배경 이야기가 무색하게 허약한 모습을 보인다. 얼음링 때문에 화염저항이 -이므로 파이어볼 이상의 마법을 배운 법사에겐 경험치 덩어리."
	],
	"Mnoleg": [
		"이상하게 빛나는 형상이, 판데모니엄의 뒤틀린 공기 안에서 춤추고 있다.",
		"판데모니엄의 4대군주 중 빛의 지배자. 빛의 조트 룬을 지키고 있다. 돌연변이를 유발하는 악마 네퀘첵을 다수 소환하며 므놀렉 본체도 돌연변이 유발 능력이 있기 때문에 돌연변이 방지 목걸이를 착용하고 싸우도록 하자.",
		"여담이지만 로딩화면의 가면쓴 삐에로는 살인자 삐에로가 아니라 이놈이다."
	],
	"Grum": [
		"강력해 보이는 놀, 자신의 이전 전투견 중 한마리의 가죽을 뒤집어쓰고 있다.",
		"본인은 그렇게 강하지 않지만 등장할때 전투견(War Dog) 여러 마리를 대동하고 나온다."
	],
	"Prince Ribbit": [
		"저주받아 개구리가 된 잘생긴 왕자로, 저주를 풀기 위해 여행 중이다.",
		"'개구리 왕자' 이야기에서 따온 네임드. 능력치 자체는 일반적인 깜빡이 개구리와 거의 같지만(* Blink Frog는 21~45 사이에서 HD를 굴려 체력이 결정되지만 왕자는 HP가 고정적으로 40이다.), 대개 플레이어가 깜빡이 개구리를 상대할 능력이 없을 초반 층에서 등장하는지라 상대하는 데 애로 사항이 꽃핀다. ",
		"회피가 높아서 맞추기 힘들고 주기적으로 순간이동을 시전하는데다가 마법도 쓴다. 초반에 만나면 난감한 네임드 중 하나. 그냥 만나자마자 도망가거나, 아니면 최대한 빠르게 죽여야 한다. 완드건 뭐건 쓸수있는건 다 쓰자. 죽이면 개구리 시체가 아니라 인간 시체가 남는다. "
	],
	"Vashnia": [
		"숙련된 샤프슈터팀을 이끄는 엘리트 나가이다. 전이술 마법도 다소 익히고있다.",
		"설정상 라미아를 몰아내고 새 여왕이 된 네임드. 바쉬니아의 추가와 함께 나가 샤프슈터가 뱀굴에 추가되었는데, 야크타우어만큼 강력한 화살비를 쏴대는 턱에 뱀굴 난이도가 훌쩍 뛰어버렸다.",
		"스펙상 라미아에 비해 약해보이지만 기껏해야 미스틱블라스트나 쏴대는 나가메이지가 아닌, 나가 샤프슈터를 다수 대동하기때문에 라미아와 비슷하게 혹은 그 이상 어렵다고 평가된다. 방패술을 상당히 올린 전사가 아니라면 접근은 엄두도 못낼정도.",
		"자신의 부하들을 모두 플레이어에게 전이시키거나 플레이어를 자기쪽으로 블링크시키기도 한다. 재수없으면 벽뒤로 숨지도 못하고 끔살을 당할 수도 있다.",
		"계단을 내려가자마자 만나는 경우도 있으니 주의. 계단 내려가는 시간 동안 화살을 무지하게 맞아 마법사라면 빈사 직전까지 가게 되니 계단 타기 전엔 안개나 공포의 두루마리를 가지고 있는지 확인하도록 하자."
	],
	"Rupert": [
		"용맹한 성전사로, 적들을 회개시키는 것보다 죽이는 것에 관심이 있다.",
		"'제2의 지그문트'로 불릴 정도로 사악한 네임드. 다른 전사계열과는 달리 원거리에서 플레이어에게 마비, 혼란을 걸고 무력화하고 광폭한후 때리는데 정말 아프다. 간혹 신성 무기를 드는 경우가 있어 데몬스폰/언데드 계열로 플레이할 때 주의해야 한다.",
		"돌죽에서는 직업이 광전사로 바뀌었다. 아 물론 마비랑 혼란은 계속 쓴다...마법이 아니라 고함을 크게 질러 몸을 마비시키고 혼란스럽게 한다는 설정이다.",
		"여담으로 루퍼트의 광폭하는 플레이어가 쓰는 광폭화와 달리 지속시간 종료후 패널티가 없으며 1~2턴후에 곧바로 다시 시전한다. 빨리 도망가거나 속전속결만이 답."
	],
	"(이전 캐릭터의 이름) Ghost": [
		"이름 그대로 이전에 플레이했다가 죽은 캐릭터의 망령. 즉, 예전에 캐릭터가 많이 죽었으면 그만큼 유령을 만날 확률이 높아진다. 참고로 1~3층에서 죽은 캐릭터는 유령이 되지 않는다.",
		"각종 절망적인 말을 하며 흐느끼면서 공격해온다.",
		"비행 능력과 독 저항을 가지고있어 저레벨 때 만나면 상당히 짜증난다. 유령은 계단을 오르거나 내려갈 수 없으므로 죽일 수 있을 때까지 유령이 등장한 층을 통채로 넘기는 것도 좋은 방법이다.",
		"완벽한 카피는 아니지만 죽기전 저항과 투명보기, 무기의 옵션을 적용받고 시전하던 마법도 일부 가지고 오며, 심지어 드라코니언은 레벨을 하락시키는 흡수의 브레스도 사용한다. 연속으로!(* 유령은 숨을 쉬지 않기에 브레스에 따라붙는 호흡 곤란 패널티가 붙지않는다.) 증산을 쓰던 캐릭터는 증산할 포션도 따로 가지고나온다. 초반에 만난 전사계 유령은 그냥 붙어서 싸우다보면 이길 수 있지만 후반에 만나면 아주 위험하다! 다만 권능이나 마법봉등을 통한 버프는 쓰지 못하므로 캐릭에 따라서는 싱겁게 잡아버릴 수도 있다.",
		"타인 공간이동을 쓰던 캐릭터가 유령이 되어 나타날 경우 마치 이동식 공간전이 함정처럼 만나는 족족 플레이어블 캐릭터를 다른 곳으로 날려버리는데, 때문에 층에 도달한지 얼마 안 되었거나 위험한 몬스터 무리로부터 도망친 상태에서 타인 공간이동을 쓰는 유령을 만나면 주의가 필요하다.",
		"원본 캐릭터에 따라(* 다만 비인간형 종족도 일단 유령이 되면 인간형 유령으로 나타난다.) 스펙과 모습이 바뀌는데, 원본 캐릭터 없이 Ghost만으로 아레나에 참전시켜보면 물음표만 둥둥 떠있는 모습에 이동/공격 속도만 10이고 다른 것은 전부 1, 게다가 능력이나 속성도 없는 매우 기초적이고 약한 몹이 나타난다.",
		"자세한 망령정보",
		"오프라인으로 플레이하면 세이브 파일 중 .bones 파일을 지워서 유령이 안 나타나게 할 수 있지만, 원격 서버로 플레이하면 다른 플레이어가 죽어서 생긴 .bones 파일이 공유되기 때문에 플레이어 유령의 숫자가 많아진다. 영역은 무한대지만 같은 층으로 간주되는 판데모니엄이나 어비스라면 한 층에 두세명의 만렙 유령까지 볼 수 있다.  이렇게 트롤링을 할 수도 있다",
		"넷핵에서는 플레이어가 죽어서 생기는 좀비나 유령이 매우 약하기 때문에, 넷핵을 하다가 건너오면 초장부터 유령에게 맞아죽고 얼이 빠진다 카더라."
	],
	"Saint Roka": [
		"강력한 대장군. 어떤 오크들은 로카가 베오그의 선택받은 용사라고 말하기도 한다.",
		"간혹 메인 던전, 늪지, 볼트 등지에서 등장한다. 오크광산 마지막층에 깜짝등장하는 일도 있다.",
		"오크 기사/사제/마법사 급까지의 오크들을 대동하고 나오며, 힘도 세고 오크 사제가 쓰는 스마이트도 쓴다. 그나마 스마이트가 근접공격보단 약하기 때문에 원거리에서 처리하는 것을 권장... 하지만 석궁을 들고나와 쏘는 일도 있다. 일단 무기를 확인하자. 플레이어가 베오그의 신도라면 이놈 역시 아군으로 만들 수 있는데, 오크 네임드중 최강인만큼 아군이 되면 아주 강하다.(* 워로드보다 공격력은 약간 낮지만 체력이 월등히 높으며, 스마이트가 보기보다 상당히 도움된다.)",
		"뭔가 간지나는 설정과, 베오그 플레이시 최강의 아군이라는점 때문인지 국내 돌죽 유저들에게 좋은 이미지로 남아있다. "
	],
	"Edmund": [
		"지그문트를 질투하고 있다(그리고 아홉 형제중 막내다). 지그문트 정도의 마법 기술은 없으나, 돈을 벌기 위해 전투 기술을 연마했다. 에드먼드는 그의 비싼 철퇴를 휘두르며 운 없는 모험가들을 때려죽이면서 자신의 우위를 입증하고 있다.",
		"이름과 컨셉은 셰익스피어]]의 비극 의 등장인물의 [[패러디. 완드를 가지고 나오는 경우가 있어서 초반에 만나면 좀 위험한 네임드. 기본 전투력은 매우 약한 편에 속하지만, 가끔씩 무기에 플레이어 상성과 어긋나는 인챈트가 걸리기도 한다(구울/데몬스폰 vs. 신성 메이스 등). 늘 메이스류를 가지고 나오기 때문에 그쪽 특화를 노리는 캐릭터에겐 (잡을 수 있다면) 훌륭한 템셔틀. 가끔씩 다이어 플레일(!) 을 들고 나오는데 브랜드까지 걸려있다면 간보지 말고 튀자. 아레나에서 붙여보면 알겠지만 이 때의 전투력은 무려 지그문트를 능가한다. 한편 왠지는 모르겠으나 형보다 경험치는 더 많이 준다."
	]
};

mutationdic = {
	"placidmagic": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||스펠파워-, 주문성공률+ ||당신이 사용하는 마법은 약간 통제하기 쉬워지지만, 위력이 약간 감소한다.",
	" ||",
	"|| 2 ||스펠파워--, 주문성공률++ ||당신이 사용하는 마법은 통제하기 쉬워지지만, 위력이 감소한다.",
	" ||",
	"|| 3 ||스펠파워---, 주문성공률+++ ||당신이 사용하는 마법은 매우 통제하기 쉬워지지만, 위력이 많이 감소한다.",
	" ||",
	"Wild Magic 변이의 반대버전.",
	"마법의 성공률은 늘어나지만, 마법의 위력은 감소한다.",
	"전사계열 종족들은 보조로 사용하기 때문에 보조마법들의 위력이 소폭 감소하지만, 이 변이 1단계 정도면 Wizardry ring 의 효과에 조금 못미치기 때문에 엄청난 스펠 성공률을 보장할 수 있다.",
	"하지만 마법의 위력에 목숨을 거는 저주계열 마전사나 순수 마법사라면 주문의 위력이 크게 감소하므로 결코 좋지 않다! 1단계에서조차 이를 벌충하려면 1개의 주문 위력 강화 아이템이 필요하며, 2단계 이상이라면 마법이 주가 된다면 그냥 죽으라는 변이(* 보통 서로 다른 부위의 archmagi 아이템 2개를 확보했다면 15룬이 가능하다고 평가받는다!).",
	"전사에게도 2단계 이상은 버프 지속시간이 반토막나기 때문에 좋은 변이가 아니다.",
	"마법 위력이 감소되는 수치는 대략적으로 단계당 15% 정도."
	],
	"poweredbydeath": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||3타일 안에 있는 신선한 시체의 숫자만큼 재생력 상승(br)시체에서 생명력을 빼앗을 수 있는 시간은 (8+2d8) 턴 ||당신은 물리친 적에게서 느리게 생명력을 빼앗는다 ||",
	"|| 2 ||사정거리가 6타일로 상승, 지속시간은 (16+2d8)턴으로 증가 ||당신은 물리친 적에게서 생명력을 빼앗는다 ||",
	"|| 3 ||사정거리가 9타일로 상승, 지속시간은 (24+2d8)턴으로 증가 ||당신은 물리친 적에게서 빠르게 생명력을 빼앗는다 ||",
	"적을 죽인 뒤 시체 옆에 있는 동안 재생력이 시체 숫자만큼 상승한다.",
	"시체가 썩거나, 시체에서 떨어지거나, 시체에 할당된 지속시간이 지나면 재생 가속이 멈춘다.",
	"이 돌연변이에 영향을 받은 시체는 조금 더 빨리 썩게 된다.",
	"변이 등급이 올라갈수록 지속시간과 효과 사정거리가 증가한다.",
	"이 권능의 트리거는 어떠한 적이 죽어 시체가 드랍된 순간 발동되기 때문에, 키쿠바쿠드하의 권능으로 소환되는 시체에는 적용되지 않는다.",
	"예전엔 트롤이나 구울과 마찬가지로 후반부가 되면 시체가 나오는 적이 드물어 상당히 서러운 변이였으나 판데에 데몬스폰류의 적이 추가됨에 따라 후반부에도 효용성을 유지하게 되었다."
	],
	"scales": [
	"비늘 색에 따라 능력이 달라진다.",
	"일부 변이는 능력치를 많이 상승시켜주는 대신 약간의 단점을 가지고 있다.",
	"* 설명",
	"1단계 : 당신의 피부 일부는 (특정 색) 비늘에 덮여 있다.",
	"2단계 : 당신의 피부 대부분은 (특정 색) 비늘에 덮여 있다.",
	"3단계 : 당신의 피부는 완전히 (특정 색) 비늘로 덮여 있다.",
	"|| 변이 || 1랭크 효과 || 2랭크 효과 || 3랭크 효과 ||",
	"||녹아내리는 비늘(Molten Scales) ||AC+1 ||AC+3, EV-1 ||AC+4, EV-1, 화염 저항 ||",
	"||얼음처럼 새파란 비늘(Icy Blue Scales) ||AC+1 ||AC+3, EV-1 ||AC+4, EV-1, 냉기 저항 ||",
	"||미끌거리는 녹색 비늘(Slimy Green Scales) ||AC+2 ||AC+3 ||AC+4, 독 저항 ||",
	"||얇은 금속성 비늘(Thin Metallic Scales) ||AC+2 ||AC+3 ||AC+4, 전기 저항 ||",
	"||노란 비늘(Yellow Scales) ||AC+2 ||AC+3 ||AC+4, 부식 저항 ||",
	"||거친 검은 비늘(Rough Black Scales) ||AC+4, 민첩-1 ||AC+7, 민첩-2 ||AC+10, 민첩-3 ||",
	"||울퉁불퉁한 갈색 비늘(Rugged Brown Scales) ||AC+1, HP+3% ||AC+2, HP+5% ||AC+3, HP+7% ||",
	"||무지갯빛 비늘(Iridescent Scales) ||AC+4 ||AC+6 ||AC+8 ||",
	"외골격, 역장, 마른 외골격을 포함한 비늘류 돌연변이는 최대 3랭크까지만 가질 수 있다.",
	"예를 들어 무지갯빛 비늘 2랭크 돌연변이가 있다면 역장 돌연변이는 1까지만 얻을 수 있는 것.",
	"나가는 갑옷으로 얻는 AC가 반으로 줄어드는 돌연변이가 1랭크로 취급되기 때문에, 비늘류 돌연변이를 2랭크까지만 얻을 수 있다."
	],
	"acidicbite": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||부수적 물기 공격, 2d4 산성데미지, 이빨 변이와 중첩됨 ||당신의 이빨은 산성을 띤다 ||",
	"노란색 드라코니언은 레벨 14에서 이 변이를 획득한다.",
	"산성 데미지라 적의 AC와 물리 데미지를 일시적으로 저하시킬 수 있다.",
	"이빨 변이와 중첩이 되기 때문에 안티매직 깨물기가 추가타로 나가는 바인 스토커가 이 변이를 얻으면 상당히 흉측한 위력을 보여준다."
	],
	"wildmagic": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||스펠파워+, 주문성공률- ||당신이 사용하는 마법은 약간 통제하기 어렵지만, 조금 더 강력하다 ||",
	"|| 2 ||스펠파워++, 주문성공률-- ||당신이 사용하는 마법은 통제하기 어렵지만, 강력하다 ||",
	"|| 3 ||스펠파워+++, 주문성공률--- ||당신이 사용하는 마법은 아주 통제하기 어렵지만, 굉장히 강력하다 ||",
	"마법 시전시 실패 확률이 올라가는 대신 위력이 늘어난다.",
	"파괴나 원소 계열의 순수 마법사, 그리고 저주 성공률에 목숨을 거는 저주 관련 캐릭터에게는 주문 성공률만 갖추어진다면 상당한 수준의 스펠 파워 보정(* 변이 1단계에서 강화 아이템 1개와 동일, 2단계<강화 아이템 2개<3단계)을 얻기에 쌍수를 들고 환영하는 변이.",
	"하지만 자기 자신을 향한 버프 마법의 성패 여부에 목숨이 갈리는 마전사나 암살자 캐릭터들에게는 득보다 실이 많은 매우 나쁜 변이이다.",
	"다만 마법사라 할지라도 게임 초반 주문이 안정화되지 않았을 때 이 변이가 뜨면 그리 반갑지만은 않을 것이다.",
	"특히 2단계 이상의 변이는 주문력 증가에 비해 고위 마법에 대해 실패율이 심각하게 올라가기 때문에 순수 마법사에게도 그다지 좋은 변이는 아니다."
	],
	"regeneration": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||HP 재생력+ ||당신의 치유력은 통상보다 빠르다 ||",
	"|| 2 ||HP 재생력++ ||당신은 아주 빠르게 회복한다 ||",
	"|| 3 ||HP 재생력+++ ||당신은 재생한다 ||",
	"3단계.",
	"단계별로 자연 HP 회복속도가 증가한다.",
	"회복량은 3단계시에 재생반지와 엇비슷.",
	"트롤은 기본적으로 3단계를 가지고 시작한다.",
	"뱀파이어는 배부름 상태에서 1단계, 살아있음 상태에서 2단계 변이를 획득한다.",
	"느린 신진대사 돌연변이와 같이 가질 수 없다."
	],
	"slowmetabolism": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||기본 만복도 소모량-1 ||당신의 신진대사는 느리다 ||",
	"|| 2 ||기본 만복도 소모량-2 ||당신은 거의 음식을 먹지 않아도 된다 ||",
	"단계별로 상승할수록 만복도가 줄어드는 속도가 느려진다(1단계에서 -1, 2단계에서 -2).",
	"하플링과 펠리드는 1단계를, 스프리건은 2단계를 가지고 시작한다.(* 돌죽에서는 표기가 되나 오리지널에서는 표기되어 있지 않다.) 2단계까지 가면 마법을 쓰지 않았을 시 식량 걱정은 안 해도 문제가 없을 정도.",
	"다만 문제는 마법 없이 진행하기 힘들다는 것 뿐.",
	"빠른 회복 돌연변이와 같이 가질 수 없다."
	],
	"blink": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||점멸(Blink) 능력 획득, 낮은 성공률(br)사용 시 HP 5% 감소 ||당신은 짧은 거리를 마음대로 순간이동할 수 있다.",
	"||",
	"|| 2 ||성공률 증가 ||당신은 짧은 거리를 쉽게 마음대로 순간이동할 수 있다.",
	"||",
	"|| 3 ||성공률 더욱 증가 ||당신은 짧은 거리를 능숙하게 마음대로 순간이동할 수 있다.",
	"||",
	"같은 이름의 마법과 똑같은 효과를 가지며, 한번 사용할 때 마다 최대 HP의 5%가 소모된다.",
	"변이 레벨이 오를 수록 성공 확률도 높아진다."
	],
	"fangs": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||부수적인 물기 공격 ||당신의 이빨은 날카롭다 ||",
	"|| 2 ||향상된 부수적 물기 공격 ||당신의 이빨은 매우 날카롭다 ||",
	"|| 3 ||탁월한 부수적 물기 공격 ||당신의 이빨은 면도날처럼 날카롭다 ||",
	"근접 공격 시 확률적으로 깨물기 공격을 해 추가 피해를 준다.",
	"뱀파이어와 펠리드는 기본적으로 3단계를 가지고 시작한다.",
	"바인 스토커는 레벨이 올라감에 따라 최종적으로 3단계 변이를 습득한다.",
	"바인스토커의 경우 종특으로 반마법 효과가 붙어있어서 무시무시한 성능을 자랑한다.",
	"데몬스폰에게 이 변이가 일어날 수 있다."
	],
	"poweredbypain": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||랜덤2(입은 데미지)>5, 혹은 50% 이상의 HP를 손실했을 때 보너스 획득 ||당신은 상처를 입으면 힘을 약간 얻는다 ||",
	"|| 2 ||랜덤2(입은 데미지)>8, 혹은 50% 이상의 HP를 손실했을 때 보너스 획득 ||당신은 상처를 입으면 힘을 얻는다 ||",
	"|| 3 ||랜덤2(입은 데미지)>11, 혹은 50% 이상의 HP를 손실했을 때 보너스 획득 ||당신은 고통에서 힘을 얻는다 ||",
	"|| 획득 보너스 ||",
	"||50% 확률 : 3d(2+3*변이 단계) MP(br)25% 확률 : 힘+5 (Might)(br)25% 확률 : 민첩+5 (Agility)||",
	"데미지를 입었을 때 일정 확률로 보너스를 획득하는 변이.",
	"실컷 쳐맞을 수록 버프가 생기지만 '실컷 쳐맞음=다음장을 볼 확률이 높아짐'이란 공식이 성립하는 탓에 좋은 변이라곤 보기 힘들다.",
	"보너스가 체력 증가나 재생같이 생존력을 늘려주는 것이 아닌 mp및 단순 스텟 증강이라 초중반 이후엔 효용이 줄어들기 때문.",
	"마법사라면 마나가 오링난 상태에서 저 변이를 통해 탈출기를 쓸만한 마나를 확보할 수도 있지만 그전에 훅갈 확률이 높은데다 다른 보너스가 뜨면 걍 땡(...)."
	],
	"gelatinousbody": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||AC+1 ||당신의 고무 같은 몸은 충격을 흡수한다 ||",
	"|| 2 ||AC+1, EV+1 ||당신의 유연한 몸은 충격을 흡수한다 ||",
	"|| 3 ||AC+2, EV+2 ||당신의 젤리같은 몸은 충격을 분산한다 ||",
	"옥토퍼드는 랭크 1 변이를 가지고 시작한다."
	],
	"negativeenergyresistance": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||음에너지 저항+ (rN+) ||당신은 음에너지에 저항한다 ||",
	"|| 2 ||50% 확률로 고통을 무효화 ||당신은 부정한 고통에 어느 정도 저항할 수 있다 (1/2 확률) ||",
	"|| 3 ||블랙 마크 ||당신의 근접 공격은 때때로 적의 생명력을 흡수한다 ||",
	"블랙 마크(Black Mark)란 근접공격을 할 때마다 20% 확률로 적의 생명력을 흡수하며, 자신의 HP를 1d(데미지-1) 만큼 회복하는 효과다.",
	"피격당한 적은 반마법/약화(weak)/흡수 상태이상 중 하나에 걸린다.",
	"샤이닝 원을 믿지못해 음저에 상당히 신경을 써야하는 데몬스폰에게 매우 좋은 변이."
	],
	"camouflage": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||은밀도 +40 ||당신의 피부는 주변 환경에 맞게 색이 변한다.",
	"||",
	"|| 2 ||은밀도 +80 ||당신의 피부는 주변 환경에 치밀하게 녹아든다.",
	"||",
	"|| 3 ||은밀도 +120 ||당신의 피부는 주변 환경에 완벽하게 동화된다.",
	"||",
	"단계별로 은신 보너스 증가.",
	"옥토퍼드는 1단계를 가지고 시작한다."
	],
	"nightstalker": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||+40 은밀도, 시야 -1타일 ||당신은 그림자 속에 녹아들 수 있다 ||",
	"|| 2 ||+80 은밀도, 시야 -2타일 ||당신은 그림자 속에 상당히 잘 녹아들 수 있다 ||",
	"|| 3 ||+120 은밀도, 시야 -3타일 ||당신은 그림자 속에 완벽하게 녹아들 수 있다 ||",
	"변이 레벨이 상승할수록 은밀도가 높아지며 은신 능력이 대폭 증가한다.",
	"그러나 시야가 한 칸씩 줄어든다.",
	"하지만 몬스터의 시야 역시 줄어들기 때문에, 암살자는 암습할 몬스터에게 다가갈 거리가 대폭 짧아지게 된다.",
	"암살자로서는 그야말로 최고의 돌연변이.",
	"전사와도 꽤나 궁합이 좋다.",
	"일단 시야 안에 들어오는 몬스터의 수가 대폭 줄어들기 때문에 성가시기 짝이 없는 소환술사/고통시전자나, 원거리에서 관통주문을 쏘아대는 적에게 시달리는 일 자체가 많이 줄어들기 때문.",
	"순수마법사 같은 경우, 마법 사거리가 병맛이 되므로 이 변이가 뜬다면 노선을 갈아타거나 얌전히 Ctrl+q를 누르는게 낫다.",
	"다만 대지법사 같은 경우는 원래 마법사거리가 짧으므로 비교적 유용하게 써먹는게 가능."
	],
	"horns": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||부수적인 박치기 공격, 투구(* helmet) 착용 불가 ||당신의 머리에는 한 쌍의 작은 뿔이 있다 ||",
	"|| 2 ||향상된 부수적 박치기 공격, 투구 착용 불가 ||당신의 머리에는 한 쌍의 뿔이 있다 ||",
	"|| 3 ||탁월한 부수적 박치기 공격, 모든 머리 방어구 착용 불가 ||당신의 머리에는 한 쌍의 거대한 뿔이 있다 ||",
	"머리에 뿔이 돋아 근접 공격 시 확률적으로 박치기를 해 추가 피해를 줄 수 있지만 1~2단계는 투구를 사용할 수 없고 모자나 마법사 모자만 착용할 수 있게 되며, 3단계가 되면 모든 종류의 머리 방어구의 착용이 불가능해진다.",
	"미노타우로스는 기본적으로 2단계의 변이를 가지고 시작한다.",
	"확률적 반격은 뿔의 효과가 아니라 미노타우르스의 종특이라 다른 종족이 이 변이를 얻었다고 반격 능력을 가지진 않는다."
	],
	"reducedattributes": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||힘 or 지능 or 민첩 -2 ||당신은 약하다(br)당신은 멍청하다(br)당신은 둔하다 ||",
	"|| 2 ||힘 or 지능 or 민첩 -4 ||당신은 아주 약하다(br)당신은 아주 멍청하다(br)당신은 아주 둔하다 ||",
	"능력치가 저하된다.",
	"최대 -4 능력치까지 줄어들 수 있다.",
	"일반적인 능력치 감소(노란색으로 표시되는 그것)와는 달리, 변이 자체가 치유되기 전까지는 아예 반영구적으로 줄어드는 것이기 때문에 능력치 회복 물약을 써도 효과는 없다.",
	"0.13부터 랭크는 최대 2랭크, 능력은 최대 -4까지 줄어들도록 변경되었다."
	],
	"nodeviceheal": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 || 완드나 물약을 통한 치유의 효율이 33% 감소 ||당신의 신체가 인공적인 치유를 부분적으로 거부한다.",
	"||",
	"|| 2 || 완드나 물약을 통한 치유의 효율이 67% 감소 ||당신의 신체가 인공적인 치유를 대부분 거부한다.",
	"||",
	"|| 3 || 완드나 물약을 통한 치유의 효율이 100% 감소 ||당신의 신체가 인공적인 치유를 완벽히 거부한다.",
	"||",
	"* Vine Stalker 는 기본적으로 해당 변이를 3단계 보유한 상태로 시작한다."
	],
	"clarity": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||명석함(Clarity) ||당신의 정신은 아주 맑다.",
	"||",
	"혼란, 강제 광폭화, 환상에 저항이 생긴다.",
	"좋은 돌연변이에 속한다.",
	" 막아주는 효과가 대부분 마저로 막을 수 있는 것들이라 마저가 높으면 있으나 마나라는 단점(?)이 있다.",
	"중후반부, 즉 3룬을 넘어가거나 재수없이 어비스로 빠진 시점에서 돌연변이 저항부적을 필수적으로 착용해야 하는데, 이러면 명석함의 부적을 쓰기가 힘들다.",
	"그런 경우 매우 유용하다.",
	"수정구의 위험성을 달고 살아야 하는 마법사에게 특히 유용하다."
	],
	"blurryvision": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||20% 확률로 책이나 스크롤 읽기 실패, 트랩 감지 확률 감소 ||당신의 시야는 조금 흐릿하다 ||",
	"|| 2 ||40% 확률로 읽기 실패, 트랩 감지 확률 감소 ||당신의 시야는 꽤 흐릿하다 ||",
	"|| 3 ||60% 확률로 읽기 실패, 트랩 감지 확률 감소 ||당신의 시야는 심각하게 흐릿하다 ||",
	"스크롤이나 책을 읽을때 실패할 확률이 생긴다 (20%→40%→60%).",
	"역시 최악의 돌연변이 중 하나.",
	"위급상황에서 텔레포트 스크롤 썼는데 '시야가 흐릿해서 읽을 수가 없다!' 라고 뜨면...",
	"그나마 읽는데 실패했다고 스크롤이 사라지지는 않고, 중후반부엔 완드를 통한 대체가 가능한 탓에 어느정도 템만 갖춰져 있으면 견딜만한 변이.",
	"최신 버전에서는 실패 확률이 생겨나는 것이 아니라 스크롤을 읽는데 드는 턴 수가 늘어나도록 바뀌었다.",
	"이 변이가 있는 상태에서 스크롤을 읽으면 정말 읽겠냐고 확인문구가 뜬다.",
	"공간이동 스크롤이 초중후반 내내 가장 유용한 탈출 수단이며, 1턴이 아까운 상황에서 쓰는 걸 감안한다면 더 안 좋아졌다."
	],
	"bigwings": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||비행 능력 획득 ||당신의 날개는 크고 강하다 ||",
	"용인과 가고일 고유의 돌연변이.",
	"검은 용인과 가고일은 14레벨에 이 변이를 얻는다.",
	"14레벨 이전에도 이 변이를 얻는 것 자체는 가능한데 그 전에 얻을 경우 영구 비행이 아니라 제한시간이 딸린 비행만 가능하다."
	],
	"teleport": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||짧은 거리를 공간이동 ||당신 주변의 공간이 가끔씩 일그러진다 ||",
	"|| 2 ||중간 거리를 빈번하게 공간이동 ||당신 주변의 공간이 종종 일그러진다 ||",
	"|| 3 ||거리 제한 없음, 매우 빈번한 공간이동 ||당신 주변의 공간이 자주 일그러진다 ||",
	"시시때때로 갑자기 공간이동한다.",
	"언제 어느 때 걸려도 목숨에 심각한 위협이 되는 변이.",
	"없애야 할 최우선적인 변이 중 하나다.",
	"정지의 부적이나 -Tele 옵이 붙은 아이템을 쓰면 막을 수 있지만 역으로 탈출용 텔포조차 힘들어지므로 결과적으론 무다무다(...).",
	"최신 버전에서는 무려 '당신은 때때로 주변 적에게로 공간이동한다'로 돌연변이의 효과가 바뀌었다.",
	"한 마디로 길 가다가 난데없이 몬스터 무리 한가운데에 떨어진다는 소리다!",
	"안 그래도 악랄한 변이가 더욱 끔찍하게 바뀐 케이스.",
	"이 변이가 걸렸다면 -Tele를 감수하고서라도 정지의 부적을 끼고 다니는 것을 고려해봐야 한다."
	],
	"foulstench": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||부패 저항(rRot) ||당신은 부패에 대한 저항력이 있다 ||",
	"|| 2 ||근접 공격을 당했을 때, 33%확률로 적에게 질병 발생(br)강한 피해를 입었을 때 20% 확률로 부패구름 발생 ||당신은 악취를 내뿜으며, 부패에 대한 저항력이 있다 ||",
	"|| 3 ||질병 유발/부패구름 발생 확률 2배 증가 ||당신은 지독한 독기를 내뿜으며, 부패에 대한 저항력이 있다 ||",
	"플레이어에게 부패 저항이 생긴다.",
	"근접 공격을 받았을 때 적에게 질병 상태이상을 걸거나, 부패 구름(cloud of miasma)를 내뿜어 적에게 감속, 질병, 부패를 건다.",
	"다만 은신이 어려워지니 암살자가 걸렸다면 놀타임 추천.",
	"부패에 면역이 되기 때문에 무덤 같은 서브던전을 편하게 털 수 있다.",
	"각종 부패 유발 고기, 오염된 고기를 편하게 뜯어먹을 수 있는 것은 덤.",
	"0.15에서 1단계의 효과가 썩은 고기를 먹을 수 있는 것에서 부패 면역으로 바뀌었다.",
	"2단계의 부패 저항이 1단계로 내려온 셈."
	],
	"slow": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||이동 딜레이* 1.2 ||당신을 지면 위를 느리게 이동한다 ||",
	"|| 2 ||이동 딜레이* 1.44 ||당신을 지면 위를 매우 느리게 이동한다 ||",
	"|| 3 ||이동 딜레이* 1.728 ||당신을 지면 위를 극도로 느리게 이동한다 ||",
	"나가는 2랭크 변이를 가지고 시작한다.",
	"체이브리아도스 신자가 아닌 이상 걸리면 X 같다.",
	"그냥 X 같다.",
	"다만 이 변이는 변신했을 때까지 적용되는 것은 아니다.",
	"즉 박쥐나 거미로 변신해 재빨리 도망가는 것은 가능!",
	"0.14부터는 시작할 때 기본적으로 느림보 돌연변이를 가지는 나가를 제외하면 랜덤으로 변이를 획득할 때 이 변이가 생겨나지 않도록 바뀌었다.",
	"매우 다행."
	],
	"improvedattributes": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||힘or지능or민첩 +2 ||당신의 근육은 강하다(br)당신의 정신은 날카롭다(br)당신은 날렵하다 ||",
	"|| 2 ||힘or지능or민첩 +4 ||당신의 근육은 아주 강하다(br)당신의 정신은 아주 날카롭다(br)당신은 아주 날렵하다 ||",
	"각각 힘, 지능, 민첩이 상승.",
	"최대 +4까지 오른다.",
	"0.13부터 랭크는 최대 2랭크까지, 능력치는 최대 +4까지만 오르도록 변경되었다."
	],
	"translucentskin": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||효과 없음 ||당신의 피부는 부분적으로 투명하다 ||",
	"|| 2 ||은밀도+20 ||당신의 피부는 거의 투명하다 ||",
	"|| 3 ||은밀도+40 ||당신의 투명한 피부는 적들이 분간하기 어렵다 ||",
	"단계별로 은신에 보너스를 제공한다."
	],
	"forlorn": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||신앙 증가량 33% 감소 ||당신은 신과 소통하는 데 어려움을 느낀다 ||",
	"안 좋다.",
	"정말 안 좋다.",
	"초반에 걸리면 자연스럽게 손가락이 ctrl과 q 위로 올라간다.",
	"신앙 ******를 채운 중후반에 걸리면 그나마 낫…기는커녕 권능 사용 부담이 팍팍 늘어난다.",
	"고자그 신도라면 권능 사용 비용이 얼씨구나 좋다 상승하며, 루 신도라면 희생 옵션이 나타나는 딜레이가 확연하게 길어진다.",
	"시프 무나처럼 신앙도 쓸 일이 별로 없는 신이라면 신앙도가 이미 좀 쌓여있다는 전제하에 그럭저럭 버틸만 하다."
	],
	"mp-poweredwands": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 || 마법봉을 휘두를 때마다, 마나를 3씩 소모하지만 스펠파워가 올라갑니다 || 당신의 마력의 정수가 완드와 연결된 것을 느꼈다 .",
	"||",
	"완드의 위력이 상승하지만, 완드를 사용시 마나를 소모하는 변이.",
	"Wild magic 변이의 완드버전이라고 볼 수 있지만, 애초에 완드를 사용하는 단계라면 초반에는 공격 완드들을 쓰고, 후반에는 보조류 완드를 휘둘러야 되는데, 초반에는 마나 소모량이 감당이 안되고, 후반에는 보조류 완드들은 스펠 파워가 강화가 된다해도 그렇게 효율이 좋지않기 때문..(* 결정적으로 보조완드중에서 자주 쓰는 완드는 헤이스트 , 텔레포트 , 힐링 인데...",
	"파워가 올라간다고 텔레포트가 빨라진다던지...",
	"힐량이 늘어난다던지..",
	"그런거 없고, 헤이스트만 해당된다..",
	"..어?) 후반에는 마법도 많이 사용하는데, 마나가 감당이 안된다..",
	"결정적으로 스펠 파워가 올라간게 그리 크게 체감이 안가기 때문 (...)",
	"처음에는 3단계 까지 존재했으나 (3 → 6 → 9 ) 지금은 1단계만 존재한다."
	],
	"fast": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||이동 딜레이 -2 ||당신을 지면 위를 빠르게 움직인다.",
	"||",
	"|| 2 ||이동 딜레이 -3 ||당신을 지면 위를 매우 빨리 움직인다.",
	"||",
	"|| 3 ||이동 딜레이 -4 ||당신을 지면 위를 극도로 빨리 움직인다.",
	"||",
	"펠리드는 랭크 1, 센타우르는 랭크 2, 스프리건은 랭크 3 변이를 가지고 시작한다.",
	"정신나간 성능의 변이.",
	"사실상 무료 신속의 장화나 다름없다.",
	"텔포를 쓰지 않아도 안전하게 도주할 수 있도록 해준다.",
	"0.14부터는 종족 기본 돌연변이 외에 랜덤으로 돌연변이를 얻을 때에는 생겨나지 않도록 바뀌었다."
	],
	"manashield": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||수호 정령(Spirit shield) 패시브 획득 ||상처를 입었을 때, 당신은 피해를 체력과 마력으로 나누어 받는다 ||",
	"|| 2 ||MP 회복속도 증가 ||당신은 빠르게 마력을 회복한다 ||",
	"|| 3 ||MP가 낮을 때, HP 재생이 MP 재생으로 변환 ||마력이 낮을 때, 당신은 체력 대신 마력을 회복한다 ||",
	"1단계에선 수호 정령 효과를 얻고 2,3단계에선 마력 회복에 보너스를 얻는다.",
	"직업 불문하고 매우 좋은 변이.",
	"전사라면 몸빵이 늘어나고 마전사나 법사에겐 약간 미묘하긴 하지만 회복 증가덕에 마법사용이 편해진다.",
	"마법사에게는 반드시 2단계 이상의 변이가 필요한데, 수호 정령 패시브는 마법사에게 좋지 않은 것으로 취급되기 때문."
	],
	"shockresistance": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||전기 저항(rElec) ||당신은 전기 충격에 저항한다.",
	"||",
	"독 저항 못지 않은 좋은 돌연변이.",
	"중후반에 등장하는 강력한 몬스터들이 전기 공격을 한다는 점, 그리고 전기 저항은 오직 아티팩트를 통해서만 구할 수 있다는 점을 생각하면 그야말로 축복이 아닐 수 없다.",
	"장비 착용이 제한되는 종족들에게는 더더욱.",
	"가고일은 랭크 1을 가지고 시작한다."
	],
	"frail": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||최대 HP -10% ||당신은 허약하다 ||",
	"|| 2 ||최대 HP -20% ||당신은 아주 허약하다 ||",
	"|| 3 ||최대 HP -30% ||당신은 정말로 허약하다 ||",
	"단계별로 최대 HP가 10% 감소.",
	"전사, 마법사, 마전사, 암살자 그 어떤 캐릭터를 가리지 않고 생존력을 탁월하게 박살내주는 돌연변이다.",
	"특히 딥 엘프 법사 플레이 중 이 변이에 걸리면 그저 서러움만 휘몰아친다."
	],
	"pseudopods": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||부수적인 위족 공격, 데미지 4, 갑옷의 기본 AC 보너스를 50% 깎음 ||당신의 위족에는 갑옷이 잘 맞지 않는다 ||",
	"|| 2 ||부수적인 위족 공격, 데미지 8, 갑옷의 기본 AC 보너스를 50% 깎음 ||당신의 큰 위족에는 갑옷이 잘 맞지 않는다 ||",
	"|| 3 ||부수적인 위족 공격, 데미지 12, 갑옷의 기본 AC 보너스를 50% 깎음 ||당신의 거대한 위족에는 갑옷이 잘 맞지 않는다 ||",
	"근접 공격 시 추가 타격을 제공하지만, 갑옷의 기본 AC 보너스를 반으로 깎는다(강화 수치는 정상적으로 적용된다).",
	"전사계열이 이 변이가 걸렸다면 변이가 풀릴 때까지는 몸을 사리는 편이 좋다.",
	"다른 뒤틀린 몸 변이와 중첩되지는 않는다."
	],
	"demonicguardian": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||위험 상황에서 약한 악마 동료가 자동으로 소환된다 ||약한 수호 악마가 당신을 도우러 온다 ||",
	"|| 2 ||중급 악마 동료가 소환된다 ||수호 악마가 당신을 도우러 온다 ||",
	"|| 3 ||강력한 악마 동료가 소환된다 ||강한 수호 악마가 당신을 도우러 온다 ||",
	"|| 하급 악마 ||하얀 임프, 우페터버스, 빨간 임프, 강철 임프 ||",
	"|| 중급 악마 ||태양의 악마, 식스피르키, 영혼을 먹는 자, 얼음 악마, 연기의 악마 ||",
	"|| 상급 악마 ||처형의 악마, 리퍼, 발록, 카코데몬 ||",
	"데몬 스폰이 얻을 수 있는 최고의 변이 중 하나.",
	"2티어지만 성능은 3티어에 필적한다.",
	"위험에 빠졌을 때 악마 동료가 자동으로 소환된다.",
	"적의 HD가 높을수록, 적의 수가 많을수록 더 많은 수의 동료 악마들이 소환된다.",
	"상위 악마 소환마법과는 달리 시간이 지난다고 배신을 때리지도 않는다.",
	"3단계 변이는 마크레브의 대악마 소환 권능이 공짜로 부여되는 것이나 다름없기 때문에 게임 내내 굉장히 유용하다.",
	"0.13 버전에서는 동료 사망 시 신앙심 감소 문제 때문에 오카와루를 믿으면 수호 악마가 소환되지 않았다.",
	"그러나 0.15 이후로는 오카와루를 믿어도 수호 악마가 소환되며 동료가 죽어도 신앙도가 깎이지 않는다."
	],
	"berserk": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||공격 시 1% 확률로 광폭화, 한 번 기절했다 깨어난 후라면 3% ||당신은 가끔 전투중 이성을 잃는다 ||",
	"|| 1 ||공격 시 3% 확률로 광폭화, 기절한 후라면 2% ||당신은 자주 전투중 이성을 잃는다 ||",
	"|| 1 ||공격 시 9% 확률로 광폭화, 기절한 후라면 1.5% ||당신은 이성을 제어할 수가 없다 ||",
	"전투 중 매 턴마다 일정 확률로 광폭화 상태에 돌입한다.",
	"정지의 부적이나 명석함의 부적이 있다면 무효화할 수 있다.",
	"트로그 신앙 중이라면 광폭화 패시브 때문에 그럭저럭 버틸만한 변이.",
	"그러나 그 밖의 전사 계열에게는 좋지 않다.",
	"광폭화에는 10% 확률로 기절하는 후유증이 있기 때문.",
	"마법사가 걸린다면 다른 변이들을 제쳐버리는 최악의 변이중 하나.",
	" 마법 쓸 때는 광폭화가 일어나지 않으니 물리공격을 아예 봉인해야 한다.",
	"암살자에게도 물론 좋지 않다(광폭화 시 은밀도가 0으로 고정)."
	],
	"eyeballs": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||명중률+3, 근접 공격을 하는 적이 종종 혼란 ||당신의 몸은 부분적으로 금빛 눈알에 덮여 있다 ||",
	"|| 2 ||명중률+5, 근접 공격을 하는 적을 더 높은 확률로 혼란시킴 ||당신의 몸 대부분이 금빛 눈알에 덮여 있다 ||",
	"|| 3 ||명중률+7, 투명 감지(SInv), 근접 공격을 하는 적을 더 높은 확률로 혼란시킴 ||당신의 몸은 완전히 금빛 눈알로 뒤덮여 있다 ||",
	"가끔 적으로 나타나 혼란저항을 갖추지 못한 플레이어에게 고혈압을 선사하는 황금 눈알 몹과 바로 똑같은 그것이다."
	],
	"claws": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||맨손 격투 보너스, 부수적 손톱 공격, 일정 확률로 출혈 유발.",
	"장갑 착용 시 무효 ||당신의 손톱은 날카롭다 ||",
	"|| 2 ||향상된 맨손 격투 보너스, 부수적 손톱 공격, 출혈 확률 증가.",
	"장갑 착용 시 무효.",
	"||당신의 손톱은 아주 날카롭다 ||",
	"|| 3 ||탁월한 맨손 격투 보너스, 부수적 손톱 공격, 출혈 확률 대폭 증가, 장갑 착용 불가 ||당신은 갈퀴같은 손톱이 달려 있다 ||",
	"근접 공격에 추가 피해를 부여한다.",
	"이빨, 부리, 뿔, 발굽 등의 여타 신체변이와는 달리 맨손 격투 피해 자체에 보너스를 부여하는 것이 특징.",
	"1단계부터 2단계까지는 손톱 보너스가 사라지는 대신 장갑을 착용할 수 있으나, 3단계부터는 장갑 착용이 불가능하다.",
	"트롤은 종족 특성으로 3단계를 가지고 시작하며, 구울과 펠리드는 1단계를 가지고 있다.",
	"맨손 격투를 다른 최종무기와 비교해도 전혀 꿀리지 않게 만들어주는 매우 좋은 변이."
	],
	"hooves": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||부수적인 발차기 공격, 신발 착용 시 무효, 은밀도-10 ||당신의 발은 갈라져 있다 ||",
	"|| 2 ||향상된 부수적 발차기 공격, 신발 착용 시 무효, 은밀도-15 ||당신의 발은 발굽과 비슷하다 ||",
	"|| 3 ||탁월한 부수적 발차기 공격, 신발 착용 불가, 은밀도-20 ||당신은 발 대신 발굽이 달려있다 ||",
	"근접 공격시 추가 피해 확률이 생긴다.",
	"1단계부터 2단계까지는 신발을 신을 수 있지만, 이 때 신발을 착용하면 변이 보너스가 사라진다.",
	"은밀도 패널티는 비행 상태에서는 적용되지 않는다.",
	"3단계가 되면 신발을 신을 수 없게 된다.",
	"켄타우로스는 기본적으로 3단계를 가지고 시작한다."
	],
	"fastmetabolism": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||모든 행동의 만복도 소모 +1 ||당신의 신진대사는 빠르다 ||",
	"|| 2 ||모든 행동의 만복도 소모 +2 ||당신의 신진대사는 아주 빠르다 ||",
	"|| 3 ||모든 행동의 만복도 소모 +3 ||당신의 신진대사는 번개처럼 빠르다 ||",
	"오우거]], 센타우르는 기본적으로 1단계를 가지고 시작한다(0.16버전부터는 삭제).",
	"[[트롤은 3단계를 가지고 시작할 뿐만 아니라, 여기에 추가로 만복도 소모량이 +3이다!"
	],
	"slowhealing": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||시야 안에 적이 있을 때 재생속도 50% 감소 ||당신은 느리게 회복한다 ||",
	"|| 2 ||시야 안에 적이 있을 때 재생속도 100% 감소 ||당신은 정말로 느리게 회복한다 ||",
	"|| 3 ||자연적 재생 불가 ||당신은 재생할 수 없다 ||",
	"단계별로 HP 재생속도가 감소한다.",
	"처음 1, 2단계는 시야 안에 적이 있을 때만 재생속도가 감소하지만, 3단계가 되면 적이 있든 없든 재생 자체가 불가능하다.",
	"3단계에서는 완드나 포션, 혹은 신의 권능으로만 HP를 회복해야 한다.",
	"딥 드워프는 3단계, 구울은 1단계를 갖고 시작한다.",
	"이 돌연변이는 감소된 능력치를 회복하는 속도에도 적용된다."
	],
	"highmp": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||최대 MP+10% ||당신의 마법 수용량은 크다 ||",
	"|| 2 ||최대 MP+20% ||당신의 마법 수용량은 꽤 크다 ||",
	"|| 3 ||최대 MP+30% ||당신의 마법 수용량은 굉장히 크다 ||",
	"단계별로 최대 MP가 10% 상승한다.",
	"항상 마나부족에 시달리는 마법사에게는 최고의 변이."
	],
	"thinskeletalstructure": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||민첩+2, 은밀도+25 ||당신의 골격은 약간 가늘다 ||",
	"|| 2 ||민첩+4, 은밀도+50 ||당신의 골격은 상당히 가늘다 ||",
	"|| 3 ||민첩+6, 은밀도+75 ||당신의 골격은 이상하리만치 가늘다 ||",
	"암살자에게 나온다면 꽤나 좋은 변이.",
	"민첩이긴 하지만 능력치 상승량도 꽤 쏠쏠하다.",
	"암습 캐릭터가 아니라도 그럭저럭 쓸만하다.",
	"이전 버전에서는 단계별로 힘 능력치가 1씩 하락했었다.",
	"순수하게 버프만 받은 특이한 돌연변이.",
	"특정 종족일 때만 발생하는 돌연변이.",
	"당연히 종족 특성에 관련된 돌연변이다.",
	"데몬스폰의 돌연변이는 하단에 따로 서술한다."
	],
	"spitpoison": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||독 뱉기 능력을 사용할 수 있음 ||당신은 독을 뱉을 수 있다 ||",
	"|| 2 ||향상된 대미지와 성공률 ||당신은 상당히 강한 독을 뱉을 수 있다 ||",
	"|| 3 ||더욱 향상된 대미지와 성공률 ||당신은 강력한 독을 뱉을 수 있다 ||",
	"독을 뱉어 원거리 공격을 할 수 있다.",
	"맞은 적은 피해를 입고 독에 걸린다.",
	"잠깐 호흡 페널티가 생기긴 하지만 그래도 무제한이며 원거리 공격이라는 점이 훌륭한 선제공격기 내지는 발악기가 된다.",
	"나가는 기본적으로 1단계 돌연변이를 가지고 시작한다.",
	"최신 버전에서는 3단계 변이 시 독구름(!!!)을 뱉는다.",
	"일직선이긴 하지만 사정거리 6칸의 포이즌 클라우드 마법을 노 페널티로 쓰는 거나 다름없으므로 초반에는 일자통로에서 쓰면 매우 유용하다."
	],
	"talons": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||부수적인 발차기 공격, 신발 착용 시 무효 ||당신의 발톱은 날카롭다 ||",
	"|| 2 ||향상된 부수적 발차기 공격, 신발 착용 시 무효 ||당신의 발톱은 매우 날카롭다 ||",
	"|| 3 ||탁월한 부수적 발차기 공격, 신발 착용 불가 ||당신은 갈고리 같은 발톱을 가지고 있다 ||",
	"근접 공격시 추가 피해 확률이 생긴다.",
	"1단계부터 2단계까지는 보너스를 잃는 대신 신발을 신을 수 있고, 3단계가 되면 신발을 신을 수 없게 된다.",
	"텐구는 기본적으로 3단계를 가지고 시작한다."
	],
	"icemail": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||냉기 저항 1 (rC+) ||당신은 냉기에 저항력이 있다 ||",
	"|| 2 ||냉기 구름 면역 ||당신은 냉기 구름에 면역이다  ||",
	"|| 3 ||얼음 갑옷(Icemail) ||녹아내릴 수 있는 얼음이 당신을 피해와 냉기 구름으로부터 보호한다 ||",
	"얼음 갑옷은 AC+10을 제공한다.",
	"그러나 불 계열 공격을 맞거나 불 마법을 시전하면 얼음 갑옷이 녹아서 보너스가 사라지니 주의.",
	"사라진 보너스는 일정 시간이 지나면 복구된다.",
	"물품 보존이 사라진 0.15에서 2단계의 효능이 물약 보호에서 냉기구름 면역으로 바뀌었다.",
	"3단계의 성능 일부가 2단계로 옮겨온 셈."
	],
	"jellymissile": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||젤리가 먹을 수 있는 투사체에 피격당할 때마다, 50% 확률로 데미지의 반만큼 회복한다 ||당신에게 달라붙은 작은 젤리가 날아오는 투사체들을 흡수한다 ||",
	"젤리가 먹을 수 있는 투사체만을 흡수하므로, 조약돌과 바위의 피해는 그대로 받아야 한다."
	],
	"poisonbreath": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||독구름을 뿜어낸다 ||당신은 독구름을 뿜어낼 수 있다 ||",
	"나가가 Spit Poison 변이를 추가적으로 얻는 경우 나타난다."
	],
	"antennae": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||시야 내 투명한 적들의 위치 표시, 주위 3타일 이내의 적 감지, 투구(* helmet) 착용 불가 ||당신의 머리에는 한 쌍의 작은 더듬이가 있다 ||",
	"|| 2 ||주위 5타일 이내의 적 감지, 투구 착용 불가 ||당신의 머리에는 한 쌍의 더듬이가 있다 ||",
	"|| 3 ||주위 7타일 이내의 적 감지, 투명 감지(SInv), 모든 머리 방어구 착용 불가 ||당신의 머리에는 한 쌍의 긴 더듬이가 있다 ||",
	"뿔 변이와 마찬가지로 투구 사용을 제한하지만, 뿔과는 달리 추가 타격을 주진 못하나 대신 주위 적들을 감지하는 능력이 생긴다.",
	"벽 너머나 구름/안개 너머에 있는 적도 감지할 수 있다.",
	"3단계가 되면 모든 종류의 모자를 쓸 수 없게 되지만 투명체 감지 능력을 얻을 수 있다.",
	"안테나의 사정거리 안에 있는 미믹의 정체가 자동으로 발각된다.",
	"포미시드는 랭크 3을 가지고 시작한다."
	],
	"heatresistance": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||열기 저항+ ||당신의 피부는 불에 저항력을 갖는다.",
	"||",
	"|| 2 ||열기 저항++ ||당신의 피부는 불에 강한 저항력을 갖는다.",
	"||",
	"|| 3 ||열기 저항+++ ||당신의 피부는 불에 거의 면역이다.",
	"||",
	"단계별로 화염 저항이 증가한다."
	],
	"mutationresistance": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||66.6% 확률로 돌연변이에 저항 ||당신은 돌연변이에 약간 저항력이 있다.",
	"||",
	"|| 2 ||66.6% 확률로 돌연변이에 저항(br)돌연변이를 제거하는 데 실패할 확률이 50% ||당신은 돌연변이와 돌연변이 제거 양 쪽에 저항한다.",
	"||",
	"|| 3 ||100% 확률로 돌연변이에 저항(br)돌연변이를 제거하는 데 실패할 확률이 100% ||당신의 현재 돌연변이가 반영구적으로 고정되며, 당신은 더 이상 변이하지 않는다.",
	"||",
	"2랭크부터는 돌연변이가 생기는 데도 저항하지만, 돌연변이 제거에도 저항한다.",
	"3랭크가 되면 현재 가진 돌연변이가 반영구적으로 고정된다.",
	"3랭크 변이는 오직 좀]], [[지이바만이 제거할 수 있다.",
	"'66.6% 확률로 돌연변이에 저항' 효과는 변이 저항의 목걸이와 효과가 중첩된다.",
	"하플링은 1랭크를 가지고 시작한다.",
	"이전에는 플레이어의 돌연변이를 사라지게 만드는 효과였다."
	],
	"augmentation": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||높은 HP에서 Slaying 보너스 ||체력이 높을 때 당신의 물리적인 힘과 마법적인 힘은 조금씩 상승한다 ||",
	"|| 2 ||높은 HP에서 향상된 Slaying 보너스 ||체력이 높을 때 당신의 물리적인 힘과 마법적인 힘은 상승한다 ||",
	"|| 3 ||높은 HP에서 탁월한 Slaying 보너스 ||체력이 높을 때 당신의 물리적인 힘과 마법적인 힘은 크게 상승한다 ||",
	"최대 HP에 따라 Slaying/스펠파워가 증가한다.",
	"전투력이 포풍같이 증가하지만 묻지도 따지지도 않고 체력의 반절을 날려버리는 고통이 난무하는 후반으로 가면 살짝 서러워지는 돌연변이.",
	"보너스의 수치는 다음과 같다.",
	"|| 최소 0, 최대 (변이 단계 * (2*HP - 최대HP)/ 최대HP)) * (0.4*스펠파워 + 4 Slaying) ||",
	"HP가 최대일 때 보너스가 가장 크다.",
	"HP가 감소할수록 효과는 줄어든다.",
	"슬라임의 신 지이바를 믿었을 때 지이바가 선사하는 고유의 돌연변이.",
	"이러한 변이들은 치료물약을 먹지 않더라도 시간이 지남에 따라 임의의 확률로 사라지기도 한다."
	],
	"igniteblood": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||불기둥 면역 ||당신은 화염 구름에 면역이다 ||",
	"|| 2 ||화염 저항(rF+) ||당신은 불에 저항력이 있다 ||",
	"|| 3 ||타오르는 피 ||당신의 악마적인 기운은 흐른 피를 불타오르게 한다 ||",
	"'타오르는 피' 효과는 적이 출혈 상태에 빠지거나 강력한 피해를 입어 타일에 피가 튈 때 그 자리에 불기둥을 일으킨다.",
	"일정 확률로 출혈을 일으키는 손톱 3변이와 궁합이 좋다.",
	"순식간에 주위를 불바다로 만들어 버리기 때문."
	],
	"largeboneplates": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||AC+2, SH+2 ||당신의 몸 일부는 외골격으로 덮여 있다 ||",
	"|| 2 ||AC+3, SH+4 ||당신의 몸 대부분은 외골격으로 덮여 있다 ||",
	"|| 3 ||AC+4, SH+6 ||당신의 몸은 완전히 외골격에 덮여 있다 ||",
	"일반적인 비늘 변이와는 달리 저항을 제공하지는 못하나 SH 수치가 쏠쏠히 올라간다."
	],
	"beak": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||부수적 쪼기 공격, 투구 착용 불가 ||당신은 입에 부리가 달려 있다 ||",
	"텐구는 이 변이를 가지고 시작한다."
	],
	"lowmp": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||최대 MP -10% ||당신의 마법 수용량은 작다 ||",
	"|| 2 ||최대 MP -20% ||당신의 마법 수용량은 꽤 작다 ||",
	"|| 3 ||최대 MP -30% ||당신의 마법 수용량은 지극히 작다 ||",
	"단계별로 최대 MP가 10% 감소.",
	"전사계열에겐 크게 문제될 변이는 아니다.",
	"이 변이에 가장 심각한 타격을 입는 건 애매한 마나량에 허덕이며 버프로 먹고사는 마전사 계열."
	],
	"robust": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||최대 HP+10% ||당신은 활력있다 ||",
	"|| 2 ||최대 HP+20% ||당신은 활력이 넘친다 ||",
	"|| 3 ||최대 HP+30% ||당신은 원기왕성하다 ||",
	"단계별로 최대 HP가 10% 상승한다.",
	"전사든 법사든 쌍수를 들고 환영해 마지않는 변이.",
	"데몬스폰의 3단계 돌연변이이기도 하다.",
	"데몬스폰에게 이 돌연변이가 발생하는 경우 일반적인 종족과 달리 3단계를 보장받으며, 이 경우 돌연변이는 물약으로도 지워지지 않기 때문에 게임 내내 강력한 생존력을 보장받는다."
	],
	"carnivorous": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||육식 만복도+, 식물성 음식 만복도-,(br)살코기를 배부름 상태까지 섭취 가능 ||당신의 소화기관은 육류를 잘 소화한다 ||",
	"|| 2 ||육식 만복도++, 식물성 음식 만복도--,(br)살코기를 매우 배부름 상태까지 섭취 가능 ||당신의 소화기관은 육류를 매우 잘 소화한다 ||",
	"|| 3 ||육식 만복도+++, 식물성 음식 섭취 불가,(br)살코기를 과식 상태까지 섭취 가능 ||당신은 육식성이며 언제나 고기를 먹을 수 있다 ||",
	"고기를 먹었을 경우 배가 더 많이 차고, 식물성 음식을 먹으면 배가 덜 찬다.",
	"1단계만 얻어도 몬스터의 시체를 '배부름' 상태까지 먹을 수 있다.",
	"다만 3단계는 고기'만' 먹을 수 있으므로 주의.",
	"구울, 펠리드, 코볼드는 랭크 3 변이를 가지고 시작한다.",
	"트롤은 이 변이 대신 Saprovore 변이를 갖는다."
	],
	"jellygrowth": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||반경 6타일 내의 아이템 감지 ||당신에게 붙은 작은 젤리가 주위 아이템을 탐지한다 ||"
	],
	"hurlhellfire": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||화염 구름 면역 ||당신은 화염 구름에 면역이다 ||",
	"|| 2 ||화염 저항 1 (rF+) ||당신은 화염에 저항력이 있다 ||",
	"|| 3 ||최대 HP의 15%를 소모하여 지옥불 시전 가능 ||당신은 지옥불을 던질 수 있다 ||",
	"지옥불 던지기는 최대 체력의 15%를 깎는 부작용이 있지만, 여타 모든 화염 주문과 달리 화염 저항, 갑옷, 회피를 모조리 무시한다.",
	"단 지옥불 저항을 가지고 있다면(디스페이터, 헬 센티널, 헬리온 등) 이 능력에 피해를 입지 않는다.",
	"27레벨일 때, 플레이어의 헬파이어는 몬스터가 통상 쏘는 것보다도 훨씬 강력한 6d28의 데미지를 낸다.",
	"물품 보존이 사라진 0.15에선 1단계의 효능이 스크롤 보호에서 화염구름 면역으로 바뀌었다."
	],
	"poisonresistance": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||독 저항(rPois) ||당신의 면역 체계는 독에 저항력을 갖고 있다.",
	"||",
	"1레벨로 끝.",
	"걸리는 순간 던전의 모든 것이 식량으로 보일 것이다.",
	"독을 가진 시체는 독 저항이 있으면 깨끗한 고기와 동일하게 취급되기 때문.",
	"0.10 버젼부터 독 저항이 단계적으로 적용되는 탓에(변이창에는 한 개만 보임) 독 마법이나 브레스 공격에는 가끔씩 독 저항을 뚫고 중독되는 경우도 있지만, 독 저항이 없을 때와 비교하면 독의 지속시간도 짧아지기 때문에 특정 던전에서는 독 저항의 유무가 생사를 가르기도 한다.",
	"나가는 랭크 1을 가지고 시작한다."
	],
	"evolution": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||돌연변이 발생 ||당신은 진화한다 ||",
	"|| 2 ||더 빠른 돌연변이 발생 ||당신은 빠르게 진화한다 ||",
	"0.10에서 새로 추가된 돌연변이.",
	"획득시 '당신은 자연의 법칙이 당신을 시험하는 것을 느꼈다.",
	"걱정하지 마시라, 실패작은 일찍 죽을테니까.' (You feel nature experimenting on you.",
	"Don't worry, failures die fast.)라는 난감한 문구와 함께 일정 시간마다 플레이어에게 새로운 돌연변이를 부여하는데, 돌연변이를 줄 때마다 50% 확률로 좋은 돌연변이만, 나머지 50%로 랜덤 돌연변이(좋은 돌연변이 포함)를 주는 매커니즘이기때문에 완전히 복불복인 돌연변이 고기나 포션보다는 좋은 돌연변이가 나올 확률이 75%로 높다.",
	"2단계가 되면 돌연변이를 좀 더 자주 주게 된다.",
	"일정 시간이 경과하면 진화 돌연변이 자체는 사라지지만, 진화 돌연변이로 인해 생겨난 돌연변이는 그대로 남는다..",
	"(* 재수가 없으면 그냥 첫 돌연변이 발현때 바로 이 변이가 사라지는걸로 끝날 수도 있고, 운만 좋으면 계속 지속된다.",
	"또한 이 Evolve 변이가 같은 Evolve 변이를 불러올 수도 있다.",
	"(2단계로 강화) )"
	],
	"passivefreeze": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||냉기 저항 1 (rC+) ||당신은 냉기에 저항력이 있다 ||",
	"|| 2 ||냉기 구름 면역 ||당신은 냉기 구름에 면역이다 ||",
	"|| 3 ||근접한 적들을 자동으로 빙결(Freeze)시킨다 ||당신을 감싼 냉기가 당신을 해치려는 적들을 얼어붙게 만든다 ||",
	"3단계까지 얻을 시 지속적으로 냉기 오라를 뿜어서 주변에 붙어있는 적을 공격한다.",
	"반격식이 아닌 지속성이라 냉기저항이 없다면 주변에 있는 것만으로 적이 살살 녹아내린다.",
	"물품 보존이 사라진 0.15에서 2단계의 효능이 물약 보호에서 냉기구름 면역으로 바뀌었다."
	],
	"stinger": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||부수적 꼬리 치기 공격에 독 피해 추가 ||당신의 꼬리 끝엔 독가시가 있다 ||",
	"|| 2 ||더 큰 피해와 독성 ||당신의 꼬리 끝엔 날카로운 독가시가 있다 ||",
	"|| 3 ||더 큰 피해와 독성 ||당신의 꼬리 끝엔 매우 날카로운 독가시가 있다 ||",
	"나가와 녹색 용인 고유의 돌연변이.",
	"초록색 용인의 경우 14레벨에 1랭크 돌연변이를 얻는다.",
	"샤이닝 원 신도가 이 변이를 얻는 경우, 샤이닝 원은 이 변이로 인한 추가 독공격을 방지해준다."
	],
	"coldresistance": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||냉기 저항+ ||당신의 피부는 냉기에 저항력을 갖는다.",
	"||",
	"|| 2 ||냉기 저항++ ||당신의 피부는 냉기에 강한 저항력을 갖는다.",
	"||",
	"|| 3 ||냉기 저항+++ ||당신의 피부는 냉기에 거의 면역이다.",
	"||",
	"단계별로 냉기 저항이 증가한다."
	],
	"deformed": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||몸통 방어구의 기본 AC가 절반으로 감소 ||당신의 일반적이지 않은 형태의 몸엔 갑옷이 잘 맞지 않는다 ||",
	"갑옷으로부터 얻는 AC가 반으로 줄어든다.",
	"중갑전사에게 굉장히 치명적인 변이.",
	"그나마 다행인 것이 강화수치는 그대로 적용된다.",
	"때문에 AC가 40~50을 넘어가는 후반부엔 그럭저럭 버틸만 하다.",
	"물론 말이 그럭저럭 버틸만 하다는 것이지 AC가 5 이상 깎이기 때문에 가능하다면 빨리 변이를 지워주는 편이 생존에 좋다.",
	"갑옷을 입을 수 없거나 제대로 입지 못하는 종족들은 기본적으로 이 변이에 종족 특유의 설명이 붙어 나온다.",
	"예를 들어 나가는 반신이 뱀이라 그렇고, 켄타우로스는 반신이 말이라 그렇다는 식.",
	"이 변이 자체는 지이바의 위족변이와 같이 생길 수 있으나 디버프가 중첩되진 않는다.",
	"둘다 있어도 걍 AC절반만 깎인다."
	],
	"magicresistance": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||MR+30 ||당신은 적대적 주술에 저항력이 있다.",
	"||",
	"|| 2 ||MR+60 ||당신은 적대적 주술에 높은 저항력이 있다.",
	"||",
	"|| 3 ||MR+90 ||당신은 적대적 주술에 극도로 높은 저항력을 가지고 있다.",
	"||",
	"상태이상을 거는 마법(저주,주술류의 마법)에 걸릴 확률이 줄어든다.",
	"단계별로 +씩 증가."
	],
	"repulsionfield": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||EV+2 ||당신은 완만한 역장에 둘러싸여 있다 ||",
	"|| 2 ||EV+3 ||당신은 상당한 역장에 둘러싸여 있다 ||",
	"|| 3 ||EV+4, 미사일 방어(RMsl) ||당신은 강력한 역장에 둘러싸여 있다 ||",
	"3레벨이 되면 미사일 방어(Repel Missile) 옵션이 패시브로 붙는다.",
	"미사일 방어는 각종 장거리 무기와 볼트류 마법을 막아주는 효과를 가지고 있는데, 이 효과는 전사 마법사를 가리지 않고 유용하다.",
	"그러나 마전사나 마법사라면 어차피 마법으로 대체할 수 있기 때문에 주술 슬롯을 하나 아끼는 것 외엔 이점이 별로 없다.",
	"효과 자체는 디플렉트 미사일의 하위호환이기도 하고..."
	],
	"toughskin": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||AC+1 ||당신의 피부는 질기다.",
	"||",
	"|| 2 ||AC+2 ||당신의 피부는 아주 질기다.",
	"||",
	"|| 3 ||AC+3 ||당신의 피부는 극도로 질기다.",
	"||",
	"좋은 돌연변이긴 하나 증가량이 있으나 마나한 수준이라 극초반이 아닌 이상 효과는 잘 체감할 수 없다.",
	"오우거는 랭크 1, 트롤은 랭크 2, 센타우르는 랭크 3 변이를 가지고 시작한다."
	],
	"shaggyfur": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||AC+1, 산성 피해(* acid splash) -20% ||당신은 털에 덮여 있다.",
	"||",
	"|| 2 ||AC+2, 산성 피해 -40% ||당신은 두꺼운 털에 덮여 있다.",
	"||",
	"|| 3 ||AC+3, 산성 피해 -60%, 냉기 저항+ ||당신의 덥수룩한 털은 당신을 추위로부터 보호한다.",
	"||",
	"트롤과 펠리드가 기본적으로 1단계를 가지고 시작하며, 펠리드는 레벨 6에 2단계, 레벨 12에 3단계로 성장한다."
	],
	"breathflames": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||불덩어리를 내뿜는다 ||당신은 불꽃을 뿜을 수 있다 ||",
	"|| 2 ||향상된 불덩어리 내뿜기 ||당신은 불을 뿜을 수 있다 ||",
	"|| 3 ||탁월한 불덩어리 내뿜기 ||당신은 불덩어리를 뿜을 수 있다 ||",
	"독 뱉기와 비슷한 능력.",
	"가고일과 적색, 회색 용인은 얻을 수 없다."
	],
	"spiny": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||근접 공격을 한 적에게 (2d5 - AC - 방해 수치(* Encumbrance Rating.",
	"갑옷을 오른쪽 클릭하면 나오는 바로 그것이다.)/3) 데미지 ||당신의 몸 일부는 날카로운 가시에 싸여 있다 ||",
	"|| 2 ||근접 공격을 한 적에게 (2d5 or 3d5(* 확률은 반반) - AC - 방해 수치/3) 데미지 ||당신의 몸 대부분은 날카로운 가시에 싸여 있다 ||",
	"|| 3 ||근접 공격을 한 적에게 (3d5 - AC - 방해 수치/3) 데미지 ||당신의 몸은 날카로운 가시에 완전히 싸여 있다 ||",
	"고슴도치의 바로 그것.",
	"방패로 막아낸 공격은 반사 데미지를 주지 않는다.",
	"방해 수치(Encumbrance Rating)와 AC가 높을수록 반사 데미지는 작아진다.",
	"즉 중갑/판갑을 입었을 때보다는 경갑을 입었을 때 이 돌연변이의 효과는 극대화된다.",
	"정작 AC가 낮고 중갑을 입지 않는 캐릭터는 공격을 많이 맞아줄 수가 없다는 점을 감안하면 미묘하다.",
	"그러나 없는 것보다는 낫다."
	],
	"tentaclespike": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||부수적 촉수 공격의 추가 피해 ||당신의 촉수 중 하나에 가시가 돋아난다 ||",
	"|| 2 ||추가 피해 증가 ||당신의 촉수 중 하나에 위협적인 가시가 돋아난다 ||",
	"|| 3 ||추가 피해 증가 ||당신의 촉수 중 하나에 크고 위협적인 가시가 돋아난다 ||",
	"옥토퍼드 고유의 돌연변이.",
	"옥토퍼드가 1레벨 변이주문인 야수의 흉기를 쓰면 이 3단계 변이를 얻게 된다."
	],
	"deterioration": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||주기적으로 능력치 저하 ||당신의 몸은 점점 소모되고 있다 ||",
	"|| 2 ||능력치가 더 빠르게 저하 ||당신의 몸은 소모되고 있다 ||",
	"|| 3 ||능력치가 매우 빠르게 저하 ||당신의 몸은 아주 빨리 소모되고 있다 ||",
	"문둥병]]이라고도 불리는 돌연변이.",
	"턴이 지남에 따라 점차 능력치(힘, 민첩, 지능)가 감소한다.",
	"1단계 변이 정도는 그냥 쌩으로도 버틸만 하지만, 2단계는 능력 유지(sustab) 아이템을 계속 끼고 다녀야 하며, 3단계는 능력 유지 아이템을 끼고 있어도 도무지 [[버틸 수가 없다.",
	"최신 버전에서는 변이의 효과가 바뀌어서, 턴수와 상관없이 데미지를 입을 때마다 랜덤한 능력치가 감소하도록 바뀌었다.",
	"감소량은 입는 데미지가 클수록 커진다."
	],
	"herbivorous": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||고기 음식의 만복도-, 식물성 음식의 만복도+ ||당신은 고기를 잘 소화할 수 없다 ||",
	"|| 2 ||육식 만복도 감소, 채식 만복도 증가 ||당신은 고기를 제대로 소화할 수 없다 ||",
	"|| 3 ||육식 불가, 채식 만복도 증가 ||당신은 초식성이다 ||",
	"육식성과 반대되는 돌연변이.",
	"단계별로 고기를 먹었을 경우 늘어나는 만복도가 감소된다.",
	"3단계가 되면 아예 고기를 못 먹고 빵이나 과일 따위로 연명해야 한다.",
	"스프리건처럼 느린 신진대사 돌연변이가 없는 종족이 초식성 3단계 돌연변이에 걸린다면 굶어죽기 딱 좋다.",
	"스프리건은 기본적으로 3단계를 가지고 시작한다.",
	"센타우르는 1단계 변이를 가지고 시작한다(0.16버전부터는 삭제)."
	],
	"passivemapping": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||시야 밖의 타일 감지 ||당신은 자동으로 주위의 좁은 지역을 탐색한다.",
	" ||",
	"|| 2 ||더 많은 타일 감지 ||당신은 자동으로 주위의 지역을 탐색한다.",
	" ||",
	"|| 3 ||더더욱 많은 타일 감지 ||당신은 자동으로 주위의 넓은 지역을 탐색한다.",
	" ||",
	"딥 드워프는 랭크 1 변이를 가지고 시작하며, 9레벨 때 랭크 2, 18레벨 때 랭크 3 변이를 습득한다."
	],
	"scream": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||때때로 소리를 지른다(* t, t키를 눌렀을 때 내는 바로 그것) ||당신은 가끔 제멋대로 소리를 지른다 ||",
	"|| 2 ||더 크게, 더 자주 소리지른다 ||당신은 종종 제멋대로 소리를 지른다 ||",
	"|| 3 ||굉장히 크게, 매우 자주 소리를 지른다 ||당신은 자주 제멋대로 소리를 지른다 ||",
	"소리를 듣고 주변에서 몬스터들이 당신의 존재를 알아차리게 된다.",
	"매우 나쁜 변이이며, 암살자에게는 그냥 죽으라는 수준의 변이.",
	"하지만 콰즈랄 전사라면 어차피 폭풍의 소음 때문에 노 패널티( ..)"
	],
	"acutevision": [
	"|| 랭크 || 효과 || 설명 ||",
	"|| 1 ||투명 감지(SInv) ||당신은 초자연적으로 정밀한 시야를 가지고 있다.",
	"||",
	"투명 감지를 부여한다.",
	"나가, 스프리건, 펠리드, 뱀파이어는 이 변이를 가지고 시작한다."]
};

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
			txt = txt.replace(/^(He|It) is/g,' ');
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
		|| dom[dom.length - 1].innerText.indexOf('...') > -1) //아이템이 어느정도 출력됬을떄
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
	<input type="checkbox" id="option_monster_trans" onclick="options('monster_trans')">몬스터 설명 번역</input><br>
	<input type="checkbox" id="option_item_trans" onclick="options('item_trans')">아이템 설명 번역</input><br>
	<input type="checkbox" id="option_monster_namuwiki" onclick="options('monster_namuwiki')">몬스터 추가설명(데이터:나무위키)</input><br>
	<input type="checkbox" id="option_mutation_namuwiki" onclick="options('mutation_namuwiki')">돌연변이 설명(%키 눌렀을때 뜨는창, 데이터:나무위키)</input><br>
	<button onclick="saveOption();">설정저장</botton>
</div>
`

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
