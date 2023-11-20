import {deleteAsync} from "del";
export const reset = () => {
    return deleteAsync(app.path.clean);     //Удаляет папку с результатом
}