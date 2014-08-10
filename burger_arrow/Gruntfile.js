module.exports = function (grunt) {

    grunt.initConfig({
        autoprefixer: {
            options: {},

            single_file: {
                options: {},
                src: '../gh-pages/burger_arrow/styles.css',
                dest: '../gh-pages/burger_arrow/styles.css'
            },
        },

        less: {
            concat: {
                options: {},
                files: {
                    "../gh-pages/burger_arrow/styles.css": "styles.less"
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
