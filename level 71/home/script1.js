let people = [{name: 'name1'}, {name: 'name2'}, {name: 'name3'}];

let places = [{adress: 'adress1'}, {adress: 'adress2'}, {adress: 'adress3'}];

let mergedArray = people.concat(places);

mergedArray.copyWithin(2, 0, 2);

mergedArray.fill({city: 'new york'}, mergedArray.length - 2);

mergedArray.pop();

mergedArray.shift();

mergedArray.unshift({name: 'Charlie'}, {name: 'David'});
