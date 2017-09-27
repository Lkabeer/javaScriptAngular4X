import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    transform(pipeData, pipeModifier) {
        if(!pipeModifier) {
            console.log('test');
            return pipeData;
        }
        return pipeData.filter((eachItem) => {
            return eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
                    eachItem['phone'].toLowerCase().includes(pipeModifier.toLowerCase());
        });
    }
}