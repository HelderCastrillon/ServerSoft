appServersoft.controller('indexController', ['$scope','$filter','Token', function($scope,$filter,Token){

	$scope.getToken=function () {
		if($scope.numdoc && $scope.numtoken){
			Token.get({numdoc:$scope.numdoc,ntoken:$scope.numtoken})
					.$promise.then(function(responseToken){
						$scope.TokenReturn=responseToken[0];
						try{
							if($scope.TokenReturn.hpeactoadm==null){
								$scope.consulted=true;
								$scope.fullName="Estimado: "+$scope.TokenReturn.hppriape+' '+$scope.TokenReturn.hpsegape+' '+$scope.TokenReturn.hpprinom+' '+$scope.TokenReturn.hpsegnom;
								$scope.join="Su registro aun no cuenta con el Acto Administrativo que autoriza el ejercicio de su profesión ";
								$scope.joinStatus="warning";
							}
							else{
								$scope.consulted=true;
								$scope.fullName="Estimado: "+$scope.TokenReturn.hppriape+' '+$scope.TokenReturn.hpsegape+' '+$scope.TokenReturn.hpprinom+' '+$scope.TokenReturn.hpsegnom;
								$scope.join="Felicitaciones, ya cuenta con autorización para el ejercicio de su profesión, Número de  Acto :"+$scope.TokenReturn.hpeactoadm;
								$scope.joinStatus="success";
							}
						}catch(err) {
							$scope.consulted=true;
							$scope.fullName="No existe registro para el documento:"+$scope.numdoc;
							$scope.join="Verifique que se encuentre escrito adecuadamente tanto el número de registro como su documento de identidad";
							$scope.joinStatus="danger";

						}
						
					});
		}
	}

	$scope.return=function () {
			$scope.consulted=false;
	}

}]);