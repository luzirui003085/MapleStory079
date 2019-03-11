var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if(qm.getQuestStatus(4764)==2){
			qm.sendOk("你已经领取过奖励，继续努力到30级可以获得新奖励喔");
			qm.forceCompleteQuest(4764);
			qm.dispose();
			}else{
			qm.sendNext("恭喜你当前等级已经到达#b20#k级。");
			}
		} else if (status == 1) {
			qm.sendOk("恭喜你等级达到了#r20#k级，怀旧冒险岛真诚的欢迎你的到来，群主江浩为你助力送你珍贵的黄金枫叶10张！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v4000313# 10张");
			qm.gainItem(4000313, 10);
			qm.forceCompleteQuest(4764);
			qm.dispose();
		} 
	}
}
