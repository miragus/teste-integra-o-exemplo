import Database from "../database";
import UserService from "../userService";
import PostService from "../postService";

describe('testar integração entre o UserService e o PostService', () => {
    let database;
    let userService;
    let postService;

    beforeEach(() => {
        database = new Database();
        userService = new UserService(database);
        postService = new PostService(database);
    });

    it('deve criar um usuário', () => {
        const user = userService.createUser('gusta');

        expect(user.name).toBe('gusta');
        expect(user).toHaveProperty('id');
    })

    it('deve criar uma postagem associada ao usuário', () => {
        const user = userService.createUser('slim');
        const post = postService.createPost(user.id, 'so empty without me');

        expect(post.userId).toBe(user.id);
        expect(post.content).toBe('so empty without me');
        console.log(post);
    })

    it('deve verificar se a postagem foi associada ao usuário', () => {
        const user = userService.createUser('marshall');
        const post = postService.createPost(user.id, 'I\'MA KILL YOU');

        const postagem = postService.getPostByUserId(user.id);
        expect(postagem.length).toBe(1);
        expect(postagem[0].content).toBe('I\'MA KILL YOU');
        console.log(post);
        
    })
})