let numbers = [12,3,5,6,8,94,24,45];

numbers.forEach(number => {
    const evenOrOdd = number % 2 == 0 ? 'even' : 'odd';
    console.log(number + ' - ' + evenOrOdd);
})
