function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//显示物品ID图片用的代码是  #v这里写入ID#
            text += "#e#d制作#v2060009#x1000支 +5攻击.需要：\r\n#v2060008#x1000.#v4001126#x200.#v4011001#x5.#v4031891#50万.搜集好道具我就可以为您制作.\r\n\r\n"//3
            text += "#L1##r制作弓专用强化箭矢1000支#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("装备栏空余不足3个空格！");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("消耗栏空余不足2个空格！");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("设置栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("其他栏空余不足1个空格！");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("现金栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4001126,200) && cm.haveItem(4011001,5) && cm.haveItem(2060008,1000) && cm.getMeso() > 500000){
				cm.gainItem(4001126, -200);
				cm.gainItem(4011001, -5);
				cm.gainItem(2060008, -1000);
				cm.gainItem(2060009,1000);
				cm.gainMeso(-500000);
            cm.sendOk("制作成功！");
			cm.worldMessage(6,"玩家：["+cm.getName()+"]制作了[弓专用强化箭矢]，一直穿云箭！千军万马来相见！");
            cm.dispose();
			}else{
            cm.sendOk("您的材料不足！");
            cm.dispose();
			}
		}
    }
}


