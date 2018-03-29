$(function () {
    /* This suite is all about the RSS feeds definitions,
    * the allFeeds variable in application.
    */
    describe('RSS Feeds', function () {
        /* Test to make sure that the allFeeds variable has
        * been defined and that it is not empty.
        */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test ensures each feed in the allFeeds has a URL defined
         * and that the URL is not empty.
         */
        it('has objects with URL property and that URL is not empty', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* Test ensures each feed in the allFeeds has a name defined
         * and that the name is not empty.
         */
        it('has objects with NAME property and that NAME is not empty', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* This suite is all about the slide menu. */
    describe('The menu', function () {
        /* Test ensures the menu element is hidden by default. */
        it('is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* Test ensures the menu changes visibility when the menu icon is clicked. */
        it('changes visibility when the menu icon is clicked', function () {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* This suite is all about providing initial entries. */
    describe('Initial Entries', function () {
        /* Test ensures when the loadFeed function is called and completes its work,
         * and there is at least a single .entry element within the .feed container.
         */
        beforeEach(function (done) {
            try {
                loadFeed(0, function () {
                    done();
                });
            } catch (e) {
                done.fail(e);
            }
        });

        it('completed its work', function (done) {
            expect($('.feed .entry').length > 0).toBe(true);
            done();
        });
    });

    /* This test suite is all about new feed selection. */
    describe('New Feed Selection', function () {
        /* Test ensures when a new feed is loaded by the loadFeed function 
         * that the content actually changes.
         */
        let feed, newFeed;

        beforeEach(function (done) {
            try {
                loadFeed(0, function () {
                    feed = $('.feed').html();

                    loadFeed(1, function () {
                        newFeed = $('.feed').html();

                        done();
                    });
                });
            } catch (e) {
                done.fail(e);
            }
        });

        it('changes the content', function (done) {
            expect(feed).not.toBe(newFeed);
            done();
        })
    });
}());
