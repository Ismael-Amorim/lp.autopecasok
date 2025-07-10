//Máscara CNPJ
document.addEventListener('DOMContentLoaded', function () {
  const cnpjInput = document.getElementById('cnpj');

  cnpjInput.addEventListener('input', function (e) {
    // Remove tudo que não for dígito
    let v = this.value.replace(/\D/g, '');

    // Limita a 14 dígitos
    if (v.length > 14) v = v.slice(0, 14);

    // Aplica as etapas da máscara
    v = v.replace(/^(\d{2})(\d)/, '$1.$2');               // 00.
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');   // 00.000.
    v = v.replace(/\.(\d{3})(\d)/, '.$1/$2');             // 00.000.000/
    v = v.replace(/(\d{4})(\d)/, '$1-$2');                // 00.000.000/0000-00

    this.value = v;
  });
});

//Máscara telefone
document.addEventListener('DOMContentLoaded', function() {
  const tel = document.getElementById('telefone');

  tel.addEventListener('input', function() {
    let v = this.value.replace(/\D/g, '');

    // limita a 11 dígitos (2 do DDD + 9 do número)
    if (v.length > 11) v = v.slice(0, 11);

    // formata DDD
    v = v.replace(/^(\d{2})(\d)/, '($1) $2');

    // se tiver 9 dígitos no número, coloca hífen após 5; senão, após 4
    if (v.replace(/\D/g, '').length > 10) {
      // (00) 90000-0000
      v = v.replace(/(\d{5})(\d)/, '$1-$2');
    } else {
      // (00) 0000-0000
      v = v.replace(/(\d{4})(\d)/, '$1-$2');
    }

    this.value = v;
  });
});