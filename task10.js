// После очередного завершённого проекта программист Пётр решил переехать в деревню и заняться сельским хозяйством. Мелочиться он не стал, поэтому помимо домика в деревне сразу приобрёл несколько идущих подряд параллельных участков поля, расположенных вдоль прямой дороги. Участки были разделены заборами, при этом все заборы начинались от той самой дороги, но заканчивались на разном удалении от неё не доходя до противоположной границы участка.
// Петру нужно объединить эти участки. Но так как Пётр перфекционист, он непременно хочет, чтобы получившийся объединённый участок:

// 1. был прямоугольным;
// 2. был ограничен дорогой и двумя уже имеющимися заборами (забор необязательно использовать целиком, а вот удлинять забор нельзя);
// 3. имел наибольшую возможную площадь.

// Как и положено разработчику Пётр получает 300к/наносек, поэтому его совсем не беспокоит тот факт, что часть территории окажется неиспользованной.
// Пётр хочет отдохнуть, поэтому он попросил вас помочь с нахождением площади такого участка.
// Помогите Петру и найдите два забора, которые вместе с дорогой образуют максимальный по площади прямоугольный участок, и выведите эту площадь.
// Ширина всех участков одинакова и равна 1.

const readline = require('readline').createInterface(process.stdin, process.stdout);

readline.on('line', (line) => {
    const lengths = line.trim().split(' ').map(Number);

    function findMaxArea(lengths) {
        let left = 0;
        let right = lengths.length - 1;
        let maxArea = 0;

        while (left < right) {
            const height = Math.min(lengths[left], lengths[right]);
            const width = right - left;
            const area = height * width;

            maxArea = Math.max(maxArea, area);

            if (lengths[left] < lengths[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxArea;
    }

    const result = findMaxArea(lengths);
    console.log(result);

    readline.close();
}).on('close', () => process.exit(0));

