module.exports = function (grunt) {

    grunt.initConfig({
        autoprefixer: {
            options: {},

            single_file: {
                options: {},
                src: 'styles.css',
                dest: 'styles.css'
            },
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', [
        'autoprefixer'
    ]);
};
