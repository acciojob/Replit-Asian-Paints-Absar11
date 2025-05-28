document.getElementById('change_button').addEventListener('click', function() {
            const blockId = document.getElementById('block_id').value;
            const color = document.getElementById('colour_id').value;
            
            if (!blockId || !color) {
                alert('Please enter both block ID and color');
                return;
            }
            
            // Reset all grid items to transparent
            document.querySelectorAll('.grid-item').forEach(item => {
                item.style.backgroundColor = 'transparent';
            });
            
            // Change the specific block's color
            const block = document.getElementById(blockId);
            if (block) {
                block.style.backgroundColor = color;
            } else {
                alert('Invalid block ID. Please enter a number between 1-9');
            }
        });
        
        // Reset functionality
        document.getElementById('Reset').addEventListener('click', function() {
            document.querySelectorAll('.grid-item').forEach(item => {
                item.style.backgroundColor = 'transparent';
            });
            document.getElementById('block_id').value = '';
            document.getElementById('colour_id').value = '';
        });