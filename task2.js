function buildRoute(tickets) {
  let routeMap = new Map();
  let destinations = new Set();
  // Заполняем мапу и набор конечных пунктов
  tickets.forEach(({ from, to }) => {
    routeMap.set(from, to);
    destinations.add(to);
  });
  console.log(routeMap);
  console.log(destinations);
  // Находим начальную точку
  let start = tickets.find(({ from }) => !destinations.has(from)).from;
  console.log(start);
  // Строим маршрут
  let route = [];
  while (start) {
    let next = routeMap.get(start);
    if (next) {
      route.push({ from: start, to: next });
    }
    start = next;
  }

  return route;
}
var tickets = [
  { from: "NY", to: "Moscow" },
  { from: "Spb", to: "London" },
  { from: "London", to: "NY" },
];
console.log(buildRoute(tickets));
