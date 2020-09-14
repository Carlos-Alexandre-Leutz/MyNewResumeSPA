<?php
	
	/*
	*
	* As linhas 10 até 16 são as variáveis onde estou armanezando as informações
	* do formulário através do metódo POST. 
	* 
	* Para obter mais informações sobre variáveis estou colocando um link 
	* abaixo para estudo, direto do site oficial do PHP
	* https://www.php.net/manual/pt_BR/language.variables.basics.php
	*
	*/

	$assunto        = $_POST['assunto'];
	$corpo 			= "
	
		Mensagem:	".$_POST['mensagem']."
	";

	/*
	* A Função é responsável por realizar o disparo dar informações por email.
	* essa função depende de alguns paramêtros como:
	* Destinatário: Para qual e-mail será enviado os dados.
	* Assunto: Seria o subject o assunto referente a informação a ser enviada.
	* Corpo: São os dados armazenados na variável.
	* Remetente: Onde será exibido qual email está sendo enviado.
	* 
	* Para mais definição sobre a função mail você pode ler o link abaixo
	* https://www.php.net/manual/pt_BR/function.mail.php
	*
	*/
	mail('Sep', $assunto, $corpo, 'From: leutzeleutz@gmail.com');
	
	/*
	*
	* Função echo responsável por imprimir uma string(texto) na tela o.
	* 
	* Veja com mais detalhes no link abaixo.
	* https://www.php.net/manual/pt_BR/function.echo.php
	*
	*/

	echo '<script type="text/javascript">
    function load () {
        window.location.href = "https://startegi.com.br/download/Startegi%20[E-book]Estrat%C3%A9gias%20que%20vendem%20+.pdf"

    }
    load();
</script>
';
?>