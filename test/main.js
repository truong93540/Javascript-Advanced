function highligh([first, ...string], ...values){
    return values.reduce(
        (acc, curr) => acc.concat(curr, string.shift()), [first],
    )

    // console.log('first: ', first)
    // console.log('string: ', string)
    // console.log('values: ', values)
}

let brand = "F8"

let courses = ['Javascript', 'PHP', 'C#']

let out = highligh`
    Học lập trình ${courses.map(course => `${course}`)} tại ${brand}
`

console.log(out)

