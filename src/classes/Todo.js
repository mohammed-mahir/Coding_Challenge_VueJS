import { Model } from '@vuex-orm/core'

export default class Todo extends Model {
    static entity = 'todos'

    static fields() {
        return {
            id: this.uid(),
            title: this.attr(''),
            completed: this.attr(false)
        }
    }
}