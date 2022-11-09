const {VUE_APP_URL} = process.env;

export async function getCourses() {
    const request = await fetch(VUE_APP_URL + 'courses');
    return await request.json();
}

export async function getDetailedCourse(id: number) {
    const request = await fetch(VUE_APP_URL + 'courses/' + id);
    return await request.json();
}