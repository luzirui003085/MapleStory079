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
			if(qm.getQuestStatus(4766)==2){
			qm.sendOk("你已经领取过奖励，继续努力到50级可以获得更多奖励喔");
						qm.forceCompleteQuest(4766);
			qm.dispose();
			}else{
			qm.sendNext("恭喜你当前等级已经到达#b40#k级。");
			}
		} else if (status == 1) {
			qm.sendOk("恭喜你等级达到了#r40#k级，你在怀旧冒险岛已经算是小有成就了，群主江浩为你助力送你美丽的枫叶500张！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v4001126# 500");
			qm.gainItem(4001126, 500);
			qm.forceCompleteQuest(4766);
			qm.dispose();
		} 
	}
}
