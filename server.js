const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');  // For generating unique IDs

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('develop/public'));  // Serve static files from public

// API route to get notes
app.get('/api/notes', (req, res) => {
    fs.readFile('./develop/db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

// API route to add new note
app.post('/api/notes', (req, res) => {
    const { title, text } = req.body;
    const newNote = { id: uuidv4(), title, text };

    fs.readFile('./develop/db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        notes.push(newNote);

        fs.writeFile('./develop/db/db.json', JSON.stringify(notes, null, 2), (err) => {
            if (err) throw err;
            res.json(newNote);
        });
    });
});

// API route to delete a note
app.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;

    // Read the db.json file
    fs.readFile('./develop/db/db.json', 'utf8', (err, data) => {
        if (err) throw err;

        const notes = JSON.parse(data);
        const updatedNotes = notes.filter(note => note.id !== noteId);

        // Write the updated notes back to the db.json file
        fs.writeFile('./develop/db/db.json', JSON.stringify(updatedNotes, null, 2), (err) => {
            if (err) throw err;
            res.json({ message: 'Note deleted', id: noteId });
        });
    });
});

// HTML route to serve notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './develop/public/notes.html'));
});

// Fallback route to serve index page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './develop/public/index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
