module.exports = function (grunt) {

    grunt.initConfig({
        autoprefixer: {
            options: {},

            single_file: {
                options: {},
                src: '../gh-pages/togglebuttons/styles.css',
                dest: '../gh-pages/togglebuttons/styles.css'
            },
        },

        less: {
            concat: {
                options: {},
                files: {
                    "../gh-pages/togglebuttons/styles.css": "styles.less"
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
