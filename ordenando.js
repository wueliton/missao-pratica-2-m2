const swap = (vetor, pos1, pos2) => {
  return ([vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]]);
};

const shuffle = (vetor, trocas) => {
  if (!Array.isArray(vetor) || !vetor.length || !trocas) return;

  for (let i = vetor.length - 1; i > 0 && trocas > 0; i--) {
    const indice = Math.floor(Math.random() * (i + 1));
    swap(vetor, i, indice);
    trocas--;
  }
};

const bubble_sort = (vetor) => {
  for (let i = 0; i < vetor.length; i++) {
    for (let j = 0; j < vetor.length - i - 1; j++) {
      if (vetor[j] > vetor[j + 1]) swap(vetor, j, j + 1);
    }
  }
};

const selection_sort = (vetor) => {
  const arrSize = vetor.length;

  for (let i = 0; i < arrSize; i++) {
    let min = i;
    for (let j = i + 1; j < arrSize; j++) {
      if (vetor[j] < vetor[min]) {
        min = j;
      }
    }

    if (min === i) return;
    swap(vetor, i, min);
  }
};

const quick_sort = (vetor, posInicial, posFinal) => {
  if (posInicial >= posFinal) return;

  let index = particionamento(vetor, posInicial, posFinal);

  quick_sort(vetor, posInicial, index - 1);
  quick_sort(vetor, index + 1, posFinal);
  return vetor;
};

const particionamento = (vetor, posInicial, posFinal) => {
  const pivot = vetor[posFinal];
  let item = posInicial;
  for (let i = posInicial; i < posFinal; i++) {
    if (vetor[i] < pivot) {
      swap(vetor, item, i);
      item++;
    }
  }
  swap(vetor, item, posFinal);
  return item;
};
