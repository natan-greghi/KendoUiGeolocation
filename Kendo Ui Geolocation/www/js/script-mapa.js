 function initialize(){
        mostrarMapa();
        };
function mostrarMapa(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(sucesso,erro);
	}
	else
	{
		$("#msg").css("display","block")
			.append("Lamento! Este navegador nao suporta a funcionalidade Geolocation");
	};
};
function erro(err){
	switch(err.code){
		case 1:
			var mensagemErro = "A permissão para obter a sua posição foi negada.";
		break;
		case 2:
			var mensagemErro = "Não foi possível estabelecer uma conexão para obter a sua posição.";
		break;
		case 3:
			var mensagemErro = "Tempo esgotado";
		break;
		default:
			var mensagemErro = "Não foi possível obter sua posição.";
	}
	var codigoErro = err.code;
	var mensagem ="Ocorreu um erro na determinação da posição: <br>";
	mensagem += "Codigo do erro: " + codigoErro + "<br";
	mensagem += "Mensagem: " + mensagemErro;
	$("#msg").css("display", "block").append(mensagem);
};
function sucesso(position){
	var opcoes ={
		zoom: 15, mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("container-mapa"), opcoes);
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var local = new google.maps.LatLng(latitude,longitude);
	var marker = new google.maps.Marker({
		position: local,
		map: map,
		title: "Você está aqui"
		});
	map.setCenter(local);
};