// on scroll img load for grid links

// Detect request animation frame
const scroll = window.requestAnimationFrame ||
    // IE Fallback
    function (callback) { window.setTimeout(callback, 1000 / 60) };

// UI Elements    
const elementsFromBottom = document.querySelectorAll('.from-bottom');


// From BOTTOM
function loopBottom() {
    Array.prototype.forEach.call(elementsFromBottom, function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('appear-bottom');
        } else {
            element.classList.remove('appear-bottom');
        }
    });
    scroll(loopBottom);
}

// Call the loop for the first time
loopBottom();


// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

