const judgeVegetable = function(vegetables, metric) {
  let farmer = vegetables[0].submitter;
  let bestMetric = vegetables[0][metric];
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > bestMetric) {
      bestMetric = vegetables[i][metric];
      farmer = vegetables[i].submitter;
    }
  }
  return farmer;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'

console.log(judgeVegetable(vegetables, metric));
