module.exports = function (grunt) {

    grunt.initConfig({
        autoprefixer: {
            options: {},

            single_file: {
                options: {},
                src: '../gh-pages/texts/styles.css',
                dest: '../gh-pages/texts/styles.css'
            },
        },

        less: {
            concat: {
                options: {},
                files: {
                    "../gh-pages/texts/styles.css": "styles.less"
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', [
        'less',
        'autoprefixer'
    ]);
};
