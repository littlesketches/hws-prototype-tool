export { slugify, capitaliseFirst, getRandomInt }

function slugify(str) {
    str = str.replace(/^\s+|\s+$/g, '').toLowerCase(); // trim           
    const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;",      // remove accents, swap ñ for n, etc
        to   = "aaaaeeeeiiiioooouuuunc------"
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes
    return str;
};


const capitaliseFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1)


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};