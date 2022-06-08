height in a tree represents the distance from root node to any given leaf node

min height = distance from the root node to the first leaf node without two children
max height = distance from the root node to the most bottom node

when a tree is balaned, it makes searching efficient

in inOrder traversal --> seach begins at the left most node to the right most node

preOrder traversal --> it's going to explore the root node/parent of each node before the/it's leaves/children 
 ..basically focuses on the root node first and then it's children then moves the next root node

postOrder traversal --> explores the leaf nodes before the roots ..leaf nodes of the right before leaf nodes of the left, then lastly the root node

levelOrder --> explores a level first before moving to the next
...so it moves horiontally as levels

             --        (1)
          --    --      (2)
       -- --    -- --    (3)
      -- -- -- -- -- --  (4)

so levelOrder just goes (...1),(...2),(...3),(...4)
