var userlogin = prompt("Введіть ваш логін");
	document.getElementById("username").innerText = userlogin;
var UserNumber,  UserScore = 0;
var PcNumber, PcScore = 0;

function start(){
	if(UserScore==3){
		alert("Вітаємо!! Ви перемогли цього бота\uD83D\uDCAA\uD83D\uDCAA\uD83D\uDCAA\uD83C\uDF8A\uD83C\uDF8A\uD83C\uDF8A");
		return
	}else if(PcScore==3){
		alert("Нажаль цей бот виявився сильним(( Ви програли\uD83D\uDE14\uD83D\uDE14\uD83D\uDE14");
		return
	}

	UserNumber = Math.floor(Math.random() * 15);
				PcNumber = Math.floor(Math.random() * 15);
				document.getElementById("usersres").innerText = UserNumber;
				document.getElementById("pcsres").innerText = PcNumber;


	if(UserNumber>PcNumber){
		document.getElementById("vashschet").innerText = ++UserScore;
	}else if(UserNumber<PcNumber){
		document.getElementById("pcschet").innerText = ++PcScore;
	}
}