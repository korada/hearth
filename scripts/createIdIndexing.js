/* global db */

// Create simple unique indexes for IDs of all resources
db.Allergy_intolerance.createIndex({'id': 1}, {unique: true})
db.Basic.createIndex({'id': 1}, {unique: true})
db.Binary.createIndex({'id': 1}, {unique: true})
db.Doc_manifest.createIndex({'id': 1}, {unique: true})
db.Document_Reference.createIndex({'id': 1}, {unique: true})
db.Encounter.createIndex({'id': 1}, {unique: true})
db.Location.createIndex({'id': 1}, {unique: true})
db.Patient.createIndex({'id': 1}, {unique: true})
db.Practitioner.createIndex({'id': 1}, {unique: true})
db.Procedure.createIndex({'id': 1}, {unique: true})
db.Procedure_request.createIndex({'id': 1}, {unique: true})
db.Questionaire.createIndex({'id': 1}, {unique: true})
db.Questionaire_response.createIndex({'id': 1}, {unique: true})

// Create unique compound index for IDs and meta.versionIDs of all resource history
db.Allergy_intolerance_history.createIndex({'id': 1, 'meta.versionId': 1}, {unique: true})
db.Basic_history.createIndex({'id': 1, 'meta.versionId': 1}, {unique: true})
db.Binary_history.createIndex({'id': 1, 'meta.versionId': 1}, {unique: true})
db.Doc_manifest_history.createIndex({'id': 1, 'meta.versionId': 1}, {unique: true})
db.Document_Reference_history.createIndex({'id': 1, 'meta.versionId': 1}, {unique: true})
db.Encounter_history.createIndex({'id': 1, 'meta.versionId': 1}, {unique: true})
db.Location_history.createIndex({'id': 1, 'meta.versionId': 1}, {unique: true})
db.Patient_history.createIndex({'id': 1, 'meta.versionId': 1}, {unique: true})
db.Practitioner_history.createIndex({'id': 1, 'meta.versionId': 1}, {unique: true})
db.Procedure_history.createIndex({'id': 1, 'meta.versionId': 1}, {unique: true})
db.Procedure_request_history.createIndex({'id': 1, 'meta.versionId': 1}, {unique: true})
db.Questionaire_history.createIndex({'id': 1, 'meta.versionId': 1}, {unique: true})
db.Questionaire_response_history.createIndex({'id': 1, 'meta.versionId': 1}, {unique: true})
