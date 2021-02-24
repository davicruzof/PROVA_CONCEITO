$(document).ready(function () {
  $('#r1').click();
  $('#login_btn').click();
  document.getElementById('img2').classList.remove('visible');
  document.getElementById('img2').classList.add('invisible');
  document.getElementById('img1').classList.remove('invisible');
  document.getElementById('img1').classList.add('visible');
});

function addPosition(value) {
  const clicado = document.getElementById('a');
  const nClicado = document.getElementById('b');
  const dado = nClicado.innerHTML.toLocaleLowerCase();
  clicado.classList.add('ativo');
  clicado.classList.add('ativo');

  clicado.innerHTML = dado == 'login' ? 'Login' : 'Cadastro';
  nClicado.innerHTML = dado == 'login' ? 'Cadastro' : 'Login';

  const form1 = document.getElementById('inputs-login');
  const form2 = document.getElementById('inputs-cadastro');

  if (dado == 'cadastro') {
    form1.classList.add('fadeOutUp');
    form2.classList.add('fadeInDown');
    document.getElementById('img1').classList.remove('visible');
    document.getElementById('img1').classList.add('invisible');
    document.getElementById('img2').classList.remove('invisible');
    document.getElementById('img2').classList.add('visible');
    setTimeout(() => {
      form2.classList.remove('disable');
      form1.classList.add('disable');
    }, 200);
  } else {
    document.getElementById('img2').classList.remove('visible');
    document.getElementById('img2').classList.add('invisible');
    document.getElementById('img1').classList.remove('invisible');
    document.getElementById('img1').classList.add('visible');
    form2.classList.add('fadeOutUp');
    form1.classList.add('fadeInDown');
    setTimeout(() => {
      form1.classList.remove('disable');
      form2.classList.add('disable');
    }, 200);
  }
}

function logar() {
  const email = $('#email').val();
  const senha = $('#senha').val();
  if (email == 'parceiro@email.com' && senha == '123') {
    window.location.href = 'home_parceiro.html';
  }
  if (email == 'funcionario@email.com' && senha == '123') {
    window.location.href = 'home_funcionarios.html';
  }
}

function validar() {
  const form1 = document.getElementById('inputs-login');
  const form2 = document.getElementById('inputs-cadastro');
  const bag = document.getElementById('bag');

  form1.classList.add('fadeOutUp');
  form2.classList.add('fadeInDown');
  document.getElementById('img1').classList.remove('visible');
  document.getElementById('img1').classList.add('invisible');
  document.getElementById('img2').classList.remove('invisible');
  document.getElementById('img2').classList.add('visible');

  form2.classList.remove('disable');
  bag.classList.remove('disable');
  form1.classList.add('disable');
}

function addItem() {
  const item = document.getElementById('item');
  var total;
  if (item.innerHTML == '') {
    total = 0;
  } else {
    total = parseInt(item.innerHTML);
  }
  total++;
  item.innerHTML = '';
  item.innerHTML = total;
  $('#nome_produto').val('');
  $('#valor').val('');
}
