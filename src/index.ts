import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { map, catchError} from "rxjs/operators";




const createCancellableRequest = (url) => {

    const observable = ajax.getJSON(url).pipe(
        map(value => console.log('value: ', value)),
        catchError(error => {
            console.log('error: ', error);
            return of(error);
        })
    );

    observable.subscribe({
        next: value => console.log(value),
        error: err => console.log(err)
    });

};
const getUsersRepsFromGitHubAPI = (textRequest) => {
    const url = `https://api.github.com/search/repositories?q=${textRequest}`;
    return createCancellableRequest(url);
}

const getUsersRepsFromGitLibAPI = (textRequest) => {
    const url = `https://gitlab.com/api/v4/projects?search=${textRequest}`;
    return createCancellableRequest(url);
}

getUsersRepsFromGitHubAPI("rxjs");
getUsersRepsFromGitLibAPI("nodejs");
