(() => {

    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    function getMovieCast( movieId: string ) {
        console.log({ movieId });
    }

    function getActorBioById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    function createMovie({title, description, rating, cast}:Movie ) {
        console.log({ title, description, rating, cast });
    }

    interface Movie{
        cast: string[] 
        description: string, 
        rating: number, 
        title: string, 
    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }

    // continuar
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

        //let result: number;

        if ( isDead ) return 1500;

        if ( isSeparated ) return 2500;

        return (isSeparated) ? 3000 : 4000;

    }

})();
