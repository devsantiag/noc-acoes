// function para copiar para a área de trânsferência
function copyText(message) {
    const tempInput = document.createElement('input')
    tempInput.value = message
    document.body.appendChild(tempInput)
    tempInput.select()
    document.execCommand('copy')
    document.body.removeChild(tempInput)
}

// função copy
function copyAction(mensagem) {
    copyText(mensagem)
}

// link operante
const lkOperante = 'Após testes, link operacional, em validação interna.'
localStorage.setItem('circuitoOperante', lkOperante)
function linkOperante() {
    let mensagem = localStorage.getItem('circuitoOperante')
    copyAction(mensagem)
}

// link inoperante
const lkInoperante = 'Após testes, link encontra-se inoperante, será notificado Cliente e aberto incidente.'
localStorage.setItem('circuitoInoperante', lkInoperante)
function linkInoperante() {
    let mensagem = localStorage.getItem('circuitoInoperante')
    copyAction(mensagem)
}

// sem contato do Local
const localSemContato = 'Sem contato do local, solicitado auxílio ao Cliente na validação interna'
localStorage.setItem('localSemContato', localSemContato)
function semContatoDoLocal () {
    let mensagem = localStorage.getItem('localSemContato')
    copyAction(mensagem)
}

// Cliente não atende
const sContatoComOLocal = 'Sem contato com o local, em acompanhamento, por histórico local desligar equipamentos fora do expediente.'
localStorage.setItem('sContatoComOLocal', sContatoComOLocal)
function semContatoComOLocal() {
    let mensagem = localStorage.getItem('sContatoComOLocal')
    copyAction(mensagem)
}

// operadora não atende
const opNaoAtende = 'Sem contato com a Operadora, tentaremos um novo contaton mais tarde.'
localStorage.setItem('operadoraNaoAtende', opNaoAtende)
function operadoraNaoAtende() {
    let mensagem = localStorage.getItem('operadoraNaoAtende')
    copyAction(mensagem)
}

// queda de energia de ambos os links da mesma unidade
const unidadeSemEnergia = 'Sem contato com a unidade. Devido queda simultânea dos links, possível queda de energia.'
localStorage.setItem('semEnergia', unidadeSemEnergia)
function localSemEnergia() {
    let mensagem = localStorage.getItem('semEnergia')
    copyAction(mensagem)
}

// // cliente informa que unidade encontra-se com energia e operante
// const linkContigencia = 'Informa que há energia no local e esta operacional. Falha no link de contingência.'
// localStorage.setItem('linkContigencia', linkContigencia)
// function contigencia() {
//     let mensagem = localStorage.getItem('linkContigencia')
//     copyAction(mensagem)
// }

// cliente encontra-se fora de expediente
const foraDeExpediente = 'Devido a expediente do cliente. Manteremos o link em monitoração até o próximo dia útil.'
localStorage.setItem('unidadeForaDeExpediente', foraDeExpediente)
function expediente() {
    let mensagem = localStorage.getItem('unidadeForaDeExpediente')
    copyAction(mensagem)
}
