export class User {

    id: number;
    name: string;
    email: string;
    token: string;
    password: string;
    password_confirmation: string;
    type: string | null;
    deleted_at: string;

    constructor(user: any = {}) {
        this.id = user.id || 0;
        this.name = user.name || '';
        this.email = user.email || '';
        this.token = user.token || '';
        this.password = user.password || '';
        this.password_confirmation = user.password_confirmation || '';
        this.type = user.type || '';
        this.deleted_at = user.deleted_at || '';
    }

    isAdmin(): boolean {
        return this.type === 'Admin';
    }

}